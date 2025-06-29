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

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Zoek in doelen, beschrijvingen of kernwoorden..."
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
                    <h3 className="font-semibold text-gray-900">{doel.titel}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-3">{doel.beschrijving}</p>
                  
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
                      className="text-sm text-purple-600 hover:text-purple-800 font-medium flex items-center space-x-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Bekijk doorlopende leerlijn</span>
                    </button>
                  </div>

                  {/* Doorlopende leerlijn details */}
                  {showLeerlijn === doel.id && (
                    <div className="mt-4 p-4 bg-white border border-purple-200 rounded-lg">
                      <h4 className="font-medium text-purple-900 mb-3">Doorlopende leerlijn</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Voorafgaand */}
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                            <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                            Eerder geleerd
                          </h5>
                          {getVoorafgaandeDoelen(doel.id).length > 0 ? (
                            <div className="space-y-2">
                              {getVoorafgaandeDoelen(doel.id).map((voorDoel) => (
                                <div key={voorDoel.id} className="p-2 bg-orange-50 border border-orange-200 rounded text-xs">
                                  <div className="font-medium text-orange-900">{voorDoel.code}: {voorDoel.titel}</div>
                                  <div className="text-orange-700">{getGroepLabel(voorDoel.groep)}</div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-gray-500 text-xs">Geen voorafgaande doelen</p>
                          )}
                        </div>

                        {/* Huidig */}
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                            Nu aan de beurt
                          </h5>
                          <div className="p-2 bg-green-50 border border-green-200 rounded text-xs">
                            <div className="font-medium text-green-900">{doel.code}: {doel.titel}</div>
                            <div className="text-green-700">{getGroepLabel(doel.groep)}</div>
                          </div>
                        </div>

                        {/* Vervolgend */}
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                            Komt later
                          </h5>
                          {getVervolgendeDoelen(doel.id).length > 0 ? (
                            <div className="space-y-2">
                              {getVervolgendeDoelen(doel.id).map((volgDoel) => (
                                <div key={volgDoel.id} className="p-2 bg-blue-50 border border-blue-200 rounded text-xs">
                                  <div className="font-medium text-blue-900">{volgDoel.code}: {volgDoel.titel}</div>
                                  <div className="text-blue-700">{getGroepLabel(volgDoel.groep)}</div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-gray-500 text-xs">Geen vervolg doelen</p>
                          )}
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

      {/* Info box over doorlopende leerlijn */}
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h4 className="font-medium text-blue-900 mb-2 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Doorlopende leerlijn
        </h4>
        <p className="text-blue-800 text-sm">
          Klik op "Bekijk doorlopende leerlijn" bij een doel om te zien wat leerlingen eerder hebben geleerd en wat er later komt. 
          Dit helpt je om aan te sluiten bij voorkennis en vooruit te blikken naar vervolgstappen.
        </p>
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