import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { profile } from '../content/profile'
import { Reveal } from '../components/Reveal'
import { SectionShell } from './SectionShell'

export function Projects() {
  return (
    <SectionShell id="projects" title="projects()">
      <div className="grid gap-5 lg:grid-cols-2">
        {profile.projects.map((p, idx) => (
          <Reveal key={p.title} delay={0.05 * idx}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="glass group relative rounded-2xl p-6"
            >
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute -left-12 -top-16 h-44 w-44 rounded-full bg-cyan-400/10 blur-2xl" />
                <div className="absolute -bottom-16 -right-10 h-52 w-52 rounded-full bg-purple-400/10 blur-2xl" />
              </div>

              <div className="relative">
                <div className="mono text-xs text-white/55">project_{String(idx + 1).padStart(2, '0')}</div>
                <div className="mt-2 text-xl font-semibold tracking-tight text-white/95">
                  {p.title}
                </div>
                <div className="mt-3 text-sm leading-6 text-white/65">{p.description}</div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="mono rounded-xl border border-white/10 bg-black/25 px-3 py-1.5 text-xs text-white/75"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {'features' in p && p.features ? (
                  <div className="mt-4">
                    <div className="mono text-xs text-white/55">features</div>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/65">
                      {p.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="mt-6 flex flex-wrap gap-2.5">
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition hover:bg-white/10"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={p.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-white/90 transition hover:bg-cyan-400/15 glow-cyan"
                  >
                    <ExternalLink className="h-4 w-4 text-cyan-200" />
                    {idx === 1 ? 'Demo' : 'Live Demo'}
                  </a>
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}

