import { motion, useScroll, useTransform } from 'framer-motion'
import { ParticlesBg } from './components/ParticlesBg'
import { TerminalHero } from './components/TerminalHero'
import { DevBot } from './components/DevBot'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Education } from './sections/Education'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { profile } from './content/profile'

export default function App() {
  const { scrollYProgress } = useScroll()
  const topGlowY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const topGlowOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [0.7, 0.35, 0.22])

  return (
    <div className="relative min-h-screen">
      <ParticlesBg />

      <motion.div
        style={{ y: topGlowY, opacity: topGlowOpacity }}
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-80 w-[min(95vw,980px)] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/15 via-purple-400/10 to-cyan-400/15 blur-3xl"
      />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="mono text-sm text-white/85">
            {profile.name.replace(' ', '_').toLowerCase()}@portfolio:~$
          </a>
          <nav className="hidden items-center gap-2 sm:flex">
            {[
              { href: '#about', label: 'about_me()' },
              { href: '#skills', label: 'tech_stack()' },
              { href: '#projects', label: 'projects()' },
              { href: '#education', label: 'education()' },
              { href: '#contact', label: 'contact_me()' },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="mono rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 transition hover:bg-white/10 hover:text-white/90"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <TerminalHero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
      <DevBot />
    </div>
  )
}

