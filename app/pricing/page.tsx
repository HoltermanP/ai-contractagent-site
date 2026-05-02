import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Check, ArrowRight, Shield, Zap, Star, Mail, Phone,
  Bot, FileText, Bell, CheckSquare, BarChart3, Lightbulb, Settings, ChevronDown,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prijzen — AI-Contractagent',
  description: 'Prijzen op aanvraag. Maatwerk voor uw organisatie. Vraag een demo aan en ontvang een persoonlijk voorstel.',
}

const allFeatures = [
  { icon: Bot,          title: 'AI-Contractagent',               desc: 'Onbeperkt vragen stellen aan uw contracten — antwoorden met bronvermelding tot op paragraafniveau.' },
  { icon: FileText,     title: 'Contractbeheer',                 desc: 'Alle contracten gestructureerd per project, type en status. Versiebeheer en audittrail inbegrepen.' },
  { icon: Bell,         title: 'Verloopalerts',                  desc: 'Automatische meldingen via dashboard én e-mail op 90, 60 en 30 dagen voor afloop.' },
  { icon: CheckSquare,  title: 'Verplichtingen & goedkeuringen', desc: 'Registreer verplichtingen met deadline en verantwoordelijke. Stuur goedkeuringsworkflows aan.' },
  { icon: Lightbulb,    title: 'AI-Risicodetectie',              desc: 'Automatische kwaliteitsscan op tegenstrijdigheden, onduidelijkheden en risico\'s op portefeuilleniveau.' },
  { icon: BarChart3,    title: 'AI-Rapportages',                 desc: 'Exporteerbare portfolio-rapportages en management dashboards gegenereerd door AI.' },
  { icon: Settings,     title: 'Instellingen & beheer',          desc: 'Rollen, gebruikers, aangepaste velden, dataretentie en module-zichtbaarheid volledig instelbaar.' },
]

const profiles = [
  {
    name: 'Regionale aannemer',
    icon: '🏗️',
    desc: 'Voor kleinere aannemers en adviseurs die professioneel contractbeheer willen inrichten met AI-ondersteuning.',
    size: 'Kleine teams',
    highlights: [
      'AI-Contractagent volledig beschikbaar',
      'Contractbeheer & versiebeheer',
      'Verloopalerts',
      'Standaard rapportages',
      'Onboarding-sessie inbegrepen',
    ],
  },
  {
    name: 'Groeiend infrateam',
    icon: '🔧',
    featured: true,
    desc: 'Voor groeiende bouw- en infrateams die diepgaand met AI op hun volledige portfolio willen werken.',
    size: 'Middelgrote organisaties',
    highlights: [
      'Alle modules volledig beschikbaar',
      'AI-Risicodetectie & geavanceerde analyse',
      'Onbeperkte contracten & projecten',
      'Prioriteitssupport',
      'Dedicated onboarding-traject',
    ],
  },
  {
    name: 'Enterprise',
    icon: '🏢',
    desc: 'Grote organisaties met maatwerk-behoeften, SSO-integratie, eigen domein en een dedicated accountmanager.',
    size: 'Grote organisaties',
    highlights: [
      'Alle modules + maatwerk-uitbreidingen',
      'SSO / SAML-integratie',
      'Eigen domein & white-label opties',
      'Dedicated accountmanager',
      'SLA op maat & contractuele garanties',
    ],
  },
]

const faqs = [
  {
    q: 'Waarom zijn er geen vaste prijzen op de site?',
    a: 'Elke organisatie is anders. Het aantal contracten, gebruikers, projecten en gewenste integraties bepaalt samen de investering. Wij geloven in transparantie — daarom stellen we altijd een helder voorstel op na een kennismakingsgesprek.',
  },
  {
    q: 'Hoe verloopt het aankoopproces?',
    a: 'U vraagt een demo aan, wij demonstreren het platform aan uw team en inventariseren uw specifieke wensen. Binnen enkele werkdagen ontvangt u een persoonlijk voorstel. Bij akkoord zijn we gemiddeld binnen één werkdag operationeel.',
  },
  {
    q: 'Worden mijn contracten gedeeld met andere klanten of gebruikt voor AI-training?',
    a: 'Nooit. Elke organisatie heeft een volledig geïsoleerde omgeving. Uw contracten worden uitsluitend gebruikt voor uw eigen AI-queries — nooit voor het trainen van modellen voor andere klanten.',
  },
  {
    q: 'Welke contracttypen worden ondersteund?',
    a: 'UAV-GC, UAV 2012, DBFM/DBFMO, raamcontracten, NEC3/NEC4 en basisovereenkomsten worden native ondersteund. Andere contracttypen en internationale standaarden zijn beschikbaar op aanvraag.',
  },
  {
    q: 'Is er een API beschikbaar voor integratie met onze systemen?',
    a: 'Ja. Een REST API is beschikbaar voor Enterprise-klanten met volledige documentatie en technische ondersteuning tijdens implementatie.',
  },
  {
    q: 'Hoe zit het met beveiliging en GDPR-compliance?',
    a: 'AI-Contractagent is volledig GDPR-compliant, ISO 27001-gecertificeerd en data wordt opgeslagen op Nederlandse servers. Wij verstrekken op aanvraag een verwerkersovereenkomst en security-documentatie.',
  },
]

const trustItems = [
  { icon: Shield, text: 'GDPR-compliant' },
  { icon: Shield, text: 'ISO 27001' },
  { icon: Zap,    text: 'Data in Nederland' },
  { icon: Star,   text: '99,9% uptime SLA' },
]

export default function PricingPage() {
  return (
    <div>

      {/* ── Hero ── */}
      <section className="mesh-bg grid-bg py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 to-indigo-600/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            Prijzen op aanvraag
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5 leading-tight">
            Maatwerk voor<br />
            <span className="gradient-text">uw organisatie</span>
          </h1>
          <p className="text-slate-400 text-xl mb-8 max-w-2xl mx-auto">
            Elke organisatie is anders. Wij stellen een helder, transparant voorstel op op basis van uw specifieke situatie — geen verborgen kosten, geen verrassingen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-8 py-4 rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all shadow-2xl shadow-blue-900/50 text-lg">
              Vraag een demo aan <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+31201234567" className="inline-flex items-center justify-center gap-2 glass text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/15 transition-all text-lg">
              <Phone className="w-5 h-5" /> Bel ons direct
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {trustItems.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-slate-400 text-sm">
                <Icon className="w-4 h-4 text-blue-400" />{text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Profielen ── */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Voor elke organisatiegrootte</h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Of u nu een regionaal aannemersbedrijf bent of een grote infraorganisatie — AI-Contractagent past zich aan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {profiles.map((profile) => (
              <div
                key={profile.name}
                className={`relative rounded-3xl overflow-hidden flex flex-col ${
                  profile.featured
                    ? 'shadow-2xl shadow-blue-200 scale-105 ring-2 ring-blue-500/30'
                    : 'shadow-sm hover:shadow-xl border border-slate-200'
                }`}
              >
                {profile.featured && (
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-2 text-center tracking-widest uppercase">
                    Meest gekozen
                  </div>
                )}
                <div className={`p-8 ${profile.featured ? 'bg-gradient-to-br from-blue-600 to-indigo-700' : 'bg-white'}`}>
                  <div className="text-3xl mb-3">{profile.icon}</div>
                  <h3 className={`text-xl font-bold mb-2 ${profile.featured ? 'text-white' : 'text-slate-900'}`}>{profile.name}</h3>
                  <p className={`text-sm mb-4 ${profile.featured ? 'text-blue-100' : 'text-slate-500'}`}>{profile.desc}</p>
                  <div className={`text-xs font-semibold mb-6 ${profile.featured ? 'text-blue-200' : 'text-slate-400'}`}>
                    {profile.size}
                  </div>
                  <Link
                    href="/contact"
                    className={`block text-center font-bold py-3.5 rounded-xl transition-all ${
                      profile.featured
                        ? 'bg-white text-blue-700 hover:bg-blue-50 shadow-lg'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-200'
                    }`}
                  >
                    Vraag offerte aan
                  </Link>
                </div>
                <div className="bg-white flex-1 p-6 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Inbegrepen</div>
                  <ul className="space-y-3">
                    {profile.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-slate-700">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-500 mt-8">
            Alle abonnementen inclusief persoonlijke onboarding · Direct opzegbaar · Data in Nederland
          </p>
        </div>
      </section>

      {/* ── Alle features ── */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Alles inbegrepen, geen verborgen kosten</h2>
            <p className="text-slate-500 text-lg">Elk abonnement geeft toegang tot het volledige platform.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {allFeatures.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1">{f.title}</div>
                    <div className="text-slate-500 text-sm leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Veelgestelde vragen</h2>
            <p className="text-slate-500 text-lg">Staat uw vraag er niet bij? Neem gerust contact op.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-slate-900 hover:bg-slate-50 transition-colors">
                  <span>{faq.q}</span>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-5 pt-2 text-slate-600 leading-relaxed text-sm border-t border-slate-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Klaar voor een persoonlijk gesprek?</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Plan een demo en ontvang binnen twee werkdagen een transparant voorstel op maat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-8 py-4 rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all shadow-2xl shadow-blue-900/50"
            >
              Demo aanvragen <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:info@ai-contractagent.nl"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:border-white/40 hover:bg-white/5 transition-all"
            >
              <Mail className="w-4 h-4" /> info@ai-contractagent.nl
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
