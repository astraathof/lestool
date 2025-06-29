'use client'

import { useState, useEffect } from 'react'
import { UserProfile } from './LesWizard'

interface ProfielBeheerProps {
  onProfileSelect: (profile: UserProfile) => void
  currentProfile: UserProfile | null
}

interface SavedProfile extends UserProfile {
  id: string
  naam: string
  beschrijving: string
  laatstGebruikt: Date
  aangemaakt: Date
}

export default function ProfielBeheer({ onProfileSelect, currentProfile }: ProfielBeheerProps) {
  const [savedProfiles, setSavedProfiles] = useState<SavedProfile[]>([])
  const [showSaveDialog, setShowSaveDialog] = useState(false)
  const [showLoadDialog, setShowLoadDialog] = useState(false)
  const [profileName, setProfileName] = useState('')
  const [profileDescription, setProfileDescription] = useState('')

  // Laad opgeslagen profielen bij component mount
  useEffect(() => {
    loadSavedProfiles()
  }, [])

  const loadSavedProfiles = () => {
    try {
      const saved = localStorage.getItem('leswizard_profiles')
      if (saved) {
        const profiles = JSON.parse(saved).map((p: any) => ({
          ...p,
          laatstGebruikt: new Date(p.laatstGebruikt),
          aangemaakt: new Date(p.aangemaakt)
        }))
        setSavedProfiles(profiles.sort((a: SavedProfile, b: SavedProfile) => 
          b.laatstGebruikt.getTime() - a.laatstGebruikt.getTime()
        ))
      }
    } catch (error) {
      console.error('Fout bij laden profielen:', error)
    }
  }

  const saveCurrentProfile = () => {
    if (!currentProfile || !profileName.trim()) return

    const newProfile: SavedProfile = {
      ...currentProfile,
      id: Date.now().toString(),
      naam: profileName.trim(),
      beschrijving: profileDescription.trim(),
      laatstGebruikt: new Date(),
      aangemaakt: new Date()
    }

    try {
      const updatedProfiles = [newProfile, ...savedProfiles.filter(p => p.naam !== profileName.trim())]
      localStorage.setItem('leswizard_profiles', JSON.stringify(updatedProfiles))
      setSavedProfiles(updatedProfiles)
      setShowSaveDialog(false)
      setProfileName('')
      setProfileDescription('')
    } catch (error) {
      console.error('Fout bij opslaan profiel:', error)
      alert('Fout bij opslaan profiel. Probeer opnieuw.')
    }
  }

  const loadProfile = (profile: SavedProfile) => {
    // Update laatst gebruikt timestamp
    const updatedProfile = {
      ...profile,
      laatstGebruikt: new Date()
    }

    try {
      const updatedProfiles = savedProfiles.map(p => 
        p.id === profile.id ? updatedProfile : p
      ).sort((a, b) => b.laatstGebruikt.getTime() - a.laatstGebruikt.getTime())
      
      localStorage.setItem('leswizard_profiles', JSON.stringify(updatedProfiles))
      setSavedProfiles(updatedProfiles)
      
      // Stuur profiel naar parent component
      onProfileSelect(updatedProfile)
      setShowLoadDialog(false)
    } catch (error) {
      console.error('Fout bij laden profiel:', error)
    }
  }

  const deleteProfile = (profileId: string) => {
    if (confirm('Weet je zeker dat je dit profiel wilt verwijderen?')) {
      try {
        const updatedProfiles = savedProfiles.filter(p => p.id !== profileId)
        localStorage.setItem('leswizard_profiles', JSON.stringify(updatedProfiles))
        setSavedProfiles(updatedProfiles)
      } catch (error) {
        console.error('Fout bij verwijderen profiel:', error)
      }
    }
  }

  const getProfileSummary = (profile: UserProfile) => {
    const groepLabel = {
      'groep1-2': 'Groep 1-2',
      'groep3-4': 'Groep 3-4', 
      'groep5-6': 'Groep 5-6',
      'groep7-8': 'Groep 7-8',
      'combinatie': 'Combinatiegroep'
    }[profile.groep] || profile.groep

    const ervaringLabel = {
      'starter': 'Starter (0-2 jaar)',
      'ervaren': 'Ervaren (3-10 jaar)',
      'expert': 'Expert (10+ jaar)',
      'schoolleider': 'Schoolleider'
    }[profile.ervaring] || profile.ervaring

    return `${groepLabel} • ${ervaringLabel} • ${profile.vakgebied.length} vakgebieden`
  }

  return (
    <div className="space-y-4">
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        {currentProfile && (
          <button
            onClick={() => setShowSaveDialog(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span>Profiel opslaan</span>
          </button>
        )}
        
        {savedProfiles.length > 0 && (
          <button
            onClick={() => setShowLoadDialog(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Profiel laden ({savedProfiles.length})</span>
          </button>
        )}
      </div>

      {/* Quick Access - Recent Profiles */}
      {savedProfiles.length > 0 && (
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-3">Recent gebruikte profielen</h4>
          <div className="space-y-2">
            {savedProfiles.slice(0, 3).map((profile) => (
              <button
                key={profile.id}
                onClick={() => loadProfile(profile)}
                className="w-full text-left p-3 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-medium text-blue-900">{profile.naam}</h5>
                    <p className="text-blue-700 text-sm">{getProfileSummary(profile)}</p>
                    {profile.beschrijving && (
                      <p className="text-blue-600 text-xs mt-1">{profile.beschrijving}</p>
                    )}
                  </div>
                  <div className="text-blue-600 text-xs">
                    {profile.laatstGebruikt.toLocaleDateString('nl-NL')}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Save Dialog */}
      {showSaveDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Profiel opslaan</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profielnaam *
                </label>
                <input
                  type="text"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  placeholder="Bijvoorbeeld: Juf Sarah - Groep 3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Beschrijving (optioneel)
                </label>
                <textarea
                  value={profileDescription}
                  onChange={(e) => setProfileDescription(e.target.value)}
                  placeholder="Korte beschrijving van dit profiel..."
                  rows={2}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Preview */}
              <div className="p-3 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Preview:</h4>
                <p className="text-gray-700 text-sm">{getProfileSummary(currentProfile!)}</p>
                {currentProfile?.focus.length > 0 && (
                  <p className="text-gray-600 text-xs mt-1">
                    Focus: {currentProfile.focus.join(', ')}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => {
                  setShowSaveDialog(false)
                  setProfileName('')
                  setProfileDescription('')
                }}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200"
              >
                Annuleren
              </button>
              <button
                onClick={saveCurrentProfile}
                disabled={!profileName.trim()}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  profileName.trim()
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Opslaan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Load Dialog */}
      {showLoadDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Profiel laden</h3>
                <button
                  onClick={() => setShowLoadDialog(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {savedProfiles.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-gray-400 text-4xl mb-4">📁</div>
                  <p className="text-gray-600">Nog geen opgeslagen profielen</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {savedProfiles.map((profile) => (
                    <div
                      key={profile.id}
                      className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{profile.naam}</h4>
                          <p className="text-gray-600 text-sm mt-1">{getProfileSummary(profile)}</p>
                          {profile.beschrijving && (
                            <p className="text-gray-500 text-sm mt-1">{profile.beschrijving}</p>
                          )}
                          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                            <span>Aangemaakt: {profile.aangemaakt.toLocaleDateString('nl-NL')}</span>
                            <span>Laatst gebruikt: {profile.laatstGebruikt.toLocaleDateString('nl-NL')}</span>
                          </div>
                          
                          {/* Focus gebieden */}
                          {profile.focus.length > 0 && (
                            <div className="mt-2">
                              <div className="flex flex-wrap gap-1">
                                {profile.focus.map((focus) => (
                                  <span
                                    key={focus}
                                    className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                                  >
                                    {focus}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => loadProfile(profile)}
                            className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 text-sm"
                          >
                            Laden
                          </button>
                          <button
                            onClick={() => deleteProfile(profile.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                            title="Profiel verwijderen"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}