'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { useFormState } from 'react-dom'

import { sendContactMessage } from './sendContactMessage'

type FormState = { ok: boolean; message: string } | null

export default function ContactPage() {

    const [state, formAction] = useFormState<FormState, FormData>(sendContactMessage, null)
    const formRef = useRef<HTMLFormElement>(null)

    // Clear form on success
    useEffect(() => {
        if (state?.ok) formRef.current?.reset()
    }, [state])

    return (
        <main className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="mb-10 flex items-center justify-between">
                    <h1 className="text-3xl font-semibold">Contact</h1>
                    <Link href="/" className="text-white/70 hover:text-white">
                        Back to Home
                    </Link>
                </div>

                <div className="max-w-2xl rounded-2xl border border-white/15 bg-white/5 p-6">
                    <p className="text-white/70">Send a message and I will get back to you.</p>

                    {state?.message ? (
                        <div
                            className={[
                                'mt-5 rounded-lg border px-4 py-3 text-sm',
                                state.ok
                                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200'
                                    : 'border-red-500/30 bg-red-500/10 text-red-200',
                            ].join(' ')}
                        >
                            {state.message}
                        </div>
                    ) : null}

                    <form ref={formRef} action={formAction} className="mt-6 space-y-4">
                        {/* honeypot */}
                        <input
                            type="text"
                            name="company"
                            tabIndex={-1}
                            autoComplete="off"
                            className="hidden"
                        />

                        {/* time check */}
                        <input type="hidden" name="startedAt" value={Date.now().toString()} />

                        <div>
                            <label className="text-sm text-white/70">Your name</label>
                            <input
                                name="name"
                                required
                                maxLength={80}
                                className="mt-2 w-full rounded-lg border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-white/30"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-white/70">Your email</label>
                            <input
                                name="email"
                                type="email"
                                required
                                maxLength={120}
                                className="mt-2 w-full rounded-lg border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-white/30"
                                placeholder="john@email.com"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-white/70">Message</label>
                            <textarea
                                name="message"
                                required
                                rows={6}
                                maxLength={4000}
                                className="mt-2 w-full rounded-lg border border-white/15 bg-black px-4 py-3 text-white outline-none focus:border-white/30"
                                placeholder="Write your message..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
                        >
                            Send message
                        </button>

                        <p className="pt-2 text-xs text-white/50">Spam protection is enabled.</p>
                    </form>
                </div>
            </div>
        </main>
    )
}
