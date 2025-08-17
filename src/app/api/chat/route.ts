import { GoogleGenerativeAI, Tool } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'

// Initialiseer de Gemini AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')

// Helper functie om base64 naar buffer te converteren
function base64ToBuffer(base64: string): Buffer {
  const base64Data = base64.replace(/^data:image\/\w+;base64,/, '')
  return Buffer.from(base64Data, 'base64')
}

// Google Search tool configuratie
const googleSearchTool = {
  googleSearch: {}
}

export async function POST(request: NextRequest) {
  try {
    // Betere error handling voor Netlify
    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY
    if (!apiKey || apiKey === 'your_gemini_api_key_here') {
      console.error('GEMINI_API_KEY not found in environment variables');
      return NextResponse.json(
        { 
          error: 'Gemini API key niet geconfigureerd.',
          hint: 'Stel je API key in via next.config.js of environment variables',
          debug: 'Environment variable GEMINI_API_KEY is not set'
        }, 
        { status: 500 }
      )
    }

    // Haal de bericht data op uit de request
    const body = await request.json()
    console.log('Received request body:', JSON.stringify(body, null, 2))
    
    const { message, image, images, useGrounding = true, aiModel = 'smart' } = body

    if (!message) {
      return NextResponse.json(
        { error: 'Bericht is vereist' },
        { status: 400 }
      )
    }

    // Input validatie en sanitization
    if (typeof message !== 'string' || message.length > 100000) {
      return NextResponse.json(
        { error: 'Bericht moet een string zijn van maximaal 100.000 karakters' },
        { status: 400 }
      )
    }

    // Selecteer het juiste model op basis van aiModel
    const modelName = aiModel === 'pro' ? 'gemini-2.5-pro-preview-06-05' :
                     aiModel === 'smart' ? 'gemini-2.5-flash-preview-05-20' :
                     'gemini-2.0-flash-exp' // internet
    
    console.log('Using model:', modelName)
    
    const model = genAI.getGenerativeModel({ model: modelName })

    // Configureer tools array - grounding alleen voor Gemini 2.0 (internet model)
    const tools = (aiModel === 'internet' && useGrounding) ? [googleSearchTool] : []
    
    let result;
    
    // Helper function to generate content with fallback
    const generateWithFallback = async (requestConfig: any) => {
      try {
        console.log('Generating content with config:', JSON.stringify({
          ...requestConfig,
          contents: requestConfig.contents.map((c: any) => ({
            ...c,
            parts: c.parts.map((p: any) => p.text ? { text: p.text.substring(0, 100) + '...' } : '[IMAGE]')
          }))
        }, null, 2))
        
        return await model.generateContent(requestConfig)
      } catch (error: any) {
        console.error('Generation error:', error)
        
        // If grounding fails, retry without tools
        if (useGrounding && (error.message?.includes('Search Grounding is not supported') || 
                            error.message?.includes('google_search_retrieval is not supported'))) {
          console.log('Grounding not supported, retrying without grounding...')
          const { tools, ...configWithoutTools } = requestConfig
          return await model.generateContent(configWithoutTools)
        }
        throw error
      }
    }
    
    if (images && images.length > 0) {
      // Meerdere afbeeldingen - gebruik nieuwe images array
      const imageParts = images.map((imageData: string) => {
        const imageBuffer = base64ToBuffer(imageData)
        return {
          inlineData: {
            data: imageBuffer.toString('base64'),
            mimeType: 'image/jpeg'
          }
        }
      })
      
      result = await generateWithFallback({
        contents: [{ role: 'user', parts: [{ text: message }, ...imageParts] }],
        tools: tools
      })
    } else if (image) {
      // Backward compatibility - één afbeelding (legacy)
      const imageBuffer = base64ToBuffer(image)
      
      const imagePart = {
        inlineData: {
          data: imageBuffer.toString('base64'),
          mimeType: 'image/jpeg'
        }
      }
      
      result = await generateWithFallback({
        contents: [{ role: 'user', parts: [{ text: message }, imagePart] }],
        tools: tools
      })
    } else {
      // Alleen tekst
      result = await generateWithFallback({
        contents: [{ role: 'user', parts: [{ text: message }] }],
        tools: tools
      })
    }

    const response = await result.response
    const text = response.text()

    console.log('Generated response length:', text.length)

    // Extract grounding metadata if available
    const groundingMetadata = response.candidates?.[0]?.groundingMetadata || null
    const searchQueries = groundingMetadata?.webSearchQueries || []
    const groundingChuncks = groundingMetadata?.groundingChuncks || []

    return NextResponse.json({ 
      response: text,
      success: true,
      grounding: {
        isGrounded: !!groundingMetadata,
        searchQueries: searchQueries,
        sources: groundingChuncks.map((chunk: any) => ({
          title: chunk.web?.title || 'Unknown',
          uri: chunk.web?.uri || '',
          snippet: chunk.web?.snippet || ''
        }))
      }
    })

  } catch (error: any) {
    console.error('Fout bij het aanroepen van Gemini API:', error)
    
    // Betere error information voor debugging
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorStack = error instanceof Error ? error.stack : 'No stack trace'
    
    console.error('Full error details:', {
      message: errorMessage,
      stack: errorStack,
      name: error?.name,
      cause: error?.cause
    })
    
    return NextResponse.json(
      { 
        error: 'Er is een fout opgetreden bij het verwerken van je bericht',
        details: errorMessage,
        timestamp: new Date().toISOString(),
        hint: 'Check de server logs voor meer details'
      },
      { status: 500 }
    )
  }
}