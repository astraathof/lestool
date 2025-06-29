import TestChatBot from '@/components/TestChatBot'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            AI Assistant
          </h1>
          
          <p className="text-xl text-blue-700 font-medium mb-6">
            Jouw persoonlijke AI-assistent met geavanceerde mogelijkheden
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                💬
              </span>
              Chat met AI
            </h2>
            
            <TestChatBot />
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 text-blue-600">
              <span>🚀</span>
              <span>Powered by Gemini AI</span>
              <span>🚀</span>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Geavanceerde AI-assistent met multi-modal mogelijkheden
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}