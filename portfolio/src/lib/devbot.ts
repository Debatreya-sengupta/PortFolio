import { profile } from '../content/profile'

function normalize(s: string) {
  return s.trim().toLowerCase()
}

function includesAny(s: string, words: string[]) {
  return words.some((w) => s.includes(w))
}

export type DevBotAnswer = { text: string; sources?: string[] }

export function answerDevBot(questionRaw: string): DevBotAnswer {
  const q = normalize(questionRaw)

  if (!q) {
    return { text: "Ask me about Debatreya's skills, projects, tech stack, or contact info." }
  }

  if (includesAny(q, ['who is', 'whoami', 'debatreya', 'about'])) {
    return {
      text: `${profile.name} is a Computer Science undergraduate and full stack developer from ${profile.location}.`,
      sources: ['profile.name', 'profile.location', 'profile.headline'],
    }
  }

  if (includesAny(q, ['projects', 'built', 'portfolio', 'work'])) {
    const lines = profile.projects.map((p) => `- ${p.title}: ${p.description}`)
    return {
      text: `Here are Debatreya's featured projects:\n${lines.join('\n')}`,
      sources: ['profile.projects'],
    }
  }

  if (includesAny(q, ['tech', 'stack', 'technologies', 'skills', 'tools', 'use'])) {
    const top = [
      'React',
      'Node.js',
      'Express',
      'Python',
      'MongoDB',
      'PostgreSQL',
      'Java',
      'AWS',
      'Git/GitHub',
    ]
    return {
      text: `Key technologies:\n- ${top.join('\n- ')}\n\nFull stack groups:\n${Object.entries(
        profile.skills,
      )
        .map(([k, v]) => `- ${k}: ${v.join(', ')}`)
        .join('\n')}`,
      sources: ['profile.skills'],
    }
  }

  if (includesAny(q, ['contact', 'email', 'reach', 'linkedin', 'github'])) {
    return {
      text: `You can contact Debatreya via:\n- Email: ${profile.links.email}\n- LinkedIn: ${profile.links.linkedin}\n- GitHub: ${profile.links.github}`,
      sources: ['profile.links'],
    }
  }

  if (includesAny(q, ['education', 'college', 'cgpa', 'iem'])) {
    return {
      text: `Education:\n- ${profile.education.title}\n- ${profile.education.institute}\n- CGPA: ${profile.education.cgpa}`,
      sources: ['profile.education'],
    }
  }

  if (includesAny(q, ['cert', 'certification', 'certifications'])) {
    return {
      text: `Certifications:\n${profile.certifications
        .map((c) => `- ${c.title} (${c.issuer})`)
        .join('\n')}`,
      sources: ['profile.certifications'],
    }
  }

  return {
    text:
      "I can help with:\n- Projects Debatreya built\n- Technologies he uses\n- Education/certifications\n- Contact info\n\nTry: “What projects has he built?”",
  }
}

