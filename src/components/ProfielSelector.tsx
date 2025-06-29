'use client'

import { useState, useEffect } from 'react'
import { UserProfile } from './LesWizard'
import ProfielBeheer from './ProfielBeheer'

interface ProfielSelectorProps {
  onComplete: (profile: UserProfile) => void
  currentProfile: UserProfile | null
}

export default function ProfielSelector({ onComplete, currentProfile }: ProfielSelectorProps) {
  // Initialize with empty profile structure
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
  const [isAnimating, setIsAnimating] = useState(false)

  // CRITICAL: Initialize profile from currentProfile prop
  useEffect(() => {
    console.log('🔄 ProfielSelector: currentProfile prop changed:', currentProfile)
    if (currentProfile) {
      console.log('✅ ProfielSelector: Setting profile from prop')
      setProfiel(currentProfile)
    } else {
      console.log('⚠️ ProfielSelector: No currentProfile, keeping empty state')
    }
  }, [currentProfile])

  // Debug logging for profiel state changes
  useEffect(() => {
    console.log('🔍 ProfielSelector: profiel state changed:', {
      groep: profiel.groep,
      vakgebied: profiel.vakgebied,
      ervaring: profiel.ervaring,
      focus: profiel.focus.length
    })
  }, [profiel])

  const groepen = [
    { id: 'groep1-2', label: 'Groep 1-2', description: 'Kleuteronderwijs (4-6 jaar)', icon: '🧸', color: 'from-pink-500 to-rose-500' },
    { id: 'groep3-4', label: 'Groep 3-4', description: 'Onderbouw (6-8 jaar)', icon: '📚', color: 'from-blue-500 to-cyan-500' },
    { id: 'groep5-6', label: 'Groep 5-6', description: 'Middenbouw (8-10 jaar)', icon: '🎓', color: 'from-green-500 to-emerald-500' },
    { id: 'groep7-8', label: 'Groep 7-8', description: 'Bovenbouw (10-12 jaar)', icon: '🏆', color: 'from-purple-500 to-violet-500' },
    { id: 'combinatie', label: 'Combinatiegroep', description: 'Meerdere groepen', icon: '🌈', color: 'from-orange-500 to-amber-500' }
  ]

  const vakgebieden = [
    { id: 'nederlands', label: 'Nederlands', icon: '📖', color: 'bg-red-100 text-red-700 border-red-200' },
    { id: 'rekenen', label: 'Rekenen & Wiskunde', icon: '🔢', color: 'bg-blue-100 text-blue-700 border-blue-200' },
    { id: 'wereldoriëntatie', label: 'Wereldoriëntatie', icon: '🌍', color: 'bg-green-100 text-green-700 border-green-200' },
    { id: 'engels', label: 'Engels', icon: '🇬🇧', color: 'bg-purple-100 text-purple-700 border-purple-200' },
    { id: 'bewegingsonderwijs', label: 'Bewegingsonderwijs', icon: '🏃', color: 'bg-orange-100 text-orange-700 border-orange-200' },
    { id: 'expressie', label: 'Expressie & Kunst', icon: '🎨', color: 'bg-pink-100 text-pink-700 border-pink-200' },
    { id: 'burgerschap', label: 'Burgerschap', icon: '🤝', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
    { id: 'ict', label: 'ICT & Mediawijsheid', icon: '💻', color: 'bg-gray-100 text-gray-700 border-gray-200' }
  ]

  const ervaringsniveaus = [
    { id: 'starter', label: 'Starter', description: '0-2 jaar ervaring', icon: '🌱', color: 'from-green-400 to-emerald-500' },
    { id: 'ervaren', label: 'Ervaren', description: '3-10 jaar ervaring', icon: '⭐', color: 'from-blue-400 to-cyan-500' },
    { id: 'expert', label: 'Expert', description: '10+ jaar ervaring', icon: '🏅', color: 'from-purple-400 to-violet-500' },
    { id: 'schoolleider', label: 'Schoolleider', description: 'Leidinggevende rol', icon: '👑', color: 'from-amber-400 to-orange-500' }
  ]

  const focusgebieden = [
    { id: 'differentiatie', label: 'Differentiatie', icon: '🎯' },
    { id: 'inclusief', label: 'Inclusief onderwijs', icon: '🤗' },
    { id: 'digitaal', label: 'Digitaal onderwijs', icon: '💻' },
    { id: 'sel', label: 'Sociaal-emotioneel leren', icon: '💝' },
    { id: 'onderzoekend', label: 'Onderzoekend leren', icon: '🔍' },
    { id: 'creatief', label: 'Creatief onderwijs', icon: '🎨' },
    { id: 'taalrijk', label: 'Taalrijk onderwijs', icon: '💬' },
    { id: 'rekenvaardig', label: 'Rekenvaardigheid', icon: '🧮' },
    { id: 'wetenschap', label: 'Wetenschap & Techniek', icon: '🔬' },
    { id: 'duurzaamheid', label: 'Duurzaam onderwijs', icon: '🌱' }
  ]

  // Voorkeur instructiemodellen
  const instructieModelVoorkeuren = [
    { id: 'directe_instructie', label: 'Directe Instructie', icon: '👨‍🏫' },
    { id: 'onderzoekend_leren', label: 'Onderzoekend Leren', icon: '🔍' },
    { id: 'coöperatief_leren', label: 'Coöperatief Leren', icon: '🤝' },
    { id: 'spelend_leren', label: 'Spelend Leren', icon: '🎮' },
    { id: 'gepersonaliseerd_leren', label: 'Gepersonaliseerd Leren', icon: '🎯' },
    { id: 'projectonderwijs', label: 'Projectonderwijs', icon: '📊' },
    { id: 'flipped_classroom', label: 'Flipped Classroom', icon: '🔄' },
    { id: 'blended_learning', label: 'Blended Learning', icon: '💻' }
  ]

  // Voorkeur werkvormen
  const werkvormVoorkeuren = [
    { id: 'klassengesprek', label: 'Klassengesprek', icon: '💬' },
    { id: 'groepswerk', label: 'Groepswerk', icon: '👥' },
    { id: 'individueel_werk', label: 'Individueel werk', icon: '👤' },
    { id: 'presentaties', label: 'Presentaties', icon: '🎤' },
    { id: 'experimenten', label: 'Experimenten', icon: '🧪' },
    { id: 'rollenspel', label: 'Rollenspel', icon: '🎭' },
    { id: 'stations_werk', label: 'Stations werk', icon: '🔄' },
    { id: 'digitale_tools', label: 'Digitale tools', icon: '📱' }
  ]

  // SEL focus voorkeuren
  const selFocusVoorkeuren = [
    { id: 'zelfbewustzijn', label: 'Zelfbewustzijn', icon: '🪞' },
    { id: 'zelfregulatie', label: 'Zelfregulatie', icon: '🧘' },
    { id: 'sociale_bewustzijn', label: 'Sociale bewustzijn', icon: '👁️' },
    { id: 'relatievaardigheden', label: 'Relatievaardigheden', icon: '🤝' },
    { id: 'verantwoordelijke_besluitvorming', label: 'Verantwoordelijke besluitvorming', icon: '⚖️' }
  ]

  const handleProfileLoad = (loadedProfile: UserProfile) => {
    console.log('📥 ProfielSelector: Loading profile from beheer:', loadedProfile)
    setProfiel(loadedProfile)
    setShowProfielBeheer(false)
  }

  const handleGroepSelect = (groepId: string) => {
    console.log('🎯 ProfielSelector: Groep selected:', groepId)
    setProfiel(prev => ({ ...prev, groep: groepId }))
  }

  const handleVakgebiedToggle = (vakId: string) => {
    console.log('📚 ProfielSelector: Vakgebied toggled:', vakId)
    setProfiel(prev => ({
      ...prev,
      vakgebied: prev.vakgebied.includes(vakId)
        ? prev.vakgebied.filter(v => v !== vakId)
        : [...prev.vakgebied, vakId]
    }))
  }

  const handleErvaringSelect = (ervaringId: string) => {
    console.log('⭐ ProfielSelector: Ervaring selected:', ervaringId)
    setProfiel(prev => ({ ...prev, ervaring: ervaringId }))
  }

  const handleFocusToggle = (focusId: string) => {
    console.log('🎯 ProfielSelector: Focus toggled:', focusId)
    setProfiel(prev => ({
      ...prev,
      focus: prev.focus.includes(focusId)
        ? prev.focus.filter(f => f !== focusId)
        : [...prev.focus, focusId]
    }))
  }

  const handleVoorkeurToggle = (type: 'instructiemodel' | 'werkvormen' | 'selFocus', id: string) => {
    console.log('💡 ProfielSelector: Voorkeur toggled:', type, id)
    setProfiel(prev => ({
      ...prev,
      voorkeuren: {
        ...prev.voorkeuren,
        [type]: prev.voorkeuren[type].includes(id)
          ? prev.voorkeuren[type].filter(item => item !== id)
          : [...prev.voorkeuren[type], id]
      }
    }))
  }

  const handleSubmit = () => {
    if (profiel.groep && profiel.vakgebied.length > 0 && profiel.ervaring) {
      setIsAnimating(true)
      console.log('✅ ProfielSelector: Submitting profile:', profiel)
      
      // Add a small delay for animation
      setTimeout(() => {
        onComplete(profiel)
      }, 300)
    } else {
      console.log('❌ ProfielSelector: Profile incomplete:', {
        groep: profiel.groep,
        vakgebied: profiel.vakgebied.length,
        ervaring: profiel.ervaring
      })
    }
  }

  const isValid = profiel.groep && profiel.vakgebied.length > 0 && profiel.ervaring

  return (
    <div className="p-8 space-y-8">
      {/* Beautiful Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mb-6 shadow-lg shadow-blue-500/25">
          <span className="text-3xl">👤</span>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-4">
          Stel je profiel in
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Help ons je de meest relevante content te tonen door je profiel in te stellen.
          Dit profiel wordt opgeslagen voor toekomstig gebruik.
        </p>
        
        {/* Profile Management Button */}
        <div className="mt-6">
          <button
            onClick={() => setShowProfielBeheer(!showProfielBeheer)}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Profiel beheer</span>
          </button>
        </div>
      </div>

      {/* Profiel Beheer Component */}
      {showProfielBeheer && (
        <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-200">
          <ProfielBeheer 
            onProfileSelect={handleProfileLoad}
            currentProfile={profiel.groep ? profiel : null}
          />
        </div>
      )}

      {/* Current Profile Indicator */}
      {profiel.groep && (
        <div className="mb-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-green-900">Huidig profiel actief</h3>
              <p className="text-green-700">
                {profiel.groep} • {profiel.vakgebied.length} vakgebieden • {profiel.ervaring}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-12">
        {/* Groep Selectie */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Voor welke groep(en) maak je lessen?</h3>
            <p className="text-gray-600">Selecteer de groep waar je het meest voor lesgeeft</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {groepen.map((groep) => (
              <button
                key={groep.id}
                onClick={() => handleGroepSelect(groep.id)}
                className={`group relative p-6 rounded-2xl border-2 text-left transition-all duration-300 hover:shadow-xl transform hover:scale-105 ${
                  profiel.groep === groep.id
                    ? `bg-gradient-to-br ${groep.color} text-white border-transparent shadow-lg`
                    : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-4 mb-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                    profiel.groep === groep.id ? 'bg-white/20' : 'bg-gray-100'
                  }`}>
                    {groep.icon}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{groep.label}</div>
                    <div className={`text-sm ${profiel.groep === groep.id ? 'text-white/80' : 'text-gray-600'}`}>
                      {groep.description}
                    </div>
                  </div>
                </div>
                
                {profiel.groep === groep.id && (
                  <div className="absolute top-3 right-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Vakgebied Selectie */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Welke vakgebieden geef je?</h3>
            <p className="text-gray-600">Je kunt meerdere vakgebieden selecteren</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {vakgebieden.map((vak) => (
              <button
                key={vak.id}
                onClick={() => handleVakgebiedToggle(vak.id)}
                className={`group relative p-4 rounded-xl border-2 text-left transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
                  profiel.vakgebied.includes(vak.id)
                    ? `${vak.color} border-current shadow-md`
                    : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'
                }`}
              >
                <div className="text-2xl mb-2">{vak.icon}</div>
                <div className="font-semibold text-sm">{vak.label}</div>
                
                {profiel.vakgebied.includes(vak.id) && (
                  <div className="absolute top-2 right-2">
                    <div className="w-5 h-5 bg-current rounded-full flex items-center justify-center text-white">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Ervaring */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Wat is je ervaringsniveau?</h3>
            <p className="text-gray-600">Dit helpt ons passende content te selecteren</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ervaringsniveaus.map((niveau) => (
              <button
                key={niveau.id}
                onClick={() => handleErvaringSelect(niveau.id)}
                className={`group relative p-6 rounded-2xl border-2 text-left transition-all duration-300 hover:shadow-xl transform hover:scale-105 ${
                  profiel.ervaring === niveau.id
                    ? `bg-gradient-to-br ${niveau.color} text-white border-transparent shadow-lg`
                    : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3 ${
                  profiel.ervaring === niveau.id ? 'bg-white/20' : 'bg-gray-100'
                }`}>
                  {niveau.icon}
                </div>
                <div className="font-bold text-lg mb-1">{niveau.label}</div>
                <div className={`text-sm ${profiel.ervaring === niveau.id ? 'text-white/80' : 'text-gray-600'}`}>
                  {niveau.description}
                </div>
                
                {profiel.ervaring === niveau.id && (
                  <div className="absolute top-3 right-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Focus gebieden */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Waar ligt je focus op?</h3>
            <p className="text-gray-600">Optioneel - selecteer je interessegebieden</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {focusgebieden.map((focus) => (
              <button
                key={focus.id}
                onClick={() => handleFocusToggle(focus.id)}
                className={`group p-4 rounded-xl border-2 text-center transition-all duration-300 hover:shadow-lg transform hover:scale-105 ${
                  profiel.focus.includes(focus.id)
                    ? 'border-green-500 bg-green-50 text-green-900 shadow-md'
                    : 'border-gray-200 hover:border-green-300 bg-white hover:bg-green-50'
                }`}
              >
                <div className="text-2xl mb-2">{focus.icon}</div>
                <div className="font-semibold text-xs">{focus.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Voorkeuren sectie */}
        <div className="border-t border-gray-200 pt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Jouw voorkeuren</h3>
            <p className="text-gray-600">Optioneel - dit helpt ons relevante suggesties te doen</p>
          </div>
          
          <div className="space-y-8">
            {/* Instructiemodel voorkeuren */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Welke instructiemodellen gebruik je graag?</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {instructieModelVoorkeuren.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => handleVoorkeurToggle('instructiemodel', model.id)}
                    className={`p-3 rounded-xl border-2 text-center transition-all duration-300 hover:shadow-md transform hover:scale-105 ${
                      profiel.voorkeuren.instructiemodel.includes(model.id)
                        ? 'border-purple-500 bg-purple-50 text-purple-900'
                        : 'border-gray-200 hover:border-purple-300 bg-white hover:bg-purple-50'
                    }`}
                  >
                    <div className="text-lg mb-1">{model.icon}</div>
                    <div className="font-medium text-xs">{model.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Werkvorm voorkeuren */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Welke werkvormen gebruik je vaak?</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {werkvormVoorkeuren.map((werkvorm) => (
                  <button
                    key={werkvorm.id}
                    onClick={() => handleVoorkeurToggle('werkvormen', werkvorm.id)}
                    className={`p-3 rounded-xl border-2 text-center transition-all duration-300 hover:shadow-md transform hover:scale-105 ${
                      profiel.voorkeuren.werkvormen.includes(werkvorm.id)
                        ? 'border-orange-500 bg-orange-50 text-orange-900'
                        : 'border-gray-200 hover:border-orange-300 bg-white hover:bg-orange-50'
                    }`}
                  >
                    <div className="text-lg mb-1">{werkvorm.icon}</div>
                    <div className="font-medium text-xs">{werkvorm.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* SEL focus voorkeuren */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Welke SEL-aspecten vind je belangrijk?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {selFocusVoorkeuren.map((sel) => (
                  <button
                    key={sel.id}
                    onClick={() => handleVoorkeurToggle('selFocus', sel.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all duration-300 hover:shadow-md transform hover:scale-105 ${
                      profiel.voorkeuren.selFocus.includes(sel.id)
                        ? 'border-pink-500 bg-pink-50 text-pink-900'
                        : 'border-gray-200 hover:border-pink-300 bg-white hover:bg-pink-50'
                    }`}
                  >
                    <div className="text-lg mb-1">{sel.icon}</div>
                    <div className="font-medium text-sm">{sel.label}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Beautiful Submit Section */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <div className="text-center">
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-4">* Verplichte velden</p>
            
            {/* Progress Indicator */}
            <div className="flex justify-center space-x-2 mb-6">
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${profiel.groep ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${profiel.vakgebied.length > 0 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${profiel.ervaring ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            </div>
          </div>
          
          <button
            onClick={handleSubmit}
            disabled={!isValid || isAnimating}
            className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform ${
              isValid && !isAnimating
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isAnimating ? (
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Profiel wordt opgeslagen...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <span>Volgende: Documenten beheer</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            )}
            
            {/* Shine effect */}
            {isValid && !isAnimating && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}