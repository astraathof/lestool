'use client'

import { useState } from 'react'
import { UserProfile } from './LesWizard'
import { instructieModellen, InstructieModel } from '../data/instructieModellen'

interface InstructieModellenProps {
  userProfile: UserProfile
  onComplete: (model: any) => void
  selectedModel: any | null
}

export default function InstructieModellen({ userProfile, onComplete, selectedModel }: InstructieModellenProps) {
  const [geselecteerdModel, setGeselecteerdModel] = useState(selectedModel)
  const [detailView, setDetailView] = useState<string | null>(null)
  const [filterVoorkeur, setFilterVoorkeur] = useState<boolean>(false)

  // Filter modellen op basis van profiel
  const getRelevanteModellen = () => {
    let gefilterd = instructieModellen.filter(model => {
      const geschiktVoorGroep = model.geschiktVoor.includes(userProfile.groep)
      const geschiktVoorVak = model.vakgebieden.some(vak => userProfile.vakgebied.includes(vak))
      return geschiktVoorGroep && geschiktVoorVak
    })

    // Filter op voorkeuren als gewenst
    if (filterVoorkeur && userProfile.voorkeuren.instructiemodel.length > 0) {
      gefilterd = gefilterd.filter(model => 
        userProfile.voorkeuren.instructiemodel.includes(model.id)
      )
    }

    return gefilterd
  }

  const handleModelSelect = (model: InstructieModel) => {
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
          Deze modellen zijn gefilterd op basis van je profiel en voorkeuren.
        </p>
      </div>

      {/* Voorkeur Filter */}
      {userProfile.voorkeuren.instructiemodel.length > 0 && (
        <div className="mb-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-purple-900">Jouw voorkeuren</h3>
              <p className="text-purple-700 text-sm">
                Je hebt {userProfile.voorkeuren.instructiemodel.length} instructiemodellen als voorkeur aangegeven
              </p>
            </div>
            <button
              onClick={() => setFilterVoorkeur(!filterVoorkeur)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                filterVoorkeur
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-purple-700 border border-purple-300'
              }`}
            >
              {filterVoorkeur ? 'Toon alle modellen' : 'Toon alleen voorkeuren'}
            </button>
          </div>
        </div>
      )}

      {/* Modellen Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {relevanteModellen.map((model) => {
          const isVoorkeur = userProfile.voorkeuren.instructiemodel.includes(model.id)
          const isSelected = geselecteerdModel?.id === model.id
          
          return (
            <div
              key={model.id}
              className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-lg relative ${
                isSelected
                  ? 'border-blue-500 bg-blue-50'
                  : isVoorkeur
                  ? 'border-purple-300 bg-purple-50 hover:border-purple-400'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {/* Voorkeur indicator */}
              {isVoorkeur && (
                <div className="absolute top-2 right-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    ⭐ Voorkeur
                  </span>
                </div>
              )}

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

                <div>
                  <p className="text-xs font-medium text-gray-700 mb-1">Wetenschappelijke basis:</p>
                  <p className="text-xs text-gray-600">{model.wetenschappelijkeBasis}</p>
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <button
                  onClick={() => handleModelSelect(model)}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                    isSelected
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {isSelected ? '✓ Geselecteerd' : 'Selecteren'}
                </button>
                
                <button
                  onClick={() => setDetailView(model.id)}
                  className="w-full py-2 px-4 rounded-lg font-medium text-blue-600 hover:bg-blue-50 transition-all duration-200"
                >
                  Meer details →
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Detail View Modal */}
      {detailView && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
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
                        <p className="text-sm text-blue-600 mt-1">{model.wetenschappelijkeBasis}</p>
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
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
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
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-4">Lesfases</h4>
                    <div className="space-y-4">
                      {model.fases.map((fase, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="font-medium text-gray-900">{fase.naam}</h5>
                              {fase.tijdsduur && (
                                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                                  {fase.tijdsduur}
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm mb-2">{fase.beschrijving}</p>
                            {fase.activiteiten && (
                              <div className="flex flex-wrap gap-1">
                                {fase.activiteiten.map((activiteit, actIndex) => (
                                  <span key={actIndex} className="text-xs bg-white px-2 py-1 rounded border">
                                    {activiteit}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Tips */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Praktische tips</h4>
                      <div className="space-y-2">
                        {model.tips.map((tip, index) => (
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
                        {model.differentiatie.map((diff, index) => (
                          <div key={index} className="p-3 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-green-800 text-sm">🎯 {diff}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Materialen en Voorbeelden */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Benodigde materialen</h4>
                      <ul className="space-y-1">
                        {model.materialen.map((materiaal, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-purple-500 mr-2">•</span>
                            <span className="text-gray-700 text-sm">{materiaal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Voorbeelden</h4>
                      <ul className="space-y-1">
                        {model.voorbeelden.map((voorbeeld, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-indigo-500 mr-2">•</span>
                            <span className="text-gray-700 text-sm">{voorbeeld}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Implementatie Tips */}
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-3">Implementatie tips</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {model.implementatieTips.map((tip, index) => (
                        <div key={index} className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <p className="text-blue-800 text-sm">🚀 {tip}</p>
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
              <p className="text-blue-600 text-xs mt-1">{geselecteerdModel.wetenschappelijkeBasis}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            {geselecteerdModel ? 'Model geselecteerd' : 'Selecteer een instructiemodel'}
            {filterVoorkeur && ` • Gefilterd op voorkeuren`}
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