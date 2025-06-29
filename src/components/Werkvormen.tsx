'use client'

import { useState } from 'react'
import { UserProfile } from './LesWizard'

interface WerkvormenProps {
  userProfile: UserProfile
  onComplete: (werkvormen: any[]) => void
  selectedWerkvormen: any[]
}

const werkvormenDatabase = [
  {
    id: 'klassengesprek',
    naam: 'Klassengesprek',
    beschrijving: 'Gezamenlijke discussie met de hele klas',
    icon: '💬',
    categorie: 'Discussie',
    tijdsduur: '10-20 minuten',
    groepsgrootte: 'Hele klas',
    geschiktVoor: ['groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'wereldoriëntatie', 'burgerschap'],
    instructiemodellen: ['directe_instructie', 'onderzoekend_leren'],
    voorbereiding: 'Laag',
    materialen: ['Geen specifieke materialen nodig'],
    stappen: [
      'Stel een duidelijke vraag of stelling',
      'Geef leerlingen denktijd',
      'Laat verschillende leerlingen reageren',
      'Vat samen en trek conclusies'
    ],
    tips: [
      'Gebruik de 3-seconden regel',
      'Betrek alle leerlingen',
      'Stel open vragen',
      'Bouw voort op antwoorden'
    ],
    differentiatie: [
      'Geef steekwoorden aan zwakkere leerlingen',
      'Laat sterke leerlingen doorvragen',
      'Gebruik visuele ondersteuning'
    ]
  },
  {
    id: 'denken_delen_uitwisselen',
    naam: 'Denken-Delen-Uitwisselen',
    beschrijving: 'Individueel nadenken, in tweetallen bespreken, dan klassikaal delen',
    icon: '🤔',
    categorie: 'Coöperatief',
    tijdsduur: '15-25 minuten',
    groepsgrootte: 'Individueel → Tweetallen → Klas',
    geschiktVoor: ['groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'rekenen', 'wereldoriëntatie'],
    instructiemodellen: ['coöperatief_leren', 'onderzoekend_leren'],
    voorbereiding: 'Laag',
    materialen: ['Werkblad of vraag', 'Timer'],
    stappen: [
      'Stel een vraag of probleem',
      'Leerlingen denken individueel na (2-3 min)',
      'Bespreking in tweetallen (5-10 min)',
      'Delen van inzichten met de klas'
    ],
    tips: [
      'Geef duidelijke tijdslimieten',
      'Wissel de tweetallen regelmatig',
      'Controleer of iedereen meedoet',
      'Vat de belangrijkste punten samen'
    ],
    differentiatie: [
      'Pas de complexiteit van vragen aan',
      'Koppel sterke aan zwakkere leerlingen',
      'Geef extra denktijd waar nodig'
    ]
  },
  {
    id: 'jigsaw',
    naam: 'Jigsaw Methode',
    beschrijving: 'Leerlingen worden expert in een deelonderwerp en onderwijzen elkaar',
    icon: '🧩',
    categorie: 'Coöperatief',
    tijdsduur: '45-90 minuten',
    groepsgrootte: '4-6 leerlingen per groep',
    geschiktVoor: ['groep5-6', 'groep7-8'],
    vakgebieden: ['wereldoriëntatie', 'nederlands', 'burgerschap'],
    instructiemodellen: ['coöperatief_leren', 'onderzoekend_leren'],
    voorbereiding: 'Hoog',
    materialen: ['Verschillende teksten/bronnen', 'Expertbladen', 'Evaluatieformulieren'],
    stappen: [
      'Verdeel de stof in deelonderwerpen',
      'Vorm thuisgroepen en expertgroepen',
      'Expertgroepen bestuderen hun onderwerp',
      'Experts keren terug naar thuisgroep',
      'Experts onderwijzen hun groepsgenoten',
      'Evaluatie en toetsing'
    ],
    tips: [
      'Zorg voor gelijkwaardige deelonderwerpen',
      'Geef duidelijke rollen en taken',
      'Monitor de expertgroepen',
      'Evalueer zowel proces als product'
    ],
    differentiatie: [
      'Pas de moeilijkheid van teksten aan',
      'Geef verschillende rollen binnen groepen',
      'Bied extra ondersteuning aan experts'
    ]
  },
  {
    id: 'stations_leren',
    naam: 'Stations/Rouleren',
    beschrijving: 'Leerlingen werken in kleine groepen aan verschillende stations',
    icon: '🔄',
    categorie: 'Zelfstandig',
    tijdsduur: '30-60 minuten',
    groepsgrootte: '3-5 leerlingen per station',
    geschiktVoor: ['groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['rekenen', 'nederlands', 'expressie', 'bewegingsonderwijs'],
    instructiemodellen: ['gepersonaliseerd_leren', 'spelend_leren'],
    voorbereiding: 'Hoog',
    materialen: ['Verschillende materialen per station', 'Instructiekaarten', 'Timer'],
    stappen: [
      'Stel verschillende stations in',
      'Leg de opdrachten per station uit',
      'Verdeel leerlingen over stations',
      'Laat groepen rouleren na afgesproken tijd',
      'Sluit af met reflectie'
    ],
    tips: [
      'Maak duidelijke instructies per station',
      'Zorg voor variatie in activiteiten',
      'Houd rekening met verschillende niveaus',
      'Plan voldoende tijd per station'
    ],
    differentiatie: [
      'Maak stations op verschillende niveaus',
      'Geef keuze in volgorde van stations',
      'Bied extra uitdaging of ondersteuning'
    ]
  },
  {
    id: 'rollenspel',
    naam: 'Rollenspel',
    beschrijving: 'Leerlingen spelen verschillende rollen om situaties na te bootsen',
    icon: '🎭',
    categorie: 'Dramatisering',
    tijdsduur: '20-45 minuten',
    groepsgrootte: 'Variabel',
    geschiktVoor: ['groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'burgerschap', 'wereldoriëntatie', 'engels'],
    instructiemodellen: ['spelend_leren', 'coöperatief_leren'],
    voorbereiding: 'Gemiddeld',
    materialen: ['Rolkaarten', 'Eventueel kostuums/attributen', 'Scenario\'s'],
    stappen: [
      'Introduceer de situatie/het probleem',
      'Verdeel de rollen',
      'Geef voorbereidingstijd',
      'Voer het rollenspel uit',
      'Bespreek en reflecteer'
    ],
    tips: [
      'Kies herkenbare situaties',
      'Geef duidelijke rolbeschrijvingen',
      'Creëer een veilige sfeer',
      'Bespreek altijd na afloop'
    ],
    differentiatie: [
      'Pas rollen aan op persoonlijkheid',
      'Geef meer of minder complexe scenario\'s',
      'Laat leerlingen zelf rollen kiezen'
    ]
  },
  {
    id: 'webquest',
    naam: 'WebQuest',
    beschrijving: 'Gestructureerd internetonderzoek met duidelijke opdrachten',
    icon: '🌐',
    categorie: 'ICT',
    tijdsduur: '60-120 minuten',
    groepsgrootte: '2-4 leerlingen',
    geschiktVoor: ['groep5-6', 'groep7-8'],
    vakgebieden: ['wereldoriëntatie', 'ict', 'nederlands'],
    instructiemodellen: ['onderzoekend_leren', 'projectonderwijs'],
    voorbereiding: 'Hoog',
    materialen: ['Computers/tablets', 'WebQuest template', 'Geselecteerde websites'],
    stappen: [
      'Introduceer het onderwerp en de vraag',
      'Leg de opdracht en criteria uit',
      'Laat leerlingen onderzoek doen',
      'Begeleid het proces',
      'Presentatie van resultaten',
      'Evaluatie'
    ],
    tips: [
      'Selecteer betrouwbare websites vooraf',
      'Geef duidelijke zoekstrategieën',
      'Monitor de voortgang',
      'Leer kritisch kijken naar bronnen'
    ],
    differentiatie: [
      'Geef verschillende onderzoeksvragen',
      'Varieer in complexiteit van bronnen',
      'Bied verschillende presentatievormen'
    ]
  },
  {
    id: 'gallery_walk',
    naam: 'Gallery Walk',
    beschrijving: 'Leerlingen lopen langs verschillende posters/werkstukken en geven feedback',
    icon: '🖼️',
    categorie: 'Presentatie',
    tijdsduur: '20-40 minuten',
    groepsgrootte: 'Individueel of kleine groepjes',
    geschiktVoor: ['groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['expressie', 'nederlands', 'wereldoriëntatie'],
    instructiemodellen: ['coöperatief_leren', 'projectonderwijs'],
    voorbereiding: 'Gemiddeld',
    materialen: ['Posters/werkstukken', 'Feedback formulieren', 'Stickers/markers'],
    stappen: [
      'Hang werkstukken/posters op',
      'Leg de opdracht uit',
      'Leerlingen lopen rond en bekijken werk',
      'Geven feedback of stemmen',
      'Bespreking van opvallende zaken'
    ],
    tips: [
      'Geef duidelijke feedback criteria',
      'Zorg voor rustige sfeer',
      'Varieer in feedback methoden',
      'Vier de diversiteit aan werk'
    ],
    differentiatie: [
      'Pas feedback formulieren aan',
      'Geef verschillende rollen',
      'Varieer in presentatievormen'
    ]
  },
  {
    id: 'escape_room',
    naam: 'Escape Room',
    beschrijving: 'Gamified leeromgeving waar leerlingen puzzels oplossen om te "ontsnappen"',
    icon: '🔐',
    categorie: 'Gamification',
    tijdsduur: '45-90 minuten',
    groepsgrootte: '4-6 leerlingen per team',
    geschiktVoor: ['groep5-6', 'groep7-8'],
    vakgebieden: ['rekenen', 'nederlands', 'wereldoriëntatie'],
    instructiemodellen: ['spelend_leren', 'coöperatief_leren'],
    voorbereiding: 'Zeer hoog',
    materialen: ['Puzzels/raadsels', 'Sloten/dozen', 'Hints', 'Timer', 'Decoratie'],
    stappen: [
      'Stel de escape room in',
      'Introduceer het verhaal/thema',
      'Teams beginnen met puzzels',
      'Geef hints waar nodig',
      'Vier het succes',
      'Reflecteer op het leerproces'
    ],
    tips: [
      'Test de escape room vooraf',
      'Zorg voor verschillende moeilijkheidsniveaus',
      'Houd de spanning erin',
      'Maak het verhaal boeiend'
    ],
    differentiatie: [
      'Geef teams verschillende puzzels',
      'Varieer in aantal hints',
      'Pas de tijdslimiet aan'
    ]
  }
]

export default function Werkvormen({ userProfile, onComplete, selectedWerkvormen }: WerkvormenProps) {
  const [geselecteerdeWerkvormen, setGeselecteerdeWerkvormen] = useState<any[]>(selectedWerkvormen)
  const [filterCategorie, setFilterCategorie] = useState<string>('alle')
  const [detailView, setDetailView] = useState<string | null>(null)

  const categorieën = [
    'alle',
    'Discussie',
    'Coöperatief',
    'Zelfstandig',
    'Dramatisering',
    'ICT',
    'Presentatie',
    'Gamification'
  ]

  // Filter werkvormen op basis van profiel en categorie
  const getRelevanteWerkvormen = () => {
    let gefilterd = werkvormenDatabase.filter(werkvorm => {
      const geschiktVoorGroep = werkvorm.geschiktVoor.includes(userProfile.groep)
      const geschiktVoorVak = werkvorm.vakgebieden.some(vak => userProfile.vakgebied.includes(vak))
      return geschiktVoorGroep && geschiktVoorVak
    })

    if (filterCategorie !== 'alle') {
      gefilterd = gefilterd.filter(werkvorm => werkvorm.categorie === filterCategorie)
    }

    return gefilterd
  }

  const toggleWerkvorm = (werkvorm: any) => {
    setGeselecteerdeWerkvormen(prev => {
      const exists = prev.find(w => w.id === werkvorm.id)
      if (exists) {
        return prev.filter(w => w.id !== werkvorm.id)
      } else {
        return [...prev, werkvorm]
      }
    })
  }

  const handleContinue = () => {
    onComplete(geselecteerdeWerkvormen)
  }

  const relevanteWerkvormen = getRelevanteWerkvormen()

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Selecteer werkvormen</h2>
        <p className="text-gray-600">
          Kies de werkvormen die passen bij je les en instructiemodel. 
          Je kunt meerdere werkvormen combineren voor een gevarieerde les.
        </p>
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
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {categorie === 'alle' ? 'Alle categorieën' : categorie}
            </button>
          ))}
        </div>
      </div>

      {/* Werkvormen Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {relevanteWerkvormen.map((werkvorm) => {
          const isSelected = geselecteerdeWerkvormen.some(w => w.id === werkvorm.id)
          
          return (
            <div
              key={werkvorm.id}
              className={`p-6 rounded-lg border-2 transition-all duration-200 hover:shadow-lg ${
                isSelected
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">{werkvorm.icon}</div>
                <h3 className="font-bold text-lg text-gray-900">{werkvorm.naam}</h3>
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  {werkvorm.categorie}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 text-center">
                {werkvorm.beschrijving}
              </p>
              
              <div className="space-y-2 text-xs text-gray-600 mb-4">
                <div className="flex justify-between">
                  <span>Tijdsduur:</span>
                  <span className="font-medium">{werkvorm.tijdsduur}</span>
                </div>
                <div className="flex justify-between">
                  <span>Groepsgrootte:</span>
                  <span className="font-medium">{werkvorm.groepsgrootte}</span>
                </div>
                <div className="flex justify-between">
                  <span>Voorbereiding:</span>
                  <span className={`font-medium ${
                    werkvorm.voorbereiding === 'Laag' ? 'text-green-600' :
                    werkvorm.voorbereiding === 'Gemiddeld' ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {werkvorm.voorbereiding}
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <button
                  onClick={() => toggleWerkvorm(werkvorm)}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                    isSelected
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {isSelected ? '✓ Geselecteerd' : 'Selecteren'}
                </button>
                
                <button
                  onClick={() => setDetailView(werkvorm.id)}
                  className="w-full py-2 px-4 rounded-lg font-medium text-blue-600 hover:bg-blue-50 transition-all duration-200"
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
              const werkvorm = werkvormenDatabase.find(w => w.id === detailView)
              if (!werkvorm) return null
              
              return (
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{werkvorm.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{werkvorm.naam}</h3>
                        <p className="text-gray-600">{werkvorm.beschrijving}</p>
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
                      <h4 className="font-bold text-gray-900 mb-3">Basisinformatie</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Categorie:</span>
                          <span className="font-medium">{werkvorm.categorie}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tijdsduur:</span>
                          <span className="font-medium">{werkvorm.tijdsduur}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Groepsgrootte:</span>
                          <span className="font-medium">{werkvorm.groepsgrootte}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Voorbereiding:</span>
                          <span className={`font-medium ${
                            werkvorm.voorbereiding === 'Laag' ? 'text-green-600' :
                            werkvorm.voorbereiding === 'Gemiddeld' ? 'text-yellow-600' :
                            'text-red-600'
                          }`}>
                            {werkvorm.voorbereiding}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Materialen */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Benodigde materialen</h4>
                      <ul className="space-y-1">
                        {werkvorm.materialen.map((materiaal, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700 text-sm">{materiaal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Stappen */}
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4">Uitvoering stappen</h4>
                    <div className="space-y-3">
                      {werkvorm.stappen.map((stap, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                            {index + 1}
                          </div>
                          <p className="text-gray-700 text-sm">{stap}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Tips */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Praktische tips</h4>
                      <div className="space-y-2">
                        {werkvorm.tips.map((tip, index) => (
                          <div key={index} className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <p className="text-yellow-800 text-sm">💡 {tip}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Differentiatie */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Differentiatie mogelijkheden</h4>
                      <div className="space-y-2">
                        {werkvorm.differentiatie.map((diff, index) => (
                          <div key={index} className="p-3 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-green-800 text-sm">🎯 {diff}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setDetailView(null)}
                      className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200"
                    >
                      Sluiten
                    </button>
                    <button
                      onClick={() => {
                        toggleWerkvorm(werkvorm)
                        setDetailView(null)
                      }}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                    >
                      {geselecteerdeWerkvormen.some(w => w.id === werkvorm.id) ? 'Deselecteren' : 'Selecteren'}
                    </button>
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      )}

      {/* Selected Summary */}
      {geselecteerdeWerkvormen.length > 0 && (
        <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-bold text-green-900 mb-3">
            Geselecteerde werkvormen ({geselecteerdeWerkvormen.length})
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {geselecteerdeWerkvormen.map((werkvorm) => (
              <div key={werkvorm.id} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-green-200">
                <span className="text-lg">{werkvorm.icon}</span>
                <div>
                  <p className="font-medium text-green-900 text-sm">{werkvorm.naam}</p>
                  <p className="text-green-700 text-xs">{werkvorm.tijdsduur}</p>
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
            {geselecteerdeWerkvormen.length} werkvormen geselecteerd
          </div>
          <button
            onClick={handleContinue}
            disabled={geselecteerdeWerkvormen.length === 0}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              geselecteerdeWerkvormen.length > 0
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Volgende: SEL-activiteiten →
          </button>
        </div>
      </div>
    </div>
  )
}