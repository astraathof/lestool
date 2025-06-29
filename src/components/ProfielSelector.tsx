'use client'

import { useState, useEffect } from 'react'
import { UserProfile } from './LesWizard'
import ProfielBeheer from './ProfielBeheer'

interface ProfielSelectorProps {
  onComplete: (profile: UserProfile) => void
  currentProfile: UserProfile | null
}

export default function ProfielSelector({ onComplete, currentProfile }: ProfielSelectorProps) {
  const [profiel, setProfiel] = useState<UserProfile>(currentProfile || {
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

  // Update profiel when currentProfile changes
  useEffect(() => {
    if (currentProfile) {
      console.log('📥 ProfielSelector: Received currentProfile:', currentProfile)
      setProfiel(currentProfile)
    }
  }, [currentProfile])

  const groepen = [
    { id: 'groep1', label: 'Groep 1', description: 'Kleuteronderwijs (4-5 jaar)' },
    { id: 'groep2', label: 'Groep 2', description: 'Kleuteronderwijs (5-6 jaar)' },
    { id: 'groep3', label: 'Groep 3', description: 'Onderbouw (6-7 jaar)' },
    { id: 'groep4', label: 'Groep 4', description: 'Onderbouw (7-8 jaar)' },
    { id: 'groep5', label: 'Groep 5', description: 'Middenbouw (8-9 jaar)' },
    { id: 'groep6', label: 'Groep 6', description: 'Middenbouw (9-10 jaar)' },
    { id: 'groep7', label: 'Groep 7', description: 'Bovenbouw (10-11 jaar)' },
    { id: 'groep8', label: 'Groep 8', description: 'Bovenbouw (11-12 jaar)' },
    { id: 'groep1-2', label: 'Groep 1-2', description: 'Kleuteronderwijs combi (4-6 jaar)' },
    { id: 'groep3-4', label: 'Groep 3-4', description: 'Onderbouw combi (6-8 jaar)' },
    { id: 'groep5-6', label: 'Groep 5-6', description: 'Middenbouw combi (8-10 jaar)' },
    { id: 'groep7-8', label: 'Groep 7-8', description: 'Bovenbouw combi (10-12 jaar)' },
    { id: 'combinatie', label: 'Andere combinatie', description: 'Meerdere groepen gecombineerd' }
  ]

  const vakgebieden = [
    { id: 'nederlands', label: 'Nederlands', icon: '📖' },
    { id: 'rekenen', label: 'Rekenen & Wiskunde', icon: '🔢' },
    { id: 'wereldoriëntatie', label: 'Wereldoriëntatie', icon: '🌍' },
    { id: 'engels', label: 'Engels', icon: '🇬🇧' },
    { id: 'bewegingsonderwijs', label: 'Bewegingsonderwijs', icon: '🏃' },
    { id: 'expressie', label: 'Expressie & Kunst', icon: '🎨' },
    { id: 'burgerschap', label: 'Burgerschap', icon: '🤝' },
    { id: 'ict', label: 'ICT & Mediawijsheid', icon: '💻' }
  ]

  const ervaringsniveaus = [
    { id: 'starter', label: 'Starter', description: '0-2 jaar ervaring' },
    { id: 'ervaren', label: 'Ervaren', description: '3-10 jaar ervaring' },
    { id: 'expert', label: 'Expert', description: '10+ jaar ervaring' },
    { id: 'schoolleider', label: 'Schoolleider', description: 'Leidinggevende rol' }
  ]

  const focusgebieden = [
    { id: 'differentiatie', label: 'Differentiatie', icon: '🎯' },
    { id: 'inclusief', label: 'Inclusief onderwijs', icon: '🤗' },
    { id: 'digitaal', label: 'Digitaal onderwijs', icon: '💻' },
    { id: 'sel', label: 'Sociaal-emotioneel leren', icon: '💝' },
    { id: 'onderzoekend', label: 'Onderzoekend leren', icon: '🔍' },
    { id: 'creatief', label: 'Creatief onderwijs', icon: '🎨' },
    { id: 'taalrijk', label: 'Taalrijk onderwijs', icon: '💬' },
    { id: 'rekenvaardig', label: 'Rekenvaardigheid', icon: '🧮' }
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

  console.log('🔄 ProfielSelector: Current state:', {
    profiel,
    isValid,
    showProfielBeheer
  })

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Stel je profiel in</h2>
            <p className="text-gray-600 text-lg">
              Help ons je de meest relevante content te tonen door je profiel in te stellen.
            </p>
          </div>
          
          <button
            onClick={() => setShowProfielBeheer(!showProfielBeheer)}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Profiel beheer</span>
          </button>
        </div>

        {/* Profiel Beheer Component */}
        {showProfielBeheer && (
          <div className="mb-8 bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
            <ProfielBeheer 
              onProfileSelect={handleProfileLoad}
              currentProfile={profiel.groep ? profiel : null}
            />
          </div>
        )}

        {/* Current Profile Indicator */}
        {profiel.groep && (
          <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <span className="font-semibold text-green-900 text-lg">
                  Huidig profiel: {groepen.find(g => g.id === profiel.groep)?.label}
                </span>
                <div className="text-green-700 text-sm">
                  {profiel.vakgebied.length} vakgebieden • {ervaringsniveaus.find(e => e.id === profiel.ervaring)?.label}
                  {profiel.focus.length > 0 && ` • ${profiel.focus.length} focusgebieden`}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-12">
        {/* Groep Selectie */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <label className="block text-xl font-bold text-gray-900 mb-6">
            Voor welke groep(en) maak je lessen? *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {groepen.map((groep) => (
              <button
                key={groep.id}
                onClick={() => handleGroepSelect(groep.id)}
                className={`p-5 rounded-xl border-2 text-left transition-all duration-200 hover:shadow-lg transform hover:scale-105 ${
                  profiel.groep === groep.id
                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-900 shadow-lg'
                    : 'border-gray-200 hover:border-blue-300 bg-white hover:bg-blue-50'
                }`}
              >
                <div className="font-semibold text-base mb-1">{groep.label}</div>
                <div className="text-sm text-gray-600">{groep.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Vakgebied Selectie */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <label className="block text-xl font-bold text-gray-900 mb-6">
            Welke vakgebieden geef je? * (meerdere mogelijk)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {vakgebieden.map((vak) => (
              <button
                key={vak.id}
                onClick={() => handleVakgebiedToggle(vak.id)}
                className={`p-5 rounded-xl border-2 text-left transition-all duration-200 hover:shadow-lg transform hover:scale-105 ${
                  profiel.vakgebied.includes(vak.id)
                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-900 shadow-lg'
                    : 'border-gray-200 hover:border-blue-300 bg-white hover:bg-blue-50'
                }`}
              >
                <div className="text-2xl mb-2">{vak.icon}</div>
                <div className="font-semibold text-sm">{vak.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Ervaring */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <label className="block text-xl font-bold text-gray-900 mb-6">
            Wat is je ervaringsniveau? *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ervaringsniveaus.map((niveau) => (
              <button
                key={niveau.id}
                onClick={() => handleErvaringSelect(niveau.id)}
                className={`p-5 rounded-xl border-2 text-left transition-all duration-200 hover:shadow-lg transform hover:scale-105 ${
                  profiel.ervaring === niveau.id
                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-900 shadow-lg'
                    : 'border-gray-200 hover:border-blue-300 bg-white hover:bg-blue-50'
                }`}
              >
                <div className="font-semibold text-base mb-1">{niveau.label}</div>
                <div className="text-sm text-gray-600">{niveau.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Focus gebieden */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <label className="block text-xl font-bold text-gray-900 mb-6">
            Waar ligt je focus op? (optioneel, meerdere mogelijk)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {focusgebieden.map((focus) => (
              <button
                key={focus.id}
                onClick={() => handleFocusToggle(focus.id)}
                className={`p-5 rounded-xl border-2 text-left transition-all duration-200 hover:shadow-lg transform hover:scale-105 ${
                  profiel.focus.includes(focus.id)
                    ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 text-green-900 shadow-lg'
                    : 'border-gray-200 hover:border-green-300 bg-white hover:bg-green-50'
                }`}
              >
                <div className="text-2xl mb-2">{focus.icon}</div>
                <div className="font-semibold text-sm">{focus.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="text-gray-600">
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
            className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
              isValid
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105'
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