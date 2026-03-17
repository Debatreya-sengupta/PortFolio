import type { PropsWithChildren } from 'react'
import { Reveal } from '../components/Reveal'

export function SectionShell({
  id,
  title,
  children,
}: PropsWithChildren<{ id: string; title: string }>) {
  return (
    <section id={id} className="relative py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal>
          <div className="mono mb-6 inline-flex items-center rounded-xl border border-white/10 bg-black/25 px-4 py-2 text-sm text-white/80">
            {title}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  )
}

