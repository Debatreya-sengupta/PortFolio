# Debatreya Sengupta — Futuristic Portfolio

Dark, futuristic, glassmorphism developer portfolio with neon (cyan/purple) accents, smooth scroll animations, subtle particles, and a built-in AI assistant (**DevBot**).

## Run locally

```bash
npm install
npm run dev
```

## Customize content (name, links, projects)

Edit:

- `src/content/profile.ts`

That file controls:

- Hero terminal text
- About copy
- Skills
- Projects
- Education + certifications
- Contact links used by DevBot and the contact form

## DevBot (AI assistant)

DevBot currently answers using a local knowledge base derived from `src/content/profile.ts` (fast + no external API required).

