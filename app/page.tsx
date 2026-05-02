import Link from 'next/link'
import Image from 'next/image'
import {
  Bot, FileText, Bell, CheckSquare, Lightbulb, BarChart3,
  ArrowRight, Sparkles, Shield, Zap, Clock, Star, Check, ChevronRight,
} from 'lucide-react'
import AppScreenshot from '@/components/ui/app-screenshot'

const features = [
  { icon: Bot,          color: 'from-blue-500 to-indigo-500',   bg: 'bg-blue-50',   title: 'AI-Contractagent',             description: 'Stel vragen in gewone taal. Antwoorden met exacte bronvermelding uit uw eigen documenten.' },
  { icon: FileText,     color: 'from-indigo-500 to-purple-500', bg: 'bg-indigo-50', title: 'Contractbeheer',               description: 'Alle contracten per project. Status, type, afloopdatum en waarde op één plek.' },
  { icon: Bell,         color: 'from-orange-500 to-red-500',    bg: 'bg-orange-50', title: 'Verloopalerts',                description: 'Automatische meldingen 90, 60 en 30 dagen voor afloop. Nooit meer een contract missen.' },
  { icon: CheckSquare,  color: 'from-green-500 to-teal-500',    bg: 'bg-green-50',  title: 'Verplichtingen & goedkeuringen', description: 'Track open verplichtingen en stuur goedkeuringsworkflows aan.' },
  { icon: Lightbulb,     color: 'from-amber-500 to-orange-500',  bg: 'bg-amber-50',  title: 'AI-Risicodetectie',            description: 'AI analyseert uw portfolio op risico\'s, onduidelijkheden en tegenstrijdigheden — proactief en continu.' },
  { icon: BarChart3,    color: 'from-cyan-500 to-blue-500',     bg: 'bg-cyan-50',   title: 'AI-Rapportages',              description: 'Portfolio-samenvatting door AI. Exporteerbare rapportages van uw contractlandschap.' },
]

const stats = [
  { value: '4.500+', label: 'Contracten geanalyseerd', icon: FileText },
  { value: '8u',     label: 'Bespaard per week per projectleider', icon: Clock },
  { value: '99,9%',  label: 'Uptime SLA', icon: Shield },
  { value: '3×',     label: 'Sneller dan handmatig', icon: Zap },
]

const testimonials = [
  {
    quote: 'We besparen onze projectleiders elke week uren aan contractopzoekwerk. Het betaalt zichzelf terug in de eerste maand.',
    name: 'Pieter van den Berg', role: 'Projectdirecteur', company: 'Bouwbedrijf De Vries',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=96&h=96&q=80&auto=format&fit=crop&crop=face',
    stars: 5,
  },
  {
    quote: 'Eindelijk één overzicht van wat wij moeten leveren en wanneer. De verloopalerts hebben ons al twee keer behoed voor een boete.',
    name: 'Sandra Koopman', role: 'Senior Projectmanager', company: 'Infra Noord BV',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&q=80&auto=format&fit=crop&crop=face',
    stars: 5,
  },
  {
    quote: 'Wat voorheen een dag zoekwerk was, doe ik nu in een half uur. De bronvermelding per paragraaf is goud waard voor juridisch werk.',
    name: 'Mark Verhoeven', role: 'Juridisch adviseur', company: 'Projectbureau Rijnland',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&q=80&auto=format&fit=crop&crop=face',
    stars: 5,
  },
]

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">

      {/* ══════════════════════════════════════════════
          HERO — contractmanagement achtergrond,
          2-koloms layout: tekst links / app-mockup rechts
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Achtergrond: professionele contractmanagement-foto */}
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=85&auto=format&fit=crop"
          alt="Professionals reviewing contracts"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-900/20" />
        <div className="absolute inset-0 grid-bg opacity-15" />
        {/* Subtiele blauwe gloed linksboven */}
        <div className="absolute top-0 left-0 w-[600px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

            {/* ── Linkerkolom: tekst ── */}
            <div className="max-w-xl lg:max-w-[34rem]">
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight text-white mb-6">
                Beheer uw<br />
                <span className="gradient-text">contracten.</span><br />
                <span className="text-slate-200">Stel er vragen aan.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed max-w-xl">
                Het slimme contractbeheersysteem voor bouw- en infrabedrijven.
                Upload contracten, stel vragen in gewone taal en ontvang antwoorden
                met exacte bronvermelding — direct uit uw eigen documenten.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-8 py-3.5 rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all shadow-xl shadow-blue-900/50 text-sm"
                >
                  Vraag een demo aan <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center gap-2 glass text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/15 transition-all text-sm"
                >
                  Bekijk functies
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-slate-200">
                {[
                  { icon: Star,    t: 'Premium Microsoft Partner' },
                  { icon: Shield,  t: 'Security-first contractbeheer' },
                  { icon: Check,   t: 'Enterprise-ready workflows' },
                  { icon: Sparkles, t: 'Nederlandse juridische support' },
                  { icon: Zap,     t: 'Integratie met Microsoft 365' },
                ].map(({ icon: I, t }) => (
                  <div key={t} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/50 px-3 py-2 text-[11px] leading-4 shadow-sm shadow-black/10 backdrop-blur-sm">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/10 text-blue-300">
                      <I className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-slate-200">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Rechterkolom: app mockup ── */}
            <div className="hidden lg:block">
              <AppScreenshot />
            </div>

          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          UITDAGING — dramatische foto, tekst er overheen
          Foto zichtbaar op ~55%
      ══════════════════════════════════════════════ */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80&auto=format&fit=crop"
          alt="Infrastructuurproject Nederland"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/20" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-950/70 rounded-3xl px-10 py-14 ring-1 ring-white/10">
            <p className="text-blue-300 font-semibold uppercase tracking-widest text-sm mb-6">De realiteit</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
              Projectleiders verliezen gemiddeld{' '}
              <span className="text-orange-400">10 uur per week</span>{' '}
              aan het zoeken naar contractinformatie.
            </h2>
            <p className="text-xl text-slate-200 mb-10">
              AI-Contractagent maakt er <strong className="text-white">30 minuten</strong> van.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-2xl text-lg">
              Bekijk hoe het werkt <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FEATURES — wit, clean
      ══════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-[0.35]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[320px] bg-blue-100/70 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-indigo-100/50 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 ring-1 ring-blue-100">
              <Zap className="w-4 h-4" />Platform functies
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">Alles in één platform</h2>
            <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
              Van AI-gestuurde contractvragen en risicodetectie tot verloopalerts en rapportages — gebouwd voor bouw & infra.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div key={f.title} className="group bg-white/80 border border-slate-200/70 rounded-2xl p-7 card-hover shadow-md shadow-slate-200/60 backdrop-blur-sm">
                  <div className={`w-12 h-12 rounded-2xl ${f.bg} flex items-center justify-center mb-5`}>
                    <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
                  <Link href="/features" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 mt-4 group-hover:gap-2 transition-all">
                    Meer lezen <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          IN DE PRAKTIJK — echte 50/50 split
          Linkerkant = foto volledig zichtbaar (geen overlay)
          Rechterkant = witte achtergrond + tekst
      ══════════════════════════════════════════════ */}
      <section className="flex flex-col lg:flex-row min-h-[640px]">
        {/* Foto kolom — geen overlay, volle kleur */}
        <div className="relative lg:w-1/2 min-h-[400px] lg:min-h-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=960&q=90&auto=format&fit=crop"
            alt="Contract management dashboard"
            fill
            className="object-cover object-center"
          />
          {/* Kleine overlay onderin voor de floating badge leesbaarheid */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/70 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <div className="glass rounded-2xl px-5 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">AI-agent actief</div>
                <div className="text-blue-200 text-xs">24 contracten · 3 alerts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content kolom */}
        <div className="lg:w-1/2 bg-slate-900 flex items-center">
          <div className="px-10 py-16 lg:px-16 lg:py-20 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-semibold px-4 py-2 rounded-full mb-7">
              Resultaat in de praktijk
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Van contractchaos naar<br />
              <span className="gradient-text">volledige controle</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Bouw- en infrabedrijven die AI-Contractagent gebruiken besparen hun projectleiders
              gemiddeld 8 uur per week en missen nooit meer een verloopdatum of verplichting.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Upload bestaande contracten in minuten',
                'Stel direct vragen in gewone taal',
                'Antwoorden met exacte bronvermelding',
                'Verloopalerts en verplichtingen-tracking',
                'Gemiddeld binnen 1 werkdag operationeel',
              ].map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-300 font-medium">{p}</span>
                </li>
              ))}
            </ul>
            <Link href="/use-cases" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-7 py-3.5 rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg">
              Bekijk klantcases <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          APP MOCKUP SECTIE — dark, met dashboard
      ══════════════════════════════════════════════ */}
      <section className="bg-slate-950 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 dot-bg opacity-30" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
              Zo werkt het in de praktijk
            </h2>
            <p className="text-slate-400 text-xl max-w-xl mx-auto">
              Stel een vraag, krijg een antwoord met bronvermelding — in seconden.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <AppScreenshot />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          STATS — foto zichtbaar op ~60%
      ══════════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80&auto=format&fit=crop"
          alt="Bouwproject statistieken"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-950/55" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.label} className="bg-slate-950/60 rounded-2xl py-8 px-4 ring-1 ring-white/10">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-5xl font-black text-white mb-2">{s.value}</div>
                  <div className="text-blue-100 text-sm font-medium">{s.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TESTIMONIALS — foto-achtergrond sectie +
          drie quote-kaarten met portretfoto's
      ══════════════════════════════════════════════ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 text-sm font-semibold px-4 py-2 rounded-full mb-5">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />Klantervaring
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-5">Wat onze klanten zeggen</h2>
            <p className="text-xl text-slate-500 max-w-xl mx-auto">Bouw- en infrabedrijven door heel Nederland werken dagelijks met AI-Contractagent.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`flex flex-col rounded-3xl overflow-hidden shadow-xl card-hover ${i === 1 ? 'md:-mt-4 md:mb-4' : ''}`}>
                {/* Foto bovenaan de kaart */}
                <div className="relative h-48 flex-shrink-0">
                  <Image
                    src={i === 0
                      ? 'https://images.unsplash.com/photo-1504307651394-5cbef3c57302?w=600&q=80&auto=format&fit=crop'
                      : i === 1
                        ? 'https://images.unsplash.com/photo-1581092921461-7d65ca45c2a7?w=600&q=80&auto=format&fit=crop'
                        : 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&auto=format&fit=crop'
                    }
                    alt={t.company}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white/80 text-xs font-semibold uppercase tracking-widest">{t.company}</span>
                  </div>
                </div>
                {/* Quote */}
                <div className="bg-white flex-1 p-7 flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 leading-relaxed flex-1 italic mb-5">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border-2 border-slate-100">
                      <Image src={t.photo} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                      <div className="text-slate-500 text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECOND SPLIT — andersom (tekst links, foto rechts)
          Wederom: foto volledig zichtbaar
      ══════════════════════════════════════════════ */}
      <section className="flex flex-col lg:flex-row-reverse min-h-[560px]">
        {/* Foto kolom rechts — volledig zichtbaar */}
        <div className="relative lg:w-1/2 min-h-[380px] lg:min-h-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=960&q=90&auto=format&fit=crop"
            alt="Team werkt samen aan contracten"
            fill
            className="object-cover object-center"
          />
        </div>
        {/* Tekst kolom links */}
        <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center">
          <div className="px-10 py-16 lg:px-16 lg:py-20 max-w-xl">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Transparante prijzen, direct aan de slag
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Kies het plan dat bij uw organisatie past. Alle abonnementen inclusief
              persoonlijke onboarding en directe ondersteuning.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { name: 'Starter', price: '€149/mnd' },
                { name: 'Pro', price: '€349/mnd' },
                { name: 'Enterprise', price: 'Op aanvraag' },
              ].map((tier) => (
                <div key={tier.name} className="bg-white/15 border border-white/25 rounded-xl p-4 text-center">
                  <div className="text-white/70 text-xs mb-1">{tier.name}</div>
                  <div className="text-white font-bold text-sm">{tier.price}</div>
                </div>
              ))}
            </div>
            <Link href="/pricing" className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
              Bekijk alle prijzen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FINAL CTA — foto zichtbaar op ~55%
      ══════════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80&auto=format&fit=crop"
          alt="Bouwkraan zonsondergang"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/20" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-950/70 rounded-3xl px-10 py-16 ring-1 ring-white/10">
            <div className="inline-flex items-center gap-2 glass text-blue-300 text-sm font-semibold px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4" />Klaar om te starten?
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Moderniseer uw<br />
              <span className="gradient-text">contractbeheer</span>
            </h2>
            <p className="text-slate-200 text-xl mb-10">
              Gemiddeld binnen 1 werkdag operationeel. Persoonlijke onboarding inbegrepen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold px-10 py-5 rounded-xl hover:from-blue-400 hover:to-indigo-400 transition-all shadow-2xl shadow-blue-900/60 text-xl">
                Vraag een demo aan <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 glass text-white font-semibold px-10 py-5 rounded-xl hover:bg-white/20 transition-all text-xl">
                Plan een demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
