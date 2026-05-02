import Link from 'next/link'
import { Bot, Mail, Phone } from 'lucide-react'

const productLinks = [
  { href: '/features',   label: 'Functies' },
  { href: '/pricing',    label: 'Prijzen' },
  { href: '/use-cases',  label: 'Toepassingen' },
  { href: '#',           label: 'Roadmap' },
]

const companyLinks = [
  { href: '/contact',   label: 'Contact' },
  { href: '#',          label: 'Privacy' },
  { href: '#',          label: 'Algemene voorwaarden' },
]

const supportLinks = [
  { href: '#', label: 'Handleiding' },
  { href: '/koppelingen', label: 'API-koppelingen' },
  { href: '#', label: 'Status' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-white mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                <Bot className="w-[18px] h-[18px] text-white" />
              </div>
              <span>AI-Contractagent</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed mb-5 max-w-xs">
              AI-contractbeheer voor bouw & infra. Stel vragen aan uw contracten en beheer alles op één plek.
            </p>
            <div className="space-y-2">
              <a href="mailto:info@ai-group.nl" className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                info@ai-group.nl
              </a>
              <a href="tel:0630985351" className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                06-30985351
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-bold text-white mb-4 uppercase tracking-widest">Product</h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold text-white mb-4 uppercase tracking-widest">Bedrijf</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-bold text-white mb-4 uppercase tracking-widest">Support</h3>
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:from-blue-500 hover:to-indigo-500 transition-all"
              >
                Demo aanvragen →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© 2025 AI-Contractagent BV · KVK 12345678</p>
          <div className="flex items-center gap-4">
            <a href="mailto:info@ai-group.nl" className="hover:text-slate-400 transition-colors">
              info@ai-group.nl
            </a>
            <span className="w-1 h-1 rounded-full bg-slate-700" />
            <span>Made in Amsterdam 🇳🇱</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
