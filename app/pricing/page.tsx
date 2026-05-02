import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, X, ArrowRight, ChevronDown, Shield, Zap, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prijzen — AI-Contractagent',
  description: 'Transparante prijzen voor AI-Contractagent. Starter vanaf €149/mnd, Professioneel €349/mnd, Enterprise op aanvraag.',
}

interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  highlight: boolean
  badge?: string
  features: { label: string; value: string | boolean }[]
  cta: string
}

const tiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '€149',
    period: '/maand',
    description: 'Ideaal voor kleinere aannemers en adviseurs die willen starten met AI-contractbeheer.',
    highlight: false,
    cta: 'Gratis proberen',
    features: [
      { label: 'Contracten', value: 'Tot 50' },
      { label: 'Gebruikers', value: '3' },
      { label: 'AI-vragen per maand', value: '200' },
      { label: 'Projecten', value: '5' },
      { label: 'Verloopalerts', value: true },
      { label: 'Training module', value: false },
      { label: 'SSO / SAML', value: false },
      { label: 'Prioriteitssupport', value: false },
      { label: 'Eigen domein', value: false },
    ],
  },
  {
    name: 'Professioneel',
    price: '€349',
    period: '/maand',
    description: 'Voor groeiende bouw- en infrateams die onbeperkt willen werken met AI-contractbeheer.',
    highlight: true,
    badge: 'Meest gekozen',
    cta: 'Gratis proberen',
    features: [
      { label: 'Contracten', value: 'Onbeperkt' },
      { label: 'Gebruikers', value: '10' },
      { label: 'AI-vragen per maand', value: 'Onbeperkt' },
      { label: 'Projecten', value: 'Onbeperkt' },
      { label: 'Verloopalerts', value: true },
      { label: 'Training module', value: true },
      { label: 'SSO / SAML', value: false },
      { label: 'Prioriteitssupport', value: true },
      { label: 'Eigen domein', value: false },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Op aanvraag',
    period: '',
    description: 'Voor grote organisaties met maatwerk-behoeften, SSO, eigen domein en dedicated support.',
    highlight: false,
    cta: 'Contact opnemen',
    features: [
      { label: 'Contracten', value: 'Onbeperkt' },
      { label: 'Gebruikers', value: 'Onbeperkt' },
      { label: 'AI-vragen per maand', value: 'Onbeperkt' },
      { label: 'Projecten', value: 'Onbeperkt' },
      { label: 'Verloopalerts', value: true },
      { label: 'Training module', value: true },
      { label: 'SSO / SAML', value: true },
      { label: 'Prioriteitssupport', value: true },
      { label: 'Eigen domein', value: true },
    ],
  },
]

const faqs = [
  {
    q: 'Kan ik overstappen naar een hoger abonnement?',
    a: 'Ja, op elk moment via uw accountinstellingen. Upgrades zijn direct actief en worden pro-rata verrekend.',
  },
  {
    q: 'Wat gebeurt er met mijn data als ik stop?',
    a: 'U kunt altijd een export opvragen. Data wordt 30 dagen bewaard na opzegging, daarna permanent verwijderd.',
  },
  {
    q: 'Worden mijn contracten gedeeld met andere klanten?',
    a: 'Nee. Elke organisatie heeft een volledig geïsoleerde omgeving. Uw contracten worden nooit gebruikt voor AI-training van andere klanten.',
  },
  {
    q: 'Welke bestandsformaten worden ondersteund?',
    a: 'PDF en DOCX, tot 50 MB per bestand. Andere formaten beschikbaar op aanvraag voor Enterprise.',
  },
  {
    q: 'Is er een API beschikbaar?',
    a: 'Ja, een REST API is beschikbaar voor Enterprise-klanten met volledige documentatie.',
  },
]

const trustItems = [
  { icon: Shield, text: 'GDPR-compliant' },
  { icon: Shield, text: 'ISO 27001' },
  { icon: Zap,    text: 'Data in Nederland' },
  { icon: Star,   text: '99,9% uptime SLA' },
]

function FeatureValue({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return value
      ? <Check className="w-5 h-5 text-green-500 mx-auto" />
      : <X className="w-4 h-4 text-slate-300 mx-auto" />
  }
  return <span className="text-sm font-semibold text-slate-800">{value}</span>
}

export default function PricingPage() {
  return (
    <div>
      {/* Header */}
      <section className="mesh-bg grid-bg py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5">
            Simpele, eerlijke{' '}
            <span className="gradient-text">prijzen</span>
          </h1>
          <p className="text-slate-400 text-xl mb-8 max-w-xl mx-auto">
            Kies het plan dat bij uw organisatie past. Alle plannen inclusief 14 dagen gratis proberen.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {trustItems.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-slate-400 text-sm">
                <Icon className="w-4 h-4 text-blue-400" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-3xl overflow-hidden flex flex-col transition-all duration-200 ${
                  tier.highlight
                    ? 'shadow-2xl shadow-blue-200 scale-105'
                    : 'shadow-sm hover:shadow-xl'
                }`}
              >
                {tier.badge && (
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-2 text-center tracking-widest uppercase">
                    {tier.badge}
                  </div>
                )}

                <div className={`p-8 ${tier.highlight ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white' : 'bg-white'}`}>
                  <h2 className={`text-xl font-bold mb-1 ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>{tier.name}</h2>
                  <p className={`text-sm mb-6 ${tier.highlight ? 'text-blue-200' : 'text-slate-500'}`}>{tier.description}</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className={`text-5xl font-black ${tier.highlight ? 'text-white' : 'text-slate-900'}`}>{tier.price}</span>
                    {tier.period && (
                      <span className={`text-base font-medium ${tier.highlight ? 'text-blue-200' : 'text-slate-400'}`}>{tier.period}</span>
                    )}
                  </div>
                  <Link
                    href="/contact"
                    className={`block text-center font-bold py-3.5 rounded-xl transition-all ${
                      tier.highlight
                        ? 'bg-white text-blue-700 hover:bg-blue-50 shadow-lg'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-200'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>

                <div className="bg-white flex-1 p-6 border border-slate-100 border-t-0 rounded-b-3xl">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Inbegrepen</div>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature.label} className="flex items-center justify-between gap-4">
                        <span className="text-sm text-slate-600">{feature.label}</span>
                        <div className="flex-shrink-0">
                          <FeatureValue value={feature.value} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            Alle abonnementen inclusief 14 dagen gratis proberen · Geen creditcard vereist · Direct opzegbaar
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Veelgestelde vragen</h2>
            <p className="text-slate-500 text-lg">Staat uw vraag er niet bij? Neem gerust contact op.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
                  <span>{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-5 pt-2 text-slate-600 leading-relaxed text-sm border-t border-slate-200">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Nog vragen over onze prijzen?</h2>
          <p className="text-slate-400 text-lg mb-8">Ons team helpt u graag het juiste abonnement kiezen.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-8 py-4 rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all shadow-2xl shadow-blue-900/50"
            >
              Neem contact op
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:border-white/40 hover:bg-white/5 transition-all"
            >
              Bekijk alle functies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
