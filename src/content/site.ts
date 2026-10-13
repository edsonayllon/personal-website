// Single source of truth for identity, metrics, and structured content.
// Every figure here is stated exactly as it appears in the resume PDF —
// keep them character-identical so recruiters cross-checking see no drift.

export const site = {
  name: 'Edson Ayllon',
  title: 'Edson Ayllon — Product Leader, Consumer Financial Products',
  description:
    'Product leader with an engineering edge. 8 years across product and engineering, the last five shipping consumer financial products — launches that attracted $125M+ in user deposits and $3.4M in annualized revenue.',
  url: 'https://edsonayllon.com',
  email: 'eayllon1@gmail.com',
  twitterHandle: '@relativeread',
  ogImage: '/og/site.png',
} as const;

export const resumePath = '/resume/edson-ayllon-resume.pdf';

export const socials = [
  { label: 'GitHub', href: 'https://github.com/edsonayllon' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/edson-ayllon/' },
  { label: 'Medium', href: 'https://medium.com/@edsonayllon' },
  { label: 'X (Twitter)', href: 'https://twitter.com/relativeread' },
] as const;

export const metrics = [
  {
    value: '$125M+',
    label: 'Concurrent user deposits',
    context: 'attracted by product features I led at Chamber',
  },
  {
    value: '$3.4M',
    label: 'Annualized revenue',
    context: 'captured through pricing strategy I owned',
  },
  {
    value: '850%',
    label: 'Retention growth',
    context: 'weekly returning users, from 600 to 5,700',
  },
  {
    value: '$3.5M',
    label: 'Day-one deposits',
    context: 'on the mStable relaunch I ran end to end',
  },
] as const;

export interface CaseStudy {
  slug: string;
  eyebrow: string;
  title: string;
  outcome: string;
  metric: string;
}

// Order here drives both the home-page grid and prev/next navigation.
export const caseStudies: CaseStudy[] = [
  {
    slug: 'chamber',
    eyebrow: 'Chamber · Senior Product Manager',
    title: 'Repositioning a four-year-old investment platform for the AI era',
    outcome:
      'Led the rebrand from dHEDGE to Chamber and the pivot to AI-managed vaults — naming, positioning, launch, and pricing.',
    metric: '+73% monthly visitors · $3.4M annualized revenue',
  },
  {
    slug: 'retention',
    eyebrow: 'Chamber · Behavioral design',
    title: 'From 600 to 5,700 weekly returning users',
    outcome:
      'Designed gamification and loss-aversion mechanics that turned a deposit product into a weekly habit.',
    metric: '850% retention growth',
  },
  {
    slug: 'mstable',
    eyebrow: 'mStable · Relaunch',
    title: 'Relaunching a yield product to $3.5M in deposits on day one',
    outcome:
      'Owned product and marketing for the relaunch, securing co-promotion from Ethena, Aave, and the Ethereum Foundation.',
    metric: '$3.5M day-one deposits',
  },
  {
    slug: 'ai-apps',
    eyebrow: 'Independent · 2026',
    title: 'Four AI products, four different AI architectures',
    outcome:
      'Shipped four complete consumer apps — cloud LLM, hybrid cloud/on-device, fully on-device, and cross-platform — all four live on the App Store.',
    metric: '4 products · 4 App Store releases',
  },
];

export const professionalProducts = [
  {
    name: 'Chamber',
    href: 'https://chamberfi.com',
    domain: 'chamberfi.com',
    description:
      'Investment platform for tokenized vaults — live since 2020 with zero security incidents.',
  },
  {
    name: 'mStable',
    href: 'https://mstable.com',
    domain: 'mstable.com',
    description: 'Automated yield product that efficiently stacks yield across markets.',
  },
  {
    name: 'Toros',
    href: 'https://toros.finance',
    domain: 'toros.finance',
    description: 'Leveraged tokens with built-in downside protections.',
  },
] as const;

export const personalProducts = [
  {
    name: 'Cleared',
    href: 'https://clearedfirst.com',
    domain: 'clearedfirst.com',
    icon: '/projects/cleared-icon.png',
    description:
      'AI to-do app that ranks your list so you always know the one thing to do next.',
    note: 'Gemini · MCP for Claude',
    appStore: 'https://apps.apple.com/us/app/cleared-first/id6792591159',
  },
  {
    name: 'IronProof',
    href: 'https://ironproof.org',
    domain: 'ironproof.org',
    icon: '/projects/ironproof-icon.png',
    description:
      'Turns progress photos into proof of transformation, synced across devices.',
    note: 'Cross-platform · no model',
    appStore: 'https://apps.apple.com/us/app/ironproof-photos/id6790628450',
  },
  {
    name: 'Grava',
    href: 'https://gravacal.com',
    domain: 'gravacal.com',
    icon: '/projects/grava-icon.png',
    description:
      'AI calorie tracker for iPhone — photograph a meal, AI estimates calories and macros as honest ranges.',
    note: 'Gemini · on-device fallback',
    appStore: 'https://apps.apple.com/us/app/grava/id6790959541',
  },
  {
    name: 'Delecto',
    href: 'https://delecto.app',
    domain: 'delecto.app',
    icon: '/projects/delecto-icon.png',
    description:
      'Native Mac app that culls a photo shoot like a tournament — two photos at a time, pick the winner, keep the survivors.',
    note: 'On-device AI · no cloud',
    appStore: 'https://apps.apple.com/us/app/delecto/id6819971928',
    platform: 'mac',
  },
] as const;

export const experience = [
  {
    company: 'Chamber (formerly dHEDGE)',
    role: 'Senior Product Manager',
    period: 'Jan 2024 – Apr 2026',
    summary:
      'Led a cross-functional team of 10 engineers and designers. Product features attracted $125M+ in concurrent deposits; rebrand and AI-vaults pivot grew monthly visitors 73%; pricing strategy captured $3.4M in annualized revenue.',
  },
  {
    company: 'dHEDGE',
    role: 'Technical Product Manager',
    period: 'May 2021 – Dec 2023',
    summary:
      'Owned the dHEDGE V2 launch on Polygon — $1M in capital in the first month, $6.5M over six months — and led the first release on Optimism ($300K in month one).',
  },
  {
    company: 'dHEDGE',
    role: 'Senior Frontend Engineer',
    period: 'Jan 2021 – May 2021',
    summary:
      'Shipped a swap integration that cut user transaction fees by 90% and made the frontend compatible with multi-signature vaults.',
  },
  {
    company: 'Infosys (contracted to Starbucks)',
    role: 'Senior Frontend Engineer',
    period: 'Nov 2019 – Dec 2020',
    summary:
      'Built a React / React Native hybrid inventory app for Starbucks, with Jest unit testing and peer review across a senior team.',
  },
  {
    company: 'Freelance',
    role: 'Web3 Engineer',
    period: 'Jul 2019 – Nov 2019',
    summary:
      'Shipped smart-contract integrations across the Ethereum ecosystem and contributed to the EIP process with Ethereum Cat Herders.',
  },
  {
    company: 'The Pennsylvania State University',
    role: 'B.S. Energy Engineering',
    period: '2019',
    summary: '',
  },
] as const;
