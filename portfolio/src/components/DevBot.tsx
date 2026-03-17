import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Send, X } from 'lucide-react'
import { answerDevBot } from '../lib/devbot'

type Msg = { id: string; role: 'user' | 'bot'; text: string }

function uid() {
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`
}

export function DevBot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Msg[]>(() => [
    {
      id: uid(),
      role: 'bot',
      text: 'Hi! I’m DevBot.\nAsk me about Debatreya’s skills, projects, tech stack, or contact info.',
    },
  ])

  const listRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, open])

  const placeholder = useMemo(() => 'Try: “What technologies does he use?”', [])

  const send = (q: string) => {
    const question = q.trim()
    if (!question) return

    setMessages((prev) => [...prev, { id: uid(), role: 'user', text: question }])
    setInput('')

    window.setTimeout(() => {
      const a = answerDevBot(question)
      setMessages((prev) => [...prev, { id: uid(), role: 'bot', text: a.text }])
    }, 260)
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 16, scale: 0.98, filter: 'blur(6px)' }}
            transition={{ type: 'spring', stiffness: 220, damping: 20 }}
            className="glass w-[min(92vw,380px)] overflow-hidden rounded-2xl"
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-black/25 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/30 glow-cyan">
                  <Bot className="h-5 w-5 text-cyan-200" />
                </div>
                <div className="min-w-0">
                  <div className="mono text-sm text-white/90">DevBot</div>
                  <div className="mono text-[11px] text-white/55">futuristic_assistant()</div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/30 text-white/70 transition hover:bg-white/10 hover:text-white/90"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={listRef} className="max-h-[46vh] overflow-auto px-4 py-4">
              <div className="space-y-3">
                {messages.map((m) => (
                  <div key={m.id} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                    <div
                      className={
                        m.role === 'user'
                          ? 'mono max-w-[85%] whitespace-pre-wrap rounded-2xl border border-purple-300/20 bg-purple-400/10 px-3 py-2 text-xs text-white/85 glow-purple'
                          : 'mono max-w-[85%] whitespace-pre-wrap rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-3 py-2 text-xs text-white/85 glow-cyan'
                      }
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form
              className="flex items-center gap-2 border-t border-white/10 bg-black/20 px-3 py-3"
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
              }}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={placeholder}
                className="h-11 flex-1 rounded-xl border border-white/10 bg-black/35 px-3 text-sm text-white/85 outline-none transition focus:border-cyan-300/30"
              />
              <button
                type="submit"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 hover:text-white/95"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setOpen(true)}
        className="mt-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-white/90 glow-cyan transition hover:bg-cyan-400/15"
        aria-label="Open DevBot"
      >
        <Bot className="h-6 w-6 text-cyan-200" />
      </motion.button>
    </div>
  )
}

