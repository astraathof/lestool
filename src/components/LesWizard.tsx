'use client'

import { useState, useEffect } from 'react'
import ProfielSelector from './ProfielSelector'
import SLODoelen from './SLODoelen'
import InstructieModellen from './InstructieModellen'
import Werkvormen from './Werkvormen'
import SELActiviteiten from './SELActiviteiten'
import LesplanGenerator from './LesplanGenerator'

export interface UserProfile {
  groep: string
  vakgebied: string[]
  ervaring: string
  focus: string[]
  voorkeuren: {
    instructiemodel: string[]
    werkvormen: string[]
    selFocus: string[]
  }
}

export interface SchoolDocument {
  id: string
  naam: string
  type: 'schoolplan' | 'jaarplan' | 'methode' | 'toetsplan' | 'beleid' | 'curriculum' | 'evaluatie' | 'protocol'
  inhoud: string
  doelen: any[]
  uploadDatum: Date
  actief: boolean
}

export interface LesplanData {
  profiel: UserProfile | null
  sloDoelen: any[]
  schoolDocumenten: SchoolDocument[]
  instructiemodel: any | null
  werkvormen: any[]
  selActiviteiten: any[]
  lesonderwerp: string
  lesdoelen: string[]
  tijdsduur: number
}

const STORAGE_KEY = 'leswizard_state'

export default function LesWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [lesplanData, setLesplanData] = useState<LesplanData>({
    profiel: null,
    sloDoelen: [],
    schoolDocumenten: [],
    instructiemodel: null,
    werkvormen: [],
    selActiviteiten: [],
    lesonderwerp: '',
    lesdoelen: [],
    tijdsduur: 45
  })
  const [showCompactMode, setShowCompactMode] = useState(false)

  // Load saved state on mount
  useEffect(() => {
    try {
      const savedState = localStorage.getItem(STORAGE_KEY)
      if (savedState) {
        const parsed = JSON.parse(savedState)
        // Only load if the saved mode matches current URL or default
        const savedMode = parsed.showCompactMode || false
        setShowCompactMode(savedMode)
        setLesplanData(parsed.lesplanData || lesplanData)
        setCurrentStep(parsed.currentStep || 1)
        console.log('✅ Loaded saved state:', parsed)
      } else {
        // Default to compact mode for new users
        setShowCompactMode(true)
        console.log('🚀 New user - defaulting to compact mode')
      }
    } catch (error) {
      console.error('Error loading saved state:', error)
      // Fallback to compact mode on error
      setShowCompactMode(true)
    }
  }, []) // Only run once on mount

  // Save state whenever it changes
  useEffect(() => {
    try {
      const stateToSave = {
        currentStep,
        lesplanData,
        showCompactMode
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave))
      console.log('💾 Saved state:', stateToSave)
    } catch (error) {
      console.error('Error saving state:', error)
    }
  }, [currentStep, lesplanData, showCompactMode])

  // Compacte modus: minder stappen
  const compactSteps = [
    { id: 1, title: 'Setup', icon: '⚙️', description: 'Profiel + SLO-doelen', completed: !!lesplanData.profiel && lesplanData.sloDoelen.length > 0 },
    { id: 2, title: 'Methode', icon: '📚', description: 'Instructie + Werkvormen', completed: !!lesplanData.instructiemodel && lesplanData.werkvormen.length > 0 },
    { id: 3, title: 'Lesplan', icon: '🚀', description: 'AI Generator', completed: false }
  ]

  const normalSteps = [
    { id: 1, title: 'Profiel', icon: '👤', description: 'Stel je profiel in', completed: !!lesplanData.profiel },
    { id: 2, title: 'SLO-doelen', icon: '🎯', description: 'Selecteer leerdoelen', completed: lesplanData.sloDoelen.length > 0 },
    { id: 3, title: 'Instructiemodel', icon: '📚', description: 'Kies je aanpak', completed: !!lesplanData.instructiemodel },
    { id: 4, title: 'Werkvormen', icon: '🎲', description: 'Selecteer activiteiten', completed: lesplanData.werkvormen.length > 0 },
    { id: 5, title: 'SEL', icon: '💝', description: 'Sociaal-emotioneel leren', completed: lesplanData.selActiviteiten.length > 0 },
    { id: 6, title: 'Lesplan', icon: '📋', description: 'Genereer je lesplan', completed: false }
  ]

  // CRITICAL: Use the correct steps based on mode
  const steps = showCompactMode ? compactSteps : normalSteps
  const maxSteps = steps.length

  const handleProfileComplete = (profile: UserProfile) => {
    console.log('✅ Profile completed:', profile)
    setLesplanData(prev => ({ ...prev, profiel: profile }))
    if (showCompactMode) {
      // In compacte modus: ga naar stap 2 (Methode)
      setCurrentStep(2)
    } else {
      // Normale modus: ga naar SLO-doelen
      setCurrentStep(2)
    }
  }

  const handleSLOComplete = (doelen: any[]) => {
    console.log('✅ SLO doelen completed:', doelen.length)
    setLesplanData(prev => ({ ...prev, sloDoelen: doelen }))
    if (showCompactMode) {
      // In compacte modus: ga direct naar methode (stap 2)
      setCurrentStep(2)
    } else {
      setCurrentStep(3)
    }
  }

  const handleInstructieComplete = (model: any) => {
    console.log('✅ Instructiemodel completed:', model?.naam)
    setLesplanData(prev => ({ ...prev, instructiemodel: model }))
    if (showCompactMode) {
      // In compacte modus: ga direct naar lesplan (stap 3)
      setCurrentStep(3)
    } else {
      setCurrentStep(4)
    }
  }

  const handleWerkvormenComplete = (werkvormen: any[]) => {
    console.log('✅ Werkvormen completed:', werkvormen.length)
    setLesplanData(prev => ({ ...prev, werkvormen }))
    if (showCompactMode) {
      // In compacte modus: ga direct naar lesplan (stap 3)
      setCurrentStep(3)
    } else {
      setCurrentStep(5)
    }
  }

  const handleSELComplete = (activiteiten: any[]) => {
    console.log('✅ SEL activiteiten completed:', activiteiten.length)
    setLesplanData(prev => ({ ...prev, selActiviteiten: activiteiten }))
    setCurrentStep(showCompactMode ? 3 : 6)
  }

  const goToStep = (step: number) => {
    // Allow going back to any previous step or step 1
    if (step <= currentStep || step === 1) {
      setCurrentStep(step)
      console.log('🔄 Navigated to step:', step)
    }
  }

  const resetWizard = () => {
    if (confirm('Weet je zeker dat je opnieuw wilt beginnen? Alle voortgang gaat verloren.')) {
      setLesplanData({
        profiel: null,
        sloDoelen: [],
        schoolDocumenten: [],
        instructiemodel: null,
        werkvormen: [],
        selActiviteiten: [],
        lesonderwerp: '',
        lesdoelen: [],
        tijdsduur: 45
      })
      setCurrentStep(1)
      localStorage.removeItem(STORAGE_KEY)
      console.log('🔄 Wizard reset')
    }
  }

  // Compacte modus toggle
  const toggleCompactMode = () => {
    console.log('🔄 Toggling compact mode from', showCompactMode, 'to', !showCompactMode)
    setShowCompactMode(!showCompactMode)
    // Reset naar stap 1 en clear localStorage om fresh start te forceren
    setCurrentStep(1)
    localStorage.removeItem(STORAGE_KEY)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">📚</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">PO LesWizard</h1>
                <p className="text-sm text-gray-600">Professionele lesplanning voor het Primair Onderwijs</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleCompactMode}
                className={`px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                  showCompactMode 
                    ? 'bg-green-100 text-green-700 border border-green-200' 
                    : 'bg-blue-100 text-blue-700 border border-blue-200'
                }`}
                title={showCompactMode ? 'Schakel naar uitgebreide modus' : 'Schakel naar snelle modus'}
              >
                {showCompactMode ? '🚀 Snel' : '📋 Uitgebreid'}
              </button>
              <button
                onClick={resetWizard}
                className="px-4 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                title="Opnieuw beginnen"
              >
                🔄 Reset
              </button>
              <div className="text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
                Stap {currentStep} van {maxSteps} {showCompactMode ? '(Snel)' : '(Uitgebreid)'}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mode indicator */}
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <div className="flex items-center space-x-4">
              <span className={`text-xs font-medium ${showCompactMode ? 'text-green-600' : 'text-blue-600'}`}>
                {showCompactMode ? '🚀 Snelle Modus' : '📋 Uitgebreide Modus'}
              </span>
              <span className="text-xs text-gray-500">
                {showCompactMode ? '3 stappen - Snel aan de slag' : '6 stappen - Volledig maatwerk'}
              </span>
            </div>
            <button
              onClick={toggleCompactMode}
              className="text-xs text-gray-500 hover:text-blue-600"
            >
              Wissel modus
            </button>
          </div>
          
          <div className="flex items-center justify-between py-4 overflow-x-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-shrink-0">
                <button
                  onClick={() => goToStep(step.id)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 min-w-max ${
                    currentStep === step.id
                      ? 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-2 border-blue-200 shadow-lg transform scale-105'
                      : step.completed
                      ? 'bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 hover:from-green-100 hover:to-emerald-100 cursor-pointer border border-green-200 hover:shadow-md'
                      : currentStep > step.id
                      ? 'bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer border border-gray-200'
                      : 'text-gray-400 cursor-not-allowed border border-gray-200 opacity-60'
                  }`}
                  disabled={currentStep < step.id && step.id !== 1}
                  title={step.completed ? `${step.title} - Voltooid` : step.description}
                >
                  <span className="text-xl">{step.icon}</span>
                  <div className="text-left">
                    <div className="text-sm font-semibold flex items-center">
                      {step.title}
                      {step.completed && <span className="ml-1 text-green-600">✓</span>}
                    </div>
                    <div className="text-xs opacity-75">{step.description}</div>
                  </div>
                </button>
                
                {index < steps.length - 1 && (
                  <div className={`w-8 h-1 mx-3 rounded-full transition-all duration-200 flex-shrink-0 ${
                    currentStep > step.id ? 'bg-gradient-to-r from-green-300 to-emerald-300' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Summary */}
      {lesplanData.profiel && (
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-b border-purple-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-6">
                <span className="text-purple-700 font-medium">
                  👤 {lesplanData.profiel.groep} • {lesplanData.profiel.vakgebied.join(', ')}
                </span>
                {lesplanData.sloDoelen.length > 0 && (
                  <span className="text-green-700">🎯 {lesplanData.sloDoelen.length} SLO-doelen</span>
                )}
                {lesplanData.instructiemodel && (
                  <span className="text-blue-700">📚 {lesplanData.instructiemodel.naam}</span>
                )}
                {lesplanData.werkvormen.length > 0 && (
                  <span className="text-orange-700">🎲 {lesplanData.werkvormen.length} werkvormen</span>
                )}
                {lesplanData.selActiviteiten.length > 0 && (
                  <span className="text-pink-700">💝 {lesplanData.selActiviteiten.length} SEL-activiteiten</span>
                )}
              </div>
              <div className="text-purple-600 text-xs">
                Voortgang wordt automatisch opgeslagen
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Normale modus */}
          {!showCompactMode && currentStep === 1 && (
            <ProfielSelector 
              onComplete={handleProfileComplete} 
              currentProfile={lesplanData.profiel} 
            />
          )}
          
          {!showCompactMode && currentStep === 2 && lesplanData.profiel && (
            <SLODoelen 
              userProfile={lesplanData.profiel} 
              onComplete={handleSLOComplete}
              selectedDoelen={lesplanData.sloDoelen}
            />
          )}
          
          {!showCompactMode && currentStep === 3 && lesplanData.profiel && (
            <InstructieModellen 
              userProfile={lesplanData.profiel}
              onComplete={handleInstructieComplete}
              selectedModel={lesplanData.instructiemodel}
            />
          )}
          
          {!showCompactMode && currentStep === 4 && lesplanData.profiel && (
            <Werkvormen 
              userProfile={lesplanData.profiel}
              onComplete={handleWerkvormenComplete}
              selectedWerkvormen={lesplanData.werkvormen}
            />
          )}
          
          {!showCompactMode && currentStep === 5 && lesplanData.profiel && (
            <SELActiviteiten 
              userProfile={lesplanData.profiel}
              onComplete={handleSELComplete}
              selectedActiviteiten={lesplanData.selActiviteiten}
            />
          )}
          
          {!showCompactMode && currentStep === 6 && (
            <LesplanGenerator 
              lesplanData={lesplanData}
              onBack={() => setCurrentStep(5)}
            />
          )}

          {/* Compacte modus */}
          {showCompactMode && currentStep === 1 && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 Snelle Setup</h2>
              
              {/* Profiel in compacte vorm */}
              <div className="mb-6">
                <ProfielSelector 
                  onComplete={handleProfileComplete} 
                  currentProfile={lesplanData.profiel} 
                />
              </div>
              
              {/* SLO-doelen in compacte vorm als profiel compleet is */}
              {lesplanData.profiel && (
                <div className="border-t border-gray-200 pt-6">
                  <SLODoelen 
                    userProfile={lesplanData.profiel} 
                    onComplete={handleSLOComplete}
                    selectedDoelen={lesplanData.sloDoelen}
                  />
                </div>
              )}
            </div>
          )}
          
          {showCompactMode && currentStep === 2 && lesplanData.profiel && (
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 Methode & Werkvormen</h2>
              
              {/* Instructiemodel */}
              <div className="mb-6">
                <InstructieModellen 
                  userProfile={lesplanData.profiel}
                  onComplete={handleInstructieComplete}
                  selectedModel={lesplanData.instructiemodel}
                />
              </div>
              
              {/* Werkvormen als instructiemodel gekozen is */}
              {lesplanData.instructiemodel && (
                <div className="border-t border-gray-200 pt-6">
                  <Werkvormen 
                    userProfile={lesplanData.profiel}
                    onComplete={handleWerkvormenComplete}
                    selectedWerkvormen={lesplanData.werkvormen}
                  />
                </div>
              )}
            </div>
          )}
          
          {showCompactMode && currentStep === 3 && (
            <LesplanGenerator 
              lesplanData={lesplanData}
              onBack={() => setCurrentStep(2)}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              © 2024 PO LesWizard - Professionele lesplanning voor het Primair Onderwijs
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Powered by AI</span>
              <span>•</span>
              <span>Gebaseerd op SLO-kerndoelen</span>
              <span>•</span>
              <span>Wetenschappelijk onderbouwd</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}