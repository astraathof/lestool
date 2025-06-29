'use client'

import { useState } from 'react'
import { UserProfile, LesplanData } from './LesWizard'

interface TaxonomieCoachProps {
  userProfile: UserProfile
  lesplanData: LesplanData
  onComplete: (taxonomieNiveau: string, toetsvormen: any[]) => void
}

const bloomsNiveaus = [
  {
    id: 'onthouden',
    naam: 'Onthouden',
    beschrijving: 'Feiten, begrippen en procedures uit het geheugen ophalen',
    icon: '🧠',
    kleur: 'red',
    werkwoorden: ['benoemen', 'herkennen', 'onthouden', 'opsommen', 'herhalen', 'citeren'],
    voorbeelden: [
      'De hoofdsteden van Europa benoemen',
      'De tafels van vermenigvuldiging opzeggen',
      'Spellingregels herhalen'
    ],
    toetsvormen: ['meerkeuzevragen', 'invulvragen', 'waar/niet waar'],
    geschiktVoor: ['groep1-2', 'groep3-4', 'groep5-6', 'groep7-8']
  },
  {
    id: 'begrijpen',
    naam: 'Begrijpen',
    beschrijving: 'Betekenis construeren uit instructies en uitleg',
    icon: '💡',
    kleur: 'orange',
    werkwoorden: ['uitleggen', 'samenvatten', 'interpreteren', 'voorspellen', 'vergelijken'],
    voorbeelden: [
      'Een verhaal in eigen woorden vertellen',
      'Uitleggen waarom planten water nodig hebben',
      'Het verschil tussen optellen en vermenigvuldigen'
    ],
    toetsvormen: ['open vragen', 'samenvattingen', 'uitleg geven'],
    geschiktVoor: ['groep1-2', 'groep3-4', 'groep5-6', 'groep7-8']
  },
  {
    id: 'toepassen',
    naam: 'Toepassen',
    beschrijving: 'Procedures uitvoeren in bekende en nieuwe situaties',
    icon: '🔧',
    kleur: 'yellow',
    werkwoorden: ['gebruiken', 'uitvoeren', 'implementeren', 'demonstreren', 'oplossen'],
    voorbeelden: [
      'Rekenstrategieën gebruiken bij nieuwe sommen',
      'Spellingregels toepassen in eigen teksten',
      'Geleerde gesprekstechnieken gebruiken'
    ],
    toetsvormen: ['praktijkopdrachten', 'rekenopgaven', 'rollenspellen'],
    geschiktVoor: ['groep3-4', 'groep5-6', 'groep7-8']
  },
  {
    id: 'analyseren',
    naam: 'Analyseren',
    beschrijving: 'Materiaal opdelen in delen en verbanden ontdekken',
    icon: '🔍',
    kleur: 'green',
    werkwoorden: ['onderscheiden', 'organiseren', 'vergelijken', 'categoriseren', 'onderzoeken'],
    voorbeelden: [
      'Verhaalstructuur herkennen in teksten',
      'Patronen ontdekken in getallen',
      'Oorzaak en gevolg in geschiedenis'
    ],
    toetsvormen: ['onderzoeksopdrachten', 'vergelijkingstabellen', 'mindmaps'],
    geschiktVoor: ['groep5-6', 'groep7-8']
  },
  {
    id: 'evalueren',
    naam: 'Evalueren',
    beschrijving: 'Oordelen vellen op basis van criteria en standaarden',
    icon: '⚖️',
    kleur: 'blue',
    werkwoorden: ['beoordelen', 'kritiseren', 'verdedigen', 'rechtvaardigen', 'selecteren'],
    voorbeelden: [
      'Argumenten voor en tegen afwegen',
      'De beste oplossing kiezen en uitleggen waarom',
      'Bronnen beoordelen op betrouwbaarheid'
    ],
    toetsvormen: ['discussies', 'argumentatieve essays', 'peer review'],
    geschiktVoor: ['groep7-8']
  },
  {
    id: 'creëren',
    naam: 'Creëren',
    beschrijving: 'Elementen combineren tot een coherent geheel',
    icon: '🎨',
    kleur: 'purple',
    werkwoorden: ['ontwerpen', 'construeren', 'plannen', 'produceren', 'bedenken'],
    voorbeelden: [
      'Een eigen verhaal schrijven',
      'Een oplossing bedenken voor een probleem',
      'Een presentatie maken over een onderwerp'
    ],
    toetsvormen: ['projecten', 'creatieve opdrachten', 'presentaties'],
    geschiktVoor: ['groep5-6', 'groep7-8']
  }
]

const toetsvormenDatabase = [
  {
    id: 'formatief_observatie',
    naam: 'Observatie tijdens les',
    type: 'formatief',
    beschrijving: 'Systematisch observeren van leergedrag en begrip',
    icon: '👁️',
    tijdsduur: 'Doorlopend',
    voorbereiding: 'Laag',
    materialen: ['Observatieformulier', 'Checklist'],
    geschiktVoor: ['groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    bloomsNiveaus: ['onthouden', 'begrijpen', 'toepassen'],
    tips: [
      'Gebruik een observatieformulier',
      'Focus op specifieke vaardigheden',
      'Noteer concrete voorbeelden',
      'Geef directe feedback'
    ]
  },
  {
    id: 'formatief_exit_ticket',
    naam: 'Exit Tickets',
    type: 'formatief',
    beschrijving: 'Korte vragen aan het einde van de les',
    icon: '🎫',
    tijdsduur: '3-5 minuten',
    voorbereiding: 'Laag',
    materialen: ['Kleine briefjes', 'Digitale tool'],
    geschiktVoor: ['groep3-4', 'groep5-6', 'groep7-8'],
    bloomsNiveaus: ['onthouden', 'begrijpen'],
    tips: [
      'Stel 1-2 gerichte vragen',
      'Gebruik voor volgende les planning',
      'Maak het kort en krachtig',
      'Varieer in vraagtypen'
    ]
  },
  {
    id: 'formatief_peer_feedback',
    naam: 'Peer Feedback',
    type: 'formatief',
    beschrijving: 'Leerlingen geven elkaar feedback',
    icon: '🤝',
    tijdsduur: '10-15 minuten',
    voorbereiding: 'Gemiddeld',
    materialen: ['Feedbackformulier', 'Criteria lijst'],
    geschiktVoor: ['groep5-6', 'groep7-8'],
    bloomsNiveaus: ['begrijpen', 'analyseren', 'evalueren'],
    tips: [
      'Geef duidelijke criteria',
      'Train leerlingen in feedback geven',
      'Gebruik positieve feedback structuur',
      'Monitor het proces'
    ]
  },
  {
    id: 'summatief_schriftelijke_toets',
    naam: 'Schriftelijke Toets',
    type: 'summatief',
    beschrijving: 'Traditionele schriftelijke toets met verschillende vraagtypen',
    icon: '📝',
    tijdsduur: '30-60 minuten',
    voorbereiding: 'Hoog',
    materialen: ['Toetspapier', 'Antwoordmodel'],
    geschiktVoor: ['groep3-4', 'groep5-6', 'groep7-8'],
    bloomsNiveaus: ['onthouden', 'begrijpen', 'toepassen', 'analyseren'],
    tips: [
      'Varieer in vraagtypen',
      'Begin met makkelijke vragen',
      'Geef duidelijke instructies',
      'Plan voldoende tijd'
    ]
  },
  {
    id: 'summatief_praktijkopdracht',
    naam: 'Praktijkopdracht',
    type: 'summatief',
    beschrijving: 'Leerlingen tonen vaardigheden in praktische situatie',
    icon: '🛠️',
    tijdsduur: '45-90 minuten',
    voorbereiding: 'Hoog',
    materialen: ['Materialen voor opdracht', 'Beoordelingsrubric'],
    geschiktVoor: ['groep3-4', 'groep5-6', 'groep7-8'],
    bloomsNiveaus: ['toepassen', 'analyseren', 'evalueren', 'creëren'],
    tips: [
      'Maak opdracht authentiek',
      'Gebruik duidelijke rubrics',
      'Geef voorbeelden',
      'Plan voldoende materialen'
    ]
  },
  {
    id: 'summatief_portfolio',
    naam: 'Portfolio Assessment',
    type: 'summatief',
    beschrijving: 'Verzameling van werk over langere periode',
    icon: '📁',
    tijdsduur: 'Meerdere weken',
    voorbereiding: 'Hoog',
    materialen: ['Portfolio map', 'Reflectieformulieren'],
    geschiktVoor: ['groep5-6', 'groep7-8'],
    bloomsNiveaus: ['toepassen', 'analyseren', 'evalueren', 'creëren'],
    tips: [
      'Geef duidelijke criteria',
      'Plan regelmatige check-ins',
      'Stimuleer reflectie',
      'Maak selectiecriteria helder'
    ]
  },
  {
    id: 'summatief_presentatie',
    naam: 'Presentatie',
    type: 'summatief',
    beschrijving: 'Mondelinge presentatie van onderzoek of project',
    icon: '🎤',
    tijdsduur: '5-15 minuten per leerling',
    voorbereiding: 'Gemiddeld',
    materialen: ['Presentatiemateriaal', 'Beoordelingsformulier'],
    geschiktVoor: ['groep5-6', 'groep7-8'],
    bloomsNiveaus: ['begrijpen', 'toepassen', 'analyseren', 'evalueren', 'creëren'],
    tips: [
      'Geef presentatietraining',
      'Gebruik duidelijke criteria',
      'Plan voldoende tijd',
      'Stimuleer interactie'
    ]
  }
]

export default function TaxonomieCoach({ userProfile, lesplanData, onComplete }: TaxonomieCoachProps) {
  const [selectedNiveau, setSelectedNiveau] = useState<string>('')
  const [selectedToetsvormen, setSelectedToetsvormen] = useState<any[]>([])
  const [showNiveauDetails, setShowNiveauDetails] = useState<string | null>(null)
  const [showToetsDetails, setShowToetsDetails] = useState<string | null>(null)

  // Filter niveaus en toetsvormen op basis van groep
  const getRelevanteNiveaus = () => {
    return bloomsNiveaus.filter(niveau => 
      niveau.geschiktVoor.includes(userProfile.groep)
    )
  }

  const getRelevanteToetsvormen = () => {
    return toetsvormenDatabase.filter(toets => 
      toets.geschiktVoor.includes(userProfile.groep)
    )
  }

  const getToetsvormenVoorNiveau = () => {
    if (!selectedNiveau) return getRelevanteToetsvormen()
    
    return getRelevanteToetsvormen().filter(toets =>
      toets.bloomsNiveaus.includes(selectedNiveau)
    )
  }

  const toggleToetsvorm = (toets: any) => {
    setSelectedToetsvormen(prev => {
      const exists = prev.find(t => t.id === toets.id)
      if (exists) {
        return prev.filter(t => t.id !== toets.id)
      } else {
        return [...prev, toets]
      }
    })
  }

  const handleContinue = () => {
    onComplete(selectedNiveau, selectedToetsvormen)
  }

  const getKleurClasses = (kleur: string) => {
    const kleurMap: Record<string, string> = {
      red: 'border-red-500 bg-red-50 text-red-700',
      orange: 'border-orange-500 bg-orange-50 text-orange-700',
      yellow: 'border-yellow-500 bg-yellow-50 text-yellow-700',
      green: 'border-green-500 bg-green-50 text-green-700',
      blue: 'border-blue-500 bg-blue-50 text-blue-700',
      purple: 'border-purple-500 bg-purple-50 text-purple-700'
    }
    return kleurMap[kleur] || 'border-gray-500 bg-gray-50 text-gray-700'
  }

  const relevanteNiveaus = getRelevanteNiveaus()
  const relevanteToetsvormen = getToetsvormenVoorNiveau()

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Taxonomie & Toets Coach</h2>
        <p className="text-gray-600">
          Bepaal het denkniveau volgens Bloom's Taxonomie en kies passende toetsvormen. 
          Dit helpt bij het opstellen van effectieve lesdoelen en evaluatiemethoden.
        </p>
      </div>

      {/* Bloom's Taxonomie Uitleg */}
      <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-3">Bloom's Taxonomie</h3>
        <p className="text-blue-800 text-sm mb-4">
          Bloom's Taxonomie helpt bij het formuleren van lesdoelen op verschillende denkniveaus. 
          Van eenvoudig onthouden tot complexe creatie. Kies het niveau dat past bij je les.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {bloomsNiveaus.map((niveau, index) => (
            <div key={niveau.id} className={`p-2 rounded text-center text-xs ${getKleurClasses(niveau.kleur)}`}>
              <div className="text-lg mb-1">{niveau.icon}</div>
              <div className="font-medium">{index + 1}. {niveau.naam}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Niveau Selectie */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Stap 1: Kies het hoofdniveau voor je les
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {relevanteNiveaus.map((niveau) => (
            <div
              key={niveau.id}
              className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                selectedNiveau === niveau.id
                  ? getKleurClasses(niveau.kleur) + ' border-2'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedNiveau(niveau.id)}
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">{niveau.icon}</div>
                <h4 className="font-bold text-lg">{niveau.naam}</h4>
              </div>
              
              <p className="text-sm mb-4 text-center">{niveau.beschrijving}</p>
              
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-medium mb-1">Werkwoorden:</p>
                  <div className="flex flex-wrap gap-1">
                    {niveau.werkwoorden.slice(0, 3).map((woord, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {woord}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowNiveauDetails(showNiveauDetails === niveau.id ? null : niveau.id)
                  }}
                  className="w-full py-2 px-3 text-xs bg-white border border-gray-300 rounded hover:bg-gray-50 transition-all duration-200"
                >
                  {showNiveauDetails === niveau.id ? 'Minder details' : 'Meer details →'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Niveau Details Modal */}
        {showNiveauDetails && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              {(() => {
                const niveau = bloomsNiveaus.find(n => n.id === showNiveauDetails)
                if (!niveau) return null
                
                return (
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{niveau.icon}</span>
                        <h3 className="text-xl font-bold">{niveau.naam}</h3>
                      </div>
                      <button
                        onClick={() => setShowNiveauDetails(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{niveau.beschrijving}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Werkwoorden</h4>
                        <div className="flex flex-wrap gap-2">
                          {niveau.werkwoorden.map((woord, index) => (
                            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded">
                              {woord}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Voorbeelden</h4>
                        <ul className="space-y-1">
                          {niveau.voorbeelden.map((voorbeeld, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start">
                              <span className="text-green-500 mr-2">•</span>
                              {voorbeeld}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Passende toetsvormen</h4>
                        <div className="flex flex-wrap gap-2">
                          {niveau.toetsvormen.map((toets, index) => (
                            <span key={index} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded">
                              {toets}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>
        )}
      </div>

      {/* Toetsvormen Selectie */}
      {selectedNiveau && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Stap 2: Selecteer toetsvormen voor "{bloomsNiveaus.find(n => n.id === selectedNiveau)?.naam}"
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relevanteToetsvormen.map((toets) => {
              const isSelected = selectedToetsvormen.some(t => t.id === toets.id)
              
              return (
                <div
                  key={toets.id}
                  className={`p-6 rounded-lg border-2 transition-all duration-200 hover:shadow-lg ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="text-center mb-4">
                    <div className="text-2xl mb-2">{toets.icon}</div>
                    <h4 className="font-bold text-lg text-gray-900">{toets.naam}</h4>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      toets.type === 'formatief' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {toets.type === 'formatief' ? 'Formatief' : 'Summatief'}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4 text-center">{toets.beschrijving}</p>
                  
                  <div className="space-y-2 text-xs text-gray-600 mb-4">
                    <div className="flex justify-between">
                      <span>Tijdsduur:</span>
                      <span className="font-medium">{toets.tijdsduur}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Voorbereiding:</span>
                      <span className={`font-medium ${
                        toets.voorbereiding === 'Laag' ? 'text-green-600' :
                        toets.voorbereiding === 'Gemiddeld' ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {toets.voorbereiding}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <button
                      onClick={() => toggleToetsvorm(toets)}
                      className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                        isSelected
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {isSelected ? '✓ Geselecteerd' : 'Selecteren'}
                    </button>
                    
                    <button
                      onClick={() => setShowToetsDetails(toets.id)}
                      className="w-full py-2 px-4 rounded-lg font-medium text-blue-600 hover:bg-blue-50 transition-all duration-200"
                    >
                      Details bekijken →
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Toets Details Modal */}
      {showToetsDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            {(() => {
              const toets = toetsvormenDatabase.find(t => t.id === showToetsDetails)
              if (!toets) return null
              
              return (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{toets.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold">{toets.naam}</h3>
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          toets.type === 'formatief' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-purple-100 text-purple-800'
                        }`}>
                          {toets.type === 'formatief' ? 'Formatief' : 'Summatief'}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowToetsDetails(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{toets.beschrijving}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Praktische info</h4>
                      <div className="space-y-1 text-sm">
                        <div><strong>Tijdsduur:</strong> {toets.tijdsduur}</div>
                        <div><strong>Voorbereiding:</strong> {toets.voorbereiding}</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Materialen</h4>
                      <ul className="space-y-1">
                        {toets.materialen.map((materiaal, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {materiaal}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Praktische tips</h4>
                    <div className="space-y-2">
                      {toets.tips.map((tip, index) => (
                        <div key={index} className="p-2 bg-yellow-50 border border-yellow-200 rounded">
                          <p className="text-yellow-800 text-sm">💡 {tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={() => setShowToetsDetails(null)}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                    >
                      Sluiten
                    </button>
                    <button
                      onClick={() => {
                        toggleToetsvorm(toets)
                        setShowToetsDetails(null)
                      }}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      {selectedToetsvormen.some(t => t.id === toets.id) ? 'Deselecteren' : 'Selecteren'}
                    </button>
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      )}

      {/* Selected Summary */}
      {(selectedNiveau || selectedToetsvormen.length > 0) && (
        <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-bold text-green-900 mb-3">Jouw taxonomie & toets selectie</h4>
          
          {selectedNiveau && (
            <div className="mb-3">
              <p className="text-green-800 text-sm">
                <strong>Hoofdniveau:</strong> {bloomsNiveaus.find(n => n.id === selectedNiveau)?.naam}
              </p>
            </div>
          )}
          
          {selectedToetsvormen.length > 0 && (
            <div>
              <p className="text-green-800 text-sm mb-2">
                <strong>Toetsvormen ({selectedToetsvormen.length}):</strong>
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedToetsvormen.map((toets) => (
                  <span key={toets.id} className="px-3 py-1 bg-white border border-green-300 text-green-800 text-sm rounded">
                    {toets.icon} {toets.naam}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            {selectedNiveau ? 'Niveau geselecteerd' : 'Selecteer een denkniveau'} • {selectedToetsvormen.length} toetsvormen gekozen
          </div>
          <button
            onClick={handleContinue}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg font-medium transition-all duration-200"
          >
            Volgende: Lesplan genereren →
          </button>
        </div>
      </div>
    </div>
  )
}