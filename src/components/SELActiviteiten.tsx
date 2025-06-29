'use client'

import { useState } from 'react'
import { UserProfile } from './LesWizard'

interface SELActiviteitenProps {
  userProfile: UserProfile
  onComplete: (activiteiten: any[]) => void
  selectedActiviteiten: any[]
}

const selActiviteiten = [
  {
    id: 'gevoelens_herkennen',
    naam: 'Gevoelens herkennen en benoemen',
    beschrijving: 'Leerlingen leren verschillende emoties herkennen en benoemen',
    icon: '😊',
    categorie: 'Zelfbewustzijn',
    leeftijd: ['groep1-2', 'groep3-4', 'groep5-6'],
    tijdsduur: '15-20 minuten',
    selVaardigheden: ['Emotioneel bewustzijn', 'Zelfkennis'],
    materialen: ['Gevoelenskaarten', 'Spiegel', 'Emotie-dobbelstenen'],
    activiteiten: [
      'Gevoelenskaarten sorteren',
      'Emoties uitbeelden',
      'Gevoelens dagboek bijhouden',
      'Emotie-thermometer gebruiken'
    ],
    leerdoelen: [
      'Leerlingen kunnen verschillende emoties benoemen',
      'Leerlingen herkennen emoties bij zichzelf en anderen',
      'Leerlingen begrijpen dat emoties normaal zijn'
    ],
    tips: [
      'Begin met basale emoties (blij, boos, verdrietig)',
      'Gebruik veel visuele ondersteuning',
      'Maak het persoonlijk en herkenbaar',
      'Creëer een veilige sfeer'
    ]
  },
  {
    id: 'ademhalingsoefeningen',
    naam: 'Ademhalings- en ontspanningsoefeningen',
    beschrijving: 'Technieken om te kalmeren en stress te verminderen',
    icon: '🧘',
    categorie: 'Zelfregulatie',
    leeftijd: ['groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    tijdsduur: '5-15 minuten',
    selVaardigheden: ['Stressmanagement', 'Zelfcontrole'],
    materialen: ['Rustige muziek', 'Ademhalingskaarten', 'Mindfulness app'],
    activiteiten: [
      'Buikademhaling oefenen',
      'Tellen tijdens ademhaling',
      'Progressieve spierontspanning',
      'Mindfulness oefeningen'
    ],
    leerdoelen: [
      'Leerlingen kunnen ademhalingstechnieken toepassen',
      'Leerlingen ervaren het effect van ontspanning',
      'Leerlingen kunnen zichzelf kalmeren'
    ],
    tips: [
      'Oefen regelmatig, ook als er geen stress is',
      'Maak het speels voor jongere kinderen',
      'Geef het goede voorbeeld',
      'Gebruik visualisaties'
    ]
  },
  {
    id: 'empathie_oefeningen',
    naam: 'Empathie en perspectief nemen',
    beschrijving: 'Leerlingen leren zich in te leven in anderen',
    icon: '🤗',
    categorie: 'Sociale bewustzijn',
    leeftijd: ['groep3-4', 'groep5-6', 'groep7-8'],
    tijdsduur: '20-30 minuten',
    selVaardigheden: ['Empathie', 'Perspectief nemen', 'Sociale bewustzijn'],
    materialen: ['Verhalen', 'Foto\'s van gezichtsuitdrukkingen', 'Rollenspelkaarten'],
    activiteiten: [
      'Verhalen bespreken vanuit verschillende perspectieven',
      'Rollenspellen over conflictsituaties',
      'Gezichtsuitdrukkingen interpreteren',
      'Empathie-interviews'
    ],
    leerdoelen: [
      'Leerlingen kunnen zich inleven in anderen',
      'Leerlingen begrijpen verschillende perspectieven',
      'Leerlingen tonen begrip voor andermans gevoelens'
    ],
    tips: [
      'Gebruik herkenbare situaties',
      'Laat leerlingen eigen ervaringen delen',
      'Bespreek verschillen in beleving',
      'Valideer alle gevoelens'
    ]
  },
  {
    id: 'conflictoplossing',
    naam: 'Conflictoplossing en onderhandelen',
    beschrijving: 'Vaardigheden om conflicten op een constructieve manier op te lossen',
    icon: '🤝',
    categorie: 'Relatievaardigheden',
    leeftijd: ['groep3-4', 'groep5-6', 'groep7-8'],
    tijdsduur: '25-40 minuten',
    selVaardigheden: ['Conflictoplossing', 'Communicatie', 'Samenwerking'],
    materialen: ['Conflictscenario\'s', 'Stappenplan poster', 'Vredeshoek materialen'],
    activiteiten: [
      'Stappenplan voor conflictoplossing oefenen',
      'Rollenspellen met conflictsituaties',
      'Vredeshoek inrichten en gebruiken',
      'Win-win oplossingen bedenken'
    ],
    leerdoelen: [
      'Leerlingen kunnen conflicten herkennen',
      'Leerlingen passen het stappenplan toe',
      'Leerlingen zoeken naar win-win oplossingen'
    ],
    tips: [
      'Oefen met kleine conflicten eerst',
      'Maak het stappenplan visueel',
      'Vier succesvolle oplossingen',
      'Begeleid het proces intensief'
    ]
  },
  {
    id: 'doelen_stellen',
    naam: 'Doelen stellen en plannen maken',
    beschrijving: 'Leerlingen leren realistische doelen stellen en plannen maken',
    icon: '🎯',
    categorie: 'Verantwoordelijke besluitvorming',
    leeftijd: ['groep5-6', 'groep7-8'],
    tijdsduur: '30-45 minuten',
    selVaardigheden: ['Doelen stellen', 'Planning', 'Zelfmanagement'],
    materialen: ['Doelstellingsformulieren', 'Planningskalenders', 'Voortgangskaarten'],
    activiteiten: [
      'SMART doelen formuleren',
      'Actieplannen maken',
      'Voortgang bijhouden',
      'Obstakels identificeren en oplossingen bedenken'
    ],
    leerdoelen: [
      'Leerlingen kunnen realistische doelen stellen',
      'Leerlingen maken concrete plannen',
      'Leerlingen evalueren hun voortgang'
    ],
    tips: [
      'Begin met kleine, haalbare doelen',
      'Maak doelen zichtbaar',
      'Vier tussentijdse successen',
      'Leer van mislukkingen'
    ]
  },
  {
    id: 'vriendschap_vaardigheden',
    naam: 'Vriendschap en sociale vaardigheden',
    beschrijving: 'Vaardigheden voor het opbouwen en onderhouden van vriendschappen',
    icon: '👫',
    categorie: 'Relatievaardigheden',
    leeftijd: ['groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    tijdsduur: '20-35 minuten',
    selVaardigheden: ['Sociale vaardigheden', 'Communicatie', 'Samenwerking'],
    materialen: ['Vriendschapsboeken', 'Complimentenkaarten', 'Sociale scenario\'s'],
    activiteiten: [
      'Kwaliteiten van een goede vriend bespreken',
      'Complimenten geven en ontvangen',
      'Sociale scenario\'s oefenen',
      'Vriendschapsboom maken'
    ],
    leerdoelen: [
      'Leerlingen begrijpen wat vriendschap inhoudt',
      'Leerlingen kunnen contact maken met anderen',
      'Leerlingen onderhouden positieve relaties'
    ],
    tips: [
      'Bespreek verschillende soorten vriendschappen',
      'Oefen sociale vaardigheden in veilige omgeving',
      'Vier diversiteit in vriendschappen',
      'Geef positieve feedback'
    ]
  },
  {
    id: 'zelfvertrouwen',
    naam: 'Zelfvertrouwen en eigenwaarde',
    beschrijving: 'Activiteiten om het zelfvertrouwen en de eigenwaarde te versterken',
    icon: '⭐',
    categorie: 'Zelfbewustzijn',
    leeftijd: ['groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    tijdsduur: '15-30 minuten',
    selVaardigheden: ['Zelfvertrouwen', 'Eigenwaarde', 'Zelfkennis'],
    materialen: ['Sterrenkaarten', 'Succesverhalen', 'Zelfportret materialen'],
    activiteiten: [
      'Sterke punten identificeren',
      'Succesverhalen delen',
      'Zelfportretten maken',
      'Positieve affirmaties oefenen'
    ],
    leerdoelen: [
      'Leerlingen kennen hun sterke punten',
      'Leerlingen waarderen zichzelf',
      'Leerlingen durven uitdagingen aan te gaan'
    ],
    tips: [
      'Focus op groei in plaats van perfectie',
      'Vier kleine successen',
      'Gebruik specifieke complimenten',
      'Creëer succeservaringen'
    ]
  },
  {
    id: 'diversiteit_inclusie',
    naam: 'Diversiteit en inclusie',
    beschrijving: 'Waardering voor verschillen en het creëren van een inclusieve omgeving',
    icon: '🌈',
    categorie: 'Sociale bewustzijn',
    leeftijd: ['groep3-4', 'groep5-6', 'groep7-8'],
    tijdsduur: '25-40 minuten',
    selVaardigheden: ['Sociale bewustzijn', 'Respect', 'Inclusie'],
    materialen: ['Diversiteitsboeken', 'Cultuurkaarten', 'Identiteitswielen'],
    activiteiten: [
      'Verschillen en overeenkomsten bespreken',
      'Culturen verkennen',
      'Vooroordelen herkennen',
      'Inclusieve klasregels opstellen'
    ],
    leerdoelen: [
      'Leerlingen waarderen diversiteit',
      'Leerlingen herkennen vooroordelen',
      'Leerlingen gedragen zich inclusief'
    ],
    tips: [
      'Begin bij de eigen klas',
      'Gebruik positieve voorbeelden',
      'Bespreek verschillen zonder te oordelen',
      'Maak het persoonlijk'
    ]
  }
]

export default function SELActiviteiten({ userProfile, onComplete, selectedActiviteiten }: SELActiviteitenProps) {
  const [geselecteerdeActiviteiten, setGeselecteerdeActiviteiten] = useState<any[]>(selectedActiviteiten)
  const [filterCategorie, setFilterCategorie] = useState<string>('alle')
  const [detailView, setDetailView] = useState<string | null>(null)

  const categorieën = [
    'alle',
    'Zelfbewustzijn',
    'Zelfregulatie',
    'Sociale bewustzijn',
    'Relatievaardigheden',
    'Verantwoordelijke besluitvorming'
  ]

  // Filter activiteiten op basis van profiel en categorie
  const getRelevanteActiviteiten = () => {
    let gefilterd = selActiviteiten.filter(activiteit => {
      return activiteit.leeftijd.includes(userProfile.groep)
    })

    if (filterCategorie !== 'alle') {
      gefilterd = gefilterd.filter(activiteit => activiteit.categorie === filterCategorie)
    }

    return gefilterd
  }

  const toggleActiviteit = (activiteit: any) => {
    setGeselecteerdeActiviteiten(prev => {
      const exists = prev.find(a => a.id === activiteit.id)
      if (exists) {
        return prev.filter(a => a.id !== activiteit.id)
      } else {
        return [...prev, activiteit]
      }
    })
  }

  const handleContinue = () => {
    onComplete(geselecteerdeActiviteiten)
  }

  const relevanteActiviteiten = getRelevanteActiviteiten()

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Selecteer SEL-activiteiten</h2>
        <p className="text-gray-600">
          Sociaal-Emotioneel Leren (SEL) helpt leerlingen belangrijke levensvaardigheden te ontwikkelen. 
          Kies activiteiten die passen bij je groep en lesdoelen.
        </p>
      </div>

      {/* SEL Uitleg */}
      <div className="mb-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
        <h3 className="font-bold text-purple-900 mb-2">Wat is SEL?</h3>
        <p className="text-purple-800 text-sm mb-3">
          Sociaal-Emotioneel Leren bestaat uit 5 kernvaardigheden die leerlingen helpen succesvol te zijn in school en het leven:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
          <div className="bg-white p-3 rounded border border-purple-200">
            <div className="font-medium text-purple-900">Zelfbewustzijn</div>
            <div className="text-purple-700">Emoties en gedachten herkennen</div>
          </div>
          <div className="bg-white p-3 rounded border border-purple-200">
            <div className="font-medium text-purple-900">Zelfregulatie</div>
            <div className="text-purple-700">Emoties en gedrag managen</div>
          </div>
          <div className="bg-white p-3 rounded border border-purple-200">
            <div className="font-medium text-purple-900">Sociale bewustzijn</div>
            <div className="text-purple-700">Empathie en perspectief</div>
          </div>
          <div className="bg-white p-3 rounded border border-purple-200">
            <div className="font-medium text-purple-900">Relatievaardigheden</div>
            <div className="text-purple-700">Gezonde relaties opbouwen</div>
          </div>
          <div className="bg-white p-3 rounded border border-purple-200">
            <div className="font-medium text-purple-900">Verantwoordelijke besluitvorming</div>
            <div className="text-purple-700">Ethische keuzes maken</div>
          </div>
        </div>
      </div>

      {/* Categorie Filter */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {categorieën.map((categorie) => (
            <button
              key={categorie}
              onClick={() => setFilterCategorie(categorie)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                filterCategorie === categorie
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {categorie === 'alle' ? 'Alle vaardigheden' : categorie}
            </button>
          ))}
        </div>
      </div>

      {/* Activiteiten Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {relevanteActiviteiten.map((activiteit) => {
          const isSelected = geselecteerdeActiviteiten.some(a => a.id === activiteit.id)
          
          return (
            <div
              key={activiteit.id}
              className={`p-6 rounded-lg border-2 transition-all duration-200 hover:shadow-lg ${
                isSelected
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">{activiteit.icon}</div>
                <h3 className="font-bold text-lg text-gray-900">{activiteit.naam}</h3>
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  {activiteit.categorie}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 text-center">
                {activiteit.beschrijving}
              </p>
              
              <div className="space-y-2 text-xs text-gray-600 mb-4">
                <div className="flex justify-between">
                  <span>Tijdsduur:</span>
                  <span className="font-medium">{activiteit.tijdsduur}</span>
                </div>
                <div>
                  <span>SEL-vaardigheden:</span>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {activiteit.selVaardigheden.map((vaardigheid, index) => (
                      <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                        {vaardigheid}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={() => toggleActiviteit(activiteit)}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                    isSelected
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {isSelected ? '✓ Geselecteerd' : 'Selecteren'}
                </button>
                
                <button
                  onClick={() => setDetailView(activiteit.id)}
                  className="w-full py-2 px-4 rounded-lg font-medium text-purple-600 hover:bg-purple-50 transition-all duration-200"
                >
                  Details bekijken →
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Detail View Modal */}
      {detailView && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {(() => {
              const activiteit = selActiviteiten.find(a => a.id === detailView)
              if (!activiteit) return null
              
              return (
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{activiteit.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{activiteit.naam}</h3>
                        <p className="text-gray-600">{activiteit.beschrijving}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setDetailView(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Basisinfo */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Informatie</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Categorie:</span>
                          <span className="font-medium">{activiteit.categorie}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tijdsduur:</span>
                          <span className="font-medium">{activiteit.tijdsduur}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">SEL-vaardigheden:</span>
                          <div className="mt-1 flex flex-wrap gap-1">
                            {activiteit.selVaardigheden.map((vaardigheid, index) => (
                              <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">
                                {vaardigheid}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Materialen */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Benodigde materialen</h4>
                      <ul className="space-y-1">
                        {activiteit.materialen.map((materiaal, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            <span className="text-gray-700 text-sm">{materiaal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Leerdoelen */}
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-3">Leerdoelen</h4>
                    <ul className="space-y-2">
                      {activiteit.leerdoelen.map((doel, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700 text-sm">{doel}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Activiteiten */}
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-3">Concrete activiteiten</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activiteit.activiteiten.map((act, index) => (
                        <div key={index} className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <p className="text-blue-800 text-sm">🎯 {act}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tips */}
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-3">Praktische tips</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activiteit.tips.map((tip, index) => (
                        <div key={index} className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <p className="text-yellow-800 text-sm">💡 {tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex justify-between">
                    <button
                      onClick={() => setDetailView(null)}
                      className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200"
                    >
                      Sluiten
                    </button>
                    <button
                      onClick={() => {
                        toggleActiviteit(activiteit)
                        setDetailView(null)
                      }}
                      className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200"
                    >
                      {geselecteerdeActiviteiten.some(a => a.id === activiteit.id) ? 'Deselecteren' : 'Selecteren'}
                    </button>
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      )}

      {/* Selected Summary */}
      {geselecteerdeActiviteiten.length > 0 && (
        <div className="mb-8 p-6 bg-purple-50 border border-purple-200 rounded-lg">
          <h4 className="font-bold text-purple-900 mb-3">
            Geselecteerde SEL-activiteiten ({geselecteerdeActiviteiten.length})
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {geselecteerdeActiviteiten.map((activiteit) => (
              <div key={activiteit.id} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-purple-200">
                <span className="text-lg">{activiteit.icon}</span>
                <div>
                  <p className="font-medium text-purple-900 text-sm">{activiteit.naam}</p>
                  <p className="text-purple-700 text-xs">{activiteit.categorie}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            {geselecteerdeActiviteiten.length} SEL-activiteiten geselecteerd (optioneel)
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