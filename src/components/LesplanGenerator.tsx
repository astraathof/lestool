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
  const [lesdoelen, setLesdoelen] = useState<string[]>([])
  const [tijdsduur, setTijdsduur] = useState(60) // Standaard 1 uur
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
    { label: '🎯 Workshop', value: 120, description: 'Intensieve training' }
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
    console.log('🎯 Adding suggested doel:', suggestion.titel)
    
    // Check if this goal already exists
    if (!lesdoelen.includes(suggestion.titel)) {
      const newGoals = [...lesdoelen, suggestion.titel]
      setLesdoelen(newGoals)
      console.log('✅ Updated goals:', newGoals)
    } else {
      console.log('⚠️ Goal already exists')
    }
  }

  const addCustomDoel = () => {
    if (customDoelenInput.trim()) {
      if (!lesdoelen.includes(customDoelenInput.trim())) {
        const newGoals = [...lesdoelen, customDoelenInput.trim()]
        setLesdoelen(newGoals)
        setCustomDoelenInput('')
      }
    }
  }

  const removeLesdoel = (index: number) => {
    const newGoals = lesdoelen.filter((_, i) => i !== index)
    setLesdoelen(newGoals)
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
      doelen: lesdoelen,
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

  const createEnhancedPrompt = () => {
    const profiel = lesplanData.profiel
    const sloDoelen = lesplanData.sloDoelen
    const instructiemodel = lesplanData.instructiemodel
    const werkvormen = lesplanData.werkvormen
    const selActiviteiten = lesplanData.selActiviteiten

    let prompt = `Maak een COMPLEET, PRAKTISCH en DIRECT UITVOERBAAR lesplan voor het primair onderwijs. Dit lesplan moet zo gedetailleerd zijn dat een leerkracht er direct mee aan de slag kan!

**📋 LESPLAN SPECIFICATIES:**
- **Onderwerp:** ${lesonderwerp}
- **Groep:** ${profiel?.groep}
- **Vakgebieden:** ${profiel?.vakgebied.join(', ')}
- **Tijdsduur:** ${formatTime(tijdsduur)}
- **Ervaring leraar:** ${profiel?.ervaring}

**🎯 LESDOELEN:**
${lesdoelen.map((doel, i) => `${i + 1}. ${doel}`).join('\n')}

**📚 SLO-KERNDOELEN:**
${sloDoelen.map(doel => `• ${doel.code}: ${doel.titel}\n  ${doel.beschrijving}`).join('\n')}

**🏗️ INSTRUCTIEMODEL:**
${instructiemodel ? `
**${instructiemodel.naam}**
${instructiemodel.beschrijving}
Fases: ${instructiemodel.fases.map((fase: any) => fase.naam).join(' → ')}
` : 'Flexibele instructie aangepast aan de les'}

**🎲 WERKVORMEN:**
${werkvormen.map(werkvorm => `• **${werkvorm.naam}** (${werkvorm.tijdsduur}): ${werkvorm.beschrijving}`).join('\n')}

**💝 SEL-ACTIVITEITEN:**
${selActiviteiten.map(activiteit => `• **${activiteit.naam}** (${activiteit.categorie}): ${activiteit.beschrijving}`).join('\n')}

${aanvullendeWensen ? `**✨ SPECIALE WENSEN:**\n${aanvullendeWensen}` : ''}

---

**MAAK NU EEN COMPLEET LESPLAN MET:**

## 📅 **LESOPBOUW & TIJDSINDELING** (Totaal: ${formatTime(tijdsduur)})
Geef een precieze tijdsindeling per fase met concrete activiteiten:

**Fase 1: Lesopening (X minuten)**
- Concrete activiteit 1
- Concrete activiteit 2
- Wat doet de leraar precies?
- Wat doen de leerlingen?

**Fase 2: [Volgende fase] (X minuten)**
- [Etc. voor alle fases]

## 🛠️ **MATERIALEN & VOORBEREIDING**
**Benodigde materialen:**
- Concrete lijst van alle materialen
- Waar te vinden/hoe voor te bereiden
- Digitale tools indien nodig

**Voorbereiding leraar:**
- Wat moet vooraf geregeld worden?
- Welke materialen klaarzetten?
- Ruimte-indeling

## 📖 **STAP-VOOR-STAP INSTRUCTIES**
Voor elke fase van de les:
**Wat zegt de leraar letterlijk?**
**Welke vragen stelt de leraar?**
**Hoe begeleid je de activiteiten?**
**Waar let je op tijdens de les?**

## 🎯 **DIFFERENTIATIE & INCLUSIE**
**Voor zwakkere leerlingen:**
- Concrete aanpassingen
- Extra ondersteuning
- Alternatieve opdrachten

**Voor sterkere leerlingen:**
- Uitdagende uitbreidingen
- Extra verantwoordelijkheden
- Verdiepingsopdrachten

**Voor leerlingen met speciale behoeften:**
- Praktische aanpassingen
- Visuele ondersteuning
- Alternatieve werkvormen

## ✅ **EVALUATIE & TOETSING**
**Hoe check je of lesdoelen behaald zijn?**
- Concrete observatiepunten
- Vragen om begrip te checken
- Praktische opdrachten
- Exit ticket voorbeelden

**Formatieve evaluatie tijdens de les:**
- Wat observeer je?
- Welke signalen let je op?
- Hoe stuur je bij?

## 💝 **SEL-INTEGRATIE**
**Hoe zijn SEL-activiteiten verweven in de les?**
- Concrete momenten in de les
- Verbinding met lesstof
- Reflectiemomenten

## 💡 **PRAKTISCHE TIPS & AANDACHTSPUNTEN**
- Wat kan er misgaan en hoe voorkom je dit?
- Tips voor klassenmanagement
- Hoe houd je alle leerlingen betrokken?
- Backup-activiteiten als je tijd over hebt
- Wat doe je als de les te lang/kort duurt?

## 🔄 **AFSLUITING & HUISWERK**
- Hoe sluit je de les goed af?
- Reflectievragen voor leerlingen
- Eventueel huiswerk of voorbereiding volgende les
- Opruimen en evaluatie

## 📝 **EVALUATIE VOOR LERAAR**
- Wat ging goed?
- Wat kan beter?
- Aanpassingen voor volgende keer
- Notities over individuele leerlingen

---

**BELANGRIJK:** Maak dit lesplan zo praktisch en gedetailleerd dat een collega-leraar het direct kan overnemen en uitvoeren. Geef concrete voorbeelden, letterlijke teksten, en praktische handvatten. Dit moet een professioneel, uitvoerbaar document worden!`

    return prompt
  }

  // Automatisch lesplan genereren
  const generateLesplan = async () => {
    if (!lesonderwerp.trim() || lesdoelen.length === 0) {
      alert('Vul minimaal een lesonderwerp en één lesdoel in.')
      return
    }

    setIsGenerating(true)
    
    try {
      const prompt = createEnhancedPrompt()
      
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

  const canGenerate = lesonderwerp.trim() && lesdoelen.length > 0

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Compacte header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">🚀 Professionele Lesplan Generator</h2>
        <p className="text-gray-600">
          Genereer een compleet, uitvoerbaar lesplan in seconden. Direct klaar voor de klas!
        </p>
      </div>

      {/* Compacte samenvatting */}
      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="text-center">
            <div className="font-bold text-blue-600">{lesplanData.profiel?.groep}</div>
            <div className="text-blue-500 text-xs">{lesplanData.profiel?.vakgebied.join(', ')}</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-green-600">{lesplanData.sloDoelen.length} SLO-doelen</div>
            <div className="text-green-500 text-xs">Kerndoelen geselecteerd</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-purple-600">{lesplanData.instructiemodel?.naam || 'Flexibel'}</div>
            <div className="text-purple-500 text-xs">Instructiemodel</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-orange-600">{lesplanData.werkvormen.length + lesplanData.selActiviteiten.length}</div>
            <div className="text-orange-500 text-xs">Werkvormen & SEL</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Linker kolom: Invoer */}
        <div className="lg:col-span-2 space-y-6">
          {/* Lesonderwerp */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <label className="block text-sm font-bold text-gray-900 mb-2">
              📚 Lesonderwerp *
            </label>
            <input
              type="text"
              value={lesonderwerp}
              onChange={(e) => setLesonderwerp(e.target.value)}
              placeholder="Bijvoorbeeld: Breuken vergelijken, Verhaal schrijven, De Romeinse tijd..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Lesdoelen met slimme suggesties */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-bold text-gray-900">
                🎯 Lesdoelen * ({lesdoelen.length})
              </label>
              <button
                onClick={() => setShowDoelenSuggesties(!showDoelenSuggesties)}
                className="flex items-center space-x-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-all duration-200 text-sm"
              >
                <span>💡</span>
                <span>Slimme suggesties</span>
              </button>
            </div>

            {/* Slimme suggesties - compacter */}
            {showDoelenSuggesties && (
              <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                  {suggestedDoelen.slice(0, 8).map((suggestion) => (
                    <div
                      key={suggestion.id}
                      onClick={() => addSuggestedDoel(suggestion)}
                      className="p-2 bg-white border border-blue-200 rounded hover:bg-blue-50 transition-all duration-200 cursor-pointer text-left group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-1 mb-1">
                            <span className={`px-1 py-0.5 text-xs rounded ${
                              suggestion.bron === 'SLO' ? 'bg-green-100 text-green-700' :
                              suggestion.bron === 'Instructiemodel' ? 'bg-purple-100 text-purple-700' :
                              suggestion.bron === 'Werkvorm' ? 'bg-orange-100 text-orange-700' :
                              suggestion.bron === 'SEL' ? 'bg-pink-100 text-pink-700' :
                              'bg-blue-100 text-blue-700'
                            }`}>
                              {suggestion.bron}
                            </span>
                            <div className="flex">
                              {[...Array(suggestion.relevantie)].map((_, i) => (
                                <span key={i} className="text-yellow-400 text-xs">⭐</span>
                              ))}
                            </div>
                          </div>
                          <p className="font-medium text-gray-900 text-xs">{suggestion.titel}</p>
                        </div>
                        <div className="ml-2 text-blue-600 group-hover:text-blue-800">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Custom doel toevoegen - compacter */}
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={customDoelenInput}
                    onChange={(e) => setCustomDoelenInput(e.target.value)}
                    placeholder="Eigen lesdoel toevoegen..."
                    className="flex-1 p-2 border border-blue-200 rounded text-sm"
                    onKeyPress={(e) => e.key === 'Enter' && addCustomDoel()}
                  />
                  <button
                    onClick={addCustomDoel}
                    disabled={!customDoelenInput.trim()}
                    className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 text-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Huidige lesdoelen - compacter */}
            {lesdoelen.length > 0 ? (
              <div className="space-y-2">
                {lesdoelen.map((doel, index) => (
                  <div key={index} className="flex items-start justify-between p-2 bg-green-50 border border-green-200 rounded">
                    <div className="flex-1">
                      <span className="text-green-700 font-medium text-sm">{index + 1}. </span>
                      <span className="text-gray-900 text-sm">{doel}</span>
                    </div>
                    <button
                      onClick={() => removeLesdoel(index)}
                      className="ml-2 p-1 text-red-600 hover:bg-red-50 rounded"
                      title="Verwijder"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6m0 0L6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-yellow-800 text-sm">⚠️ Klik op "Slimme suggesties" om snel lesdoelen toe te voegen</p>
              </div>
            )}
          </div>

          {/* Tijdsduur - compacter */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-bold text-gray-900">
                ⏰ Tijdsduur: {formatTime(tijdsduur)}
              </label>
              <button
                onClick={() => setShowTimePresets(!showTimePresets)}
                className="flex items-center space-x-1 px-2 py-1 bg-green-100 text-green-700 rounded text-sm hover:bg-green-200"
              >
                <span>🕐</span>
                <span>Presets</span>
              </button>
            </div>

            {showTimePresets && (
              <div className="mb-3 grid grid-cols-3 gap-2">
                {timePresets.map((preset) => (
                  <button
                    key={preset.value}
                    onClick={() => setTimePreset(preset.value)}
                    className={`p-2 text-left border rounded text-xs transition-all ${
                      tijdsduur === preset.value
                        ? 'border-green-500 bg-green-100'
                        : 'border-green-200 bg-white hover:border-green-300'
                    }`}
                  >
                    <div className="font-medium">{preset.label}</div>
                    <div className="text-green-600">{formatTime(preset.value)}</div>
                  </button>
                ))}
              </div>
            )}

            {/* Tijdsbalk */}
            <div className="space-y-2">
              <input
                type="range"
                min="15"
                max="120"
                step="5"
                value={tijdsduur}
                onChange={(e) => setTijdsduur(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${((tijdsduur - 15) / (120 - 15)) * 100}%, #E5E7EB ${((tijdsduur - 15) / (120 - 15)) * 100}%, #E5E7EB 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>15 min</span>
                <span>1u</span>
                <span>2u</span>
              </div>
            </div>
          </div>

          {/* Aanvullende wensen - compacter */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <label className="block text-sm font-bold text-gray-900 mb-2">
              ✨ Aanvullende wensen (optioneel)
            </label>
            <textarea
              value={aanvullendeWensen}
              onChange={(e) => setAanvullendeWensen(e.target.value)}
              placeholder="Extra aandacht voor zwakke rekenaars, gebruik van iPads, koppeling met vorige les..."
              rows={2}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
        </div>

        {/* Rechter kolom: Acties en status */}
        <div className="space-y-6">
          {/* Genereer knop */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <button
              onClick={generateLesplan}
              disabled={!canGenerate || isGenerating}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-200 ${
                canGenerate && !isGenerating
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isGenerating ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Genereren...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <span>🚀</span>
                  <span>Genereer Lesplan</span>
                  <span className="text-sm opacity-75">({formatTime(tijdsduur)})</span>
                </div>
              )}
            </button>

            {!canGenerate && (
              <p className="text-red-600 text-sm mt-2 text-center">
                ⚠️ Vul onderwerp en minimaal 1 lesdoel in
              </p>
            )}
          </div>

          {/* Status indicator */}
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-3">📊 Lesplan Status</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Onderwerp:</span>
                <span className={lesonderwerp ? 'text-green-600' : 'text-red-600'}>
                  {lesonderwerp ? '✅' : '❌'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Lesdoelen:</span>
                <span className={lesdoelen.length > 0 ? 'text-green-600' : 'text-red-600'}>
                  {lesdoelen.length > 0 ? `✅ ${lesdoelen.length}` : '❌ 0'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tijdsduur:</span>
                <span className="text-blue-600">⏰ {formatTime(tijdsduur)}</span>
              </div>
              <div className="flex justify-between">
                <span>SLO-doelen:</span>
                <span className="text-purple-600">📚 {lesplanData.sloDoelen.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Werkvormen:</span>
                <span className="text-orange-600">🎲 {lesplanData.werkvormen.length}</span>
              </div>
            </div>
          </div>

          {/* Recent lesplannen - compacter */}
          {savedLesplannen.length > 0 && (
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-3">📁 Recent ({savedLesplannen.length})</h4>
              <div className="space-y-2">
                {savedLesplannen.slice(0, 3).map((lesplan) => (
                  <div key={lesplan.id} className="p-2 bg-purple-50 border border-purple-200 rounded text-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-purple-900 truncate">{lesplan.onderwerp}</div>
                        <div className="text-purple-600">{lesplan.profiel?.groep} • {formatTime(lesplan.tijdsduur)}</div>
                      </div>
                      <button
                        onClick={() => {
                          setLesonderwerp(lesplan.onderwerp)
                          setLesdoelen(lesplan.doelen)
                          setTijdsduur(lesplan.tijdsduur)
                        }}
                        className="ml-2 px-2 py-1 bg-purple-600 text-white rounded text-xs hover:bg-purple-700"
                      >
                        Laden
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* AI Chat Interface - compacter */}
      <div className="mt-8">
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-gray-900">🤖 AI Lesplan Assistent</h4>
                <p className="text-gray-600 text-sm">
                  {canGenerate 
                    ? 'Klik "Genereer Lesplan" voor automatische generatie, of stel vragen in de chat'
                    : 'Vul eerst de basisgegevens in om te kunnen genereren'
                  }
                </p>
              </div>
              
              {canGenerate && (
                <div className="flex items-center space-x-2 text-green-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium">Klaar!</span>
                </div>
              )}
            </div>
          </div>
          
          <TestChatBot ref={chatBotRef} />
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <button
            onClick={onBack}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium transition-all duration-200"
          >
            ← Terug
          </button>
          
          <div className="text-sm text-gray-600">
            {canGenerate 
              ? `✅ Klaar om ${formatTime(tijdsduur)} lesplan te genereren`
              : '⚠️ Vul de vereiste velden in'
            }
          </div>
        </div>
      </div>
    </div>
  )
}