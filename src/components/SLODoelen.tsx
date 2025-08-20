'use client'

import { useState } from 'react'
import { UserProfile } from './LesWizard'
import { sloKerndoelen, getVoorafgaandeDoelen, getVervolgendeDoelen, SLODoel } from '../data/sloKerndoelen'

interface SLODoelenProps {
  userProfile: UserProfile
  onComplete: (doelen: any[]) => void
  selectedDoelen: any[]
}

export default function SLODoelen({ userProfile, onComplete, selectedDoelen }: SLODoelenProps) {
  const [geselecteerdeDoelen, setGeselecteerdeDoelen] = useState<any[]>(selectedDoelen)
  const [activeVakgebied, setActiveVakgebied] = useState(userProfile.vakgebied[0] || 'nederlands')
  const [searchTerm, setSearchTerm] = useState('')
  const [showLeerlijn, setShowLeerlijn] = useState<string | null>(null)
  const [filterGroep, setFilterGroep] = useState<string>('huidige')

  // Haal relevante doelen op basis van profiel en filters
  const getRelevanteDoelen = () => {
    const vakDoelen = sloKerndoelen[activeVakgebied as keyof typeof sloKerndoelen]
    if (!vakDoelen) return []
    
    let doelen: SLODoel[] = []
    
    if (filterGroep === 'huidige') {
      doelen = vakDoelen[userProfile.groep as keyof typeof vakDoelen] || []
    } else if (filterGroep === 'alle') {
      // Alle groepen voor dit vakgebied
      Object.values(vakDoelen).forEach(groepDoelen => {
        doelen.push(...groepDoelen)
      })
    } else {
      // Specifieke groep
      doelen = vakDoelen[filterGroep as keyof typeof vakDoelen] || []
    }
    
    if (searchTerm) {
      return doelen.filter(doel => 
        doel.titel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doel.beschrijving.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doel.subdoelen.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase())) ||
        doel.kernwoorden.some(kw => kw.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }
    
    return doelen
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

  const getGroepLabel = (groep: string) => {
    const labels: Record<string, string> = {
      'groep1': 'Groep 1',
      'groep2': 'Groep 2',
      'groep3': 'Groep 3',
      'groep4': 'Groep 4',
      'groep5': 'Groep 5',
      'groep6': 'Groep 6',
      'groep7': 'Groep 7',
      'groep8': 'Groep 8',
      'groep1-2': 'Groep 1-2',
      'groep3-4': 'Groep 3-4', 
      'groep5-6': 'Groep 5-6',
      'groep7-8': 'Groep 7-8',
      'combinatie': 'Combinatiegroep'
    }
    return labels[groep] || groep
  }

  const getVakgebiedLabel = (vak: string) => {
    const labels: Record<string, string> = {
      'nederlands': 'Nederlands',
      'rekenen': 'Rekenen & Wiskunde',
      'burgerschap': 'Burgerschap',
      'wereldoriëntatie': 'Wereldoriëntatie',
      'engels': 'Engels',
      'bewegingsonderwijs': 'Bewegingsonderwijs',
      'expressie': 'Expressie & Kunst',
      'ict': 'ICT & Mediawijsheid'
    }
    return labels[vak] || vak
  }

  const relevanteDoelen = getRelevanteDoelen()

  // Beschikbare groepen voor het actieve vakgebied
  const beschikbareGroepen = Object.keys(sloKerndoelen[activeVakgebied as keyof typeof sloKerndoelen] || {})

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Selecteer SLO-doelen</h2>
        <p className="text-gray-600">
          Kies de leerdoelen die passen bij je les. Bekijk ook de doorlopende leerlijn om te zien wat er voor en na komt.
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
              {getVakgebiedLabel(vak)}
            </button>
          ))}
        </div>
      </div>

      {/* Groep Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Bekijk doelen van:
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilterGroep('huidige')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              filterGroep === 'huidige'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Mijn groep ({getGroepLabel(userProfile.groep)})
          </button>
          
          {beschikbareGroepen.map((groep) => (
            groep !== userProfile.groep && (
              <button
                key={groep}
                onClick={() => setFilterGroep(groep)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  filterGroep === groep
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {getGroepLabel(groep)}
              </button>
            )
          ))}
          
          <button
            onClick={() => setFilterGroep('alle')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              filterGroep === 'alle'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Alle groepen
          </button>
        </div>
      </div>

      {/* Search - FIXED: Added proper event handling */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Zoek in doelen, beschrijvingen of kernwoorden..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        {searchTerm && (
          <p className="mt-2 text-sm text-gray-600">
            {relevanteDoelen.length} resultaten gevonden voor "{searchTerm}"
          </p>
        )}
      </div>

      {/* Doelen Grid */}
      <div className="space-y-4 mb-8">
        {relevanteDoelen.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-gray-400 text-4xl mb-4">🔍</div>
            <p className="text-gray-600">
              {searchTerm 
                ? `Geen doelen gevonden voor "${searchTerm}"`
                : 'Geen doelen beschikbaar voor deze selectie'
              }
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="mt-2 text-blue-600 hover:text-blue-800 underline"
              >
                Wis zoekopdracht
              </button>
            )}
          </div>
        ) : (
          relevanteDoelen.map((doel) => {
            const isSelected = geselecteerdeDoelen.some(d => d.id === doel.id)
            const isHuidigeGroep = doel.groep === userProfile.groep
            
            return (
              <div
                key={doel.id}
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50'
                    : isHuidigeGroep
                    ? 'border-green-200 hover:border-green-400 bg-green-50'
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
                      <span className={`px-2 py-1 text-xs rounded ${
                        isHuidigeGroep 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {getGroepLabel(doel.groep)}
                      </span>
                      <h3 className="font-semibold text-lg text-gray-900">{doel.titel}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-3">{doel.beschrijving}</p>
                    
                    {/* Jaar verwachting en niveaus */}
                    {(doel.jaarVerwachting || doel.minimumNiveau || doel.uitbreidingNiveau) && (
                      <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        {doel.jaarVerwachting && (
                          <div className="text-sm text-blue-800 mb-2">
                            <strong>📅 Jaaruitkomst:</strong> {doel.jaarVerwachting}
                          </div>
                        )}
                        {doel.minimumNiveau && (
                          <div className="text-sm text-green-700 mb-1">
                            <strong>✅ Minimum:</strong> {doel.minimumNiveau}
                          </div>
                        )}
                        {doel.uitbreidingNiveau && (
                          <div className="text-sm text-purple-700">
                            <strong>🚀 Uitbreiding:</strong> {doel.uitbreidingNiveau}
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Kernwoorden */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {doel.kernwoorden.map((kernwoord, index) => (
                          <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">
                            {kernwoord}
                          </span>
                        ))}
                      </div>
                    </div>
                    
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

                    {/* Doorlopende leerlijn knop */}
                    <div className="mt-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setShowLeerlijn(showLeerlijn === doel.id ? null : doel.id)
                        }}
                        className="text-sm text-purple-600 hover:text-purple-800 font-medium flex items-center space-x-1 bg-purple-50 px-3 py-2 rounded-lg hover:bg-purple-100 transition-all duration-200"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>📈 Doorlopende leerlijn</span>
                      </button>
                    </div>

                    {/* Doorlopende leerlijn details */}
                    {showLeerlijn === doel.id && (
                      <div className="mt-4 p-6 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg">
                        <h4 className="font-bold text-purple-900 mb-4 flex items-center">
                          <span className="text-lg mr-2">📈</span>
                          Doorlopende leerlijn voor {doel.titel}
                        </h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {/* Voorafgaand */}
                          <div>
                            <h5 className="text-sm font-bold text-orange-800 mb-3 flex items-center">
                              <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                              📚 Vorig jaar behaald
                            </h5>
                            {getVoorafgaandeDoelen(doel.id).length > 0 ? (
                              <div className="space-y-2">
                                {getVoorafgaandeDoelen(doel.id).map((voorDoel) => (
                                  <div key={voorDoel.id} className="p-3 bg-white border border-orange-300 rounded-lg shadow-sm">
                                    <div className="font-bold text-orange-900 text-sm">{voorDoel.code}</div>
                                    <div className="font-medium text-orange-800 text-xs mb-1">{voorDoel.titel}</div>
                                    <div className="text-orange-700 text-xs">{getGroepLabel(voorDoel.groep)}</div>
                                    {voorDoel.jaarVerwachting && (
                                      <div className="text-orange-600 text-xs mt-1 italic">
                                        ✅ {voorDoel.jaarVerwachting}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="p-3 bg-white border border-orange-200 rounded-lg">
                                <p className="text-orange-600 text-xs">🌟 Dit is een startdoel - geen voorkennis vereist</p>
                              </div>
                            )}
                          </div>

                          {/* Huidig */}
                          <div>
                            <h5 className="text-sm font-bold text-green-800 mb-3 flex items-center">
                              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                              🎯 Dit jaar leren
                            </h5>
                            <div className="p-4 bg-white border-2 border-green-400 rounded-lg shadow-md">
                              <div className="font-bold text-green-900 text-sm">{doel.code}</div>
                              <div className="font-bold text-green-800 text-sm mb-2">{doel.titel}</div>
                              <div className="text-green-700 text-xs mb-2">{getGroepLabel(doel.groep)}</div>
                              {doel.jaarVerwachting && (
                                <div className="text-green-600 text-xs bg-green-50 p-2 rounded border border-green-200">
                                  <strong>🎯 Doel dit jaar:</strong> {doel.jaarVerwachting}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Vervolgend */}
                          <div>
                            <h5 className="text-sm font-bold text-blue-800 mb-3 flex items-center">
                              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                              🚀 Volgend jaar
                            </h5>
                            {getVervolgendeDoelen(doel.id).length > 0 ? (
                              <div className="space-y-2">
                                {getVervolgendeDoelen(doel.id).map((volgDoel) => (
                                  <div key={volgDoel.id} className="p-3 bg-white border border-blue-300 rounded-lg shadow-sm">
                                    <div className="font-bold text-blue-900 text-sm">{volgDoel.code}</div>
                                    <div className="font-medium text-blue-800 text-xs mb-1">{volgDoel.titel}</div>
                                    <div className="text-blue-700 text-xs">{getGroepLabel(volgDoel.groep)}</div>
                                    {volgDoel.jaarVerwachting && (
                                      <div className="text-blue-600 text-xs mt-1 italic">
                                        🎯 {volgDoel.jaarVerwachting}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="p-3 bg-white border border-blue-200 rounded-lg">
                                <p className="text-blue-600 text-xs">🏆 Dit is een einddoel - leerlingen zijn klaar voor vervolgonderwijs</p>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Praktische tips voor doorlopende leerlijn */}
                        <div className="mt-6 p-4 bg-white border border-purple-200 rounded-lg">
                          <h6 className="font-bold text-purple-900 text-sm mb-2">💡 Praktische tips voor leerkrachten:</h6>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div>
                              <p className="text-purple-800"><strong>🔍 Voorkennis checken:</strong></p>
                              <p className="text-purple-700">Toets of leerlingen de voorafgaande doelen beheersen voordat je start</p>
                            </div>
                            <div>
                              <p className="text-purple-800"><strong>🎯 Vooruitblikken:</strong></p>
                              <p className="text-purple-700">Laat leerlingen weten waar ze naartoe werken en waarom dit belangrijk is</p>
                            </div>
                            <div>
                              <p className="text-purple-800"><strong>📊 Differentiëren:</strong></p>
                              <p className="text-purple-700">Gebruik minimum en uitbreidingsniveaus voor maatwerk</p>
                            </div>
                            <div>
                              <p className="text-purple-800"><strong>🔄 Herhaling:</strong></p>
                              <p className="text-purple-700">Herhaal voorafgaande doelen regelmatig om basis te verstevigen</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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
          })
        )}
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

      {/* Verbeterde info box over doorlopende leerlijn */}
      <div className="mb-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg">
        <h4 className="font-bold text-blue-900 mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          📈 Doorlopende leerlijn - Waarom belangrijk?
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-blue-800 mb-2">
              <strong>🔍 Voorkennis checken:</strong> Zie wat leerlingen vorig jaar hadden moeten leren. 
              Test dit voordat je start met nieuwe stof.
            </p>
            <p className="text-blue-800">
              <strong>🎯 Vooruitblikken:</strong> Toon leerlingen waar ze naartoe werken. 
              Dit verhoogt motivatie en begrip.
            </p>
          </div>
          <div>
            <p className="text-purple-800 mb-2">
              <strong>📊 Differentiëren:</strong> Gebruik minimum/uitbreidingsniveaus voor maatwerk. 
              Niet alle leerlingen hoeven hetzelfde niveau te bereiken.
            </p>
            <p className="text-purple-800">
              <strong>🔄 Herhaling:</strong> Bouw regelmatig herhaling van eerdere doelen in je lessen. 
              Leren is cumulatief!
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            {geselecteerdeDoelen.length} doelen geselecteerd
            {filterGroep !== 'huidige' && (
              <span className="ml-2 text-orange-600">
                (Let op: je bekijkt doelen van {filterGroep === 'alle' ? 'alle groepen' : getGroepLabel(filterGroep)})
              </span>
            )}
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