'use client'

import { useState } from 'react'
import { UserProfile } from './LesWizard'
import { werkvormenDatabase, Werkvorm } from '../data/werkvormen'

interface WerkvormenProps {
  userProfile: UserProfile
  onComplete: (werkvormen: any[]) => void
  selectedWerkvormen: any[]
}

export default function Werkvormen({ userProfile, onComplete, selectedWerkvormen }: WerkvormenProps) {
  const [geselecteerdeWerkvormen, setGeselecteerdeWerkvormen] = useState<any[]>(selectedWerkvormen)
  const [filterCategorie, setFilterCategorie] = useState<string>('alle')
  const [filterVoorkeur, setFilterVoorkeur] = useState<boolean>(false)
  const [detailView, setDetailView] = useState<string | null>(null)

  const categorieën = [
    'alle',
    'Discussie',
    'Coöperatief',
    'Zelfstandig',
    'Dramatisering',
    'ICT',
    'Presentatie',
    'Gamification',
    'Energizer',
    'Beweging'
  ]

  // Filter werkvormen op basis van profiel en categorie
  const getRelevanteWerkvormen = () => {
    let gefilterd = werkvormenDatabase.filter(werkvorm => {
      const geschiktVoorGroep = werkvorm.geschiktVoor.includes(userProfile.groep)
      const geschiktVoorVak = werkvorm.vakgebieden.includes('alle vakken') || 
                             werkvorm.vakgebieden.some(vak => userProfile.vakgebied.includes(vak))
      return geschiktVoorGroep && geschiktVoorVak
    })

    if (filterCategorie !== 'alle') {
      gefilterd = gefilterd.filter(werkvorm => werkvorm.categorie === filterCategorie)
    }

    // Filter op voorkeuren als gewenst
    if (filterVoorkeur && userProfile.voorkeuren.werkvormen.length > 0) {
      gefilterd = gefilterd.filter(werkvorm => 
        userProfile.voorkeuren.werkvormen.some(voorkeur => 
          werkvorm.id.includes(voorkeur) || werkvorm.naam.toLowerCase().includes(voorkeur)
        )
      )
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

  const getEnergiekleur = (niveau: string) => {
    switch (niveau) {
      case 'Laag': return 'bg-blue-100 text-blue-800'
      case 'Gemiddeld': return 'bg-yellow-100 text-yellow-800'
      case 'Hoog': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const relevanteWerkvormen = getRelevanteWerkvormen()

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Selecteer werkvormen & energizers</h2>
        <p className="text-gray-600">
          Kies de werkvormen die passen bij je les en instructiemodel. 
          Je kunt meerdere werkvormen combineren voor een gevarieerde les. Energizers helpen om de energie en focus te behouden.
        </p>
      </div>

      {/* Voorkeur Filter */}
      {userProfile.voorkeuren.werkvormen.length > 0 && (
        <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-orange-900">Jouw voorkeuren</h3>
              <p className="text-orange-700 text-sm">
                Je hebt {userProfile.voorkeuren.werkvormen.length} werkvormen als voorkeur aangegeven
              </p>
            </div>
            <button
              onClick={() => setFilterVoorkeur(!filterVoorkeur)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                filterVoorkeur
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-orange-700 border border-orange-300'
              }`}
            >
              {filterVoorkeur ? 'Toon alle werkvormen' : 'Toon alleen voorkeuren'}
            </button>
          </div>
        </div>
      )}

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
              {categorie !== 'alle' && (
                <span className="ml-1 text-xs opacity-75">
                  ({werkvormenDatabase.filter(w => w.categorie === categorie && w.geschiktVoor.includes(userProfile.groep)).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Werkvormen Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {relevanteWerkvormen.map((werkvorm) => {
          const isSelected = geselecteerdeWerkvormen.some(w => w.id === werkvorm.id)
          const isVoorkeur = userProfile.voorkeuren.werkvormen.some(voorkeur => 
            werkvorm.id.includes(voorkeur) || werkvorm.naam.toLowerCase().includes(voorkeur)
          )
          
          return (
            <div
              key={werkvorm.id}
              className={`p-6 rounded-lg border-2 transition-all duration-200 hover:shadow-lg relative ${
                isSelected
                  ? 'border-blue-500 bg-blue-50'
                  : isVoorkeur
                  ? 'border-orange-300 bg-orange-50 hover:border-orange-400'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {/* Voorkeur indicator */}
              {isVoorkeur && (
                <div className="absolute top-2 right-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    ⭐ Voorkeur
                  </span>
                </div>
              )}

              <div className="text-center mb-4">
                <div className="text-3xl mb-2">{werkvorm.icon}</div>
                <h3 className="font-bold text-lg text-gray-900">{werkvorm.naam}</h3>
                <div className="flex justify-center space-x-2 mt-2">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {werkvorm.categorie}
                  </span>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${getEnergiekleur(werkvorm.energieniveau)}`}>
                    {werkvorm.energieniveau}
                  </span>
                </div>
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

              {/* Doel tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {werkvorm.doel.slice(0, 3).map((doel, index) => (
                    <span key={index} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                      {doel}
                    </span>
                  ))}
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
                        <div className="flex space-x-2 mt-2">
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                            {werkvorm.categorie}
                          </span>
                          <span className={`px-2 py-1 text-sm rounded ${getEnergiekleur(werkvorm.energieniveau)}`}>
                            Energie: {werkvorm.energieniveau}
                          </span>
                        </div>
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
                        <div className="flex justify-between">
                          <span className="text-gray-600">Energieniveau:</span>
                          <span className="font-medium">{werkvorm.energieniveau}</span>
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

                  {/* Doelen */}
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 mb-3">Doelen van deze werkvorm</h4>
                    <div className="flex flex-wrap gap-2">
                      {werkvorm.doel.map((doel, index) => (
                        <span key={index} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                          {doel}
                        </span>
                      ))}
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
                  <p className="text-green-700 text-xs">{werkvorm.tijdsduur} • {werkvorm.categorie}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Info over energizers */}
      <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="font-medium text-yellow-900 mb-2 flex items-center">
          <span className="text-lg mr-2">⚡</span>
          Energizers & Bewegingswerkvormen
        </h4>
        <p className="text-yellow-800 text-sm">
          Energizers zijn korte activiteiten (2-10 minuten) om de energie en focus van leerlingen te verhogen. 
          Bewegingswerkvormen combineren leren met fysieke activiteit. Beide helpen om de concentratie te behouden en maken lessen dynamischer.
        </p>
      </div>

      {/* Navigation */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            {geselecteerdeWerkvormen.length} werkvormen geselecteerd
            {filterVoorkeur && ` • Gefilterd op voorkeuren`}
            {filterCategorie !== 'alle' && ` • Categorie: ${filterCategorie}`}
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