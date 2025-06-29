'use client'

import { useState } from 'react'
import { UserProfile } from './LesWizard'

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
    { id: 'rekenvaardig', label: 'Rekenvaardigheid', icon: '🧮' }
  ]

  const handleSubmit = () => {
    if (profiel.groep && profiel.vakgebied.length > 0 && profiel.ervaring) {
      onComplete(profiel)
    }
  }

  const isValid = profiel.groep && profiel.vakgebied.length > 0 && profiel.ervaring

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Stel je profiel in</h2>
        <p className="text-gray-600">
          Help ons je de meest relevante content te tonen door je profiel in te stellen.
        </p>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
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
            Volgende: SLO-doelen selecteren →
          </button>
        </div>
      </div>
    </div>
  )
}