import { Staff } from '../types.ts';
import qaswarProfile from '../assets/Qaswar Profile Image.jpeg';
import { HASEEB_STAFF } from './haseebStaff.ts';
import { MUAZ_STAFF } from './muazStaff.ts';

export const STAFF: Staff[] = [
  {
    id: 'ali-qaswar-khaleeq',
    name: 'Ali Qaswar Khaleeq',
    role: 'Trainer · Public Speaker · HR & OD Specialist',
    linkedin: 'https://www.linkedin.com/in/ali-qaswar-87031a181/',
    titles: ['Trainer', 'Public Speaker', 'HR & OD Specialist'],
    summary:
      '15+ years across public, private & NGO sectors. Trainer, public speaker, and HR specialist focused on leadership, communication, and organizational development.',
    bio:
      'Highly experienced trainer and communication specialist with over 15 years of professional expertise across the public and private sectors. With a strong academic background in International Relations and a proven track record in leadership roles, he delivers impactful, engaging, and result-oriented training sessions. His dynamic speaking style, combined with practical insights and motivational elements, enables individuals and organizations to enhance their performance, communication, and leadership capabilities.',
    image: qaswarProfile,
    education: {
      degree: 'M.Phil. in International Relations',
      institution: 'National Defense University, Islamabad'
    },
    experience: {
      current: 'Manager HR & Operations — Brains Hub Ltd. (UK-based Digital Marketing Agency)',
      previous: [
        'Director Career Services & Corporate Linkages',
        'Head of HR & Organizational Development',
        'Manager Public Relations'
      ]
    },
    expertise: [
      'Leadership Development',
      'Communication & Presentation Skills',
      'Public Speaking & Confidence Building',
      'Conflict Resolution & Negotiation',
      'Problem-Solving & Critical Thinking',
      'Life Skills & Personal Development',
      'Governance & Civic Awareness',
      'Civil Society & Democracy',
      'Community Development & Volunteerism'
    ],
    highlights: [
      'National-Level Debater',
      'Public Orator & TV Anchor',
      'Poet & Author of Two Books',
      '15+ Years of Multi-Sector Experience',
      'Extensive NGO & Corporate Training Portfolio'
    ],
    approach: [
      'Interactive & participatory sessions',
      'Real-life case studies and examples',
      'Skill-based activities and exercises',
      'Motivational and engaging delivery',
      'Focus on practical application and outcomes'
    ]
  },
  HASEEB_STAFF,
  MUAZ_STAFF
];
