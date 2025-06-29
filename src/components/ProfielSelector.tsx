'use client'

import { useState, useEffect } from 'react'
import { UserProfile } from './LesWizard'
import ProfielBeheer from './ProfielBeheer'

interface ProfielSelectorProps {
  onComplete: (profile: UserProfile) => void
  currentProfile: UserProfile | null
}

export default function ProfielSelector({ onComplete, currentProfile }: ProfielSelectorProps) {
  // CRITICAL: Initialize with proper empty state
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
  const [debugInfo, setDebugInfo] = useState<string>('')

  // CRITICAL: Load profile with multiple fallbacks and extensive logging
  useEffect(() => {
    console.log('🔄 ProfielSelector: Starting profile load process...')
    console.log('🔄 ProfielSelector: currentProfile prop:', currentProfile)
    
    let loadedProfile: UserProfile | null = null
    
    // Priority 1: currentProfile prop
    if (currentProfile && currentProfile.groep) {
      console.log('✅ ProfielSelector: Using currentProfile prop')
      loadedProfile = currentProfile
      setDebugInfo('Loaded from prop')
    } 
    // Priority 2: localStorage
    else {
      try {
        const savedProfile = localStorage.getItem('leswizard_current_profile')
        console.log('🔄 ProfielSelector: localStorage content:', savedProfile)
        
        if (savedProfile) {
          const parsed = JSON.parse(savedProfile)
          console.log('✅ ProfielSelector: Parsed from localStorage:', parsed)
          
          if (parsed && parsed.groep) {
            loadedProfile = parsed
            setDebugInfo('Loaded from localStorage')
          }
        }
      } catch (error) {
        console.error('❌ ProfielSelector: Error loading from localStorage:', error)
        setDebugInfo('Error loading from storage')
      }
    }
    
    // Apply loaded profile or keep empty state
    if (loadedProfile) {
      console.log('✅ ProfielSelector: Setting loaded profile:', loadedProfile)
      setProfiel(loadedProfile)
    } else {
      console.log('⚠️ ProfielSelector: No profile found, keeping empty state')
      setDebugInfo('No profile found')
    }
  }, [currentProfile])

  // CRITICAL: Save to localStorage whenever profiel changes (with validation)
  useEffect(() => {
    if (profiel.groep) {
      console.log('💾 ProfielSelector: Saving profile to localStorage:', profiel)
      try {
        localStorage.setItem('leswizard_current_profile', JSON.stringify(profiel))
        console.log('✅ ProfielSelector: Successfully saved to localStorage')
      } catch (error) {
        console.error('❌ ProfielSelector: Error saving to localStorage:', error)
      }
    }
  }, [profiel])

  // UITGEBREIDE GROEPEN - Los groep 1-8 en combigroepen
  const groepen = [
    { id: 'groep1', label: 'Groep 1', description: 'Kleuters (4-5 jaar)', icon: '🧸', color: 'from-pink-400 to-rose-500' },
    { id: 'groep2', label: 'Groep 2', description: 'Kleuters (5-6 jaar)', icon: '🎈', color: 'from-pink-500 to-rose-600' },
    { id: 'groep3', label: 'Groep 3', description: 'Onderbouw (6-7 jaar)', icon: '📚', color: 'from-blue-400 to-cyan-500' },
    { id: 'groep4', label: 'Groep 4', description: 'Onderbouw (7-8 jaar)', icon: '📖', color: 'from-blue-500 to-cyan-600' },
    { id: 'groep5', label: 'Groep 5', description: 'Middenbouw (8-9 jaar)', icon: '🎓', color: 'from-green-400 to-emerald-500' },
    { id: 'groep6', label: 'Groep 6', description: 'Middenbouw (9-10 jaar)', icon: '📝', color: 'from-green-500 to-emerald-600' },
    { id: 'groep7', label: 'Groep 7', description: 'Bovenbouw (10-11 jaar)', icon: '🏆', color: 'from-purple-400 to-violet-500' },
    { id: 'groep8', label: 'Groep 8', description: 'Bovenbouw (11-12 jaar)', icon: '🎯', color: 'from-purple-500 to-violet-600' },
    
    // Combigroepen
    { id: 'groep1-2', label: 'Combi 1-2', description: 'Kleutercombi (4-6 jaar)', icon: '🌈', color: 'from-pink-500 to-orange-500' },
    { id: 'groep2-3', label: 'Combi 2-3', description: 'Overgangscombi (5-7 jaar)', icon: '🌟', color: 'from-orange-500 to-blue-500' },
    { id: 'groep3-4', label: 'Combi 3-4', description: 'Onderbouwcombi (6-8 jaar)', icon: '📘', color: 'from-blue-500 to-cyan-500' },
    { id: 'groep4-5', label: 'Combi 4-5', description: 'Overgangscombi (7-9 jaar)', icon: '🔄', color: 'from-cyan-500 to-green-500' },
    { id: 'groep5-6', label: 'Combi 5-6', description: 'Middenbouwcombi (8-10 jaar)', icon: '📗', color: 'from-green-500 to-emerald-500' },
    { id: 'groep6-7', label: 'Combi 6-7', description: 'Overgangscombi (9-11 jaar)', icon: '⚡', color: 'from-emerald-500 to-purple-500' },
    { id: 'groep7-8', label: 'Combi 7-8', description: 'Bovenbouwcombi (10-12 jaar)', icon: '🚀', color: 'from-purple-500 to-violet-500' },
    
    // Speciale combigroepen
    { id: 'groep1-3', label: 'Combi 1-3', description: 'Brede kleutercombi (4-7 jaar)', icon: '🎪', color: 'from-pink-400 to-blue-400' },
    { id: 'groep4-8', label: 'Combi 4-8', description: 'Basisschoolcombi (7-12 jaar)', icon: '🏫', color: 'from-blue-400 to-purple-600' },
    { id: 'groep1-8', label: 'Combi 1-8', description: 'Volledige basisschool (4-12 jaar)', icon: '🌍', color: 'from-pink-400 to-purple-600' }
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
    setDebugInfo('Loaded from profile manager')
  }

  // CRITICAL: Improved event handlers with immediate state updates and logging
  const handleGroepSelect = (groepId: string) => {
    console.log('🎯 ProfielSelector: Groep selected:', groepId)
    const newProfile = { ...profiel, groep: groepId }
    console.log('🎯 ProfielSelector: New profile after groep select:', newProfile)
    setProfiel(newProfile)
    setDebugInfo(`Groep set to: ${groepId}`)
  }

  const handleVakgebiedToggle = (vakId: string) => {
    console.log('📚 ProfielSelector: Vakgebied toggled:', vakId)
    const newVakgebied = profiel.vakgebied.includes(vakId)
      ? profiel.vakgebied.filter(v => v !== vakId)
      : [...profiel.vakgebied, vakId]
    
    const newProfile = { ...profiel, vakgebied: newVakgebied }
    console.log('📚 ProfielSelector: New profile after vakgebied toggle:', newProfile)
    setProfiel(newProfile)
    setDebugInfo(`Vakgebied: ${newVakgebied.join(', ')}`)
  }

  const handleErvaringSelect = (ervaringId: string) => {
    console.log('⭐ ProfielSelector: Ervaring selected:', ervaringId)
    const newProfile = { ...profiel, ervaring: ervaringId }
    console.log('⭐ ProfielSelector: New profile after ervaring select:', newProfile)
    setProfiel(newProfile)
    setDebugInfo(`Ervaring set to: ${ervaringId}`)
  }

  const handleFocusToggle = (focusId: string) => {
    console.log('🎯 ProfielSelector: Focus toggled:', focusId)
    const newFocus = profiel.focus.includes(focusId)
      ? profiel.focus.filter(f => f !== focusId)
      : [...profiel.focus, focusId]
    
    const newProfile = { ...profiel, focus: newFocus }
    console.log('🎯 ProfielSelector: New profile after focus toggle:', newProfile)
    setProfiel(newProfile)
    setDebugInfo(`Focus: ${newFocus.join(', ')}`)
  }

  const handleVoorkeurToggle = (type: 'instructiemodel' | 'werkvormen' | 'selFocus', id: string) => {
    console.log('💡 ProfielSelector: Voorkeur toggled:', type, id)
    const currentVoorkeuren = profiel.voorkeuren[type]
    const newVoorkeuren = currentVoorkeuren.includes(id)
      ? currentVoorkeuren.filter(item => item !== id)
      : [...currentVoorkeuren, id]
    
    const newProfile = {
      ...profiel,
      voorkeuren: {
        ...profiel.voorkeuren,
        [type]: newVoorkeuren
      }
    }
    console.log('💡 ProfielSelector: New profile after voorkeur toggle:', newProfile)
    setProfiel(newProfile)
    setDebugInfo(`${type}: ${newVoorkeuren.join(', ')}`)
  }

  const handleSubmit = () => {
    if (profiel.groep && profiel.vakgebied.length > 0 && profiel.ervaring) {
      setIsAnimating(true)
      console.log('✅ ProfielSelector: Submitting complete profile:', profiel)
      
      // Save to localStorage before submitting
      try {
        localStorage.setItem('leswizard_current_profile', JSON.stringify(profiel))
        console.log('✅ ProfielSelector: Profile saved to localStorage before submit')
      } catch (error) {
        console.error('❌ ProfielSelector: Error saving before submit:', error)
      }
      
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
      setDebugInfo('Profile incomplete - missing required fields')
    }
  }

  const isValid = profiel.groep && profiel.vakgebied.length > 0 && profiel.ervaring

  // Debug logging
  console.log('🔍 ProfielSelector render state:', {
    groep: profiel.groep,
    vakgebied: profiel.vakgebied,
    ervaring: profiel.ervaring,
    isValid,
    debugInfo
  })

  return (
    <div className="p-8 space-y-8">
      {/* Beautiful Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mb-6 shadow-lg shadow-blue-500/25 animate-float">
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
            className="btn-primary"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Profiel beheer</span>
          </button>
        </div>
      </div>

      {/* Debug Info (only in development) */}
      {process.env.NODE_ENV === 'development' && debugInfo && (
        <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-800 text-sm">Debug: {debugInfo}</p>
        </div>
      )}

      {/* Profiel Beheer Component */}
      {showProfielBeheer && (
        <div className="mb-8 card glass">
          <ProfielBeheer 
            onProfileSelect={handleProfileLoad}
            currentProfile={profiel.groep ? profiel : null}
          />
        </div>
      )}

      {/* Current Profile Indicator */}
      {profiel.groep && (
        <div className="mb-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-green-900">Huidig profiel actief</h3>
              <p className="text-green-700">
                {groepen.find(g => g.id === profiel.groep)?.label} • {profiel.vakgebied.length} vakgebieden • {profiel.ervaring}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-12">
        {/* Groep Selectie - UITGEBREID */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Voor welke groep(en) geef je les?</h3>
            <p className="text-gray-600">Selecteer je groep - nu met alle individuele groepen en combigroepen</p>
          </div>
          
          {/* Individuele groepen */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Individuele groepen</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
              {groepen.slice(0, 8).map((groep) => (
                <button
                  key={groep.id}
                  onClick={() => handleGroepSelect(groep.id)}
                  className={`card-interactive group relative p-4 text-center transition-all duration-300 ${
                    profiel.groep === groep.id
                      ? `bg-gradient-to-br ${groep.color} text-white border-transparent shadow-xl animate-pulse-glow`
                      : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-2 mx-auto transition-all duration-300 ${
                    profiel.groep === groep.id ? 'bg-white/20 shadow-lg' : 'bg-gray-100 group-hover:bg-gray-200'
                  }`}>
                    {groep.icon}
                  </div>
                  <div className="font-bold text-sm">{groep.label}</div>
                  <div className={`text-xs mt-1 ${profiel.groep === groep.id ? 'text-white/80' : 'text-gray-600'}`}>
                    {groep.description.split(' ')[0]}
                  </div>
                  
                  {profiel.groep === groep.id && (
                    <div className="absolute top-2 right-2">
                      <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Combigroepen */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Combigroepen</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {groepen.slice(8).map((groep) => (
                <button
                  key={groep.id}
                  onClick={() => handleGroepSelect(groep.id)}
                  className={`card-interactive group relative p-4 text-left transition-all duration-300 ${
                    profiel.groep === groep.id
                      ? `bg-gradient-to-br ${groep.color} text-white border-transparent shadow-xl animate-pulse-glow`
                      : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-all duration-300 ${
                      profiel.groep === groep.id ? 'bg-white/20 shadow-lg' : 'bg-gray-100 group-hover:bg-gray-200'
                    }`}>
                      {groep.icon}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{groep.label}</div>
                      <div className={`text-xs ${profiel.groep === groep.id ? 'text-white/80' : 'text-gray-600'}`}>
                        {groep.description}
                      </div>
                    </div>
                  </div>
                  
                  {profiel.groep === groep.id && (
                    <div className="absolute top-3 right-3">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
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
                className={`card-interactive group relative p-4 text-left transition-all duration-300 ${
                  profiel.vakgebied.includes(vak.id)
                    ? `${vak.color} border-current shadow-lg scale-105`
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
                className={`card-interactive group relative p-6 text-left transition-all duration-300 ${
                  profiel.ervaring === niveau.id
                    ? `bg-gradient-to-br ${niveau.color} text-white border-transparent shadow-xl animate-pulse-glow`
                    : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3 transition-all duration-300 ${
                  profiel.ervaring === niveau.id ? 'bg-white/20 shadow-lg' : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  {niveau.icon}
                </div>
                <div className="font-bold text-lg mb-1">{niveau.label}</div>
                <div className={`text-sm ${profiel.ervaring === niveau.id ? 'text-white/80' : 'text-gray-600'}`}>
                  {niveau.description}
                </div>
                
                {profiel.ervaring === niveau.id && (
                  <div className="absolute top-3 right-3">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
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
                className={`card-interactive group p-4 text-center transition-all duration-300 ${
                  profiel.focus.includes(focus.id)
                    ? 'border-green-500 bg-green-50 text-green-900 shadow-lg scale-105'
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
                    className={`card-interactive p-3 text-center transition-all duration-300 ${
                      profiel.voorkeuren.instructiemodel.includes(model.id)
                        ? 'border-purple-500 bg-purple-50 text-purple-900 shadow-md'
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
                    className={`card-interactive p-3 text-center transition-all duration-300 ${
                      profiel.voorkeuren.werkvormen.includes(werkvorm.id)
                        ? 'border-orange-500 bg-orange-50 text-orange-900 shadow-md'
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
                    className={`card-interactive p-4 text-left transition-all duration-300 ${
                      profiel.voorkeuren.selFocus.includes(sel.id)
                        ? 'border-pink-500 bg-pink-50 text-pink-900 shadow-md'
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
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${profiel.groep ? 'bg-green-500 shadow-lg' : 'bg-gray-300'}`}></div>
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${profiel.vakgebied.length > 0 ? 'bg-green-500 shadow-lg' : 'bg-gray-300'}`}></div>
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${profiel.ervaring ? 'bg-green-500 shadow-lg' : 'bg-gray-300'}`}></div>
            </div>
          </div>
          
          <button
            onClick={handleSubmit}
            disabled={!isValid || isAnimating}
            className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform ${
              isValid && !isAnimating
                ? 'btn-primary'
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