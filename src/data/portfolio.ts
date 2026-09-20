type PortfolioLinks = {
  github: string
  linkedin: string
  chessReview: {
    live: string
    source: string
    androidApk: string
  }
  liveStore: string
  source: string
  admin: string
  email: string
  androidApk: string | null
}

export const links: PortfolioLinks = {
  github: 'https://github.com/OmarAlloush20',
  linkedin: 'https://www.linkedin.com/in/omar-alloush-dev',
  chessReview: {
    live: 'https://chess-review-yoo4.onrender.com/',
    source: 'https://github.com/OmarAlloush20/chess-review',
    androidApk: 'https://github.com/OmarAlloush20/chess-review/releases/tag/v1.0.0',
  },
  liveStore: 'https://voltiva-web.onrender.com',
  source: 'https://github.com/OmarAlloush20/voltiva-portfolio',
  admin: 'https://voltiva-admin.onrender.com',
  email: 'mailto:omarzabadani1@gmail.com',
  androidApk: 'https://github.com/OmarAlloush20/voltiva-portfolio/releases/latest',
}

export const skillGroups = [
  { label: '01 / Core development', skills: ['TypeScript', 'JavaScript', 'Node.js', 'Express', 'React', 'React Native', 'Expo', 'MongoDB'] },
  { label: '02 / Backend & integrations', skills: ['REST APIs', 'Authentication', 'Stripe', 'Webhooks', 'Firebase / FCM', 'Gemini API', 'Cloudinary'] },
  { label: '03 / Tools & deployment', skills: ['Git', 'GitHub', 'Render', 'MongoDB Atlas', 'EAS'] },
  { label: '04 / Additional programming', skills: ['C++', 'C#', 'Python'] },
]

export const highlights = [
  { number: '01', title: 'Commerce consistency', text: 'Coordinates inventory reservations, order state, cancellations, returns, and compensation so customer actions stay aligned with stock.' },
  { number: '02', title: 'Provider reconciliation', text: 'Treats signed Stripe webhooks as the source for payment outcomes, reconciling asynchronous events with internal order state.' },
  { number: '03', title: 'Mobile push delivery', text: 'Connects Expo and FCM V1 to deliver Android notifications while keeping platform credentials and delivery concerns server-side.' },
  { number: '04', title: 'Controlled AI authority', text: 'Uses AI to assist admin workflows and product drafting without granting the model direct authority over commerce data or operations.' },
  { number: '05', title: 'Security boundaries', text: 'Separates public clients, admin capabilities, secrets, and third-party integrations across clear API and deployment boundaries.' },
]
