import { useMemo, useState } from 'react'
import { profile } from '../content/profile'
import { Reveal } from '../components/Reveal'
import { SectionShell } from './SectionShell'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio message from ${name || 'Someone'}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    return `mailto:${profile.links.email}?subject=${subject}&body=${body}`
  }, [name, email, message])

  return (
    <SectionShell id="contact" title="contact_me()">
      <Reveal delay={0.05}>
        <div className="glass rounded-2xl p-5 sm:p-7">
          <div className="mono rounded-xl border border-white/10 bg-black/25 p-4">
            <div className="mb-3 text-xs text-white/55">terminal://contact</div>
            <div className="mb-4 grid gap-2 sm:grid-cols-3">
              <a
                href={`mailto:${profile.links.email}`}
                className="group flex items-center gap-2 rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-xs text-white/75 transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4 text-cyan-200" />
                <span className="mono truncate">{profile.links.email}</span>
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-xl border border-purple-300/20 bg-purple-400/10 px-3 py-2 text-xs text-white/80 transition hover:bg-purple-400/15 glow-purple"
              >
                <Linkedin className="h-4 w-4 text-purple-200" />
                <span className="mono truncate">LinkedIn</span>
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-400/10 px-3 py-2 text-xs text-white/80 transition hover:bg-cyan-400/15 glow-cyan"
              >
                <Github className="h-4 w-4 text-cyan-200" />
                <span className="mono truncate">GitHub</span>
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="mono text-xs text-white/60">Name</span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-11 rounded-xl border border-white/10 bg-black/35 px-3 text-sm text-white/85 outline-none ring-0 transition focus:border-cyan-300/30"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="mono text-xs text-white/60">Email</span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 rounded-xl border border-white/10 bg-black/35 px-3 text-sm text-white/85 outline-none ring-0 transition focus:border-purple-300/30"
                  placeholder="you@email.com"
                />
              </label>
            </div>

            <label className="mt-3 grid gap-1.5">
              <span className="mono text-xs text-white/60">Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="resize-none rounded-xl border border-white/10 bg-black/35 p-3 text-sm text-white/85 outline-none ring-0 transition focus:border-white/20"
                placeholder="Write your message..."
              />
            </label>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href={mailtoHref}
                className="inline-flex items-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-white/90 transition hover:bg-cyan-400/15 glow-cyan"
              >
                <span className="mono">{'> send_message'}</span>
              </a>
              <div className="text-xs text-white/55">
                Sends via your email client to <span className="mono text-white/70">{profile.links.email}</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  )
}

