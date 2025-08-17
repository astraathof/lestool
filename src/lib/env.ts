import 'server-only'

// Server-only environment variabelen
// Dit bestand mag alleen gebruikt worden in server-side code

export const getGeminiApiKey = (): string => {
  const apiKey = process.env.GEMINI_API_KEY
  
  if (!apiKey || apiKey === 'your_gemini_api_key_here') {
    throw new Error(
      'GEMINI_API_KEY is niet geconfigureerd. ' +
      'Stel deze in via .env bestand of environment variabelen.'
    )
  }
  
  return apiKey
}

// Validatie functie voor development
export const validateEnvironment = () => {
  try {
    getGeminiApiKey()
    return { valid: true, message: 'Environment variabelen correct geconfigureerd' }
  } catch (error) {
    return { 
      valid: false, 
      message: error instanceof Error ? error.message : 'Onbekende configuratie fout' 
    }
  }
}