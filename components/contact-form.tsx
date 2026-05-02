'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Mail, Phone, Clock, CheckCircle2, Send } from 'lucide-react'

const contactInfo = [
  { icon: Mail,  label: 'E-mail',    value: 'info@ai-group.nl', href: 'mailto:info@ai-group.nl' },
  { icon: Phone, label: 'Telefoon', value: '06-30985351',      href: 'tel:0630985351' },
  { icon: Clock,  label: 'Beschikbaarheid',  value: 'Ma–Vr 09:00–17:30',               href: null },
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    naam: '', email: '', bedrijf: '', telefoon: '', onderwerp: '', bericht: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-white">
      <div className="flex flex-col lg:flex-row min-h-[700px]">

        {/* ── Formulier-zijde ── */}
        <div className="flex-1 px-8 py-14 lg:px-16 lg:py-20">
          <div className="max-w-lg">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Stuur ons een bericht</h2>
            <p className="text-slate-500 mb-10">We reageren doorgaans binnen enkele uren op werkdagen.</p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center min-h-[380px] flex flex-col items-center justify-center">
                <CheckCircle2 className="w-14 h-14 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Bericht ontvangen!</h3>
                <p className="text-slate-600 max-w-sm">
                  Bedankt voor uw bericht. Wij nemen binnen één werkdag contact op via{' '}
                  <strong>{formData.email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Naam <span className="text-red-500">*</span></label>
                    <input type="text" name="naam" required value={formData.naam} onChange={handleChange} placeholder="Jan de Vries"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 hover:bg-white transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">E-mailadres <span className="text-red-500">*</span></label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="jan@bedrijf.nl"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 hover:bg-white transition" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Bedrijfsnaam</label>
                    <input type="text" name="bedrijf" value={formData.bedrijf} onChange={handleChange} placeholder="Bouwbedrijf De Vries BV"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 hover:bg-white transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Telefoon</label>
                    <input type="tel" name="telefoon" value={formData.telefoon} onChange={handleChange} placeholder="+31 6 12345678"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 hover:bg-white transition" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Onderwerp</label>
                  <select name="onderwerp" value={formData.onderwerp} onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 hover:bg-white transition">
                    <option value="">Selecteer een onderwerp</option>
                    <option value="demo">Demo aanvragen</option>
                    <option value="prijs">Prijsvraag</option>
                    <option value="technisch">Technische vraag</option>
                    <option value="overig">Overig</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Bericht <span className="text-red-500">*</span></label>
                  <textarea name="bericht" required rows={5} value={formData.bericht} onChange={handleChange} placeholder="Vertel ons hoe we u kunnen helpen..."
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 hover:bg-white transition resize-none" />
                </div>
                <button type="submit"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-8 py-3.5 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-200 w-full sm:w-auto justify-center">
                  <Send className="w-4 h-4" />Verstuur bericht
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ── Foto + info zijde ── */}
        <div className="lg:w-[440px] flex-shrink-0 flex flex-col">
          {/* Amsterdam gracht foto — volledig zichtbaar */}
          <div className="relative flex-1 min-h-[300px]">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=880&q=90&auto=format&fit=crop"
              alt="AI-Contracts — contractbeheer voor bouw & infra"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/70" />
          </div>

          {/* Contact info */}
          <div className="bg-slate-900 p-8 space-y-5">
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">{item.label}</div>
                    {item.href
                      ? <a href={item.href} className="text-sm font-semibold text-white hover:text-blue-300 transition-colors">{item.value}</a>
                      : <p className="text-sm font-semibold text-white">{item.value}</p>}
                  </div>
                </div>
              )
            })}

            <div className="pt-4 border-t border-white/10">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-5">
                <h3 className="font-bold text-white mb-2">Liever een demo?</h3>
                <p className="text-blue-100 text-sm mb-3">30 minuten, persoonlijk, op uw eigen contracttype.</p>
                <div className="flex items-center gap-2 text-sm text-white">
                  <CheckCircle2 className="w-4 h-4 text-blue-200 flex-shrink-0" />
                  Vrijblijvend en op maat
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
