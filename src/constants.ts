import { Course, Staff, PortfolioItem, Testimonial, FAQ } from './types.ts';

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Modern Leadership Dynamics',
    category: 'Leadership',
    description: 'Master the art of leading diverse teams in the digital age with strategic emotional intelligence and data-driven empathy.',
    duration: '6 Weeks',
    instructor: 'Dr. Sarah Chen',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Full-Stack React Architecture',
    category: 'Programming',
    description: 'Deep dive into scalable frontend systems, custom hooks, and modern state management patterns using state-of-the-art tooling.',
    duration: '8 Weeks',
    instructor: 'Marcus Thorne',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Professional Presence & Etiquette',
    category: 'Self Grooming',
    description: 'Cultivate a commanding professional image through advanced communication, non-verbal cues, and grooming techniques.',
    duration: '4 Weeks',
    instructor: 'Elena Moretti',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'The Art of Self-Awareness',
    category: 'Self Awareness',
    description: 'Unlock your true potential by understanding your cognitive biases, emotional triggers, and core values.',
    duration: '5 Weeks',
    instructor: 'Julian Vane',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Python for Data Analysis',
    category: 'Programming',
    description: 'Learn to manipulate, analyze, and visualize complex datasets using NumPy, Pandas, and professional visualization libraries.',
    duration: '7 Weeks',
    instructor: 'Aleksei Volkov',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    title: 'Resilient Decision Making',
    category: 'Leadership',
    description: 'Develop the psychological stamina required to make critical decisions under extreme pressure and uncertainty.',
    duration: '4 Weeks',
    instructor: 'Dr. Sarah Chen',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop'
  }
];

export const STAFF: Staff[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    role: 'Head of Leadership',
    bio: 'Former Fortune 500 executive with over 20 years of experience in organizational psychology and strategic growth.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Lead Technical Instructor',
    bio: 'Software architect and open-source contributor specializing in distributed systems and modern performance patterns.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Elena Moretti',
    role: 'Grooming & Style Consultant',
    bio: 'International stylist who has worked with global leaders, C-suite executives, and media personalities for two decades.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop'
  }
];

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
    answer: 'Yes, EliteLearn certificates are recognized by leading global corporations and can be integrated directly into your LinkedIn profile.'
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
