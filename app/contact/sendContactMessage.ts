'use server'

import { Resend } from 'resend'

function safe(v: FormDataEntryValue | null) {
    return typeof v === 'string' ? v.trim() : ''
}

export async function sendContactMessage(_: unknown, formData: FormData) {
    try {
        // Honeypot
        const company = safe(formData.get('company'))
        if (company) return { ok: false, message: 'Blocked (spam detected).' }

        // Time check
        const startedAt = Number(safe(formData.get('startedAt')))
        if (!startedAt || Number.isNaN(startedAt)) return { ok: false, message: 'Invalid form.' }
        if (Date.now() - startedAt < 2000) return { ok: false, message: 'Please wait a moment and try again.' }

        const name = safe(formData.get('name'))
        const email = safe(formData.get('email'))
        const message = safe(formData.get('message'))

        if (!name || !email || !message) return { ok: false, message: 'All fields are required.' }

        if (!process.env.RESEND_API_KEY) {
            console.error('Missing RESEND_API_KEY')
            return { ok: false, message: 'Server is not configured for email yet.' }
        }

        const resend = new Resend(process.env.RESEND_API_KEY)

        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['arun-upadhyay@outlook.co'],
            subject: `Portfolio message from ${name}`,
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        })

        return { ok: true, message: 'Message sent successfully.' }
    } catch (err) {
        console.error('sendContactMessage error:', err)
        return { ok: false, message: 'Failed to send. Try again later.' }
    }
}
