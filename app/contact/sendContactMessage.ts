'use server'

import {Resend} from 'resend'

function safe(v: FormDataEntryValue | null) {
    return typeof v === 'string' ? v.trim() : ''
}

function escapeHtml(input: string) {
    return input
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;')
}

function toHtmlEmail(params: { name: string; email: string; message: string }) {
    const name = escapeHtml(params.name)
    const email = escapeHtml(params.email)
    const message = escapeHtml(params.message).replaceAll('\n', '<br/>')

    return `<!doctype html>
<html>
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Portfolio Contact</title>
  </head>
  <body style="margin:0;padding:0;background:#0b0b0b;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;">
    <div style="max-width:720px;margin:0 auto;padding:32px 16px;">
      <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14);border-radius:16px;overflow:hidden;">
        <div style="padding:20px 20px;border-bottom:1px solid rgba(255,255,255,0.12);background:linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03));">
          <div style="color:rgba(255,255,255,0.92);font-size:16px;font-weight:700;letter-spacing:0.2px;">
            New message from your portfolio
          </div>
          <div style="margin-top:6px;color:rgba(255,255,255,0.65);font-size:12px;">
            Someone submitted the contact form on your website.
          </div>
        </div>

        <div style="padding:20px;">
          <div style="display:block;margin-bottom:14px;">
            <div style="color:rgba(255,255,255,0.6);font-size:12px;margin-bottom:6px;">From</div>
            <div style="color:rgba(255,255,255,0.92);font-size:14px;font-weight:600;">${name}</div>
            <div style="margin-top:4px;color:rgba(255,255,255,0.8);font-size:13px;">
              <a href="mailto:${email}" style="color:rgba(255,255,255,0.9);text-decoration:underline;">${email}</a>
            </div>
          </div>

          <div style="margin-top:14px;">
            <div style="color:rgba(255,255,255,0.6);font-size:12px;margin-bottom:6px;">Message</div>
            <div style="color:rgba(255,255,255,0.86);font-size:14px;line-height:1.6;background:rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:14px;">
              ${message}
            </div>
          </div>

          <div style="margin-top:18px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.12);display:flex;gap:10px;flex-wrap:wrap;">
            <a href="mailto:${email}" style="display:inline-block;background:#ffffff;color:#000000;font-weight:700;font-size:13px;padding:10px 14px;border-radius:10px;text-decoration:none;">
              Reply by email
            </a>
            <span style="color:rgba(255,255,255,0.55);font-size:12px;align-self:center;">
              Tip: your email client should also allow Reply because replyTo is set.
            </span>
          </div>
        </div>

        <div style="padding:14px 20px;color:rgba(255,255,255,0.45);font-size:11px;background:rgba(0,0,0,0.35);border-top:1px solid rgba(255,255,255,0.12);">
          Portfolio Contact • This email was sent automatically from your website contact form.
        </div>
      </div>
    </div>
  </body>
</html>`
}

export async function sendContactMessage(_: unknown, formData: FormData) {
    try {
        const company = safe(formData.get('company'))
        if (company) return {ok: false, message: 'Blocked (spam detected).'}

        const startedAt = Number(safe(formData.get('startedAt')))
        if (!startedAt || Number.isNaN(startedAt)) return {ok: false, message: 'Invalid form.'}
        if (Date.now() - startedAt < 2000) return {ok: false, message: 'Please wait a moment and try again.'}

        const name = safe(formData.get('name'))
        const email = safe(formData.get('email'))
        const message = safe(formData.get('message'))

        if (!name || !email || !message) return {ok: false, message: 'All fields are required.'}

        if (!process.env.RESEND_API_KEY) {

            console.error('Missing RESEND_API_KEY')
            return {ok: false, message: 'Server is not configured for email yet.'}
        }

        const resend = new Resend(process.env.RESEND_API_KEY)

        const html = toHtmlEmail({name, email, message})

        const result = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['arun.upadhyay1107@gmail.com'],
            subject: `Portfolio message from ${name}`,
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // fallback
            html, // designed email
        })

        if (result?.error) {
            console.error('Resend error:', result.error)
            return {ok: false, message: result.error.message || 'Email provider error.'}
        }

        return {ok: true, message: 'Message sent successfully.'}
    } catch (err) {
        console.error('sendContactMessage error:', err)
        return {ok: false, message: 'Failed to send. Try again later.'}
    }
}
