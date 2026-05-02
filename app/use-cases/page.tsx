import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { HardHat, Gauge, Scale, ShoppingCart, ArrowRight, Star, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Toepassingen — AI-Contractagent',
  description: 'Ontdek hoe AI-Contractagent aannemers, projectmanagers, juristen en inkoopmanagers helpt.',
}

interface UseCase {
  icon: React.ElementType
  role: string
  tagline: string
  problem: string
  solution: string
  wins: string[]
  quote: string
  quoteAuthor: string
  quoteRole: string
  photo: string           // grote sectie-foto (volledig zichtbaar)
  personPhoto: string     // kleine portretfoto in quote-kaart
  gradient: string
  accentBg: string
  accentBorder: string
  flip: boolean           // foto links of rechts
}

const useCases: UseCase[] = [
  {
    icon: HardHat,
    role: 'Hoofdaannemer',
    tagline: 'Grip op tientallen onderaannemerscontracten',
    problem: 'Tientallen onderaannemerscontracten met uiteenlopende boete- en garantieclausules bijhouden — een tijdrovende en foutgevoelige klus voor uw projectleiders.',
    solution: 'Upload alle contracten en stel vragen als "Welke boeteclausules gelden voor vertraging bij project Noord?" AI geeft per contract het exacte antwoord met bronvermelding.',
    wins: ['Direct antwoord per contract', 'Boeteclausules op één plek', 'Minder juridische consultatie'],
    quote: 'We besparen onze projectleiders elke week uren aan contractopzoekwerk.',
    quoteAuthor: 'Pieter van den Berg',
    quoteRole: 'Projectdirecteur, Bouwbedrijf De Vries',
    photo: 'https://images.unsplash.com/photo-1504307651394-5cbef3c57302?w=960&q=90&auto=format&fit=crop',
    personPhoto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=96&h=96&q=80&auto=format&fit=crop&crop=face',
    gradient: 'from-blue-600 to-indigo-600',
    accentBg: 'bg-blue-50',
    accentBorder: 'border-blue-200',
    flip: false,
  },
  {
    icon: Gauge,
    role: 'Projectmanager infra',
    tagline: 'Nooit meer verplichtingen missen',
    problem: 'Contractverplichtingen missen doordat ze verspreid zijn over meerdere bijlagen en addenda. Gevolg: boetes, vertraging en herstelwerk.',
    solution: 'AI-Contractagent scant alle documenten en geeft wekelijkse alerts voor naderende verplichtingen, gekoppeld aan de juiste contractpartij en deadline.',
    wins: ['Wekelijkse verplichtingen-alerts', 'Overzicht per project', 'Minder gemiste deadlines'],
    quote: 'Eindelijk één overzicht van wat wij moeten leveren en wanneer.',
    quoteAuthor: 'Sandra Koopman',
    quoteRole: 'Senior projectmanager, Infra Noord BV',
    photo: 'https://images.unsplash.com/photo-1581092921461-7d65ca45c2a7?w=960&q=90&auto=format&fit=crop',
    personPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&q=80&auto=format&fit=crop&crop=face',
    gradient: 'from-indigo-600 to-purple-600',
    accentBg: 'bg-indigo-50',
    accentBorder: 'border-indigo-200',
    flip: true,
  },
  {
    icon: Scale,
    role: 'Juridisch adviseur',
    tagline: 'Contractanalyse in minuten, niet uren',
    problem: 'Handmatig zoeken naar tegenstrijdige clausules kost uren per dossier. Bij grote projecten met tientallen documenten is dit praktisch onhaalbaar.',
    solution: 'De Contractkwaliteit-module scant automatisch op onduidelijkheden en tegenstrijdigheden. Gerichte aandachtspunten zonder handmatig doorspitten.',
    wins: ['Automatische kwaliteitsscan', 'Tegenstrijdigheden direct zichtbaar', '10× sneller dan handmatig'],
    quote: 'Wat voorheen een dag werk was, doe ik nu in een half uur.',
    quoteAuthor: 'Mark Verhoeven',
    quoteRole: 'Juridisch adviseur, Projectbureau Rijnland',
    photo: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=960&q=90&auto=format&fit=crop',
    personPhoto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&q=80&auto=format&fit=crop&crop=face',
    gradient: 'from-violet-600 to-purple-600',
    accentBg: 'bg-violet-50',
    accentBorder: 'border-violet-200',
    flip: false,
  },
  {
    icon: ShoppingCart,
    role: 'Inkoopmanager',
    tagline: 'Geen enkel contract dat ongemerkt verloopt',
    problem: 'Contracten verlopen ongemerkt, waardoor verlengingen gemist worden en inkooponderhandelingen ad hoc moeten plaatsvinden zonder voorbereiding.',
    solution: 'Dashboard-KPIs en automatische e-mailalerts 90, 60 en 30 dagen voor afloop houden de inkoopmanager tijdig op de hoogte.',
    wins: ['Alerts op 90/60/30 dagen', 'Dashboard per contracttype', 'Geen verrassingen meer'],
    quote: 'Geen enkel contract is dit jaar ongemerkt verlopen.',
    quoteAuthor: 'Karin Brouwer',
    quoteRole: 'Inkoopmanager, Van Oord Infra',
    photo: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=960&q=90&auto=format&fit=crop',
    personPhoto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=96&h=96&q=80&auto=format&fit=crop&crop=face',
    gradient: 'from-teal-600 to-cyan-600',
    accentBg: 'bg-teal-50',
    accentBorder: 'border-teal-200',
    flip: true,
  },
]

export default function UseCasesPage() {
  return (
    <div>
      {/* ══════════════════════════════════════════════
          HERO — foto zichtbaar op ~50%
      ══════════════════════════════════════════════ */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80&auto=format&fit=crop"
          alt="Bouwplaats crane"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Voor iedereen die<br />
            met <span className="gradient-text">contracten werkt</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-10">
            Van de projectmanager op de bouwplaats tot de juridisch adviseur op kantoor.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {useCases.map((uc) => {
              const Icon = uc.icon
              return (
                <div key={uc.role} className="glass flex items-center gap-2 px-5 py-2.5 rounded-full">
                  <Icon className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-semibold text-white">{uc.role}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          USE-CASE SECTIES — echte 50/50 split
          Foto-zijde: 0% overlay, foto volledig zichtbaar
          Content-zijde: witte of lichte achtergrond
      ══════════════════════════════════════════════ */}
      {useCases.map((uc) => {
        const Icon = uc.icon
        return (
          <section key={uc.role} className={`flex flex-col ${uc.flip ? 'lg:flex-row-reverse' : 'lg:flex-row'} min-h-[680px]`}>

            {/* ── Foto kolom (volledig zichtbaar) ── */}
            <div className="relative lg:w-1/2 min-h-[420px] lg:min-h-0 overflow-hidden">
              <Image
                src={uc.photo}
                alt={uc.role}
                fill
                className="object-cover object-center"
              />
              {/* Alleen gradient onderaan voor de quote-kaart leesbaarheid */}
              <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-slate-950/85 to-transparent" />

              {/* Rol-badge */}
              <div className="absolute top-6 left-6">
                <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${uc.gradient} text-white px-4 py-2 rounded-full shadow-lg text-sm font-bold`}>
                  <Icon className="w-4 h-4" />
                  {uc.role}
                </div>
              </div>

              {/* Quote-kaart over de foto */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white rounded-2xl p-5 shadow-2xl">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-800 text-sm italic leading-relaxed mb-4">
                    &ldquo;{uc.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-slate-200">
                      <Image src={uc.personPhoto} alt={uc.quoteAuthor} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{uc.quoteAuthor}</div>
                      <div className="text-xs text-slate-500">{uc.quoteRole}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Content kolom ── */}
            <div className="lg:w-1/2 bg-white flex items-center border-b border-slate-100">
              <div className="px-10 py-14 lg:px-14 lg:py-16 max-w-xl w-full">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 leading-tight">
                  {uc.tagline}
                </h2>

                <div className="rounded-2xl bg-red-50 border border-red-200 p-5 mb-4">
                  <div className="text-xs font-black text-red-500 uppercase tracking-widest mb-2">Uitdaging</div>
                  <p className="text-slate-700 text-sm leading-relaxed">{uc.problem}</p>
                </div>

                <div className="rounded-2xl bg-green-50 border border-green-200 p-5 mb-6">
                  <div className="text-xs font-black text-green-700 uppercase tracking-widest mb-2">Oplossing</div>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">{uc.solution}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {uc.wins.map((win) => (
                    <li key={win} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${uc.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-slate-800 font-semibold">{win}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${uc.gradient} text-white font-bold px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-lg`}
                >
                  Plan een demo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        )
      })}

      {/* ══════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=75&auto=format&fit=crop"
          alt="Infrastructuurproject"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">
            Herkenbaar? Probeer het 14 dagen gratis.
          </h2>
          <p className="text-slate-300 text-xl mb-8">Geen creditcard vereist. Direct aan de slag.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-8 py-4 rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all shadow-2xl text-lg">
              Start gratis proefperiode <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center gap-2 glass text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all text-lg">
              Bekijk prijzen
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
