import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Steuer & Partner | Steuerberatung Frankfurt',
  description: 'Moderne Steuerberatung für Privatpersonen, Selbstständige und Unternehmen in Frankfurt am Main. Persönlich, kompetent, digital.',
  keywords: 'Steuerberater Frankfurt, Steuererklärung, Buchhaltung, Jahresabschluss, Lohnbuchhaltung',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
