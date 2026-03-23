import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions } from '@tsparticles/engine'

export function ParticlesBg() {
  const [ready, setReady] = useState(false)
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    const mqReduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    const mqSmall = window.matchMedia?.('(max-width: 640px)')
    const update = () => {
      const reduce = mqReduce?.matches ?? false
      const small = mqSmall?.matches ?? false
      setEnabled(!reduce && !small)
    }
    update()
    mqReduce?.addEventListener?.('change', update)
    mqSmall?.addEventListener?.('change', update)

    let mounted = true
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      if (mounted) setReady(true)
    })
    return () => {
      mounted = false
      mqReduce?.removeEventListener?.('change', update)
      mqSmall?.removeEventListener?.('change', update)
    }
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      background: { color: { value: 'transparent' } },
      fpsLimit: 45,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      particles: {
        number: { value: 26, density: { enable: true, area: 1000 } },
        color: { value: ['#39f5ff', '#b66bff'] },
        links: {
          enable: true,
          color: '#7ee7ff',
          distance: 150,
          opacity: 0.14,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.45,
          outModes: { default: 'out' },
        },
        opacity: { value: { min: 0.08, max: 0.28 } },
        size: { value: { min: 1, max: 2.2 } },
      },
      detectRetina: true,
    }),
    [],
  )

  if (!ready || !enabled) return null

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Particles id="tsparticles" options={options} />
    </div>
  )
}

