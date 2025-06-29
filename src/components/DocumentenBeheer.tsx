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
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const documentTypes = [
    { id: 'schoolplan', label: 'Schoolplan', icon: '🏫', description: 'Meerjarig beleidsdocument met visie en doelen' },
    { id: 'jaarplan', label: 'Jaarplan', icon: '📅', description: 'Jaarlijkse planning en doelstellingen' },
    { id: 'methode', label: 'Methode Handleiding', icon: '📖', description: 'Lesmethodes en didactische materialen' },
    { id: 'toetsplan', label: 'Toetsplan', icon: '📊', description: 'Planning van toetsen en evaluaties' },
    { id: 'beleid', label: 'Beleidsdocument', icon: '📋', description: 'Specifiek beleid (veiligheid, zorg, etc.)' },
    { id: 'curriculum', label: 'Curriculum', icon: '🎓', description: 'Leerplan en vakinhoudelijke doelen' },
    { id: 'evaluatie', label: 'Evaluatierapport', icon: '📈', description: 'Evaluaties en onderzoeksrapporten' },
    { id: 'protocol', label: 'Protocol', icon: '📝', description: 'Procedures en werkwijzen' }
  ]

  // Uitgebreide lijst van ondersteunde bestandstypen
  const supportedFileTypes = {
    // Documenten
    'application/pdf': '.pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
    'application/msword': '.doc',
    'application/vnd.oasis.opendocument.text': '.odt',
    'application/rtf': '.rtf',
    
    // Tekst bestanden
    'text/plain': '.txt',
    'text/markdown': '.md',
    'text/html': '.html',
    'text/csv': '.csv',
    'application/json': '.json',
    'text/xml': '.xml',
    
    // Spreadsheets
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': '.xlsx',
    'application/vnd.ms-excel': '.xls',
    'application/vnd.oasis.opendocument.spreadsheet': '.ods',
    
    // Presentaties
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': '.pptx',
    'application/vnd.ms-powerpoint': '.ppt',
    'application/vnd.oasis.opendocument.presentation': '.odp',
    
    // Afbeeldingen (voor documenten met afbeeldingen)
    'image/jpeg': '.jpg,.jpeg',
    'image/png': '.png',
    'image/gif': '.gif',
    'image/webp': '.webp',
    'image/svg+xml': '.svg',
    
    // Andere formaten
    'application/epub+zip': '.epub',
    'application/x-yaml': '.yaml,.yml'
  }

  const acceptedExtensions = Object.values(supportedFileTypes).join(',')

  const handleFileSelect = () => {
    if (!documentNaam.trim()) {
      alert('Vul eerst een document naam in')
      return
    }
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      handleFileUpload(file)
    }
    // Reset input value zodat hetzelfde bestand opnieuw gekozen kan worden
    event.target.value = ''
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setDragOver(false)
    
    const files = event.dataTransfer.files
    if (files.length > 0) {
      if (!documentNaam.trim()) {
        alert('Vul eerst een document naam in')
        return
      }
      handleFileUpload(files[0])
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setDragOver(false)
  }

  const isFileTypeSupported = (file: File): boolean => {
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase()
    const mimeType = file.type.toLowerCase()
    
    // Check by MIME type
    if (supportedFileTypes[mimeType as keyof typeof supportedFileTypes]) {
      return true
    }
    
    // Check by extension
    return Object.values(supportedFileTypes).some(extensions => 
      extensions.split(',').some(ext => ext.trim() === fileExtension)
    )
  }

  const handleFileUpload = async (file: File) => {
    if (!file || !documentNaam.trim()) return

    // Check file type
    if (!isFileTypeSupported(file)) {
      alert(`Bestandstype niet ondersteund!\n\nOndersteunde formaten:\n${Object.values(supportedFileTypes).join(', ')}`)
      return
    }

    // Check file size (max 50MB)
    const maxSize = 50 * 1024 * 1024 // 50MB
    if (file.size > maxSize) {
      alert(`Bestand is te groot (max 50MB). Huidig bestand: ${(file.size / 1024 / 1024).toFixed(1)}MB`)
      return
    }

    setIsUploading(true)
    
    try {
      let content = ''
      
      // Handle different file types
      if (file.type === 'text/plain' || file.name.endsWith('.txt') || file.name.endsWith('.md')) {
        // Text files
        content = await file.text()
      } else if (file.type === 'application/json' || file.name.endsWith('.json')) {
        // JSON files
        const jsonText = await file.text()
        try {
          const jsonData = JSON.parse(jsonText)
          content = JSON.stringify(jsonData, null, 2)
        } catch {
          content = jsonText
        }
      } else if (file.type === 'text/csv' || file.name.endsWith('.csv')) {
        // CSV files
        content = await file.text()
      } else if (file.type === 'text/html' || file.name.endsWith('.html')) {
        // HTML files
        content = await file.text()
      } else if (file.type === 'text/xml' || file.name.endsWith('.xml')) {
        // XML files
        content = await file.text()
      } else if (file.name.endsWith('.yaml') || file.name.endsWith('.yml')) {
        // YAML files
        content = await file.text()
      } else {
        // For other file types (PDF, DOCX, etc.), use the upload API
        const formData = new FormData()
        formData.append('file', file)

        const response = await fetch('/api/upload-docx', {
          method: 'POST',
          body: formData,
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || 'Upload failed')
        }

        const data = await response.json()
        content = data.content
      }
      
      // Extract doelen from document content
      const extractedDoelen = extractDoelenFromContent(content, selectedType, file.name)
      
      const newDocument: SchoolDocument = {
        id: Date.now().toString(),
        naam: documentNaam.trim(),
        type: selectedType as any,
        inhoud: content,
        doelen: extractedDoelen,
        uploadDatum: new Date(),
        actief: true
      }

      setDocumenten(prev => [...prev, newDocument])
      setDocumentNaam('')
      setShowUploadForm(false)
      
    } catch (error) {
      console.error('Upload error:', error)
      alert(`Fout bij uploaden van document: ${error instanceof Error ? error.message : 'Onbekende fout'}`)
    } finally {
      setIsUploading(false)
    }
  }

  const extractDoelenFromContent = (content: string, type: string, fileName: string): any[] => {
    const doelen: any[] = []
    
    // Enhanced extraction patterns
    const lines = content.split('\n')
    let doelCounter = 1
    
    lines.forEach((line, index) => {
      const trimmedLine = line.trim()
      
      // Skip empty lines
      if (!trimmedLine) return
      
      // Pattern 1: Lines starting with numbers or bullets that mention learning goals
      if (trimmedLine.match(/^[\d\w\.-]+\s+.*(?:leerling|student|kind).*(?:kan|moet|weet|begrijpt|beheerst)/i)) {
        doelen.push(createDoel(trimmedLine, type, doelCounter++, fileName))
      }
      
      // Pattern 2: Lines with "doel" or "leerdoel"
      else if (trimmedLine.match(/^.*(?:doel|leerdoel|doelstelling).*:/i)) {
        doelen.push(createDoel(trimmedLine, type, doelCounter++, fileName))
      }
      
      // Pattern 3: Lines with learning verbs
      else if (trimmedLine.match(/.*(?:leren|ontwikkelen|beheersen|kunnen|begrijpen|toepassen|analyseren|evalueren|creëren)/i) && 
               trimmedLine.length > 20 && trimmedLine.length < 200) {
        doelen.push(createDoel(trimmedLine, type, doelCounter++, fileName))
      }
      
      // Pattern 4: Competency statements
      else if (trimmedLine.match(/^.*(?:competentie|vaardigheid|kennis).*:/i)) {
        doelen.push(createDoel(trimmedLine, type, doelCounter++, fileName))
      }
      
      // Pattern 5: Curriculum codes (like "NL.3.1" or "RE.2.4")
      else if (trimmedLine.match(/^[A-Z]{2,3}\.\d+\.\d+/)) {
        doelen.push(createDoel(trimmedLine, type, doelCounter++, fileName))
      }
    })
    
    // If no specific goals found, create some general ones based on content
    if (doelen.length === 0) {
      const contentSample = content.substring(0, 500)
      if (contentSample.length > 50) {
        doelen.push(createDoel(`Algemeen doel uit ${fileName}`, type, 1, fileName))
      }
    }
    
    return doelen.slice(0, 20) // Limit to 20 goals per document
  }

  const createDoel = (text: string, type: string, counter: number, fileName: string) => {
    // Clean up the text
    const cleanText = text.replace(/^[\d\w\.-]+\s*/, '').trim()
    const titel = cleanText.length > 100 ? cleanText.substring(0, 100) + '...' : cleanText
    
    return {
      id: `school_${type}_${Date.now()}_${counter}`,
      code: `SCH.${counter.toString().padStart(2, '0')}`,
      titel: titel || `Doel ${counter} uit ${fileName}`,
      beschrijving: text,
      bron: type,
      groep: userProfile.groep,
      vakgebied: userProfile.vakgebied[0] || 'algemeen',
      bestand: fileName
    }
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

  const getFileTypeIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase()
    
    const iconMap: Record<string, string> = {
      'pdf': '📄',
      'docx': '📝', 'doc': '📝', 'odt': '📝', 'rtf': '📝',
      'xlsx': '📊', 'xls': '📊', 'ods': '📊', 'csv': '📊',
      'pptx': '📽️', 'ppt': '📽️', 'odp': '📽️',
      'txt': '📄', 'md': '📄', 'html': '🌐',
      'json': '🔧', 'xml': '🔧', 'yaml': '🔧', 'yml': '🔧',
      'jpg': '🖼️', 'jpeg': '🖼️', 'png': '🖼️', 'gif': '🖼️', 'webp': '🖼️', 'svg': '🖼️',
      'epub': '📚'
    }
    
    return iconMap[extension || ''] || '📄'
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

            {/* Drag & Drop Upload Area */}
            <div>
              <label className="block text-sm font-medium text-blue-900 mb-2">
                Bestand Selecteren *
              </label>
              
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${
                  dragOver 
                    ? 'border-blue-500 bg-blue-100' 
                    : 'border-blue-300 hover:border-blue-400 hover:bg-blue-50'
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  
                  <div>
                    <p className="text-lg font-medium text-blue-900">
                      Sleep je document hier naartoe
                    </p>
                    <p className="text-blue-700 text-sm mt-1">
                      of klik om een bestand te selecteren
                    </p>
                  </div>
                  
                  <button
                    type="button"
                    onClick={handleFileSelect}
                    disabled={!documentNaam.trim() || isUploading}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {isUploading ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Uploaden...</span>
                      </div>
                    ) : (
                      'Bestand Kiezen'
                    )}
                  </button>
                  
                  <div className="text-xs text-blue-600 max-w-2xl">
                    <p className="font-medium mb-1">Ondersteunde formaten:</p>
                    <p>
                      📄 Documenten: PDF, DOCX, DOC, ODT, RTF, TXT, MD, HTML<br/>
                      📊 Spreadsheets: XLSX, XLS, ODS, CSV<br/>
                      📽️ Presentaties: PPTX, PPT, ODP<br/>
                      🔧 Data: JSON, XML, YAML<br/>
                      🖼️ Afbeeldingen: JPG, PNG, GIF, WebP, SVG<br/>
                      📚 Andere: EPUB
                    </p>
                    <p className="mt-1 text-blue-500">Maximum bestandsgrootte: 50MB</p>
                  </div>
                </div>
              </div>
              
              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept={acceptedExtensions}
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>
        )}
      </div>

      {/* Document Types Info */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Ondersteunde Document Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
          Automatische Doelen Extractie & Uitgebreide Bestandsondersteuning
        </h4>
        <p className="text-yellow-800 text-sm">
          Het systeem analyseert geüploade documenten en extraheert automatisch leerdoelen. 
          Ondersteunt nu 20+ bestandsformaten inclusief Office documenten, PDF's, tekst bestanden, spreadsheets en meer.
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