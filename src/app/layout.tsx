import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Assistant - Jouw Persoonlijke AI Helper',
  description: 'Een geavanceerde AI-assistent met ondersteuning voor tekst, afbeeldingen, audio en documenten',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="bg-gray-100 min-h-screen" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}