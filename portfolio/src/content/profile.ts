export const profile = {
  name: 'Debatreya Sengupta',
  location: 'Kolkata, India',
  headline: 'Computer Science Undergraduate | Full Stack Developer | AI Enthusiast',
  focus: ['Building scalable web apps', 'AI-powered systems', 'Automation tools'],
  links: {
    github: 'https://github.com/Debatreya-sengupta',
    linkedin: 'https://www.linkedin.com/in/debatreya-sengupta/',
    email: 'debatreyasengupta463@gmail.com',
  },
  about: `I am a Computer Science undergraduate passionate about building real-world applications using modern technologies. I enjoy working with React, Node.js, Python, and databases to create scalable applications.

My interests include:
• Full stack development
• AI-powered applications
• Automation tools
• Modern web technologies`,
  skills: {
    Programming: ['Java', 'Python', 'C/C++'],
    Web: ['React.js', 'Node.js', 'Express.js', 'HTML', 'CSS'],
    Databases: ['MongoDB', 'PostgreSQL', 'SQL'],
    Tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'Android Studio'],
    'AI & Data': ['Machine Learning', 'Data Processing'],
    Cloud: ['AWS'],
  },
  projects: [
    {
      title: 'AI-Powered Loan Assistant Platform',
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Python', 'REST APIs'],
      description:
        'A full-stack system that automates loan enquiry workflows, calculates EMI, verifies user information through APIs, and generates loan approval results.',
      links: {
        github: 'https://github.com/tousifrahaman11/Bank-loan',
        demo: 'https://ban-loan.netlify.app/',
      },
    },
    {
      title: 'Sustainability Scanner App',
      stack: ['Java', 'Android Studio', 'REST API'],
      description:
        'An Android application that scans product barcodes and retrieves sustainability ratings and product details using the Open Food Facts API.',
      features: ['Barcode scanning', 'API integration', 'JSON parsing', 'Mobile interface'],
      links: {
        github: 'https://github.com/Debatreya-sengupta/SustainabilityScanner',
        demo: 'https://example.com',
      },
    },
    {
      title: 'EchoSense',
      stack: ['Next.js', 'Python', 'FastAPI', 'DSP', 'iTunes API', 'Shazam API'],
      description:
        'A production-ready music discovery tool that solves the "unknown song" problem through intelligent fallback logic. Combines third-party APIs with custom digital signal processing (DSP) to name songs and analyze acoustic characteristics for similar track suggestions. Optimized for the cloud with async worker patterns for cold-start and large audio buffer efficiency.',
      links: {
        github: 'https://github.com/Debatreya-sengupta/Shazam_clone',
        demo: 'https://echosense.vercel.app/',
      },
    },
  ],
  education: {
    title: 'Bachelor of Technology (CSBS)',
    institute: 'Institute of Engineering and Management',
    cgpa: '8.32',
  },
  certifications: [
    { title: 'Cyber Security Fundamentals', issuer: 'University of London' },
    { title: 'Introduction to Applied Cryptography', issuer: 'University of Colorado' },
    { title: 'Operations Job Simulation', issuer: 'Goldman Sachs' },
  ],
} as const

