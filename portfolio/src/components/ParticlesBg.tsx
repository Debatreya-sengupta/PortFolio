import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions } from '@tsparticles/engine'

export function ParticlesBg() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let mounted = true
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      if (mounted) setReady(true)
    })
    return () => {
      mounted = false
    }
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      particles: {
        number: { value: 42, density: { enable: true, area: 900 } },
        color: { value: ['#39f5ff', '#b66bff'] },
        links: {
          enable: true,
          color: '#7ee7ff',
          distance: 150,
          opacity: 0.18,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          outModes: { default: 'out' },
        },
        opacity: { value: { min: 0.08, max: 0.28 } },
        size: { value: { min: 1, max: 2.2 } },
      },
      detectRetina: true,
    }),
    [],
  )

  if (!ready) return null

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Particles id="tsparticles" options={options} />
    </div>
  )
}

