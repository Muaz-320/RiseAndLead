import { PortfolioItem, Testimonial, FAQ } from './types.ts';

export const BRAND_NAME = 'Rise & Lead 360';
export const BRAND_TAGLINE = 'Learn Today. Build Tomorrow.';
export const BRAND_TAGLINE_PARTS = ['Learn Today', 'Build Tomorrow'] as const;
export const BRAND_MISSION =
  'Just listen to your soul and unlock your true potential with Rise & Lead 360 — where passion meets purpose, skills meet growth, and leaders are empowered to rise beyond limits.';
export const BRAND_HERO_HEADLINE = 'Just listen to your soul and unlock your true potential.';
export const BRAND_HERO_SUBLINE =
  'Where passion meets purpose, skills meet growth, and leaders are empowered to rise beyond limits.';
export const BRAND_CAREERS =
  'Whether you dream of becoming a Web Developer, Mobile App Developer, Freelancer, or Software Engineer — Rise & Lead 360 provides practical, career-focused training designed for the modern tech industry.';

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'Civic Leadership Summit',
    description: 'A transformative program for community leaders across 12 countries, resulting in over 50 local initiatives.',
    image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=600&auto=format&fit=crop',
    year: '2025'
  },
  {
    id: '2',
    title: 'The AI Code Initiative',
    description: 'Empowering 5000+ students with advanced programming skills and real-world project experience.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop',
    year: '2024'
  },
  {
    id: '3',
    title: 'Executive Presence Series',
    description: 'Rebranding session for top-tier corporate management, focusing on impact, clarity, and authority.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
    year: '2024'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alexandra Wright',
    role: 'Product Manager at TechFlow',
    content: "The Leadership Dynamics course completely shifted my perspective on team management. The insights were practical, modern, and immediately applicable.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    rating: 5
  },
  {
    id: '2',
    name: 'David Hashimi',
    role: 'Senior Developer',
    content: "Marcus Thorne's React Architecture course is the best I've taken. No fluff, just high-level patterns that actually matter in production.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5
  },
  {
    id: '3',
    name: 'Sophie Laurent',
    role: 'Executive Director',
    content: "The Self-Grooming series exceeded my expectations. It's not just about looks; it's about the psychological confidence you project in every room.",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    rating: 5
  }
];

export const FAQS: FAQ[] = [
  {
    id: '1',
    question: 'Are the certificates internationally recognized?',
    answer: 'Yes, Rise & Lead 360 certificates are recognized by leading employers and can be integrated directly into your LinkedIn profile.'
  },
  {
    id: '2',
    question: 'Can I access the course material after completion?',
    answer: 'Absolutely. You retain lifetime access to all course materials, including future updates and recorded sessions.'
  },
  {
    id: '3',
    question: 'Do you offer corporate training packages?',
    answer: 'We do. We provide specialized cohorts for enterprise teams with custom curriculum adjustments to fit your company culture.'
  }
];
