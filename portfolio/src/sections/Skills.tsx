import { profile } from '../content/profile'
import { Reveal } from '../components/Reveal'
import { SectionShell } from './SectionShell'
import clsx from 'clsx'

export function Skills() {
  const groups = Object.entries(profile.skills)

  return (
    <SectionShell id="skills" title="tech_stack()">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(([group, items], idx) => (
          <Reveal key={group} delay={0.03 * idx}>
            <div
              className={clsx(
                'glass rounded-2xl p-5 transition will-change-transform',
                idx % 2 === 0 ? 'glow-cyan' : 'glow-purple',
              )}
            >
              <div className="mono text-sm text-white/85">{group}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="mono rounded-xl border border-white/10 bg-black/25 px-3 py-1.5 text-xs text-white/75"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}

