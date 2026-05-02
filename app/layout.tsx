import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'AI-Contractagent — Slim contractbeheer voor bouw & infra',
  description:
    'AI-Contractagent is het slimme contractbeheersysteem voor bouw- en infrabedrijven. Upload contracten, stel vragen in gewone taal en krijg antwoorden met bronvermelding.',
  keywords: 'contractbeheer, AI, bouw, infra, contractagent, juridisch, projectmanagement',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="bg-white text-slate-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
