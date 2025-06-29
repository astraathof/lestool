'use client'

import { useState, useRef, useEffect } from 'react'
import { LesplanData } from './LesWizard'
import TestChatBot from './TestChatBot'

interface ProfielBasedDoel {
  id: string
  titel: string
  beschrijving: string
  bron: 'SLO' | 'Instructiemodel' | 'Werkvorm' | 'SEL' | 'Vakgebied'
  vakgebied?: string
  groep?: string
  relevantie: number // 1-5 score
}

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
  const [showDoelenSuggesties, setShowDoelenSuggesties] = useState(false)
  const [suggestedDoelen, setSuggestedDoelen] = useState<ProfielBasedDoel[]>([])
  const [customDoelenInput, setCustomDoelenInput] = useState('')
  const [showTimePresets, setShowTimePresets] = useState(false)
  
  // Ref voor de chat component
  const chatBotRef = useRef<any>(null)

  // Tijdspresets gebaseerd op Nederlandse schoolpraktijk
  const timePresets = [
    { label: '🕐 Korte les', value: 30, description: 'Instructie + korte oefening' },
    { label: '📚 Standaard les', value: 45, description: 'Volledige lesstructuur' },
    { label: '⏰ Lange les', value: 60, description: 'Uitgebreide behandeling' },
    { label: '🔄 Dubbele les', value: 90, description: 'Project of onderzoek' },
    { label: '🎯 Workshop', value: 120, description: 'Intensieve training' },
    { label: '🎨 Creatieve sessie', value: 75, description: 'Expressie & maken' }
  ]

  // Genereer intelligente lesdoelen suggesties
  useEffect(() => {
    if (lesplanData) {
      generateSmartSuggestions()
    }
  }, [lesplanData, lesonderwerp])

  const generateSmartSuggestions = () => {
    const suggestions: ProfielBasedDoel[] = []
    
    // SLO-doelen suggesties
    lesplanData.sloDoelen.forEach(doel => {
      suggestions.push({
        id: `slo_${doel.id}`,
        titel: `Leerlingen kunnen ${doel.titel.toLowerCase()}`,
        beschrijving: doel.beschrijving,
        bron: 'SLO',
        vakgebied: doel.vakgebied,
        groep: doel.groep,
        relevantie: 5
      })
    })

    // Instructiemodel specifieke doelen
    if (lesplanData.instructiemodel) {
      const model = lesplanData.instructiemodel
      suggestions.push({
        id: `model_${model.id}`,
        titel: `Leerlingen passen ${model.naam} toe`,
        beschrijving: `Leerlingen werken volgens de principes van ${model.naam}`,
        bron: 'Instructiemodel',
        relevantie: 4
      })
    }

    // Werkvorm specifieke doelen
    lesplanData.werkvormen.forEach(werkvorm => {
      werkvorm.doel.forEach((doel: string, index: number) => {
        suggestions.push({
          id: `werkvorm_${werkvorm.id}_${index}`,
          titel: `Leerlingen ${doel.toLowerCase()}`,
          beschrijving: `Via ${werkvorm.naam}: ${werkvorm.beschrijving}`,
          bron: 'Werkvorm',
          relevantie: 3
        })
      })
    })

    // SEL doelen
    lesplanData.selActiviteiten.forEach(activiteit => {
      activiteit.leerdoelen?.forEach((doel: string, index: number) => {
        suggestions.push({
          id: `sel_${activiteit.id}_${index}`,
          titel: doel,
          beschrijving: `SEL-activiteit: ${activiteit.naam}`,
          bron: 'SEL',
          relevantie: 3
        })
      })
    })

    // Vakgebied specifieke doelen
    lesplanData.profiel?.vakgebied.forEach(vak => {
      const vakDoelen = getVakgebiedDoelen(vak, lesplanData.profiel?.groep || '')
      vakDoelen.forEach(doel => {
        suggestions.push({
          id: `vak_${vak}_${doel.id}`,
          titel: doel.titel,
          beschrijving: doel.beschrijving,
          bron: 'Vakgebied',
          vakgebied: vak,
          relevantie: 4
        })
      })
    })

    // Sorteer op relevantie en uniekheid
    const uniqueSuggestions = suggestions
      .filter((suggestion, index, self) => 
        index === self.findIndex(s => s.titel === suggestion.titel)
      )
      .sort((a, b) => b.relevantie - a.relevantie)
      .slice(0, 12) // Top 12 suggesties

    setSuggestedDoelen(uniqueSuggestions)
  }

  const getVakgebiedDoelen = (vakgebied: string, groep: string): ProfielBasedDoel[] => {
    const vakDoelen: Record<string, ProfielBasedDoel[]> = {
      'nederlands': [
        { id: 'nl1', titel: 'Leerlingen kunnen vloeiend lezen', beschrijving: 'Technisch lezen op niveau', bron: 'Vakgebied', relevantie: 5 },
        { id: 'nl2', titel: 'Leerlingen begrijpen wat ze lezen', beschrijving: 'Begrijpend lezen ontwikkelen', bron: 'Vakgebied', relevantie: 5 },
        { id: 'nl3', titel: 'Leerlingen kunnen correct spellen', beschrijving: 'Spellingregels toepassen', bron: 'Vakgebied', relevantie: 4 },
        { id: 'nl4', titel: 'Leerlingen kunnen duidelijk communiceren', beschrijving: 'Mondelinge taalvaardigheid', bron: 'Vakgebied', relevantie: 4 }
      ],
      'rekenen': [
        { id: 're1', titel: 'Leerlingen beheersen de basisbewerkingen', beschrijving: 'Optellen, aftrekken, vermenigvuldigen, delen', bron: 'Vakgebied', relevantie: 5 },
        { id: 're2', titel: 'Leerlingen kunnen hoofdrekenen', beschrijving: 'Mentale rekenstrategieën toepassen', bron: 'Vakgebied', relevantie: 5 },
        { id: 're3', titel: 'Leerlingen lossen woordproblemen op', beschrijving: 'Rekenen in context', bron: 'Vakgebied', relevantie: 4 },
        { id: 're4', titel: 'Leerlingen werken met meetkunde', beschrijving: 'Vormen, meten en ruimtelijk inzicht', bron: 'Vakgebied', relevantie: 3 }
      ],
      'wereldoriëntatie': [
        { id: 'wo1', titel: 'Leerlingen onderzoeken hun omgeving', beschrijving: 'Onderzoeksvaardigheden ontwikkelen', bron: 'Vakgebied', relevantie: 4 },
        { id: 'wo2', titel: 'Leerlingen begrijpen samenhangen', beschrijving: 'Verbanden leggen tussen verschijnselen', bron: 'Vakgebied', relevantie: 4 },
        { id: 'wo3', titel: 'Leerlingen gebruiken bronnen kritisch', beschrijving: 'Informatievaardigheden', bron: 'Vakgebied', relevantie: 3 }
      ]
    }
    
    return vakDoelen[vakgebied] || []
  }

  const addSuggestedDoel = (suggestion: ProfielBasedDoel) => {
    if (!lesdoelen.includes(suggestion.titel)) {
      setLesdoelen(prev => [...prev.filter(d => d.trim()), suggestion.titel])
    }
  }

  const addCustomDoel = () => {
    if (customDoelenInput.trim() && !lesdoelen.includes(customDoelenInput.trim())) {
      setLesdoelen(prev => [...prev.filter(d => d.trim()), customDoelenInput.trim()])
      setCustomDoelenInput('')
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

  const setTimePreset = (minutes: number) => {
    setTijdsduur(minutes)
    setShowTimePresets(false)
  }

  const formatTime = (minutes: number) => {
    if (minutes < 60) return `${minutes} min`
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return mins > 0 ? `${hours}u ${mins}min` : `${hours}u`
  }

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
- Tijdsduur: ${formatTime(tijdsduur)}
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
1. **Lesopbouw** - Duidelijke tijdsindeling per fase (totaal ${formatTime(tijdsduur)})
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
                      {lesplan.profiel?.groep} • {formatTime(lesplan.tijdsduur)} • {lesplan.doelen.length} doelen
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

        {/* Lesdoelen met intelligente suggesties */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-semibold text-gray-900">
              Lesdoelen *
            </label>
            <button
              onClick={() => setShowDoelenSuggesties(!showDoelenSuggesties)}
              className="flex items-center space-x-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-all duration-200 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>Slimme suggesties ({suggestedDoelen.length})</span>
            </button>
          </div>

          {/* Slimme suggesties panel */}
          {showDoelenSuggesties && (
            <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-3">🎯 Intelligente lesdoelen suggesties</h4>
              <p className="text-blue-700 text-sm mb-3">
                Gebaseerd op je profiel, SLO-doelen, instructiemodel en werkvormen:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                {suggestedDoelen.map((suggestion) => (
                  <div
                    key={suggestion.id}
                    className="p-3 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-all duration-200 cursor-pointer"
                    onClick={() => addSuggestedDoel(suggestion)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            suggestion.bron === 'SLO' ? 'bg-green-100 text-green-800' :
                            suggestion.bron === 'Instructiemodel' ? 'bg-purple-100 text-purple-800' :
                            suggestion.bron === 'Werkvorm' ? 'bg-orange-100 text-orange-800' :
                            suggestion.bron === 'SEL' ? 'bg-pink-100 text-pink-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {suggestion.bron}
                          </span>
                          <div className="flex">
                            {[...Array(suggestion.relevantie)].map((_, i) => (
                              <span key={i} className="text-yellow-400 text-xs">⭐</span>
                            ))}
                          </div>
                        </div>
                        <p className="font-medium text-gray-900 text-sm">{suggestion.titel}</p>
                        <p className="text-gray-600 text-xs mt-1">{suggestion.beschrijving}</p>
                      </div>
                      <button className="ml-2 text-blue-600 hover:text-blue-800">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Custom doel toevoegen */}
              <div className="border-t border-blue-200 pt-3">
                <h5 className="font-medium text-blue-900 mb-2">➕ Eigen lesdoel toevoegen</h5>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={customDoelenInput}
                    onChange={(e) => setCustomDoelenInput(e.target.value)}
                    placeholder="Leerlingen kunnen..."
                    className="flex-1 p-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    onKeyPress={(e) => e.key === 'Enter' && addCustomDoel()}
                  />
                  <button
                    onClick={addCustomDoel}
                    disabled={!customDoelenInput.trim()}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-sm"
                  >
                    Toevoegen
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Huidige lesdoelen */}
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

        {/* Verfijnde tijdsduur */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-semibold text-gray-900">
              Tijdsduur
            </label>
            <button
              onClick={() => setShowTimePresets(!showTimePresets)}
              className="flex items-center space-x-2 px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-all duration-200 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Snelle keuzes</span>
            </button>
          </div>

          {/* Time presets */}
          {showTimePresets && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-medium text-green-900 mb-3">⏰ Veelgebruikte tijdsduren</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {timePresets.map((preset) => (
                  <button
                    key={preset.value}
                    onClick={() => setTimePreset(preset.value)}
                    className={`p-3 text-left border-2 rounded-lg transition-all duration-200 hover:shadow-md ${
                      tijdsduur === preset.value
                        ? 'border-green-500 bg-green-100'
                        : 'border-green-200 bg-white hover:border-green-300'
                    }`}
                  >
                    <div className="font-medium text-green-900">{preset.label}</div>
                    <div className="text-green-700 text-sm">{formatTime(preset.value)}</div>
                    <div className="text-green-600 text-xs mt-1">{preset.description}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Custom tijdsduur slider */}
          <div className="space-y-3">
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="15"
                max="180"
                step="5"
                value={tijdsduur}
                onChange={(e) => setTijdsduur(Number(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${((tijdsduur - 15) / (180 - 15)) * 100}%, #E5E7EB ${((tijdsduur - 15) / (180 - 15)) * 100}%, #E5E7EB 100%)`
                }}
              />
              <div className="min-w-[100px] text-right">
                <span className="font-bold text-xl text-blue-600">{formatTime(tijdsduur)}</span>
              </div>
            </div>
            
            {/* Tijdsindicatoren */}
            <div className="flex justify-between text-xs text-gray-500">
              <span>15 min</span>
              <span>1 uur</span>
              <span>2 uur</span>
              <span>3 uur</span>
            </div>

            {/* Tijdsduur feedback */}
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <span className="text-blue-600">
                  {tijdsduur <= 30 ? '⚡' : tijdsduur <= 60 ? '📚' : tijdsduur <= 90 ? '🔄' : '🎯'}
                </span>
                <span className="text-blue-800 text-sm font-medium">
                  {tijdsduur <= 30 ? 'Korte, intensieve les' :
                   tijdsduur <= 60 ? 'Standaard lesstructuur' :
                   tijdsduur <= 90 ? 'Uitgebreide behandeling' :
                   'Workshop of projectles'}
                </span>
              </div>
              <p className="text-blue-700 text-xs mt-1">
                {tijdsduur <= 30 ? 'Perfect voor instructie + korte oefening' :
                 tijdsduur <= 60 ? 'Ruimte voor alle lesfases en differentiatie' :
                 tijdsduur <= 90 ? 'Geschikt voor projectwerk en verdieping' :
                 'Ideaal voor workshops en intensieve training'}
              </p>
            </div>
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
                <span>🚀 Genereer Lesplan ({formatTime(tijdsduur)})</span>
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
              ? `Alles ingevuld! Lesplan van ${formatTime(tijdsduur)} klaar om te genereren.`
              : 'Vul de vereiste velden in om het lesplan te kunnen genereren.'
            }
          </div>
        </div>
      </div>
    </div>
  )
}