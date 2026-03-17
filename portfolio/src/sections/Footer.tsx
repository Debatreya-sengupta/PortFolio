import { Github, Linkedin } from 'lucide-react'
import { profile } from '../content/profile'

export function Footer() {
  return (
    <footer className="relative pb-10">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="glass rounded-2xl p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="mono text-sm text-white/75">{'> built_by Debatreya_sengupta'}</div>
            <div className="flex items-center gap-2">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/25 text-white/75 transition hover:bg-white/10 hover:text-white/90"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/25 text-white/75 transition hover:bg-white/10 hover:text-white/90"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

