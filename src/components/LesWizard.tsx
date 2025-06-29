'use client'

import { useState, useEffect } from 'react'
import ProfielSelector from './ProfielSelector'
import SLODoelen from './SLODoelen'
import InstructieModellen from './InstructieModellen'
import Werkvormen from './Werkvormen'
import SELActiviteiten from './SELActiviteiten'
import TaxonomieCoach from './TaxonomieCoach'
import DocumentenBeheer from './DocumentenBeheer'
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
  schoolDoelen: any[]
  instructiemodel: any | null
  werkvormen: any[]
  selActiviteiten: any[]
  taxonomieNiveau: string
  toetsvormen: any[]
  lesonderwerp: string
  lesdoelen: string[]
  tijdsduur: number
}

export default function LesWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [schoolDocumenten, setSchoolDocumenten] = useState<SchoolDocument[]>([])
  const [lesplanData, setLesplanData] = useState<LesplanData>({
    profiel: null,
    sloDoelen: [],
    schoolDoelen: [],
    instructiemodel: null,
    werkvormen: [],
    selActiviteiten: [],
    taxonomieNiveau: '',
    toetsvormen: [],
    lesonderwerp: '',
    lesdoelen: [],
    tijdsduur: 45
  })

  // Load saved data on component mount
  useEffect(() => {
    console.log('🔄 LesWizard: Loading saved data...')
    try {
      const savedProfile = localStorage.getItem('leswizard_current_profile')
      const savedLesplanData = localStorage.getItem('leswizard_current_lesplan')
      const savedDocumenten = localStorage.getItem('leswizard_current_documenten')
      const savedStep = localStorage.getItem('leswizard_current_step')
      
      if (savedProfile) {
        const profile = JSON.parse(savedProfile)
        console.log('✅ LesWizard: Loaded profile:', profile)
        setUserProfile(profile)
        setLesplanData(prev => ({ ...prev, profiel: profile }))
      }
      
      if (savedLesplanData) {
        const data = JSON.parse(savedLesplanData)
        console.log('✅ LesWizard: Loaded lesplan data:', data)
        setLesplanData(prev => ({ ...prev, ...data }))
      }
      
      if (savedDocumenten) {
        const docs = JSON.parse(savedDocumenten).map((doc: any) => ({
          ...doc,
          uploadDatum: new Date(doc.uploadDatum)
        }))
        console.log('✅ LesWizard: Loaded documents:', docs.length)
        setSchoolDocumenten(docs)
      }

      if (savedStep) {
        const step = parseInt(savedStep)
        console.log('✅ LesWizard: Loaded step:', step)
        setCurrentStep(step)
      }
    } catch (error) {
      console.error('❌ LesWizard: Error loading saved data:', error)
    }
  }, [])

  // Save data whenever it changes
  useEffect(() => {
    if (userProfile) {
      console.log('💾 LesWizard: Saving profile:', userProfile)
      localStorage.setItem('leswizard_current_profile', JSON.stringify(userProfile))
    }
  }, [userProfile])

  useEffect(() => {
    console.log('💾 LesWizard: Saving lesplan data')
    localStorage.setItem('leswizard_current_lesplan', JSON.stringify(lesplanData))
  }, [lesplanData])

  useEffect(() => {
    console.log('💾 LesWizard: Saving documents')
    localStorage.setItem('leswizard_current_documenten', JSON.stringify(schoolDocumenten))
  }, [schoolDocumenten])

  useEffect(() => {
    console.log('💾 LesWizard: Saving current step:', currentStep)
    localStorage.setItem('leswizard_current_step', currentStep.toString())
  }, [currentStep])

  const steps = [
    { id: 1, title: 'Profiel', icon: '👤', description: 'Stel je profiel in', color: 'from-blue-500 to-blue-600' },
    { id: 2, title: 'Documenten', icon: '📚', description: 'School documenten', color: 'from-purple-500 to-purple-600' },
    { id: 3, title: 'Doelen', icon: '🎯', description: 'SLO & school doelen', color: 'from-green-500 to-green-600' },
    { id: 4, title: 'Instructiemodel', icon: '📖', description: 'Kies je aanpak', color: 'from-orange-500 to-orange-600' },
    { id: 5, title: 'Werkvormen', icon: '🎲', description: 'Selecteer activiteiten', color: 'from-pink-500 to-pink-600' },
    { id: 6, title: 'SEL', icon: '💝', description: 'Sociaal-emotioneel leren', color: 'from-red-500 to-red-600' },
    { id: 7, title: 'Taxonomie', icon: '🧠', description: 'Denkniveaus & toetsing', color: 'from-indigo-500 to-indigo-600' },
    { id: 8, title: 'Lesplan', icon: '📋', description: 'Genereer je lesplan', color: 'from-emerald-500 to-emerald-600' }
  ]

  const handleProfileComplete = (profile: UserProfile) => {
    console.log('🎯 LesWizard: Profile completed:', profile)
    setUserProfile(profile)
    setLesplanData(prev => ({ ...prev, profiel: profile }))
    setCurrentStep(2)
  }

  const handleDocumentenComplete = (documenten: SchoolDocument[]) => {
    console.log('📚 LesWizard: Documents completed:', documenten.length)
    setSchoolDocumenten(documenten)
    setCurrentStep(3)
  }

  const handleDoelenComplete = (sloDoelen: any[], schoolDoelen: any[]) => {
    console.log('🎯 LesWizard: Goals completed:', { sloDoelen: sloDoelen.length, schoolDoelen: schoolDoelen.length })
    setLesplanData(prev => ({ ...prev, sloDoelen, schoolDoelen }))
    setCurrentStep(4)
  }

  const handleInstructieComplete = (model: any) => {
    console.log('📖 LesWizard: Instruction model completed:', model?.naam)
    setLesplanData(prev => ({ ...prev, instructiemodel: model }))
    setCurrentStep(5)
  }

  const handleWerkvormenComplete = (werkvormen: any[]) => {
    console.log('🎲 LesWizard: Work forms completed:', werkvormen.length)
    setLesplanData(prev => ({ ...prev, werkvormen }))
    setCurrentStep(6)
  }

  const handleSELComplete = (activiteiten: any[]) => {
    console.log('💝 LesWizard: SEL activities completed:', activiteiten.length)
    setLesplanData(prev => ({ ...prev, selActiviteiten: activiteiten }))
    setCurrentStep(7)
  }

  const handleTaxonomieComplete = (taxonomieNiveau: string, toetsvormen: any[]) => {
    console.log('🧠 LesWizard: Taxonomy completed:', { taxonomieNiveau, toetsvormen: toetsvormen.length })
    setLesplanData(prev => ({ ...prev, taxonomieNiveau, toetsvormen }))
    setCurrentStep(8)
  }

  const goToStep = (step: number) => {
    // Allow going back to any completed step, or step 1
    if (step <= currentStep || step === 1) {
      console.log('🔄 LesWizard: Going to step:', step)
      setCurrentStep(step)
    }
  }

  const getStepStatus = (stepId: number) => {
    if (stepId < currentStep) return 'completed'
    if (stepId === currentStep) return 'current'
    return 'upcoming'
  }

  const getCompletionPercentage = () => {
    return Math.round((currentStep / steps.length) * 100)
  }

  // Debug info
  console.log('🔍 LesWizard render:', {
    currentStep,
    hasProfile: !!userProfile,
    profileGroep: userProfile?.groep,
    profileVakgebied: userProfile?.vakgebied
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Modern Header with Glassmorphism */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-lg shadow-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">📚</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                  PO LesWizard Pro
                </h1>
                <p className="text-sm text-gray-600 font-medium">
                  Professionele lesplanning voor het Primair Onderwijs
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Progress Ring */}
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    className="text-gray-200"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - getCompletionPercentage() / 100)}`}
                    className="text-blue-600 transition-all duration-500 ease-out"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-700">{getCompletionPercentage()}%</span>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900">
                  Stap {currentStep} van {steps.length}
                </div>
                <div className="text-xs text-gray-500">
                  {steps[currentStep - 1]?.title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Beautiful Progress Bar */}
      <div className="bg-white/60 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Voortgang</h2>
              <span className="text-sm text-gray-600">{getCompletionPercentage()}% voltooid</span>
            </div>
            
            {/* Progress Steps */}
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-6 left-6 right-6 h-1 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                ></div>
              </div>
              
              {/* Step Indicators */}
              <div className="relative flex justify-between">
                {steps.map((step, index) => {
                  const status = getStepStatus(step.id)
                  
                  return (
                    <button
                      key={step.id}
                      onClick={() => goToStep(step.id)}
                      disabled={status === 'upcoming'}
                      className={`group relative flex flex-col items-center transition-all duration-300 ${
                        status === 'upcoming' ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-105'
                      }`}
                    >
                      {/* Step Circle */}
                      <div className={`relative w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${
                        status === 'completed' 
                          ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25' 
                          : status === 'current'
                          ? `bg-gradient-to-br ${step.color} text-white shadow-lg shadow-blue-500/25 ring-4 ring-blue-200 animate-pulse`
                          : 'bg-gray-200 text-gray-400'
                      }`}>
                        {status === 'completed' ? (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span>{step.icon}</span>
                        )}
                        
                        {/* Pulse Animation for Current Step */}
                        {status === 'current' && (
                          <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20"></div>
                        )}
                      </div>
                      
                      {/* Step Info */}
                      <div className="mt-3 text-center min-w-0">
                        <div className={`text-sm font-semibold transition-colors ${
                          status === 'current' ? 'text-blue-700' : 
                          status === 'completed' ? 'text-green-700' : 'text-gray-400'
                        }`}>
                          {step.title}
                        </div>
                        <div className={`text-xs mt-1 transition-colors ${
                          status === 'current' ? 'text-blue-600' : 
                          status === 'completed' ? 'text-green-600' : 'text-gray-400'
                        }`}>
                          {step.description}
                        </div>
                      </div>
                      
                      {/* Hover Tooltip */}
                      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                        {status === 'upcoming' ? 'Nog niet beschikbaar' : 
                         status === 'completed' ? 'Voltooid - klik om terug te gaan' : 
                         'Huidige stap'}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Beautiful Cards */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative">
          {/* Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl"></div>
          <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-2xl"></div>
          
          {/* Content Card */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/10 border border-white/20 overflow-hidden">
            {/* Card Header */}
            <div className={`h-2 bg-gradient-to-r ${steps[currentStep - 1]?.color || 'from-blue-500 to-purple-500'}`}></div>
            
            {/* Step Content */}
            <div className="relative">
              {currentStep === 1 && (
                <ProfielSelector 
                  onComplete={handleProfileComplete} 
                  currentProfile={userProfile} 
                />
              )}
              
              {currentStep === 2 && userProfile && (
                <DocumentenBeheer 
                  userProfile={userProfile}
                  onComplete={handleDocumentenComplete}
                  schoolDocumenten={schoolDocumenten}
                />
              )}
              
              {currentStep === 3 && userProfile && (
                <SLODoelen 
                  userProfile={userProfile} 
                  onComplete={handleDoelenComplete}
                  selectedDoelen={lesplanData.sloDoelen}
                  schoolDocumenten={schoolDocumenten}
                />
              )}
              
              {currentStep === 4 && userProfile && (
                <InstructieModellen 
                  userProfile={userProfile}
                  onComplete={handleInstructieComplete}
                  selectedModel={lesplanData.instructiemodel}
                />
              )}
              
              {currentStep === 5 && userProfile && (
                <Werkvormen 
                  userProfile={userProfile}
                  onComplete={handleWerkvormenComplete}
                  selectedWerkvormen={lesplanData.werkvormen}
                />
              )}
              
              {currentStep === 6 && userProfile && (
                <SELActiviteiten 
                  userProfile={userProfile}
                  onComplete={handleSELComplete}
                  selectedActiviteiten={lesplanData.selActiviteiten}
                />
              )}
              
              {currentStep === 7 && userProfile && (
                <TaxonomieCoach 
                  userProfile={userProfile}
                  lesplanData={lesplanData}
                  onComplete={handleTaxonomieComplete}
                />
              )}
              
              {currentStep === 8 && (
                <LesplanGenerator 
                  lesplanData={lesplanData}
                  onBack={() => setCurrentStep(7)}
                />
              )}

              {/* Fallback for missing profile */}
              {currentStep > 1 && !userProfile && (
                <div className="p-8 text-center">
                  <div className="text-6xl mb-4">⚠️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Profiel ontbreekt</h3>
                  <p className="text-gray-600 mb-4">
                    Er is geen profiel gevonden. Ga terug naar stap 1 om je profiel in te stellen.
                  </p>
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                  >
                    Terug naar Profiel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button for Quick Actions */}
      <div className="fixed bottom-8 right-8 z-40">
        <div className="relative group">
          <button className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-lg shadow-blue-500/25 flex items-center justify-center text-white hover:scale-110 transition-all duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          
          {/* Quick Info Tooltip */}
          <div className="absolute bottom-16 right-0 bg-gray-900 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Stap {currentStep}: {steps[currentStep - 1]?.title}
            <div className="absolute top-full right-4 border-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </div>
    </div>
  )
}