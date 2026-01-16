import { Badge } from '@/components/Badge'
import { Card } from '@/components/Card'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { Section } from '@/components/Section'
import { site } from '@/lib/siteData'
import Image from 'next/image'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import {HiChatAlt2, HiMail} from 'react-icons/hi'

function PillList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <Badge key={t}>{t}</Badge>
      ))}
    </div>
  )
}

export default function Page() {
  return (
    <main id="top" className="min-h-screen bg-black">
      <Navbar />

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

        <div className="container mx-auto relative pt-10 pb-16 md:pt-14 md:pb-20">
          <div className="grid items-start gap-10 md:grid-cols-[1fr_auto]">
            {/* Left: Text */}
            <div className="max-w-3xl">
              <p className="text-sm text-white/70">{site.location}</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                {site.name}
              </h1>
              <p className="mt-3 text-xl text-white/80">{site.role}</p>
              <p className="mt-5 text-white/70">{site.headline}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                <Badge>{site.statusLine}</Badge>
                <Badge>React</Badge>
                <Badge>TypeScript</Badge>
                <Badge>PHP</Badge>
                <Badge>Node.js</Badge>
                <Badge>AWS</Badge>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
                >
                  <HiMail className="h-5 w-5" />
                  Contact
                </a>

                <a
                    href={site.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <FaLinkedin className="h-5 w-5" />
                  LinkedIn
                </a>

                <a
                    href={site.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  <FaGithub className="h-5 w-5" />
                  GitHub
                </a>
              </div>

            </div>

            {/* Right: Photo */}
            <div className="mx-auto mt-2 md:mx-0 md:mt-0">
              <div className="relative h-44 w-44 overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-[0_0_40px_rgba(255,255,255,0.08)] md:h-56 md:w-56">
                <Image
                    src="/profile.jpeg"
                    alt={`${site.name} profile photo`}
                    fill
                    className="object-cover"
                    priority
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="container mx-auto">
        <Section id="about" title="About" subtitle="A quick snapshot of what I do.">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="text-base font-semibold">Summary</h3>
              <ul className="mt-4 space-y-3 text-white/75">
                {site.summary.map((s) => (
                  <li key={s} className="leading-relaxed">
                    {s}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h3 className="text-base font-semibold">Core strengths</h3>
              <ul className="mt-4 space-y-2 text-white/75">
                <li>Full SDLC delivery (Agile and Scrum)</li>
                <li>Enterprise UI engineering (React and TypeScript)</li>
                <li>Backend services (PHP, Node.js, Java) and REST APIs</li>
                <li>Databases and performance (MySQL, PostgreSQL, Oracle)</li>
                <li>Cloud and delivery (AWS, Docker, Kubernetes, Jenkins)</li>
              </ul>
            </Card>
          </div>
        </Section>

        {site.personal?.family ? (
            <Card>
              <h3 className="text-base font-semibold">Beyond work</h3>
              <p className="mt-3 text-white/70 leading-relaxed">
                {site.personal.family}
              </p>
            </Card>
        ) : null}

        <Section id="skills" title="Skills" subtitle="Tools and technologies I use regularly.">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="text-base font-semibold">Languages</h3>
              <div className="mt-4">
                <PillList items={site.skills.languages} />
              </div>
            </Card>
            <Card>
              <h3 className="text-base font-semibold">Front end</h3>
              <div className="mt-4">
                <PillList items={site.skills.frontend} />
              </div>
            </Card>
            <Card>
              <h3 className="text-base font-semibold">Back end</h3>
              <div className="mt-4">
                <PillList items={site.skills.backend} />
              </div>
            </Card>
            <Card>
              <h3 className="text-base font-semibold">Cloud and DevOps</h3>
              <div className="mt-4">
                <PillList items={site.skills.devopsCloud} />
              </div>
            </Card>
          </div>
        </Section>

        <Section id="experience" title="Experience" subtitle="Roles and impact.">
          <div className="space-y-6">
            {site.experiences.map((e) => (
              <Card key={`${e.company}-${e.dates}`}>
                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{e.title}</h3>
                    <p className="text-white/75">{e.company}</p>
                    {e.domain ? <p className="mt-1 text-sm text-white/60">{e.domain}</p> : null}
                  </div>
                  <p className="text-sm text-white/60">{e.dates}</p>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-white/75">
                  {e.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                {e.tech?.length ? (
                  <div className="mt-5">
                    <p className="text-sm font-medium text-white/80">Tech</p>
                    <div className="mt-2">
                      <PillList items={e.tech} />
                    </div>
                  </div>
                ) : null}
              </Card>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects" subtitle="Selected work and accomplishments.">
          <div className="grid gap-6 md:grid-cols-2">
            {site.projects.map((p) => (
              <Card key={p.title}>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-white/70">{p.description}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-white/75">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="mt-5">
                  <PillList items={p.tags} />
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education" subtitle="Academic background and certifications.">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="text-base font-semibold">Degrees</h3>
              <div className="mt-4 space-y-4">
                {site.education.map((ed) => (
                  <div key={ed.school}>
                    <p className="font-semibold">{ed.degree}</p>
                    <p className="text-white/75">{ed.school}</p>
                    <p className="text-sm text-white/60">
                      {ed.dates}
                      {ed.details ? ` • ${ed.details}` : ''}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h3 className="text-base font-semibold">Certifications</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-white/75">
                {site.certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Card>
          </div>
        </Section>

        <Section id="contact" title="Contact" subtitle="Reach out for full time roles or contract work.">
          <Card>
            <div className="grid gap-6 md:grid-cols-3">

              {/* Email */}
              <div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <HiMail className="h-4 w-4" />
                  <span>Email</span>
                </div>
                <a
                    className="mt-1 block font-semibold hover:underline"
                    href={`mailto:${site.contact.email}`}
                >
                  {site.contact.email}
                </a>
              </div>

              {/* Message */}
              <div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <HiChatAlt2 className="h-4 w-4" />
                  <span>Message</span>
                </div>
                <a
                    className="mt-1 block font-semibold hover:underline"
                    href="/contact"
                >
                  Contact Form
                </a>
              </div>

              {/* Profiles */}
              <div>
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <span>Profiles</span>
                </div>
                <div className="mt-2 flex flex-col gap-2">
                  <a
                      className="inline-flex items-center gap-2 font-semibold hover:underline"
                      href={site.contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                  >
                    <FaLinkedin className="h-4 w-4 text-white/70" />
                    LinkedIn
                  </a>
                  <a
                      className="inline-flex items-center gap-2 font-semibold hover:underline"
                      href={site.contact.github}
                      target="_blank"
                      rel="noreferrer"
                  >
                    <FaGithub className="h-4 w-4 text-white/70" />
                    GitHub
                  </a>
                </div>
              </div>

            </div>
          </Card>
        </Section>

      </div>

      <Footer />
    </main>
  )
}
