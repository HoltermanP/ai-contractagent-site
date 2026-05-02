import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Bot, FileText, LayoutDashboard,
  CheckSquare, Bell, Lightbulb, Settings, ArrowRight, Check,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Functies — AI-Contractagent',
  description: 'Ontdek alle modules van AI-Contractagent: AI-contractvragen, risicodetectie, verloopalerts en rapportages.',
}

interface Module {
  icon: React.ElementType
  color: string
  textAccent: string
  title: string
  description: string
  bullets: string[]
  photo?: string
  photoAlt?: string
}

const modules: Module[] = [
  {
    icon: Bot,
    color: 'from-blue-600 to-indigo-600',
    textAccent: 'text-blue-600',
    title: 'AI-Contractagent',
    description: 'De kern van het platform. Stel vragen in gewone taal en krijg directe antwoorden met exacte bronvermelding — documentnaam én paragraaf.',
    bullets: [
      'Vragen over portfolio, project of één contract',
      'Bronvermelding: documentnaam + paragraafnummer',
      'Automatische vervolgvraag-suggesties',
      'Veelgestelde vragen als snelknoppen opgeslagen',
      'Externe referentie-URLs als extra kennisbron',
    ],
    photo: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=90&auto=format&fit=crop',
    photoAlt: 'AI interface laptop scherm',
  },
  {
    icon: FileText,
    color: 'from-indigo-600 to-purple-600',
    textAccent: 'text-indigo-600',
    title: 'Contractbeheer',
    description: 'Alle contracten op één plek per project. Van aanmaken tot archiveren — inclusief versiebeheer en volledige audittrail.',
    bullets: [
      'Type, status, looptijd, waarde, valuta en projectkoppeling',
      'PDF/DOCX: hoofd-contractstuk, addenda en bijlagen',
      'Versiebeheer van alle documenten',
      'Archivering + audittrail van alle wijzigingen',
    ],
    photo: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=90&auto=format&fit=crop',
    photoAlt: 'Contractdocumenten op bureau',
  },
  {
    icon: LayoutDashboard,
    color: 'from-cyan-600 to-blue-600',
    textAccent: 'text-cyan-700',
    title: 'Dashboard & KPIs',
    description: 'Live overzicht van uw contractlandschap: aantallen, statusverdeling en recent gewijzigde contracten in één oogopslag.',
    bullets: [
      'Live tellers: actief, vervalt ≤30/90d, open verplichtingen',
      'Grafiek van contractverdeling per status',
      'Recentelijk gewijzigde contracten',
      'Openstaande goedkeuringen',
    ],
    photo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=90&auto=format&fit=crop',
    photoAlt: 'Dashboard met KPI grafieken',
  },
  {
    icon: Bell,
    color: 'from-orange-500 to-red-500',
    textAccent: 'text-orange-600',
    title: 'Verloopalerts',
    description: 'Automatische meldingen via dashboard én e-mail, 90, 60 en 30 dagen voor afloop. Nooit meer verrast door een verlopen contract.',
    bullets: [
      'Dashboard-notificaties per contract',
      'E-mailalerts via dagelijkse verwerking',
      'Configureerbaar per organisatie',
    ],
    photo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=90&auto=format&fit=crop',
    photoAlt: 'Notificaties op smartphone',
  },
  {
    icon: CheckSquare,
    color: 'from-green-600 to-teal-600',
    textAccent: 'text-green-700',
    title: 'Verplichtingen & Goedkeuringen',
    description: 'Registreer contractuele verplichtingen met deadline en verantwoordelijke. Stuur goedkeuringsworkflows aan tot meerdere goedkeurders.',
    bullets: [
      'Verplichtingen met deadline en verantwoordelijke',
      'Goedkeuringsworkflow (meerdere goedkeurders)',
      'Status: open → in behandeling → goedgekeurd/afgewezen',
    ],
  },
  {
    icon: Lightbulb,
    color: 'from-amber-500 to-orange-500',
    textAccent: 'text-amber-700',
    title: 'AI-Inzichten',
    description: 'Laat AI uw portfolio analyseren op patronen, risico\'s en kwaliteitspunten. Van veelgestelde vragen tot contractkwaliteitsscans.',
    bullets: [
      'Top-10 veelgestelde vragen geclusterd door AI',
      'Praktijkpunten per project met voorbeelden',
      'Kwaliteitsscan: onduidelijkheden en tegenstrijdigheden',
    ],
  },
  {
    icon: Lightbulb,
    color: 'from-amber-500 to-orange-500',
    textAccent: 'text-amber-700',
    title: 'AI-Risicodetectie & Analyse',
    description: 'AI scant uw contractportfolio proactief op risico\'s, tegenstrijdigheden en onduidelijke clausules — zodat u altijd een stap voor bent.',
    bullets: [
      'Automatische kwaliteitsscan per contract',
      'Signalering van onduidelijke en tegenstrijdige clausules',
      'Risico-overzicht op portefeuilleniveau',
      'AI-clustering van terugkerende knelpunten',
    ],
    photo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=90&auto=format&fit=crop',
    photoAlt: 'AI risicoanalyse dashboard',
  },
  {
    icon: Settings,
    color: 'from-slate-600 to-slate-800',
    textAccent: 'text-slate-700',
    title: 'Instellingen & Beheer',
    description: 'Volledige controle over gebruikers, rollen, aangepaste velden en organisatie-instellingen.',
    bullets: [
      'Rollen: Admin, Registrator, Manager, Reader',
      'Aangepaste velden per contract',
      'Dataretentie en module-zichtbaarheid',
      'Teamuitnodigingen per e-mail',
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div>
      {/* ══════════════════════════════════════════════
          HERO — split: tekst links, teamfoto rechts (volledig zichtbaar)
      ══════════════════════════════════════════════ */}
      <section className="flex flex-col lg:flex-row min-h-[560px]">
        {/* Donkere tekst-kant */}
        <div className="lg:w-1/2 bg-slate-950 flex items-center relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative px-10 py-16 lg:px-16 lg:py-20 max-w-xl">
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
              Alle functies.<br />
              <span className="gradient-text">Één platform.</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed mb-8">
              AI-Contractagent biedt alles wat bouw- en infrabedrijven nodig hebben voor
              professioneel, AI-ondersteund contractbeheer.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-7 py-3.5 rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg">
              Vraag een demo aan <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        {/* Foto-kant — volledig zichtbaar */}
        <div className="relative lg:w-1/2 min-h-[380px] lg:min-h-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=960&q=90&auto=format&fit=crop"
            alt="Team werkt samen aan contracten"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MODULE GRID — foto-kaarten per module
      ══════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-16 lg:py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Alle modules in één overzicht</h2>
            <p className="text-slate-500">Klik door naar de details hieronder.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {modules.map((m) => {
              const Icon = m.icon
              return (
                <div key={m.title} className="relative rounded-2xl overflow-hidden group card-hover shadow-sm cursor-default">
                  {m.photo ? (
                    <>
                      <div className="relative h-32">
                        <Image src={m.photo} alt={m.photoAlt ?? m.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-slate-900/50" />
                      </div>
                      <div className="bg-white p-4 flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${m.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-bold text-slate-900 leading-tight">{m.title}</span>
                      </div>
                    </>
                  ) : (
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 h-full flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-bold text-slate-900 leading-tight">{m.title}</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MODULE DETAILS — afwisselend split-layout
          Modules MET foto: 50/50 split (foto volledig zichtbaar)
          Modules ZONDER foto: brede kaart met bullets
      ══════════════════════════════════════════════ */}
      <section className="bg-white">
        {modules.map((mod, index) => {
          const Icon = mod.icon
          const isEven = index % 2 === 0

          if (mod.photo) {
            return (
              <div
                key={mod.title}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-[480px] border-b border-slate-100`}
              >
                {/* Foto-zijde — volledig zichtbaar */}
                <div className="relative lg:w-2/5 min-h-[320px] lg:min-h-0 overflow-hidden">
                  <Image
                    src={mod.photo}
                    alt={mod.photoAlt ?? mod.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/40" />
                  <div className="absolute top-6 left-6">
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${mod.color} text-white px-3 py-1.5 rounded-full shadow text-xs font-bold`}>
                      <Icon className="w-3.5 h-3.5" />
                      {mod.title}
                    </div>
                  </div>
                </div>

                {/* Content-zijde */}
                <div className="flex-1 p-10 lg:p-14 flex flex-col justify-center">
                  <h2 className={`text-3xl font-black mb-3 ${mod.textAccent}`}>{mod.title}</h2>
                  <p className="text-slate-600 leading-relaxed mb-7">{mod.description}</p>
                  <ul className="space-y-3">
                    {mod.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${mod.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-slate-700 text-sm leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          }

          return (
            <div key={mod.title} className="border-b border-slate-100 p-10 lg:p-14">
              <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-10 items-start">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${mod.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className={`text-2xl font-black mb-2 ${mod.textAccent}`}>{mod.title}</h2>
                  <p className="text-slate-600 mb-5">{mod.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {mod.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${mod.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span className="text-slate-600 text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      {/* ══════════════════════════════════════════════
          CTA — foto 50% zichtbaar
      ══════════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=75&auto=format&fit=crop"
          alt="Modern kantoor"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">Klaar om te starten?</h2>
          <p className="text-slate-300 text-xl mb-8">Persoonlijke onboarding inbegrepen. Gemiddeld binnen 1 werkdag operationeel.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-10 py-4 rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all shadow-2xl text-lg">
            Vraag een demo aan <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
