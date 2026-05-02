import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: Request) {
  try {
    const { naam, email, bedrijf, telefoon, onderwerp, bericht } = await request.json()

    if (!naam || !email || !bericht) {
      return NextResponse.json({ error: 'Verplichte velden ontbreken.' }, { status: 400 })
    }

    const onderwerpLabel: Record<string, string> = {
      demo: 'Demo aanvragen',
      prijs: 'Prijsvraag',
      technisch: 'Technische vraag',
      overig: 'Overig',
    }

    await transporter.sendMail({
      from: `"AI-Contracts" <${process.env.SMTP_FROM ?? process.env.SMTP_USER}>`,
      to: 'info@ai-group.nl',
      replyTo: email,
      subject: `Nieuw contactformulier: ${(onderwerpLabel[onderwerp] ?? onderwerp) || 'Geen onderwerp'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #1e293b;">
          <h2 style="color: #2563eb; margin-bottom: 24px;">Nieuw bericht via AI-Contracts</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 140px;">Naam</td><td>${naam}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">E-mail</td><td><a href="mailto:${email}">${email}</a></td></tr>
            ${bedrijf ? `<tr><td style="padding: 8px 0; font-weight: bold;">Bedrijf</td><td>${bedrijf}</td></tr>` : ''}
            ${telefoon ? `<tr><td style="padding: 8px 0; font-weight: bold;">Telefoon</td><td>${telefoon}</td></tr>` : ''}
            ${onderwerp ? `<tr><td style="padding: 8px 0; font-weight: bold;">Onderwerp</td><td>${onderwerpLabel[onderwerp] ?? onderwerp}</td></tr>` : ''}
          </table>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #e2e8f0;" />
          <h3 style="margin-bottom: 12px;">Bericht</h3>
          <p style="white-space: pre-wrap; background: #f8fafc; padding: 16px; border-radius: 8px;">${bericht}</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact mail error:', err)
    return NextResponse.json({ error: 'Verzenden mislukt.' }, { status: 500 })
  }
}
