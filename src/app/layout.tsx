import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PO LesWizard - Professionele Lesplanning voor het Primair Onderwijs',
  description: 'Intelligente lesplanning tool met SLO-doelen, instructiemodellen, werkvormen en SEL-activiteiten voor PO professionals',
  keywords: ['primair onderwijs', 'lesplanning', 'SLO', 'instructiemodellen', 'werkvormen', 'SEL'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="bg-gray-50 min-h-screen antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}