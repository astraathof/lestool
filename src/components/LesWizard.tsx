'use client'

import { useState } from 'react'
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

export interface LesplanData {
  profiel: UserProfile | null
  sloDoelen: any[]
  instructiemodel: any | null
  werkvormen: any[]
  selActiviteiten: any[]
  lesonderwerp: string
  lesdoelen: string[]
  tijdsduur: number
}

export default function LesWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [lesplanData, setLesplanData] = useState<LesplanData>({
    profiel: null,
    sloDoelen: [],
    instructiemodel: null,
    werkvormen: [],
    selActiviteiten: [],
    lesonderwerp: '',
    lesdoelen: [],
    tijdsduur: 45
  })

  const steps = [
    { id: 1, title: 'Profiel', icon: '👤', description: 'Stel je profiel in' },
    { id: 2, title: 'SLO-doelen', icon: '🎯', description: 'Selecteer leerdoelen' },
    { id: 3, title: 'Instructiemodel', icon: '📚', description: 'Kies je aanpak' },
    { id: 4, title: 'Werkvormen', icon: '🎲', description: 'Selecteer activiteiten' },
    { id: 5, title: 'SEL', icon: '💝', description: 'Sociaal-emotioneel leren' },
    { id: 6, title: 'Lesplan', icon: '📋', description: 'Genereer je lesplan' }
  ]

  const handleProfileComplete = (profile: UserProfile) => {
    setUserProfile(profile)
    setLesplanData(prev => ({ ...prev, profiel: profile }))
    setCurrentStep(2)
  }

  const handleSLOComplete = (doelen: any[]) => {
    setLesplanData(prev => ({ ...prev, sloDoelen: doelen }))
    setCurrentStep(3)
  }

  const handleInstructieComplete = (model: any) => {
    setLesplanData(prev => ({ ...prev, instructiemodel: model }))
    setCurrentStep(4)
  }

  const handleWerkvormenComplete = (werkvormen: any[]) => {
    setLesplanData(prev => ({ ...prev, werkvormen }))
    setCurrentStep(5)
  }

  const handleSELComplete = (activiteiten: any[]) => {
    setLesplanData(prev => ({ ...prev, selActiviteiten: activiteiten }))
    setCurrentStep(6)
  }

  const goToStep = (step: number) => {
    if (step <= currentStep || step === 1) {
      setCurrentStep(step)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">📚</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">PO LesWizard</h1>
                <p className="text-sm text-gray-600">Professionele lesplanning voor het Primair Onderwijs</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Stap {currentStep} van {steps.length}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => goToStep(step.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    currentStep === step.id
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : currentStep > step.id
                      ? 'bg-green-50 text-green-700 hover:bg-green-100 cursor-pointer'
                      : 'text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={currentStep < step.id && step.id !== 1}
                >
                  <span className="text-lg">{step.icon}</span>
                  <div className="text-left">
                    <div className="text-sm font-medium">{step.title}</div>
                    <div className="text-xs opacity-75">{step.description}</div>
                  </div>
                </button>
                
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-2 ${
                    currentStep > step.id ? 'bg-green-300' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {currentStep === 1 && (
            <ProfielSelector onComplete={handleProfileComplete} currentProfile={userProfile} />
          )}
          
          {currentStep === 2 && userProfile && (
            <SLODoelen 
              userProfile={userProfile} 
              onComplete={handleSLOComplete}
              selectedDoelen={lesplanData.sloDoelen}
            />
          )}
          
          {currentStep === 3 && userProfile && (
            <InstructieModellen 
              userProfile={userProfile}
              onComplete={handleInstructieComplete}
              selectedModel={lesplanData.instructiemodel}
            />
          )}
          
          {currentStep === 4 && userProfile && (
            <Werkvormen 
              userProfile={userProfile}
              onComplete={handleWerkvormenComplete}
              selectedWerkvormen={lesplanData.werkvormen}
            />
          )}
          
          {currentStep === 5 && userProfile && (
            <SELActiviteiten 
              userProfile={userProfile}
              onComplete={handleSELComplete}
              selectedActiviteiten={lesplanData.selActiviteiten}
            />
          )}
          
          {currentStep === 6 && (
            <LesplanGenerator 
              lesplanData={lesplanData}
              onBack={() => setCurrentStep(5)}
            />
          )}
        </div>
      </main>
    </div>
  )
}