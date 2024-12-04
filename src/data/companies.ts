import type { Company } from '../types/company';

export const COMPANIES: Company[] = [
  {
    id: 'bessemer',
    name: 'Bessemer Venture Partners',
    logo: '/company-logos/bessemer.png',
    description: 'Leading venture capital firm investing in Israeli tech startups and early-stage companies.',
    tags: ['VC', 'Investment'],
    founders: [],
    locations: [
      { city: 'New York', state: 'NY', country: 'USA' },
      { city: 'Tel Aviv', country: 'Israel' }
    ],
    investors: [],
    alternatives: [
      { name: 'Sequoia Capital', url: 'https://www.sequoiacap.com' },
      { name: 'Andreessen Horowitz', url: 'https://a16z.com' }
    ],
    resources: [
      'https://bdsmovement.net/news/bessemer-israel-investments',
      'https://www.bvp.com/office/tel-aviv'
    ]
  },
  {
    id: 'torq',
    name: 'Torq',
    logo: '/company-logos/torq.png',
    description: 'Torq is the only no-code, low-code, and full-code security automation platform with true enterprise-grade scalability.',
    tags: ['Cloud Services', 'Security'],
    founders: [
      { name: 'Leonid Belkind' },
      { name: 'Eldad Livni' },
      { name: 'Ofer Smadari', title: 'CEO' }
    ],
    locations: [
      { city: 'New York', state: 'NY', country: 'USA' },
      { city: 'Tel Aviv', country: 'Israel' }
    ],
    investors: ['Bessemer Venture Partners'],
    alternatives: [
      { name: 'Tines', url: 'https://www.tines.com' },
      { name: 'Zapier', url: 'https://zapier.com' }
    ],
    resources: [
      'https://torq.io/about/careers',
      'https://www.crunchbase.com/organization/torq'
    ]
  },
  {
    id: 'techventures',
    name: 'TechVentures',
    logo: '/company-logos/techventures.png',
    description: 'Israeli tech investment firm focusing on early-stage startups.',
    tags: ['Investment', 'Tech'],
    founders: [
      { name: 'Monte Magdy', title: 'CEO' }
    ],
    locations: [
      { city: 'Tel Aviv', country: 'Israel' }
    ],
    investors: [],
    resources: [
      'https://techventures.com/portfolio',
      'https://www.crunchbase.com/organization/techventures'
    ]
  },
  {
    id: 'globaltech',
    name: 'GlobalTech',
    logo: '/company-logos/globaltech.png',
    description: 'Global technology company with strong ties to Israeli tech ecosystem.',
    tags: ['Tech', 'Global'],
    founders: [
      { name: 'Arun Poojari', title: 'Founder' }
    ],
    locations: [
      { city: 'Tel Aviv', country: 'Israel' },
      { city: 'Singapore', country: 'Singapore' }
    ],
    investors: ['Bessemer Venture Partners'],
    resources: [
      'https://globaltech.com/about',
      'https://www.linkedin.com/company/globaltech'
    ]
  },
  {
    id: 'insight-partners',
    name: 'Insight Partners',
    logo: '/company-logos/insight.png',
    description: 'Global venture capital and private equity firm investing in high-growth technology companies.',
    tags: ['VC', 'Investment', 'Private Equity'],
    founders: [],
    locations: [
      { city: 'New York', state: 'NY', country: 'USA' },
      { city: 'Tel Aviv', country: 'Israel' }
    ],
    investors: [],
    resources: [
      'https://www.insightpartners.com/office/tel-aviv',
      'https://www.crunchbase.com/organization/insight-venture-partners'
    ]
  },
  {
    id: 'viola-ventures',
    name: 'Viola Ventures',
    logo: '/company-logos/viola.png',
    description: 'Leading Israeli tech-focused investment group managing over $3B across multiple funds.',
    tags: ['VC', 'Investment'],
    founders: [],
    locations: [
      { city: 'Herzliya', country: 'Israel' }
    ],
    investors: [],
    resources: [
      'https://www.viola-group.com/about',
      'https://www.crunchbase.com/organization/viola-ventures'
    ]
  }
];