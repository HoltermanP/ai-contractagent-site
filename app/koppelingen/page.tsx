import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight, Check, Zap, Shield, RefreshCw, FileText,
  FolderOpen, MessageSquare, Mail, Globe, Lock, ChevronRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Koppelingen — AI-Contractagent',
  description: 'AI-Contractagent integreert naadloos met Microsoft 365, Teams, SharePoint en andere document management systemen.',
}

const microsoftIntegrations = [
  {
    name: 'Microsoft SharePoint',
    icon: FolderOpen,
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    status: 'Beschikbaar',
    statusColor: 'bg-green-100 text-green-700',
    description: 'Synchroniseer contracten rechtstreeks vanuit uw SharePoint-documentbibliotheken. AI-Contractagent leest uw bestaande mapstructuur uit en indexeert contracten automatisch.',
    features: [
      'Automatische synchronisatie van documenten',
      'Bestaande mapstructuur blijft intact',
      'Ondersteunt PDF, DOCX en andere formaten',
      'Versiehistorie uit SharePoint zichtbaar in AI-Contractagent',
      'Rechtenstructuur van SharePoint wordt gerespecteerd',
    ],
  },
  {
    name: 'Microsoft Teams',
    icon: MessageSquare,
    color: 'from-indigo-500 to-purple-500',
    bg: 'bg-indigo-50',
    status: 'Beschikbaar',
    statusColor: 'bg-green-100 text-green-700',
    description: 'Ontvang verloopalerts en verplichtingen-meldingen direct in uw Teams-kanaal. Stel vragen aan de AI-Contractagent vanuit Teams zonder de app te verlaten.',
    features: [
      'Verloopalerts als Teams-notificaties',
      'Verplichtingen-updates in uw projectkanaal',
      'AI-Contractagent bot voor directe queries',
      'Koppeling met bestaande Teams-projectstructuur',
      'Goedkeuringsverzoeken via Teams-workflow',
    ],
  },
  {
    name: 'Microsoft Outlook',
    icon: Mail,
    color: 'from-blue-600 to-cyan-500',
    bg: 'bg-cyan-50',
    status: 'Beschikbaar',
    statusColor: 'bg-green-100 text-green-700',
    description: 'Verloopalerts en verplichtingen-meldingen rechtstreeks in uw Outlook-inbox. Importeer contractbijlagen uit e-mails direct naar AI-Contractagent.',
    features: [
      'Automatische e-mailalerts op 90/60/30 dagen',
      'Contractbijlagen direct importeren vanuit inbox',
      'Goedkeuringsverzoeken als Outlook-actieverzoek',
      'Kalenderintegratie voor verloopdatums',
      'Configureerbaar per gebruiker en rol',
    ],
  },
  {
    name: 'Microsoft Word / DOCX',
    icon: FileText,
    color: 'from-blue-700 to-blue-500',
    bg: 'bg-blue-50',
    status: 'Beschikbaar',
    statusColor: 'bg-green-100 text-green-700',
    description: 'Upload DOCX-contracten rechtstreeks vanuit Word. AI-Contractagent behoudt de volledige opmaak, inhoudsopgave en bijlagen voor nauwkeurige AI-analyse.',
    features: [
      'Native DOCX-ondersteuning inclusief opmaak',
      'Inhoudsopgave gebruikt voor betere bronvermelding',
      'Bijlagen en addenda als losse documenten',
      'Batch-upload vanuit OneDrive',
      'Automatische versiebeheer bij updates',
    ],
  },
]

const dmsIntegrations = [
  {
    name: 'Relatics',
    color: 'from-orange-500 to-amber-500',
    status: 'Op aanvraag',
    statusColor: 'bg-amber-100 text-amber-700',
    description: 'Koppeling met Relatics voor Systems Engineering-documentatie en vereistenbeheer. AI-Contractagent leest SE-documenten en koppelt contractverplichtingen aan requirements.',
    features: [
      'Importeer vereisten en verificatiepunten',
      'Koppeling tussen contractclausules en requirements',
      'Automatische voortgangsbewaking',
    ],
  },
  {
    name: 'Viewpoint / Trimble',
    color: 'from-green-600 to-teal-500',
    status: 'Op aanvraag',
    statusColor: 'bg-amber-100 text-amber-700',
    description: 'Integratie met Viewpoint Field Management en Trimble ProjectSight voor bouwprojectbeheer. Contracten en verplichtingen worden direct gekoppeld aan projectactiviteiten.',
    features: [
      'Synchronisatie van projectstructuur',
      'Contractverplichtingen gekoppeld aan activiteiten',
      'Financiële contractdata importeren',
    ],
  },
  {
    name: 'Planon',
    color: 'from-violet-600 to-purple-500',
    status: 'Op aanvraag',
    statusColor: 'bg-amber-100 text-amber-700',
    description: 'Koppeling met Planon voor facility management en vastgoedcontracten. Beheer huur-, onderhouds- en servicecontracten met AI-ondersteuning.',
    features: [
      'Huurcontracten en serviceovereenkomsten',
      'Automatische verloopalerts per locatie',
      'KPI-bewaking vanuit Planon-data',
    ],
  },
  {
    name: 'Snelstart / AFAS',
    color: 'from-red-500 to-orange-500',
    status: 'Op aanvraag',
    statusColor: 'bg-amber-100 text-amber-700',
    description: 'Financiële contractdata uit uw ERP-systeem rechtstreeks zichtbaar in AI-Contractagent. Contractwaarden, factuurmomenten en budgetten altijd actueel.',
    features: [
      'Contractwaarden gesynchroniseerd vanuit ERP',
      'Factuurmomenten als verplichtingen zichtbaar',
      'Budgetbewaking per project',
    ],
  },
  {
    name: 'Eigen DMS / REST API',
    color: 'from-slate-600 to-slate-800',
    status: 'Enterprise',
    statusColor: 'bg-blue-100 text-blue-700',
    description: 'AI-Contractagent biedt een volledige REST API voor integratie met uw eigen document management systeem, ERP of maatwerk-platform.',
    features: [
      'Volledige REST API met Swagger-documentatie',
      'Webhook-ondersteuning voor realtime events',
      'OAuth 2.0 authenticatie',
    ],
  },
  {
    name: 'OpenText / Documentum',
    color: 'from-cyan-600 to-blue-600',
    status: 'Op aanvraag',
    statusColor: 'bg-amber-100 text-amber-700',
    description: 'Enterprise DMS-koppeling voor organisaties die OpenText of Documentum gebruiken voor juridisch en contractdocumentbeheer.',
    features: [
      'Documentimport vanuit enterprise repository',
      'Metadata-mapping naar contractvelden',
      'Rechtenstructuur gesynchroniseerd',
    ],
  },
]

const principles = [
  {
    icon: RefreshCw,
    title: 'Realtime synchronisatie',
    desc: 'Documenten die u in SharePoint of uw DMS bijwerkt worden automatisch opnieuw geïndexeerd in AI-Contractagent. Uw AI werkt altijd met de meest actuele versie.',
  },
  {
    icon: Shield,
    title: 'Beveiliging voorop',
    desc: 'Alle koppelingen verlopen via versleutelde verbindingen (TLS 1.3). Uw bestaande toegangsrechten in Microsoft 365 worden volledig gerespecteerd — niemand ziet meer dan toegestaan.',
  },
  {
    icon: Lock,
    title: 'Data blijft in Nederland',
    desc: 'Contractdocumenten worden verwerkt op ISO 27001-gecertificeerde servers in Nederlandse datacenters. Geen data verlaat de EU.',
  },
  {
    icon: Zap,
    title: 'Implementatie in één dag',
    desc: 'De Microsoft 365-koppeling is via OAuth in minuten geconfigureerd. Onze specialisten begeleiden de implementatie zodat u binnen één werkdag operationeel bent.',
  },
]

export default function KoppelingenPage() {
  return (
    <div>

      {/* ── Hero ── */}
      <section className="flex flex-col lg:flex-row min-h-[520px]">
        <div className="lg:w-1/2 bg-slate-950 flex items-center relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative px-10 py-16 lg:px-16 lg:py-20 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
              Integraties & Koppelingen
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-5 leading-tight">
              Naadloos verbonden<br />
              <span className="gradient-text">met uw werkomgeving</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              AI-Contractagent integreert direct met Microsoft 365, SharePoint, Teams en de document management systemen die u al gebruikt — zonder dubbel werk of datamigratieprojecten.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-7 py-3.5 rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg">
              Vraag een demo aan <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="relative lg:w-1/2 min-h-[380px] lg:min-h-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=960&q=90&auto=format&fit=crop"
            alt="Microsoft 365 integratie"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/20" />
        </div>
      </section>

      {/* ── Principes ── */}
      <section className="bg-white border-b border-slate-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.title} className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="font-bold text-slate-900">{p.title}</div>
                  <div className="text-slate-500 text-sm leading-relaxed">{p.desc}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Microsoft 365 koppelingen ── */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-bold px-4 py-2 rounded-full mb-5 ring-1 ring-blue-100">
              Microsoft 365
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Diep geïntegreerd met Microsoft 365
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              De meeste bouw- en infraorganisaties werken al met Microsoft 365. AI-Contractagent sluit hier naadloos op aan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {microsoftIntegrations.map((integration) => {
              const Icon = integration.icon
              return (
                <div key={integration.name} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl ${integration.bg} flex items-center justify-center`}>
                        <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${integration.color} flex items-center justify-center`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="font-black text-slate-900 text-lg">{integration.name}</div>
                      </div>
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${integration.statusColor}`}>
                      {integration.status}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{integration.description}</p>
                  <ul className="space-y-2">
                    {integration.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${integration.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span className="text-slate-600 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Overige DMS-koppelingen ── */}
      <section className="bg-white py-20 lg:py-28 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 text-xs font-bold px-4 py-2 rounded-full mb-5">
              Document Management & ERP
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Andere systemen & maatwerkintegraties
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Werkt u met een branchespecifiek DMS of ERP? Wij koppelen aan elk systeem met een REST API of SFTP-interface.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dmsIntegrations.map((integration) => (
              <div key={integration.name} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-base font-black bg-gradient-to-r ${integration.color} bg-clip-text text-transparent`}>
                    {integration.name}
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${integration.statusColor}`}>
                    {integration.status}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{integration.description}</p>
                <ul className="space-y-1.5">
                  {integration.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-500 text-xs">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gradient-to-r from-slate-900 to-slate-950 rounded-3xl p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="text-white font-bold">Uw systeem staat er niet bij?</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Via onze REST API koppelen wij aan elk systeem. Neem contact op voor een technisch gesprek — wij beoordelen de mogelijkheden en stellen een implementatieplan op.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-6 py-3.5 rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg flex-shrink-0"
            >
              Bespreek de mogelijkheden <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-950 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            Klaar om te koppelen?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Onze specialisten begeleiden de volledige implementatie. Van Microsoft 365-koppeling tot eigen DMS — gemiddeld binnen één werkdag operationeel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-8 py-4 rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all shadow-2xl shadow-blue-900/50"
            >
              Demo aanvragen <ArrowRight className="w-4 h-4" />
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
