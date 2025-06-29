'use client'

import { useState } from 'react'
import { UserProfile } from './LesWizard'

interface InstructieModellenProps {
  userProfile: UserProfile
  onComplete: (model: any) => void
  selectedModel: any | null
}

const instructieModellen = [
  {
    id: 'directe_instructie',
    naam: 'Directe Instructie',
    beschrijving: 'Gestructureerde, leraargestuurde aanpak met duidelijke stappen',
    icon: '👨‍🏫',
    geschiktVoor: ['groep1-2', 'groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'rekenen', 'engels'],
    kenmerken: [
      'Duidelijke uitleg door de leraar',
      'Stap-voor-stap instructie',
      'Veel oefening en herhaling',
      'Directe feedback',
      'Gestructureerde opbouw'
    ],
    fases: [
      { naam: 'Introductie', beschrijving: 'Activeren voorkennis en lesdoel benoemen' },
      { naam: 'Instructie', beschrijving: 'Nieuwe stof uitleggen en demonstreren' },
      { naam: 'Begeleide oefening', beschrijving: 'Samen oefenen met ondersteuning' },
      { naam: 'Zelfstandige oefening', beschrijving: 'Individueel of in groepjes oefenen' },
      { naam: 'Afsluiting', beschrijving: 'Evalueren en vooruitblikken' }
    ],
    voordelen: [
      'Effectief voor nieuwe concepten',
      'Duidelijke structuur',
      'Geschikt voor alle niveaus',
      'Meetbare resultaten'
    ],
    tips: [
      'Gebruik visuele ondersteuning',
      'Varieer in voorbeelden',
      'Check regelmatig begrip',
      'Bouw geleidelijk op'
    ]
  },
  {
    id: 'onderzoekend_leren',
    naam: 'Onderzoekend Leren',
    beschrijving: 'Leerlingen ontdekken kennis door eigen onderzoek en experimenten',
    icon: '🔍',
    geschiktVoor: ['groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['wereldoriëntatie', 'ict', 'nederlands'],
    kenmerken: [
      'Leerlingen stellen vragen',
      'Zelf informatie zoeken',
      'Experimenten uitvoeren',
      'Conclusies trekken',
      'Presenteren van resultaten'
    ],
    fases: [
      { naam: 'Oriëntatie', beschrijving: 'Onderzoeksvraag formuleren' },
      { naam: 'Conceptualisering', beschrijving: 'Hypothese opstellen' },
      { naam: 'Onderzoek', beschrijving: 'Gegevens verzamelen en analyseren' },
      { naam: 'Conclusie', beschrijving: 'Resultaten interpreteren' },
      { naam: 'Discussie', beschrijving: 'Bevindingen delen en reflecteren' }
    ],
    voordelen: [
      'Ontwikkelt onderzoeksvaardigheden',
      'Stimuleert nieuwsgierigheid',
      'Dieper begrip',
      'Zelfstandigheid'
    ],
    tips: [
      'Start met eenvoudige vragen',
      'Bied onderzoekstools aan',
      'Begeleid het proces',
      'Vier ontdekkingen'
    ]
  },
  {
    id: 'coöperatief_leren',
    naam: 'Coöperatief Leren',
    beschrijving: 'Leerlingen werken samen in kleine groepen aan gemeenschappelijke doelen',
    icon: '🤝',
    geschiktVoor: ['groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'wereldoriëntatie', 'burgerschap'],
    kenmerken: [
      'Samenwerken in groepen',
      'Gedeelde verantwoordelijkheid',
      'Positieve afhankelijkheid',
      'Sociale vaardigheden',
      'Groepsreflectie'
    ],
    fases: [
      { naam: 'Groepsvorming', beschrijving: 'Teams samenstellen en rollen verdelen' },
      { naam: 'Taakuitleg', beschrijving: 'Opdracht en criteria uitleggen' },
      { naam: 'Samenwerking', beschrijving: 'Groepen werken aan de taak' },
      { naam: 'Presentatie', beschrijving: 'Resultaten delen met de klas' },
      { naam: 'Evaluatie', beschrijving: 'Proces en product evalueren' }
    ],
    voordelen: [
      'Sociale vaardigheden',
      'Verschillende perspectieven',
      'Motiverend',
      'Inclusief'
    ],
    tips: [
      'Maak duidelijke afspraken',
      'Wissel groepssamenstelling',
      'Begeleid het proces',
      'Evalueer samen'
    ]
  },
  {
    id: 'spelend_leren',
    naam: 'Spelend Leren',
    beschrijving: 'Leren door middel van spel, ontdekking en plezier',
    icon: '🎮',
    geschiktVoor: ['groep1-2', 'groep3-4', 'groep5-6'],
    vakgebieden: ['rekenen', 'nederlands', 'bewegingsonderwijs', 'expressie'],
    kenmerken: [
      'Speelse activiteiten',
      'Intrinsieke motivatie',
      'Experimenteren',
      'Sociale interactie',
      'Plezier in leren'
    ],
    fases: [
      { naam: 'Warming-up', beschrijving: 'Sfeer creëren en interesse wekken' },
      { naam: 'Spelintroductie', beschrijving: 'Spelregels uitleggen' },
      { naam: 'Spelen', beschrijving: 'Actief deelnemen aan het spel' },
      { naam: 'Reflectie', beschrijving: 'Bespreken wat geleerd is' },
      { naam: 'Transfer', beschrijving: 'Koppeling maken naar andere situaties' }
    ],
    voordelen: [
      'Hoge motivatie',
      'Natuurlijk leren',
      'Sociale ontwikkeling',
      'Creativiteit'
    ],
    tips: [
      'Kies passende spellen',
      'Zorg voor veilige omgeving',
      'Begeleid waar nodig',
      'Maak leren zichtbaar'
    ]
  },
  {
    id: 'gepersonaliseerd_leren',
    naam: 'Gepersonaliseerd Leren',
    beschrijving: 'Onderwijs aangepast aan individuele behoeften en leerstijlen',
    icon: '🎯',
    geschiktVoor: ['groep3-4', 'groep5-6', 'groep7-8'],
    vakgebieden: ['nederlands', 'rekenen', 'ict'],
    kenmerken: [
      'Individuele leerpaden',
      'Eigen tempo',
      'Keuzemogelijkheden',
      'Adaptieve materialen',
      'Continue monitoring'
    ],
    fases: [
      { naam: 'Diagnose', beschrijving: 'Leerbehoeften in kaart brengen' },
      { naam: 'Planning', beschrijving: 'Individueel leerplan opstellen' },
      { naam: 'Uitvoering', beschrijving: 'Werken aan persoonlijke doelen' },
      { naam: 'Monitoring', beschrijving: 'Voortgang bijhouden' },
      { naam: 'Bijstelling', beschrijving: 'Plan aanpassen waar nodig' }
    ],
    voordelen: [
      'Optimale uitdaging',
      'Eigenaarschap',
      'Betere resultaten',
      'Zelfvertrouwen'
    ],
    tips: [
      'Start klein',
      'Gebruik data',
      'Bied keuzes',
      'Vier vooruitgang'
    ]
  },
  {
    id: 'projectonderwijs',
    naam: 'Projectonderwijs',
    beschrijving: 'Langdurige, thematische projecten die verschillende vakken integreren',
    icon: '📊',
    geschiktVoor: ['groep5-6', 'groep7-8'],
    vakgebieden: ['wereldoriëntatie', 'nederlands', 'ict', 'expressie'],
    kenmerken: [
      'Thematische aanpak',
      'Vakintegratie',
      'Authentieke opdrachten',
      'Eindproduct',
      'Langere tijdsduur'
    ],
    fases: [
      { naam: 'Projectstart', beschrijving: 'Thema introduceren en plannen maken' },
      { naam: 'Onderzoek', beschrijving: 'Informatie verzamelen en verwerken' },
      { naam: 'Uitwerking', beschrijving: 'Aan het eindproduct werken' },
      { naam: 'Presentatie', beschrijving: 'Resultaten tonen aan publiek' },
      { naam: 'Evaluatie', beschrijving: 'Project en proces evalueren' }
    ],
    voordelen: [
      'Realistische context',
      'Diepgaand leren',
      'Vakoverstijgend',
      'Motiverend'
    ],
    tips: [
      'Kies relevante themas',
      'Plan goed',
      'Begeleid intensief',
      'Vier successen'
    ]
  }
]

export default function InstructieModellen({ userProfile, onComplete, selectedModel }: InstructieModellenProps) {
  const [geselecteerdModel, setGeselecteerdModel] = useState(selectedModel)
  const [detailView, setDetailView] = useState<string | null>(null)

  // Filter modellen op basis van profiel
  const getRelevanteModellen = () => {
    return instructieModellen.filter(model => {
      const geschiktVoorGroep = model.geschiktVoor.includes(userProfile.groep)
      const geschiktVoorVak = model.vakgebieden.some(vak => userProfile.vakgebied.includes(vak))
      return geschiktVoorGroep && geschiktVoorVak
    })
  }

  const handleModelSelect = (model: any) => {
    setGeselecteerdModel(model)
    setDetailView(null)
  }

  const handleContinue = () => {
    if (geselecteerdModel) {
      onComplete(geselecteerdModel)
    }
  }

  const relevanteModellen = getRelevanteModellen()

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Kies je instructiemodel</h2>
        <p className="text-gray-600">
          Selecteer het instructiemodel dat het beste past bij je les en leerlingen. 
          Deze modellen zijn gefilterd op basis van je profiel.
        </p>
      </div>

      {/* Modellen Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {relevanteModellen.map((model) => (
          <div
            key={model.id}
            className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-lg ${
              geselecteerdModel?.id === model.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">{model.icon}</div>
              <h3 className="font-bold text-lg text-gray-900">{model.naam}</h3>
            </div>
            
            <p className="text-gray-600 text-sm mb-4 text-center">
              {model.beschrijving}
            </p>
            
            <div className="space-y-3">
              <div>
                <p className="text-xs font-medium text-gray-700 mb-1">Geschikt voor:</p>
                <div className="flex flex-wrap gap-1">
                  {model.geschiktVoor.map((groep) => (
                    <span
                      key={groep}
                      className={`px-2 py-1 text-xs rounded ${
                        groep === userProfile.groep
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {groep}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-xs font-medium text-gray-700 mb-1">Vakgebieden:</p>
                <div className="flex flex-wrap gap-1">
                  {model.vakgebieden.map((vak) => (
                    <span
                      key={vak}
                      className={`px-2 py-1 text-xs rounded ${
                        userProfile.vakgebied.includes(vak)
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {vak}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <button
                onClick={() => handleModelSelect(model)}
                className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                  geselecteerdModel?.id === model.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {geselecteerdModel?.id === model.id ? '✓ Geselecteerd' : 'Selecteren'}
              </button>
              
              <button
                onClick={() => setDetailView(model.id)}
                className="w-full py-2 px-4 rounded-lg font-medium text-blue-600 hover:bg-blue-50 transition-all duration-200"
              >
                Meer details →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detail View Modal */}
      {detailView && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {(() => {
              const model = instructieModellen.find(m => m.id === detailView)
              if (!model) return null
              
              return (
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{model.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{model.naam}</h3>
                        <p className="text-gray-600">{model.beschrijving}</p>
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Kenmerken */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Kenmerken</h4>
                      <ul className="space-y-2">
                        {model.kenmerken.map((kenmerk, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-700">{kenmerk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Voordelen */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Voordelen</h4>
                      <ul className="space-y-2">
                        {model.voordelen.map((voordeel, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span className="text-gray-700">{voordeel}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Fases */}
                  <div className="mt-8">
                    <h4 className="font-bold text-gray-900 mb-4">Lesfases</h4>
                    <div className="space-y-4">
                      {model.fases.map((fase, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900">{fase.naam}</h5>
                            <p className="text-gray-600 text-sm">{fase.beschrijving}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tips */}
                  <div className="mt-8">
                    <h4 className="font-bold text-gray-900 mb-3">Praktische tips</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {model.tips.map((tip, index) => (
                        <div key={index} className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <p className="text-yellow-800 text-sm">💡 {tip}</p>
                        </div>
                      ))}
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
                        handleModelSelect(model)
                        setDetailView(null)
                      }}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                    >
                      Dit model selecteren
                    </button>
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      )}

      {/* Selected Model Summary */}
      {geselecteerdModel && (
        <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-bold text-blue-900 mb-2">Geselecteerd instructiemodel</h4>
          <div className="flex items-center space-x-4">
            <div className="text-2xl">{geselecteerdModel.icon}</div>
            <div>
              <h5 className="font-medium text-blue-900">{geselecteerdModel.naam}</h5>
              <p className="text-blue-700 text-sm">{geselecteerdModel.beschrijving}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            {geselecteerdModel ? 'Model geselecteerd' : 'Selecteer een instructiemodel'}
          </div>
          <button
            onClick={handleContinue}
            disabled={!geselecteerdModel}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              geselecteerdModel
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Volgende: Werkvormen selecteren →
          </button>
        </div>
      </div>
    </div>
  )
}