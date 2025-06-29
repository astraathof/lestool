'use client'

import { useState, useRef } from 'react'
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
  const [savedLesplannen, setSavedLesplannen] = useState<any[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  
  // Ref voor de chat component
  const chatBotRef = useRef<any>(null)

  // Laad opgeslagen lesplannen
  const loadSavedLesplannen = () => {
    try {
      const saved = localStorage.getItem('leswizard_lesplannen')
      if (saved) {
        return JSON.parse(saved)
      }
    } catch (error) {
      console.error('Fout bij laden lesplannen:', error)
    }
    return []
  }

  // Sla lesplan op
  const saveLesplan = (lesplanContent: string) => {
    const newLesplan = {
      id: Date.now().toString(),
      onderwerp: lesonderwerp,
      doelen: lesdoelen.filter(d => d.trim()),
      tijdsduur,
      content: lesplanContent,
      profiel: lesplanData.profiel,
      aangemaakt: new Date().toISOString(),
      sloDoelen: lesplanData.sloDoelen.length,
      instructiemodel: lesplanData.instructiemodel?.naam || 'Geen',
      werkvormen: lesplanData.werkvormen.length,
      selActiviteiten: lesplanData.selActiviteiten.length
    }

    try {
      const existing = loadSavedLesplannen()
      const updated = [newLesplan, ...existing].slice(0, 20) // Max 20 lesplannen
      localStorage.setItem('leswizard_lesplannen', JSON.stringify(updated))
      setSavedLesplannen(updated)
      return true
    } catch (error) {
      console.error('Fout bij opslaan lesplan:', error)
      return false
    }
  }

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

  // Automatisch lesplan genereren
  const generateLesplan = async () => {
    if (!lesonderwerp.trim() || !lesdoelen.some(doel => doel.trim())) {
      alert('Vul minimaal een lesonderwerp en één lesdoel in.')
      return
    }

    setIsGenerating(true)
    
    try {
      const prompt = createPrompt()
      
      // Stuur de prompt automatisch naar de chat
      if (chatBotRef.current && chatBotRef.current.sendMessage) {
        await chatBotRef.current.sendMessage(prompt)
      }
      
    } catch (error) {
      console.error('Fout bij genereren lesplan:', error)
      alert('Er is een fout opgetreden bij het genereren van het lesplan.')
    } finally {
      setIsGenerating(false)
    }
  }

  // Laad opgeslagen lesplannen bij component mount
  useState(() => {
    setSavedLesplannen(loadSavedLesplannen())
  })

  const canGenerate = lesonderwerp.trim() && lesdoelen.some(doel => doel.trim())

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Genereer je lesplan</h2>
        <p className="text-gray-600">
          Vul de laatste details in en laat AI een compleet, professioneel lesplan voor je maken.
        </p>
      </div>

      {/* Opgeslagen lesplannen */}
      {savedLesplannen.length > 0 && (
        <div className="mb-8 p-6 bg-purple-50 border border-purple-200 rounded-lg">
          <h3 className="font-bold text-purple-900 mb-4">Recent gegenereerde lesplannen</h3>
          <div className="space-y-3">
            {savedLesplannen.slice(0, 3).map((lesplan) => (
              <div key={lesplan.id} className="p-4 bg-white border border-purple-200 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-purple-900">{lesplan.onderwerp}</h4>
                    <p className="text-purple-700 text-sm">
                      {lesplan.profiel?.groep} • {lesplan.tijdsduur} min • {lesplan.doelen.length} doelen
                    </p>
                    <p className="text-purple-600 text-xs mt-1">
                      {new Date(lesplan.aangemaakt).toLocaleDateString('nl-NL')} • 
                      {lesplan.sloDoelen} SLO-doelen • {lesplan.werkvormen} werkvormen
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      // Laad lesplan data
                      setLesonderwerp(lesplan.onderwerp)
                      setLesdoelen(lesplan.doelen)
                      setTijdsduur(lesplan.tijdsduur)
                    }}
                    className="px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700 transition-all duration-200"
                  >
                    Hergebruiken
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

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

        {/* Genereer Lesplan Knop */}
        <div className="flex justify-center">
          <button
            onClick={generateLesplan}
            disabled={!canGenerate || isGenerating}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 ${
              canGenerate && !isGenerating
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isGenerating ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Lesplan wordt gegenereerd...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>🚀 Genereer Lesplan</span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* AI Chat Interface */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white text-sm">🤖</span>
          </span>
          AI Lesplan Assistent
        </h3>
        
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">Interactieve Lesplan Generator</h4>
                <p className="text-gray-600 text-sm">
                  {canGenerate 
                    ? 'Klik op "Genereer Lesplan" hierboven om automatisch te starten, of stel vragen in de chat'
                    : 'Vul eerst het lesonderwerp en minimaal één lesdoel in om te kunnen genereren'
                  }
                </p>
              </div>
              
              {canGenerate && (
                <div className="flex items-center space-x-2 text-green-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium">Klaar voor generatie</span>
                </div>
              )}
            </div>
          </div>
          
          <TestChatBot ref={chatBotRef} />
        </div>
        
        {/* Instructies */}
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">💡 Hoe werkt het?</h4>
          <div className="text-blue-800 text-sm space-y-1">
            <p><strong>1. Automatisch:</strong> Klik op "Genereer Lesplan" voor een compleet lesplan op basis van al je selecties</p>
            <p><strong>2. Interactief:</strong> Stel vragen in de chat zoals "Maak het lesplan meer interactief" of "Voeg meer differentiatie toe"</p>
            <p><strong>3. Verfijnen:</strong> Vraag om aanpassingen: "Maak de introductie korter" of "Voeg een extra activiteit toe"</p>
            <p><strong>4. Exporteren:</strong> Gebruik de export functies om je lesplan op te slaan als Word document</p>
          </div>
        </div>
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
            {canGenerate 
              ? 'Alles ingevuld! Klik op "Genereer Lesplan" om te beginnen.'
              : 'Vul de vereiste velden in om het lesplan te kunnen genereren.'
            }
          </div>
        </div>
      </div>
    </div>
  )
}