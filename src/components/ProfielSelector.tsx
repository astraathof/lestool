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

  // Initialize profile from currentProfile prop
  useEffect(() => {
    if (currentProfile) {
      setProfiel(currentProfile)
    }
  }, [currentProfile])

  const groepen = [
    { id: 'groep1-2', label: 'Groep 1-2', description: 'Kleuteronderwijs (4-6 jaar)' },
    { id: 'groep3-4', label: 'Groep 3-4', description: 'Onderbouw (6-8 jaar)' },
    { id: 'groep5-6', label: 'Groep 5-6', description: 'Middenbouw (8-10 jaar)' },
    { id: 'groep7-8', label: 'Groep 7-8', description: 'Bovenbouw (10-12 jaar)' },
    { id: 'combinatie', label: 'Combinatiegroep', description: 'Meerdere groepen' }
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
    setProfiel(loadedProfile)
    setShowProfielBeheer(false)
  }

  const handleSubmit = () => {
    if (profiel.groep && profiel.vakgebied.length > 0 && profiel.ervaring) {
      onComplete(profiel)
    }
  }

  const isValid = profiel.groep && profiel.vakgebied.length > 0 && profiel.ervaring

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Stel je profiel in</h2>
            <p className="text-gray-600">
              Help ons je de meest relevante content te tonen door je profiel in te stellen.
              Dit profiel wordt opgeslagen voor toekomstig gebruik.
            </p>
          </div>
          
          <button
            onClick={() => setShowProfielBeheer(!showProfielBeheer)}
            className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Profiel beheer</span>
          </button>
        </div>

        {/* Profiel Beheer Component */}
        {showProfielBeheer && (
          <div className="mb-6">
            <ProfielBeheer 
              onProfileSelect={handleProfileLoad}
              currentProfile={profiel.groep ? profiel : null}
            />
          </div>
        )}

        {/* Current Profile Indicator */}
        {profiel.groep && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium text-green-900">
                Huidig profiel: {profiel.groep} • {profiel.vakgebied.length} vakgebieden • {profiel.ervaring}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="space-y-8">
        {/* Groep Selectie */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-4">
            Voor welke groep(en) maak je lessen? *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {groepen.map((groep) => (
              <button
                key={groep.id}
                onClick={() => setProfiel(prev => ({ ...prev, groep: groep.id }))}
                className={`p-4 rounded-lg border-2 text-left transition-all duration-200 hover:shadow-md ${
                  profiel.groep === groep.id
                    ? 'border-blue-500 bg-blue-50 text-blue-900'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="font-medium text-sm">{groep.label}</div>
                <div className="text-xs text-gray-600 mt-1">{groep.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Vakgebied Selectie */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-4">
            Welke vakgebieden geef je? * (meerdere mogelijk)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {vakgebieden.map((vak) => (
              <button
                key={vak.id}
                onClick={() => {
                  setProfiel(prev => ({
                    ...prev,
                    vakgebied: prev.vakgebied.includes(vak.id)
                      ? prev.vakgebied.filter(v => v !== vak.id)
                      : [...prev.vakgebied, vak.id]
                  }))
                }}
                className={`p-3 rounded-lg border-2 text-left transition-all duration-200 hover:shadow-md ${
                  profiel.vakgebied.includes(vak.id)
                    ? 'border-blue-500 bg-blue-50 text-blue-900'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="text-lg mb-1">{vak.icon}</div>
                <div className="font-medium text-xs">{vak.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Ervaring */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-4">
            Wat is je ervaringsniveau? *
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {ervaringsniveaus.map((niveau) => (
              <button
                key={niveau.id}
                onClick={() => setProfiel(prev => ({ ...prev, ervaring: niveau.id }))}
                className={`p-4 rounded-lg border-2 text-left transition-all duration-200 hover:shadow-md ${
                  profiel.ervaring === niveau.id
                    ? 'border-blue-500 bg-blue-50 text-blue-900'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="font-medium text-sm">{niveau.label}</div>
                <div className="text-xs text-gray-600 mt-1">{niveau.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Focus gebieden */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-4">
            Waar ligt je focus op? (optioneel, meerdere mogelijk)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {focusgebieden.map((focus) => (
              <button
                key={focus.id}
                onClick={() => {
                  setProfiel(prev => ({
                    ...prev,
                    focus: prev.focus.includes(focus.id)
                      ? prev.focus.filter(f => f !== focus.id)
                      : [...prev.focus, focus.id]
                  }))
                }}
                className={`p-3 rounded-lg border-2 text-left transition-all duration-200 hover:shadow-md ${
                  profiel.focus.includes(focus.id)
                    ? 'border-green-500 bg-green-50 text-green-900'
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <div className="text-lg mb-1">{focus.icon}</div>
                <div className="font-medium text-xs">{focus.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Voorkeuren sectie */}
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Jouw voorkeuren (optioneel)</h3>
          
          {/* Instructiemodel voorkeuren */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-4">
              Welke instructiemodellen gebruik je graag?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {instructieModelVoorkeuren.map((model) => (
                <button
                  key={model.id}
                  onClick={() => {
                    setProfiel(prev => ({
                      ...prev,
                      voorkeuren: {
                        ...prev.voorkeuren,
                        instructiemodel: prev.voorkeuren.instructiemodel.includes(model.id)
                          ? prev.voorkeuren.instructiemodel.filter(m => m !== model.id)
                          : [...prev.voorkeuren.instructiemodel, model.id]
                      }
                    }))
                  }}
                  className={`p-3 rounded-lg border-2 text-left transition-all duration-200 hover:shadow-md ${
                    profiel.voorkeuren.instructiemodel.includes(model.id)
                      ? 'border-purple-500 bg-purple-50 text-purple-900'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="text-lg mb-1">{model.icon}</div>
                  <div className="font-medium text-xs">{model.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Werkvorm voorkeuren */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-900 mb-4">
              Welke werkvormen gebruik je vaak?
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {werkvormVoorkeuren.map((werkvorm) => (
                <button
                  key={werkvorm.id}
                  onClick={() => {
                    setProfiel(prev => ({
                      ...prev,
                      voorkeuren: {
                        ...prev.voorkeuren,
                        werkvormen: prev.voorkeuren.werkvormen.includes(werkvorm.id)
                          ? prev.voorkeuren.werkvormen.filter(w => w !== werkvorm.id)
                          : [...prev.voorkeuren.werkvormen, werkvorm.id]
                      }
                    }))
                  }}
                  className={`p-3 rounded-lg border-2 text-left transition-all duration-200 hover:shadow-md ${
                    profiel.voorkeuren.werkvormen.includes(werkvorm.id)
                      ? 'border-orange-500 bg-orange-50 text-orange-900'
                      : 'border-gray-200 hover:border-orange-300'
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
            <label className="block text-sm font-semibold text-gray-900 mb-4">
              Welke SEL-aspecten vind je belangrijk?
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {selFocusVoorkeuren.map((sel) => (
                <button
                  key={sel.id}
                  onClick={() => {
                    setProfiel(prev => ({
                      ...prev,
                      voorkeuren: {
                        ...prev.voorkeuren,
                        selFocus: prev.voorkeuren.selFocus.includes(sel.id)
                          ? prev.voorkeuren.selFocus.filter(s => s !== sel.id)
                          : [...prev.voorkeuren.selFocus, sel.id]
                      }
                    }))
                  }}
                  className={`p-3 rounded-lg border-2 text-left transition-all duration-200 hover:shadow-md ${
                    profiel.voorkeuren.selFocus.includes(sel.id)
                      ? 'border-pink-500 bg-pink-50 text-pink-900'
                      : 'border-gray-200 hover:border-pink-300'
                  }`}
                >
                  <div className="text-lg mb-1">{sel.icon}</div>
                  <div className="font-medium text-xs">{sel.label}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            * Verplichte velden
          </div>
          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              isValid
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Volgende: Documenten beheer →
          </button>
        </div>
      </div>
    </div>
  )
}