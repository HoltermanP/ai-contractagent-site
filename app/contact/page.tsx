import type { Metadata } from 'next'
import Image from 'next/image'
import ContactForm from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact — AI-Contractagent',
  description: 'Neem contact op met AI-Contractagent. Vraag een demo aan, stel een vraag of neem vrijblijvend contact op.',
}

export default function ContactPage() {
  return (
    <div>
      {/* Header met foto */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=55&auto=format&fit=crop"
            alt="Modern kantoor Amsterdam"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/96 via-blue-950/90 to-indigo-950/95" />
        </div>
        <div className="absolute inset-0 grid-bg opacity-25" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-5">
            Neem <span className="gradient-text">contact op</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-xl mx-auto">
            Vraag een demo aan, stel een vraag of neem vrijblijvend contact op.
            Wij reageren binnen één werkdag.
          </p>
        </div>
      </section>

      <ContactForm />
    </div>
  )
}
