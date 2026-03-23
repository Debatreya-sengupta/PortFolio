import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../content/profile'
import { Github, Linkedin, Mail, FolderKanban } from 'lucide-react'

type Line = { kind: 'cmd' | 'out'; text: string }

function buildScript(): Line[] {
  return [
    { kind: 'cmd', text: 'whoami' },
    { kind: 'out', text: profile.name },
    { kind: 'out', text: '' },
    { kind: 'cmd', text: 'role' },
    { kind: 'out', text: profile.headline },
    { kind: 'out', text: '' },
    { kind: 'cmd', text: 'focus' },
    ...profile.focus.flatMap((t) => [{ kind: 'out' as const, text: t }]),
  ]
}

export function TerminalHero() {
  const script = useMemo(() => buildScript(), [])
  const [visibleLines, setVisibleLines] = useState<Line[]>([])
  const [typing, setTyping] = useState<string>('')
  const [cursorOn, setCursorOn] = useState(true)

  useEffect(() => {
    const cursor = window.setInterval(() => setCursorOn((v) => !v), 520)
    return () => window.clearInterval(cursor)
  }, [])

  useEffect(() => {
    let i = 0
    let cancelled = false

    const run = async () => {
      while (!cancelled && i < script.length) {
        const line = script[i]
        i += 1

        if (line.kind === 'out') {
          setVisibleLines((prev) => [...prev, line])
          await new Promise((r) => setTimeout(r, line.text === '' ? 420 : 320))
          continue
        }

        setTyping('> ')
        await new Promise((r) => setTimeout(r, 220))

        for (const ch of line.text) {
          if (cancelled) return
          setTyping((t) => t + ch)
          await new Promise((r) => setTimeout(r, 34 + Math.random() * 22))
        }

        await new Promise((r) => setTimeout(r, 260))
        setVisibleLines((prev) => [...prev, { kind: 'cmd', text: `> ${line.text}` }])
        setTyping('')
        await new Promise((r) => setTimeout(r, 260))
      }
    }

    void run()
    return () => {
      cancelled = true
    }
  }, [script])

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="tech-grid" />

      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
          <motion.div
            className="glass relative rounded-2xl p-5 sm:p-7"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 140, damping: 18 }}
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="mono text-xs text-white/55">terminal://portfolio</div>
            </div>

            <div className="mono rounded-xl border border-white/10 bg-black/25 p-4 text-[13px] leading-6 sm:text-sm">
              {visibleLines.map((l, idx) => (
                <div key={idx} className={l.kind === 'cmd' ? 'text-white/90' : 'text-white/70'}>
                  {l.text === '' ? <span className="block h-3" /> : l.text}
                </div>
              ))}
              <div className="text-white/90">
                {typing}
                <span className={cursorOn ? 'opacity-100' : 'opacity-0'}>▍</span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-white/90 transition hover:bg-cyan-400/15 glow-cyan"
              >
                <FolderKanban className="h-4 w-4 text-cyan-200" />
                View Projects
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-purple-300/20 bg-purple-400/10 px-4 py-2 text-sm text-white/90 transition hover:bg-purple-400/15 glow-purple"
              >
                <Linkedin className="h-4 w-4 text-purple-200" />
                LinkedIn
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 130, damping: 18, delay: 0.05 }}
          >
            <div className="glass rounded-2xl p-6 sm:p-7">
              <div className="mono text-sm text-white/70">status</div>
              <div className="mt-2 text-2xl font-semibold tracking-tight text-white/95 sm:text-3xl">
                Futuristic portfolio. Real-world builds.
              </div>
              <div className="mt-3 text-sm leading-6 text-white/65">
                Full stack developer from {profile.location}. I build fast, scalable products with modern
                web tech, and I love shipping AI-powered automation.
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                  <div className="mono text-xs text-white/55">focus::now</div>
                  <div className="mt-1 text-sm text-white/80">Neon UI • Smooth motion • Clean DX</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/25 p-4">
                  <div className="mono text-xs text-white/55">availability</div>
                  <div className="mt-1 text-sm text-white/80">Open to internships & collaborations</div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-cyan-400/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-10 h-56 w-56 rounded-full bg-purple-400/10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

