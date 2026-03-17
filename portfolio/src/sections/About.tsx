import { profile } from '../content/profile'
import { Reveal } from '../components/Reveal'
import { SectionShell } from './SectionShell'

export function About() {
  return (
    <SectionShell id="about" title="about_me()">
      <Reveal delay={0.05}>
        <div className="glass rounded-2xl p-5 sm:p-7">
          <div className="mono rounded-xl border border-white/10 bg-black/25 p-4 text-sm leading-6 text-white/75">
            {profile.about.split('\n').map((line, idx) => (
              <div key={idx}>{line === '' ? <span className="block h-3" /> : line}</div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  )
}

