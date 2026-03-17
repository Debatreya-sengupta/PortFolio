import { GraduationCap, BadgeCheck } from 'lucide-react'
import { profile } from '../content/profile'
import { Reveal } from '../components/Reveal'
import { SectionShell } from './SectionShell'

export function Education() {
  return (
    <SectionShell id="education" title="education()">
      <div className="grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="glass rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <div className="rounded-xl border border-white/10 bg-black/25 p-2.5">
                <GraduationCap className="h-5 w-5 text-cyan-200" />
              </div>
              <div className="min-w-0">
                <div className="mono text-xs text-white/55">degree</div>
                <div className="mt-1 text-lg font-semibold text-white/95">{profile.education.title}</div>
                <div className="mt-1 text-sm text-white/65">{profile.education.institute}</div>
                <div className="mt-3 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm text-white/80">
                  <span className="mono text-xs text-white/55">CGPA</span>
                  <span className="font-semibold text-white/90">{profile.education.cgpa}</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="glass rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <div className="rounded-xl border border-white/10 bg-black/25 p-2.5">
                <BadgeCheck className="h-5 w-5 text-purple-200" />
              </div>
              <div className="min-w-0">
                <div className="mono text-xs text-white/55">certifications</div>
                <ul className="mt-3 space-y-3">
                  {profile.certifications.map((c) => (
                    <li key={c.title} className="rounded-xl border border-white/10 bg-black/25 p-3">
                      <div className="text-sm font-medium text-white/90">{c.title}</div>
                      <div className="mt-1 text-xs text-white/60">{c.issuer}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  )
}

