'use client'

import { useState, useRef } from 'react'
import { UserProfile, SchoolDocument } from './LesWizard'

interface DocumentenBeheerProps {
  userProfile: UserProfile
  onComplete: (documenten: SchoolDocument[]) => void
  schoolDocumenten: SchoolDocument[]
}

export default function DocumentenBeheer({ userProfile, onComplete, schoolDocumenten }: DocumentenBeheerProps) {
  const [documenten, setDocumenten] = useState<SchoolDocument[]>(schoolDocumenten)
  const [isUploading, setIsUploading] = useState(false)
  const [selectedType, setSelectedType] = useState<string>('schoolplan')
  const [documentNaam, setDocumentNaam] = useState('')
  const [showUploadForm, setShowUploadForm] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const documentTypes = [
    { id: 'schoolplan', label: 'Schoolplan', icon: '🏫', description: 'Meerjarig beleidsdocument met visie en doelen' },
    { id: 'jaarplan', label: 'Jaarplan', icon: '📅', description: 'Jaarlijkse planning en doelstellingen' },
    { id: 'methode', label: 'Methode Handleiding', icon: '📖', description: 'Lesmethodes en didactische materialen' },
    { id: 'toetsplan', label: 'Toetsplan', icon: '📊', description: 'Planning van toetsen en evaluaties' },
    { id: 'beleid', label: 'Beleidsdocument', icon: '📋', description: 'Specifiek beleid (veiligheid, zorg, etc.)' }
  ]

  const handleFileUpload = async (file: File) => {
    if (!file || !documentNaam.trim()) return

    setIsUploading(true)
    
    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload-docx', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Upload failed')
      }

      const data = await response.json()
      
      // Extract doelen from document content
      const extractedDoelen = extractDoelenFromContent(data.content, selectedType)
      
      const newDocument: SchoolDocument = {
        id: Date.now().toString(),
        naam: documentNaam.trim(),
        type: selectedType as any,
        inhoud: data.content,
        doelen: extractedDoelen,
        uploadDatum: new Date(),
        actief: true
      }

      setDocumenten(prev => [...prev, newDocument])
      setDocumentNaam('')
      setShowUploadForm(false)
      
    } catch (error) {
      console.error('Upload error:', error)
      alert('Fout bij uploaden van document')
    } finally {
      setIsUploading(false)
    }
  }

  const extractDoelenFromContent = (content: string, type: string): any[] => {
    const doelen: any[] = []
    
    // Simple extraction based on common patterns
    const lines = content.split('\n')
    
    lines.forEach((line, index) => {
      // Look for goal-like patterns
      if (line.match(/^[\d\w\.-]+\s+.*leerling.*kan/i) || 
          line.match(/^doel\s*\d+/i) ||
          line.match(/^leerdoel/i) ||
          line.match(/^.*\s+beheerst/i)) {
        
        doelen.push({
          id: `school_${type}_${index}`,
          code: `SCH.${doelen.length + 1}`,
          titel: line.substring(0, 100),
          beschrijving: line,
          bron: type,
          groep: userProfile.groep,
          vakgebied: userProfile.vakgebied[0] || 'algemeen'
        })
      }
    })
    
    return doelen
  }

  const removeDocument = (id: string) => {
    if (confirm('Weet je zeker dat je dit document wilt verwijderen?')) {
      setDocumenten(prev => prev.filter(doc => doc.id !== id))
    }
  }

  const toggleDocumentStatus = (id: string) => {
    setDocumenten(prev => 
      prev.map(doc => 
        doc.id === id ? { ...doc, actief: !doc.actief } : doc
      )
    )
  }

  const handleContinue = () => {
    onComplete(documenten)
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">School Documenten Beheer</h2>
        <p className="text-gray-600">
          Upload schoolspecifieke documenten zoals het schoolplan, jaarplannen en methode handleidingen. 
          Het systeem extraheert automatisch relevante leerdoelen die naast de SLO-doelen gebruikt kunnen worden.
        </p>
      </div>

      {/* Upload Section */}
      <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-blue-900">Document Uploaden</h3>
          <button
            onClick={() => setShowUploadForm(!showUploadForm)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            {showUploadForm ? 'Annuleren' : '+ Nieuw Document'}
          </button>
        </div>

        {showUploadForm && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">
                  Document Naam *
                </label>
                <input
                  type="text"
                  value={documentNaam}
                  onChange={(e) => setDocumentNaam(e.target.value)}
                  placeholder="Bijvoorbeeld: Schoolplan 2024-2028"
                  className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">
                  Document Type *
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full p-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {documentTypes.map(type => (
                    <option key={type.id} value={type.id}>
                      {type.icon} {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-900 mb-2">
                Bestand Selecteren *
              </label>
              <div className="flex items-center space-x-4">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.docx,.txt,.md"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file && documentNaam.trim()) {
                      handleFileUpload(file)
                    } else if (!documentNaam.trim()) {
                      alert('Vul eerst een document naam in')
                    }
                  }}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={!documentNaam.trim() || isUploading}
                  className="px-4 py-2 bg-white border border-blue-300 text-blue-700 rounded-lg hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isUploading ? 'Uploaden...' : 'Bestand Kiezen'}
                </button>
                <span className="text-sm text-blue-600">
                  Ondersteunde formaten: PDF, DOCX, TXT, MD
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Document Types Info */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Ondersteunde Document Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documentTypes.map(type => (
            <div key={type.id} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-all duration-200">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-2xl">{type.icon}</span>
                <h4 className="font-medium text-gray-900">{type.label}</h4>
              </div>
              <p className="text-sm text-gray-600">{type.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Uploaded Documents */}
      {documenten.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Geüploade Documenten ({documenten.length})
          </h3>
          
          <div className="space-y-4">
            {documenten.map(doc => {
              const typeInfo = documentTypes.find(t => t.id === doc.type)
              
              return (
                <div key={doc.id} className={`p-6 border rounded-lg transition-all duration-200 ${
                  doc.actief ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">{typeInfo?.icon}</span>
                        <div>
                          <h4 className="font-semibold text-gray-900">{doc.naam}</h4>
                          <p className="text-sm text-gray-600">{typeInfo?.label}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          doc.actief ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {doc.actief ? 'Actief' : 'Inactief'}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                        <div>
                          <span className="font-medium">Upload datum:</span>
                          <br />
                          {doc.uploadDatum.toLocaleDateString('nl-NL')}
                        </div>
                        <div>
                          <span className="font-medium">Geëxtraheerde doelen:</span>
                          <br />
                          {doc.doelen.length} doelen gevonden
                        </div>
                        <div>
                          <span className="font-medium">Inhoud grootte:</span>
                          <br />
                          {(doc.inhoud.length / 1024).toFixed(1)} KB
                        </div>
                      </div>

                      {doc.doelen.length > 0 && (
                        <div className="mt-3">
                          <p className="text-sm font-medium text-gray-700 mb-2">Voorbeeld doelen:</p>
                          <div className="space-y-1">
                            {doc.doelen.slice(0, 3).map((doel, index) => (
                              <div key={index} className="text-xs text-gray-600 bg-white p-2 rounded border">
                                <span className="font-mono text-blue-600">{doel.code}:</span> {doel.titel}
                              </div>
                            ))}
                            {doc.doelen.length > 3 && (
                              <p className="text-xs text-gray-500">... en nog {doc.doelen.length - 3} doelen</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => toggleDocumentStatus(doc.id)}
                        className={`px-3 py-1 text-sm rounded transition-all duration-200 ${
                          doc.actief 
                            ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' 
                            : 'bg-green-100 text-green-800 hover:bg-green-200'
                        }`}
                      >
                        {doc.actief ? 'Deactiveren' : 'Activeren'}
                      </button>
                      <button
                        onClick={() => removeDocument(doc.id)}
                        className="px-3 py-1 text-sm bg-red-100 text-red-800 rounded hover:bg-red-200 transition-all duration-200"
                      >
                        Verwijderen
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Info Box */}
      <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="font-medium text-yellow-900 mb-2 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Automatische Doelen Extractie
        </h4>
        <p className="text-yellow-800 text-sm">
          Het systeem analyseert geüploade documenten en extraheert automatisch leerdoelen. 
          Deze worden in de volgende stap naast de SLO-kerndoelen getoond. 
          Je kunt documenten activeren/deactiveren om te bepalen welke doelen beschikbaar zijn.
        </p>
      </div>

      {/* Navigation */}
      <div className="pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            {documenten.filter(d => d.actief).length} actieve documenten • {documenten.reduce((sum, doc) => sum + doc.doelen.length, 0)} school doelen beschikbaar
          </div>
          <button
            onClick={handleContinue}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg font-medium transition-all duration-200"
          >
            Volgende: Doelen selecteren →
          </button>
        </div>
      </div>
    </div>
  )
}