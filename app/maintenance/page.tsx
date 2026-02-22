import { Reveal } from '@/components/Reveal'

export default function Page() {
  return (
    <main className="page-surface min-h-screen text-white">
      <div className="container mx-auto flex min-h-screen items-center justify-center px-6 py-16">
        <Reveal className="w-full max-w-xl">
          <div className="rounded-3xl border border-white/15 bg-white/[0.04] p-8 text-center backdrop-blur-md md:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-white/55">Maintenance</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">We will be back soon</h1>
            <p className="mt-4 text-white/70">
              The portfolio is getting a quick upgrade. Please check back shortly.
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
