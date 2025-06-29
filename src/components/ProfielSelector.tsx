'use client'

import { useState, useEffect } from 'react'
import { UserProfile } from './LesWizard'
import ProfielBeheer from './ProfielBeheer'

interface ProfielSelectorProps {
  onComplete: (profile: UserProfile) => void
  currentProfile: UserProfile | null
}

export default function ProfielSelector({ onComplete, currentProfile }: ProfielSelectorProps) {
  const [profiel, setProfiel] = useState<UserProfile>({
    groep: '',
    vakgebied: [],
    ervaring: '',
    focus: [],
    voorkeuren: {
      instructiemodel: [],
      werkvormen: [],
      selFocus: []
    }
  })

  const [showProfielBeheer, setShowProfielBeheer] = useState(false)
  const [showCombiGroepen, setShowCombiGroepen] = useState(false)

  // Update profiel when currentProfile changes - FIXED
  useEffect(() => {
    if (currentProfile) {
      console.log('📥 ProfielSelector: Received currentProfile:', currentProfile)
      setProfiel({
        groep: currentProfile.groep || '',
        vakgebied: currentProfile.vakgebied || [],
        ervaring: currentProfile.ervaring || '',
        focus: currentProfile.focus || [],
        voorkeuren: currentProfile.voorkeuren || {
          instructiemodel: [],
          werkvormen: [],
          selFocus: []
        }
      })
    }
  }, [currentProfile])

  const individueleGroepen = [
    { id: 'groep1', label: 'Groep 1', description: '4-5 jaar', kleur: 'bg-red-100 text-red-800' },
    { id: 'groep2', label: 'Groep 2', description: '5-6 jaar', kleur: 'bg-red-100 text-red-800' },
    { id: 'groep3', label: 'Groep 3', description: '6-7 jaar', kleur: 'bg-orange-100 text-orange-800' },
    { id: 'groep4', label: 'Groep 4', description: '7-8 jaar', kleur: 'bg-orange-100 text-orange-800' },
    { id: 'groep5', label: 'Groep 5', description: '8-9 jaar', kleur: 'bg-yellow-100 text-yellow-800' },
    { id: 'groep6', label: 'Groep 6', description: '9-10 jaar', kleur: 'bg-yellow-100 text-yellow-800' },
    { id: 'groep7', label: 'Groep 7', description: '10-11 jaar', kleur: 'bg-green-100 text-green-800' },
    { id: 'groep8', label: 'Groep 8', description: '11-12 jaar', kleur: 'bg-green-100 text-green-800' }
  ]

  const combinatieGroepen = [
    { id: 'groep1-2', label: 'Combi 1-2', description: 'Kleuteronderwijs (4-6 jaar)', kleur: 'bg-purple-100 text-purple-800' },
    { id: 'groep2-3', label: 'Combi 2-3', description: 'Overgang kleuters-onderbouw (5-7 jaar)', kleur: 'bg-purple-100 text-purple-800' },
    { id: 'groep3-4', label: 'Combi 3-4', description: 'Onderbouw (6-8 jaar)', kleur: 'bg-purple-100 text-purple-800' },
    { id: 'groep4-5', label: 'Combi 4-5', description: 'Overgang onder-midden (7-9 jaar)', kleur: 'bg-purple-100 text-purple-800' },
    { id: 'groep5-6', label: 'Combi 5-6', description: 'Middenbouw (8-10 jaar)', kleur: 'bg-purple-100 text-purple-800' },
    { id: 'groep6-7', label: 'Combi 6-7', description: 'Overgang midden-boven (9-11 jaar)', kleur: 'bg-purple-100 text-purple-800' },
    { id: 'groep7-8', label: 'Combi 7-8', description: 'Bovenbouw (10-12 jaar)', kleur: 'bg-purple-100 text-purple-800' },
    { id: 'groep1-3', label: 'Combi 1-3', description: 'Kleuters + onderbouw (4-7 jaar)', kleur: 'bg-indigo-100 text-indigo-800' },
    { id: 'groep4-8', label: 'Combi 4-8', description: 'Midden + bovenbouw (7-12 jaar)', kleur: 'bg-indigo-100 text-indigo-800' },
    { id: 'groep1-8', label: 'Combi 1-8', description: 'Alle groepen (4-12 jaar)', kleur: 'bg-gray-100 text-gray-800' }
  ]

  const vakgebieden = [
    { id: 'nederlands', label: 'Nederlands', icon: '📖' },
    { id: 'rekenen', label: 'Rekenen', icon: '🔢' },
    { id: 'wereldoriëntatie', label: 'Wereldoriëntatie', icon: '🌍' },
    { id: 'engels', label: 'Engels', icon: '🇬🇧' },
    { id: 'bewegingsonderwijs', label: 'Beweging', icon: '🏃' },
    { id: 'expressie', label: 'Expressie', icon: '🎨' },
    { id: 'burgerschap', label: 'Burgerschap', icon: '🤝' },
    { id: 'ict', label: 'ICT', icon: '💻' }
  ]

  const ervaringsniveaus = [
    { id: 'starter', label: 'Starter', description: '0-2 jaar', icon: '🌱' },
    { id: 'ervaren', label: 'Ervaren', description: '3-10 jaar', icon: '🌳' },
    { id: 'expert', label: 'Expert', description: '10+ jaar', icon: '🏆' },
    { id: 'schoolleider', label: 'Schoolleider', description: 'Leidinggevend', icon: '👑' }
  ]

  const focusgebieden = [
    { id: 'differentiatie', label: 'Differentiatie', icon: '🎯' },
    { id: 'inclusief', label: 'Inclusief onderwijs', icon: '🤗' },
    { id: 'digitaal', label: 'Digitaal onderwijs', icon: '💻' },
    { id: 'sel', label: 'SEL', icon: '💝' },
    { id: 'onderzoekend', label: 'Onderzoekend leren', icon: '🔍' },
    { id: 'creatief', label: 'Creatief onderwijs', icon: '🎨' },
    { id: 'taalrijk', label: 'Taalrijk onderwijs', icon: '💬' },
    { id: 'rekenvaardig', label: 'Rekenvaardigheid', icon: '🧮' },
    { id: 'beweging', label: 'Beweging', icon: '🏃' },
    { id: 'duurzaamheid', label: 'Duurzaamheid', icon: '🌱' }
  ]

  const handleProfileLoad = (loadedProfile: UserProfile) => {
    console.log('📥 ProfielSelector: Loading profile from ProfielBeheer:', loadedProfile)
    setProfiel(loadedProfile)
    setShowProfielBeheer(false)
  }

  const handleGroepSelect = (groepId: string) => {
    console.log('🎯 ProfielSelector: Groep selected:', groepId)
    setProfiel(prev => {
      const updated = { ...prev, groep: groepId }
      console.log('📝 ProfielSelector: Updated profiel after groep select:', updated)
      return updated
    })
  }

  const handleVakgebiedToggle = (vakId: string) => {
    console.log('📚 ProfielSelector: Vakgebied toggled:', vakId)
    setProfiel(prev => {
      const updated = {
        ...prev,
        vakgebied: prev.vakgebied.includes(vakId)
          ? prev.vakgebied.filter(v => v !== vakId)
          : [...prev.vakgebied, vakId]
      }
      console.log('📝 ProfielSelector: Updated profiel after vakgebied toggle:', updated)
      return updated
    })
  }

  const handleErvaringSelect = (ervaringId: string) => {
    console.log('💼 ProfielSelector: Ervaring selected:', ervaringId)
    setProfiel(prev => {
      const updated = { ...prev, ervaring: ervaringId }
      console.log('📝 ProfielSelector: Updated profiel after ervaring select:', updated)
      return updated
    })
  }

  const handleFocusToggle = (focusId: string) => {
    console.log('🎯 ProfielSelector: Focus toggled:', focusId)
    setProfiel(prev => {
      const updated = {
        ...prev,
        focus: prev.focus.includes(focusId)
          ? prev.focus.filter(f => f !== focusId)
          : [...prev.focus, focusId]
      }
      console.log('📝 ProfielSelector: Updated profiel after focus toggle:', updated)
      return updated
    })
  }

  // NEW: Remove function for easy deselection
  const handleRemoveVakgebied = (vakId: string) => {
    setProfiel(prev => ({
      ...prev,
      vakgebied: prev.vakgebied.filter(v => v !== vakId)
    }))
  }

  const handleRemoveFocus = (focusId: string) => {
    setProfiel(prev => ({
      ...prev,
      focus: prev.focus.filter(f => f !== focusId)
    }))
  }

  const handleSubmit = () => {
    if (profiel.groep && profiel.vakgebied.length > 0 && profiel.ervaring) {
      console.log('✅ ProfielSelector: Submitting complete profile:', profiel)
      onComplete(profiel)
    } else {
      console.log('❌ ProfielSelector: Profile incomplete:', {
        groep: profiel.groep,
        vakgebiedCount: profiel.vakgebied.length,
        ervaring: profiel.ervaring
      })
    }
  }

  const isValid = profiel.groep && profiel.vakgebied.length > 0 && profiel.ervaring

  const getVakgebiedLabels = () => {
    return profiel.vakgebied.map(id => vakgebieden.find(v => v.id === id)?.label).join(', ')
  }

  const getFocusLabels = () => {
    return profiel.focus.map(id => focusgebieden.find(f => f.id === id)?.label).join(', ')
  }

  return (
    <div className="p-6">
      {/* Header - Compact */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Stel je profiel in</h2>
            <p className="text-gray-600">
              Help ons je de meest relevante content te tonen.
            </p>
          </div>
          
          <button
            onClick={() => setShowProfielBeheer(!showProfielBeheer)}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Profiel beheer</span>
          </button>
        </div>

        {/* Current Profile Summary - Enhanced with easy removal */}
        {profiel.groep && (
          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-green-900 mb-2">
                  {[...individueleGroepen, ...combinatieGroepen].find(g => g.id === profiel.groep)?.label} • 
                  {ervaringsniveaus.find(e => e.id === profiel.ervaring)?.label}
                </div>
                
                {/* Selected Vakgebieden with remove buttons */}
                {profiel.vakgebied.length > 0 && (
                  <div className="mb-2">
                    <span className="text-green-700 text-sm font-medium">Vakken: </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {profiel.vakgebied.map(vakId => {
                        const vak = vakgebieden.find(v => v.id === vakId)
                        return (
                          <span
                            key={vakId}
                            className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                          >
                            {vak?.icon} {vak?.label}
                            <button
                              onClick={() => handleRemoveVakgebied(vakId)}
                              className="ml-1 text-green-600 hover:text-green-800"
                              title="Verwijder vak"
                            >
                              ×
                            </button>
                          </span>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Selected Focus with remove buttons */}
                {profiel.focus.length > 0 && (
                  <div>
                    <span className="text-green-700 text-sm font-medium">Focus: </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {profiel.focus.map(focusId => {
                        const focus = focusgebieden.find(f => f.id === focusId)
                        return (
                          <span
                            key={focusId}
                            className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {focus?.icon} {focus?.label}
                            <button
                              onClick={() => handleRemoveFocus(focusId)}
                              className="ml-1 text-blue-600 hover:text-blue-800"
                              title="Verwijder focus"
                            >
                              ×
                            </button>
                          </span>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Profiel Beheer Component */}
        {showProfielBeheer && (
          <div className="mt-4 bg-white rounded-xl shadow-lg p-4 border border-purple-100">
            <ProfielBeheer 
              onProfileSelect={handleProfileLoad}
              currentProfile={profiel.groep ? profiel : null}
            />
          </div>
        )}
      </div>

      <div className="space-y-8">
        {/* Groep Selectie - Compact */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <label className="block text-lg font-bold text-gray-900 mb-4">
            Voor welke groep(en) maak je lessen? *
          </label>
          
          {/* Individuele groepen - Compact grid */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Individuele groepen</h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
              {individueleGroepen.map((groep) => (
                <button
                  key={groep.id}
                  onClick={() => handleGroepSelect(groep.id)}
                  className={`p-3 rounded-lg border-2 text-center transition-all duration-200 hover:shadow-md ${
                    profiel.groep === groep.id
                      ? 'border-blue-500 bg-blue-50 text-blue-900 shadow-md'
                      : 'border-gray-200 hover:border-blue-300 bg-white hover:bg-blue-50'
                  }`}
                >
                  <div className="font-bold text-sm">{groep.label}</div>
                  <div className="text-xs text-gray-600">{groep.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Combinatiegroepen - Collapsible */}
          <div>
            <button
              onClick={() => setShowCombiGroepen(!showCombiGroepen)}
              className="flex items-center space-x-2 text-sm font-semibold text-gray-700 hover:text-blue-600 mb-3"
            >
              <svg className={`w-4 h-4 transition-transform ${showCombiGroepen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Combinatiegroepen ({combinatieGroepen.length})</span>
            </button>
            
            {showCombiGroepen && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {combinatieGroepen.map((groep) => (
                  <button
                    key={groep.id}
                    onClick={() => handleGroepSelect(groep.id)}
                    className={`p-3 rounded-lg border-2 text-left transition-all duration-200 hover:shadow-md ${
                      profiel.groep === groep.id
                        ? 'border-blue-500 bg-blue-50 text-blue-900 shadow-md'
                        : 'border-gray-200 hover:border-blue-300 bg-white hover:bg-blue-50'
                    }`}
                  >
                    <div className="font-semibold text-sm">{groep.label}</div>
                    <div className="text-xs text-gray-600">{groep.description}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Vakgebied Selectie - Compact */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <label className="block text-lg font-bold text-gray-900 mb-4">
            Welke vakgebieden geef je? * (meerdere mogelijk)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {vakgebieden.map((vak) => (
              <button
                key={vak.id}
                onClick={() => handleVakgebiedToggle(vak.id)}
                className={`p-4 rounded-lg border-2 text-center transition-all duration-200 hover:shadow-md ${
                  profiel.vakgebied.includes(vak.id)
                    ? 'border-blue-500 bg-blue-50 text-blue-900 shadow-md'
                    : 'border-gray-200 hover:border-blue-300 bg-white hover:bg-blue-50'
                }`}
              >
                <div className="text-2xl mb-2">{vak.icon}</div>
                <div className="font-semibold text-sm">{vak.label}</div>
                {profiel.vakgebied.includes(vak.id) && (
                  <div className="text-xs text-blue-600 mt-1">✓ Geselecteerd</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Ervaring - Compact */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <label className="block text-lg font-bold text-gray-900 mb-4">
            Wat is je ervaringsniveau? *
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {ervaringsniveaus.map((niveau) => (
              <button
                key={niveau.id}
                onClick={() => handleErvaringSelect(niveau.id)}
                className={`p-4 rounded-lg border-2 text-center transition-all duration-200 hover:shadow-md ${
                  profiel.ervaring === niveau.id
                    ? 'border-blue-500 bg-blue-50 text-blue-900 shadow-md'
                    : 'border-gray-200 hover:border-blue-300 bg-white hover:bg-blue-50'
                }`}
              >
                <div className="text-2xl mb-2">{niveau.icon}</div>
                <div className="font-semibold text-sm">{niveau.label}</div>
                <div className="text-xs text-gray-600">{niveau.description}</div>
                {profiel.ervaring === niveau.id && (
                  <div className="text-xs text-blue-600 mt-1">✓ Geselecteerd</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Focus gebieden - Compact */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <label className="block text-lg font-bold text-gray-900 mb-4">
            Waar ligt je focus op? (optioneel, meerdere mogelijk)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {focusgebieden.map((focus) => (
              <button
                key={focus.id}
                onClick={() => handleFocusToggle(focus.id)}
                className={`p-3 rounded-lg border-2 text-center transition-all duration-200 hover:shadow-md ${
                  profiel.focus.includes(focus.id)
                    ? 'border-green-500 bg-green-50 text-green-900 shadow-md'
                    : 'border-gray-200 hover:border-green-300 bg-white hover:bg-green-50'
                }`}
              >
                <div className="text-xl mb-1">{focus.icon}</div>
                <div className="font-semibold text-xs">{focus.label}</div>
                {profiel.focus.includes(focus.id) && (
                  <div className="text-xs text-green-600 mt-1">✓ Geselecteerd</div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Submit Button - Compact */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <span className="text-red-500">*</span> Verplichte velden
            {isValid && (
              <div className="text-green-600 font-medium mt-1">
                ✓ Profiel compleet - je kunt verder!
              </div>
            )}
          </div>
          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              isValid
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Volgende: SLO-doelen selecteren →
          </button>
        </div>
      </div>
    </div>
  )
}