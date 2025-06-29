'use client'

import { useState } from 'react'
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
  type: 'schoolplan' | 'jaarplan' | 'methode' | 'toetsplan' | 'beleid'
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

  const steps = [
    { id: 1, title: 'Profiel', icon: '👤', description: 'Stel je profiel in' },
    { id: 2, title: 'Documenten', icon: '📚', description: 'School documenten' },
    { id: 3, title: 'Doelen', icon: '🎯', description: 'SLO & school doelen' },
    { id: 4, title: 'Instructiemodel', icon: '📖', description: 'Kies je aanpak' },
    { id: 5, title: 'Werkvormen', icon: '🎲', description: 'Selecteer activiteiten' },
    { id: 6, title: 'SEL', icon: '💝', description: 'Sociaal-emotioneel leren' },
    { id: 7, title: 'Taxonomie', icon: '🧠', description: 'Denkniveaus & toetsing' },
    { id: 8, title: 'Lesplan', icon: '📋', description: 'Genereer je lesplan' }
  ]

  const handleProfileComplete = (profile: UserProfile) => {
    setUserProfile(profile)
    setLesplanData(prev => ({ ...prev, profiel: profile }))
    setCurrentStep(2)
  }

  const handleDocumentenComplete = (documenten: SchoolDocument[]) => {
    setSchoolDocumenten(documenten)
    setCurrentStep(3)
  }

  const handleDoelenComplete = (sloDoelen: any[], schoolDoelen: any[]) => {
    setLesplanData(prev => ({ ...prev, sloDoelen, schoolDoelen }))
    setCurrentStep(4)
  }

  const handleInstructieComplete = (model: any) => {
    setLesplanData(prev => ({ ...prev, instructiemodel: model }))
    setCurrentStep(5)
  }

  const handleWerkvormenComplete = (werkvormen: any[]) => {
    setLesplanData(prev => ({ ...prev, werkvormen }))
    setCurrentStep(6)
  }

  const handleSELComplete = (activiteiten: any[]) => {
    setLesplanData(prev => ({ ...prev, selActiviteiten: activiteiten }))
    setCurrentStep(7)
  }

  const handleTaxonomieComplete = (taxonomieNiveau: string, toetsvormen: any[]) => {
    setLesplanData(prev => ({ ...prev, taxonomieNiveau, toetsvormen }))
    setCurrentStep(8)
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
                <h1 className="text-xl font-bold text-gray-900">PO LesWizard Pro</h1>
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
          <div className="flex items-center justify-between py-4 overflow-x-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-shrink-0">
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
        </div>
      </main>
    </div>
  )
}