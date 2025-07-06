# AI Assistant

Een moderne AI-assistent gebouwd met Next.js en Gemini AI.

## Features

- 💬 Intelligente chat met Gemini AI
- 📸 Afbeelding analyse en camera ondersteuning
- 🎵 Audio transcriptie
- 📄 Document verwerking (PDF, DOCX, CSV)
- 🔊 Text-to-Speech met meerdere stemmen
- 📱 Volledig responsive design

## Setup

1. Clone het project
2. Installeer dependencies: `npm install`
3. Maak een `.env.local` bestand met je API keys:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
4. Start de development server: `npm run dev`

## Deployment

### Netlify Deployment

1. Deploy de app naar Netlify
2. Ga naar je Netlify dashboard → Site settings → Environment variables
3. Voeg de volgende environment variabele toe:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: Je Gemini API key (krijg je van https://aistudio.google.com/app/apikey)
4. Redeploy de site na het toevoegen van de environment variabele

**Belangrijk**: Gebruik NOOIT je API key in de frontend code. Deze moet alleen in de environment variabelen staan.

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Gemini AI API
- React