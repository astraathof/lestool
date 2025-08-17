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
3. **API Key configuratie:**

   **Voor Bolt/StackBlitz (aanbevolen):**
   - Maak een `.env` bestand in de root van het project
   - Voeg je API key toe:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   **Voor lokale development:**
   - Kopieer `.env.example` naar `.env.local`
   - Vul je echte API key in
   
   **API key verkrijgen:**
   - Ga naar https://aistudio.google.com/app/apikey
   - Maak een gratis account aan
   - Genereer een nieuwe API key
   - Kopieer en plak in je environment bestand

4. Start de development server: `npm run dev`

## Deployment

### Netlify Deployment

1. Deploy de app naar Netlify
2. **Configureer Environment Variabelen:**
   - Ga naar je Netlify dashboard
   - Selecteer je site
   - Ga naar Site settings → Environment variables
   - Voeg toe:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: Je Gemini API key (krijg je van https://aistudio.google.com/app/apikey)
3. Redeploy de site na het toevoegen van de environment variabele

### Andere Deployment Platforms

Voor andere platforms (Vercel, Railway, etc.):
1. Voeg `GEMINI_API_KEY` toe als environment variabele
2. De waarde is je Gemini API key
3. Redeploy de applicatie

## Environment Variabelen

| Variabele | Vereist | Beschrijving | Waar te krijgen |
|-----------|---------|--------------|-----------------|
| `GEMINI_API_KEY` | ✅ Ja | Google Gemini AI API key | https://aistudio.google.com/app/apikey |

## Troubleshooting

### "API key niet geconfigureerd" fout
1. Controleer of `.env` (Bolt) of `.env.local` (lokaal) bestaat
2. Controleer of `GEMINI_API_KEY` correct is ingesteld
3. Herstart de development server na wijzigingen
4. Voor productie: controleer environment variabelen in je hosting platform

### ".env.local verdwijnt in Bolt"
- In Bolt/StackBlitz: gebruik `.env` (persistenter)
- Lokaal: gebruik `.env.local` (wordt niet gecommit)
- Productie: gebruik platform environment variabelen

**Belangrijk**: 
- Gebruik NOOIT je API key in frontend code of next.config.js
- API keys moeten alleen in environment variabelen staan
- Commit nooit echte API keys naar git repositories

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- Gemini AI API
- React