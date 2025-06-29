'use client'

import { useState } from 'react'
import { UserProfile } from './LesWizard'

interface SLODoelenProps {
  userProfile: UserProfile
  onComplete: (doelen: any[]) => void
  selectedDoelen: any[]
}

// SLO-doelen database per vakgebied en groep
const sloDatabase = {
  nederlands: {
    'groep1-2': [
      {
        id: 'nl_12_1',
        code: 'NL.1.1',
        titel: 'Mondeling taalgebruik',
        beschrijving: 'De leerling kan zich mondeling uiten en begrijpt wat anderen zeggen',
        subdoelen: [
          'Luisteren naar verhalen en instructies',
          'Vragen stellen en beantwoorden',
          'Gevoelens en behoeften uiten',
          'Woordenschat uitbreiden'
        ]
      },
      {
        id: 'nl_12_2',
        code: 'NL.1.2',
        titel: 'Prentenboeken en voorlezen',
        beschrijving: 'De leerling kan betekenis halen uit prentenboeken en geniet van voorlezen',
        subdoelen: [
          'Luisteren naar voorgelezen verhalen',
          'Praten over prentenboeken',
          'Verhaalstructuur herkennen',
          'Fantasie ontwikkelen'
        ]
      },
      {
        id: 'nl_12_3',
        code: 'NL.1.3',
        titel: 'Eerste schrijfvaardigheden',
        beschrijving: 'De leerling ontwikkelt eerste schrijfvaardigheden en letterbewustzijn',
        subdoelen: [
          'Tekenen en krabbelen',
          'Letters herkennen',
          'Eigen naam schrijven',
          'Fijne motoriek ontwikkelen'
        ]
      }
    ],
    'groep3-4': [
      {
        id: 'nl_34_1',
        code: 'NL.2.1',
        titel: 'Technisch lezen',
        beschrijving: 'De leerling kan woorden en zinnen vlot en accuraat lezen',
        subdoelen: [
          'Letters en klanken koppelen',
          'Woorden vlot herkennen',
          'Zinnen vloeiend lezen',
          'Leestempo ontwikkelen'
        ]
      },
      {
        id: 'nl_34_2',
        code: 'NL.2.2',
        titel: 'Begrijpend lezen',
        beschrijving: 'De leerling begrijpt wat hij/zij leest op woord-, zin- en tekstniveau',
        subdoelen: [
          'Woordbetekenissen begrijpen',
          'Hoofdgedachte herkennen',
          'Verbanden leggen',
          'Conclusies trekken'
        ]
      },
      {
        id: 'nl_34_3',
        code: 'NL.2.3',
        titel: 'Spelling en schrijven',
        beschrijving: 'De leerling kan woorden correct spellen en begrijpelijke teksten schrijven',
        subdoelen: [
          'Basisspelling beheersen',
          'Zinnen opbouwen',
          'Verhaaljes schrijven',
          'Handschrift ontwikkelen'
        ]
      }
    ],
    'groep5-6': [
      {
        id: 'nl_56_1',
        code: 'NL.3.1',
        titel: 'Voortgezet technisch lezen',
        beschrijving: 'De leerling leest verschillende tekstsoorten vlot en accuraat',
        subdoelen: [
          'Complexere woorden lezen',
          'Verschillende tekstsoorten',
          'Leessnelheid verhogen',
          'Expressief voorlezen'
        ]
      },
      {
        id: 'nl_56_2',
        code: 'NL.3.2',
        titel: 'Uitgebreid begrijpend lezen',
        beschrijving: 'De leerling begrijpt en interpreteert verschillende tekstsoorten',
        subdoelen: [
          'Informatie zoeken en ordenen',
          'Tekststructuur herkennen',
          'Kritisch lezen',
          'Samenvatten'
        ]
      },
      {
        id: 'nl_56_3',
        code: 'NL.3.3',
        titel: 'Gevorderde spelling en schrijven',
        beschrijving: 'De leerling beheerst de spelling en schrijft verschillende tekstsoorten',
        subdoelen: [
          'Moeilijke spelling',
          'Verschillende tekstsoorten schrijven',
          'Tekststructuur gebruiken',
          'Revisie en verbetering'
        ]
      }
    ],
    'groep7-8': [
      {
        id: 'nl_78_1',
        code: 'NL.4.1',
        titel: 'Gevorderd lezen',
        beschrijving: 'De leerling leest verschillende complexe teksten met begrip',
        subdoelen: [
          'Complexe teksten begrijpen',
          'Kritisch lezen en beoordelen',
          'Verschillende leesdoelen',
          'Literatuur waarderen'
        ]
      },
      {
        id: 'nl_78_2',
        code: 'NL.4.2',
        titel: 'Gevorderd schrijven',
        beschrijving: 'De leerling schrijft verschillende tekstsoorten voor verschillende doelen',
        subdoelen: [
          'Argumentatieve teksten',
          'Creatief schrijven',
          'Formele brieven',
          'Onderzoeksverslagen'
        ]
      },
      {
        id: 'nl_78_3',
        code: 'NL.4.3',
        titel: 'Mondeling communiceren',
        beschrijving: 'De leerling communiceert effectief in verschillende situaties',
        subdoelen: [
          'Presentaties geven',
          'Discussiëren en argumenteren',
          'Actief luisteren',
          'Non-verbale communicatie'
        ]
      }
    ]
  },
  rekenen: {
    'groep1-2': [
      {
        id: 'rek_12_1',
        code: 'RE.1.1',
        titel: 'Getalbegrip tot 20',
        beschrijving: 'De leerling ontwikkelt getalbegrip en kan tellen tot 20',
        subdoelen: [
          'Tellen tot 20',
          'Hoeveelheden vergelijken',
          'Getalsymbolen herkennen',
          'Ordenen en rangschikken'
        ]
      },
      {
        id: 'rek_12_2',
        code: 'RE.1.2',
        titel: 'Meetkunde en meten',
        beschrijving: 'De leerling herkent vormen en kan eenvoudig meten',
        subdoelen: [
          'Basisvormen herkennen',
          'Groot en klein vergelijken',
          'Patronen herkennen',
          'Ruimtelijk inzicht'
        ]
      }
    ],
    'groep3-4': [
      {
        id: 'rek_34_1',
        code: 'RE.2.1',
        titel: 'Getallen tot 100',
        beschrijving: 'De leerling beheerst getallen tot 100 en kan ermee rekenen',
        subdoelen: [
          'Getalbegrip tot 100',
          'Optellen en aftrekken',
          'Tafels van 1, 2, 5, 10',
          'Hoofdrekenen'
        ]
      },
      {
        id: 'rek_34_2',
        code: 'RE.2.2',
        titel: 'Meten en meetkunde',
        beschrijving: 'De leerling kan meten met verschillende eenheden en herkent vormen',
        subdoelen: [
          'Lengte, gewicht, tijd',
          'Geld rekenen',
          'Vlakke figuren',
          'Symmetrie'
        ]
      }
    ],
    'groep5-6': [
      {
        id: 'rek_56_1',
        code: 'RE.3.1',
        titel: 'Getallen tot 10.000',
        beschrijving: 'De leerling beheerst getallen tot 10.000 en de vier bewerkingen',
        subdoelen: [
          'Getalbegrip tot 10.000',
          'Alle tafels tot 10',
          'Schriftelijk rekenen',
          'Breuken introductie'
        ]
      },
      {
        id: 'rek_56_2',
        code: 'RE.3.2',
        titel: 'Verhoudingen en procenten',
        beschrijving: 'De leerling begrijpt verhoudingen en eenvoudige procenten',
        subdoelen: [
          'Verhoudingstabellen',
          'Procenten tot 100%',
          'Schaal en kaarten',
          'Grafieken lezen'
        ]
      }
    ],
    'groep7-8': [
      {
        id: 'rek_78_1',
        code: 'RE.4.1',
        titel: 'Complexe bewerkingen',
        beschrijving: 'De leerling beheerst complexe rekenbewerkingen en probleemoplossing',
        subdoelen: [
          'Kommagetallen',
          'Complexe breuken',
          'Oppervlakte en inhoud',
          'Probleemoplossend rekenen'
        ]
      },
      {
        id: 'rek_78_2',
        code: 'RE.4.2',
        titel: 'Statistiek en kansrekening',
        beschrijving: 'De leerling kan gegevens verzamelen, ordenen en interpreteren',
        subdoelen: [
          'Grafieken maken',
          'Gemiddelde berekenen',
          'Kans inschatten',
          'Onderzoek doen'
        ]
      }
    ]
  }
}

export default function SLODoelen({ userProfile, onComplete, selectedDoelen }: SLODoelenProps) {
  const [geselecteerdeDoelen, setGeselecteerdeDoelen] = useState<any[]>(selectedDoelen)
  const [activeVakgebied, setActiveVakgebied] = useState(userProfile.vakgebied[0] || 'nederlands')
  const [searchTerm, setSearchTerm] = useState('')

  // Haal relevante doelen op basis van profiel
  const getRelevanteDoelen = () => {
    const vakDoelen = sloDatabase[activeVakgebied as keyof typeof sloDatabase]
    if (!vakDoelen) return []
    
    const groepDoelen = vakDoelen[userProfile.groep as keyof typeof vakDoelen] || []
    
    if (searchTerm) {
      return groepDoelen.filter(doel => 
        doel.titel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doel.beschrijving.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doel.subdoelen.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }
    
    return groepDoelen
  }

  const toggleDoel = (doel: any) => {
    setGeselecteerdeDoelen(prev => {
      const exists = prev.find(d => d.id === doel.id)
      if (exists) {
        return prev.filter(d => d.id !== doel.id)
      } else {
        return [...prev, doel]
      }
    })
  }

  const handleContinue = () => {
    onComplete(geselecteerdeDoelen)
  }

  const relevanteDoelen = getRelevanteDoelen()

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Selecteer SLO-doelen</h2>
        <p className="text-gray-600">
          Kies de leerdoelen die passen bij je les. Deze zijn gefilterd op {userProfile.groep} en je vakgebieden.
        </p>
      </div>

      {/* Vakgebied Tabs */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {userProfile.vakgebied.map((vak) => (
            <button
              key={vak}
              onClick={() => setActiveVakgebied(vak)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeVakgebied === vak
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {vak === 'nederlands' ? 'Nederlands' : 
               vak === 'rekenen' ? 'Rekenen' : 
               vak.charAt(0).toUpperCase() + vak.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Zoek in doelen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Doelen Grid */}
      <div className="space-y-4 mb-8">
        {relevanteDoelen.map((doel) => {
          const isSelected = geselecteerdeDoelen.some(d => d.id === doel.id)
          
          return (
            <div
              key={doel.id}
              className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                isSelected
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => toggleDoel(doel)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-mono rounded">
                      {doel.code}
                    </span>
                    <h3 className="font-semibold text-gray-900">{doel.titel}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-3">{doel.beschrijving}</p>
                  
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-700">Subdoelen:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {doel.subdoelen.map((subdoel: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {subdoel}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="ml-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    isSelected
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {isSelected && (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Selected Summary */}
      {geselecteerdeDoelen.length > 0 && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h4 className="font-medium text-green-900 mb-2">
            Geselecteerde doelen ({geselecteerdeDoelen.length})
          </h4>
          <div className="flex flex-wrap gap-2">
            {geselecteerdeDoelen.map((doel) => (
              <span
                key={doel.id}
                className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
              >
                {doel.code}: {doel.titel}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            {geselecteerdeDoelen.length} doelen geselecteerd
          </div>
          <button
            onClick={handleContinue}
            disabled={geselecteerdeDoelen.length === 0}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              geselecteerdeDoelen.length > 0
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Volgende: Instructiemodel kiezen →
          </button>
        </div>
      </div>
    </div>
  )
}