'use client'

import { useState } from 'react'
import { LesplanData } from './LesWizard'
import TestChatBot from './TestChatBot'

interface LesplanGeneratorProps {
  lesplanData: LesplanData
  onBack: () => void
}

export default function LesplanGenerator({ lesplanData, onBack }: LesplanGeneratorProps) {
  const [lesonderwerp, setLesonderwerp] = useState('')
  const [lesdoelen, setLesdoelen] = useState<string[]>([''])
  const [tijdsduur, setTijdsduur] = useState(45)
  const [aanvullendeWensen, setAanvullendeWensen] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const addLesdoel = () => {
    setLesdoelen([...lesdoelen, ''])
  }

  const updateLesdoel = (index: number, value: string) => {
    const newLesdoelen = [...lesdoelen]
    newLesdoelen[index] = value
    setLesdoelen(newLesdoelen)
  }

  const removeLesdoel = (index: number) => {
    if (lesdoelen.length > 1) {
      setLesdoelen(lesdoelen.filter((_, i) => i !== index))
    }
  }

  const generateLesplan = () => {
    if (!lesonderwerp.trim() || !lesdoelen.some(doel => doel.trim())) {
      alert('Vul minimaal een lesonderwerp en één lesdoel in.')
      return
    }

    setIsGenerating(true)
    
    // Hier zou de AI-generatie plaatsvinden
    // Voor nu simuleren we dit
    setTimeout(() => {
      setIsGenerating(false)
    }, 3000)
  }

  const createPrompt = () => {
    const profiel = lesplanData.profiel
    const sloDoelen = lesplanData.sloDoelen
    const instructiemodel = lesplanData.instructiemodel
    const werkvormen = lesplanData.werkvormen
    const selActiviteiten = lesplanData.selActiviteiten

    let prompt = `Maak een gedetailleerd lesplan voor het primair onderwijs met de volgende specificaties:

**PROFIEL INFORMATIE:**
- Groep: ${profiel?.groep}
- Vakgebieden: ${profiel?.vakgebied.join(', ')}
- Ervaring leraar: ${profiel?.ervaring}
- Focus gebieden: ${profiel?.focus.join(', ')}

**LES INFORMATIE:**
- Onderwerp: ${lesonderwerp}
- Tijdsduur: ${tijdsduur} minuten
- Lesdoelen: ${lesdoelen.filter(doel => doel.trim()).map((doel, i) => `${i + 1}. ${doel}`).join('\n')}

**SLO-DOELEN:**
${sloDoelen.map(doel => `- ${doel.code}: ${doel.titel}\n  ${doel.beschrijving}`).join('\n')}

**INSTRUCTIEMODEL:**
${instructiemodel ? `
- Model: ${instructiemodel.naam}
- Beschrijving: ${instructiemodel.beschrijving}
- Fases: ${instructiemodel.fases.map((fase: any) => `${fase.naam} (${fase.beschrijving})`).join(', ')}
` : 'Geen specifiek instructiemodel geselecteerd'}

**WERKVORMEN:**
${werkvormen.map(werkvorm => `- ${werkvorm.naam} (${werkvorm.tijdsduur}): ${werkvorm.beschrijving}`).join('\n')}

**SEL-ACTIVITEITEN:**
${selActiviteiten.map(activiteit => `- ${activiteit.naam} (${activiteit.categorie}): ${activiteit.beschrijving}`).join('\n')}

${aanvullendeWensen ? `**AANVULLENDE WENSEN:**\n${aanvullendeWensen}` : ''}

Maak een compleet, praktisch lesplan met:
1. **Lesopbouw** - Duidelijke tijdsindeling per fase
2. **Materialen** - Concrete lijst van benodigdheden  
3. **Instructies** - Stap-voor-stap uitleg per activiteit
4. **Differentiatie** - Aanpassingen voor verschillende niveaus
5. **Evaluatie** - Hoe je checkt of lesdoelen behaald zijn
6. **SEL-integratie** - Hoe SEL-activiteiten verweven zijn
7. **Praktische tips** - Concrete handvatten voor uitvoering

Zorg dat het lesplan professioneel, praktisch en direct uitvoerbaar is voor een PO-professional.`

    return prompt
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Genereer je lesplan</h2>
        <p className="text-gray-600">
          Vul de laatste details in en laat AI een compleet, professioneel lesplan voor je maken.
        </p>
      </div>

      {/* Samenvatting van selecties */}
      <div className="mb-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold text-gray-900 mb-4">Jouw selecties samengevat</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Profiel</h4>
            <p className="text-gray-600">{lesplanData.profiel?.groep}</p>
            <p className="text-gray-600">{lesplanData.profiel?.vakgebied.join(', ')}</p>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700 mb-2">SLO-doelen</h4>
            <p className="text-gray-600">{lesplanData.sloDoelen.length} doelen geselecteerd</p>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Instructiemodel</h4>
            <p className="text-gray-600">{lesplanData.instructiemodel?.naam || 'Geen geselecteerd'}</p>
          </div>
          
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Werkvormen & SEL</h4>
            <p className="text-gray-600">{lesplanData.werkvormen.length} werkvormen</p>
            <p className="text-gray-600">{lesplanData.selActiviteiten.length} SEL-activiteiten</p>
          </div>
        </div>
      </div>

      {/* Les details invoer */}
      <div className="space-y-6 mb-8">
        {/* Lesonderwerp */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Lesonderwerp *
          </label>
          <input
            type="text"
            value={lesonderwerp}
            onChange={(e) => setLesonderwerp(e.target.value)}
            placeholder="Bijvoorbeeld: Breuken vergelijken, Verhaal schrijven, De Romeinse tijd..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Lesdoelen */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Lesdoelen *
          </label>
          <div className="space-y-2">
            {lesdoelen.map((doel, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={doel}
                  onChange={(e) => updateLesdoel(index, e.target.value)}
                  placeholder={`Lesdoel ${index + 1}: Leerlingen kunnen...`}
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {lesdoelen.length > 1 && (
                  <button
                    onClick={() => removeLesdoel(index)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={addLesdoel}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Lesdoel toevoegen</span>
            </button>
          </div>
        </div>

        {/* Tijdsduur */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Tijdsduur (minuten)
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="15"
              max="120"
              step="15"
              value={tijdsduur}
              onChange={(e) => setTijdsduur(Number(e.target.value))}
              className="flex-1"
            />
            <span className="font-medium text-gray-900 min-w-[80px]">{tijdsduur} minuten</span>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>15 min</span>
            <span>60 min</span>
            <span>120 min</span>
          </div>
        </div>

        {/* Aanvullende wensen */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Aanvullende wensen (optioneel)
          </label>
          <textarea
            value={aanvullendeWensen}
            onChange={(e) => setAanvullendeWensen(e.target.value)}
            placeholder="Bijvoorbeeld: Extra aandacht voor zwakke rekenaars, gebruik van iPads, koppeling met vorige les..."
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* AI Chat Interface */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Lesplan genereren met AI</h3>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <TestChatBot />
        </div>
        
        {/* Pre-filled prompt button */}
        {lesonderwerp && lesdoelen.some(doel => doel.trim()) && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">Klaar om te genereren?</h4>
            <p className="text-blue-800 text-sm mb-3">
              Klik op de knop hieronder om automatisch een gedetailleerde prompt in te vullen gebaseerd op al je selecties.
            </p>
            <button
              onClick={() => {
                const prompt = createPrompt()
                // Hier zou je de prompt naar de chat component kunnen sturen
                // Voor nu kopiëren we het naar het klembord
                navigator.clipboard.writeText(prompt)
                alert('Prompt gekopieerd naar klembord! Plak deze in de chat hierboven.')
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-all duration-200"
            >
              📋 Genereer lesplan prompt
            </button>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <button
            onClick={onBack}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium transition-all duration-200"
          >
            ← Terug naar SEL-activiteiten
          </button>
          
          <div className="text-sm text-gray-600">
            Gebruik de AI-chat hierboven om je lesplan te genereren
          </div>
        </div>
      </div>
    </div>
  )
}