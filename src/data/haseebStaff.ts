import type { StaffProfileSection } from '../types.ts';
import haseebProfile from '../assets/Haseeb Khan Profile Image.jpeg';
import visionImg from '../assets/haseeb/vision.jpg';
import careerImg from '../assets/haseeb/career.jpg';
import teachingImg from '../assets/haseeb/teaching.jpg';
import trainingImg from '../assets/haseeb/training.jpg';
import training1 from '../assets/haseeb/training-1.jpg';
import training2 from '../assets/haseeb/training-2.jpg';
import training3 from '../assets/haseeb/training-3.jpg';
import training4 from '../assets/haseeb/training-4.jpg';
import hostingImg from '../assets/haseeb/hosting.jpg';
import hosting2 from '../assets/haseeb/hosting-2.jpg';
import hosting3 from '../assets/haseeb/hosting-3.jpg';
import hosting4 from '../assets/haseeb/hosting-4.jpg';
import hosting5 from '../assets/haseeb/hosting-5.jpg';
import hosting6 from '../assets/haseeb/hosting-6.jpg';
import actingImg from '../assets/haseeb/acting.jpg';
import acting2 from '../assets/haseeb/acting-2.jpg';
import acting3 from '../assets/haseeb/acting-3.jpg';
import radioImg from '../assets/haseeb/radio.jpg';
import webSeries1 from '../assets/haseeb/web-series-1.jpg';
import webSeries2 from '../assets/haseeb/web-series-2.jpg';
import webSeries3 from '../assets/haseeb/web-series-3.jpg';
import { HASEEB_PODCAST_IMAGES } from './haseebPodcastImages.ts';
import comedyImg from '../assets/haseeb/comedy.jpg';
import comedy2 from '../assets/haseeb/comedy-2.jpg';
import comedy3 from '../assets/haseeb/comedy-3.jpg';
import comedy4 from '../assets/haseeb/comedy-4.jpg';
import comedy5 from '../assets/haseeb/comedy-5.jpg';
import comedy6 from '../assets/haseeb/comedy-6.png';
import publicationsImg from '../assets/haseeb/publications.jpg';
import theatreImg from '../assets/haseeb/theatre.jpg';
import brandsImg from '../assets/haseeb/brands.jpg';
import type { Staff } from '../types.ts';

export const HASEEB_PROFILE_SECTIONS: StaffProfileSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    subtitle: 'Aurevia Haseeb Khan',
    description:
      'Step into a world where creativity knows no bounds, where inspiration flows like a cascading river, and where the power of storytelling ignites the flames of imagination. Haseeb Khan is a luminary of the arts whose path has intertwined acting, education, training, hosting, and content curation for over two decades.'
  },
  {
    id: 'vision',
    title: 'Vision — The SmileNaire',
    subtitle: 'Communication · Happiness · Growth · Authenticity',
    description:
      'To transform Haseeb Khan\'s dynamic journey as an actor, educator, and trainer into a global symbol of inspiration and authenticity — celebrating The SmileNaire spirit that empowers, uplifts, and connects people through communication, creativity, and joy.',
    items: [
      'Communication: connecting people through clarity and impact',
      'Happiness: creating joy and positivity in every interaction',
      'Growth: enabling personal and professional development',
      'Authenticity: building trust through genuine engagement'
    ],
    images: [visionImg]
  },
  {
    id: 'career',
    title: 'Chapters of My Career',
    description:
      'Haseeb Khan\'s professional journey spans decades of creativity, teaching, and leadership. From 28 years of shaping minds in prestigious educational institutions to 25 years of captivating audiences as an actor, his career reflects versatility and passion. Through public speaking, acting, training, and hosting, he has consistently blended expertise with charisma.',
    images: [careerImg]
  },
  {
    id: 'teaching',
    title: 'Teaching with Purpose',
    description:
      'Haseeb Khan has dedicated over 28 years to education, shaping young minds at some of Pakistan\'s most prestigious institutions, including Forman Christian College, Aitchison College, Superior University, and Kinnaird College. His teaching philosophy blends expertise, creativity, and mentorship.',
    items: [
      'Communication & Presentation Skills',
      'Personality Development',
      'Media & Public Speaking',
      'Art of Non-Verbal Communication',
      'Branding and Self-Expression'
    ],
    images: [teachingImg]
  },
  {
    id: 'training',
    title: 'Training Expertise',
    subtitle: 'Certified Trainer — Carnelian',
    description:
      'With over 15 years of experience in training and personal development, Haseeb Khan empowers individuals and teams through impactful programs that inspire growth, confidence, and lasting transformation.',
    items: [
      'Art of Communication',
      'Brand Yourself',
      'Fuelling Happiness',
      'Leadership & Teamwork',
      'Exploring Oneself',
      'Presentation & Public Speaking Skills',
      'Emotional Intelligence for Success',
      'Happiness & Mindset Coaching'
    ],
    images: [trainingImg, training1, training2, training3, training4],
    imageLayout: 'gallery',
    galleryAspect: 'video'
  },
  {
    id: 'hosting',
    title: 'Hosting / Master of Ceremony',
    description:
      'With over 17 years of experience as a Host and Master of Ceremony, Haseeb Khan is known for his dynamic stage presence, infectious energy, and engaging style — from corporate and academic events to TV shows, podcasts, and entertainment programs like Shine with Alite and Neo Eid Shows.',
    items: [
      'Dynamic stage presence & engaging communication',
      'Audience connection & crowd management',
      'Event flow coordination',
      'Versatility across formal & entertainment platforms',
      'Creative improvisation'
    ],
    images: [hostingImg, hosting2, hosting3, hosting4, hosting5, hosting6],
    imageLayout: 'gallery',
    galleryAspect: 'video'
  },
  {
    id: 'acting',
    title: 'Acting / Stage & Screen Journey',
    description:
      'With over 25 years of experience across theatre, television, and screen, Haseeb Khan has earned recognition for expressive storytelling, emotional depth, and versatile performances. Notable appearances include Inspector Khojee and Timmy G in comedy, as well as powerful roles in Ranja Ranja Kardi and Mrs & Mrs Shamim (Drama & Web Series).',
    images: [actingImg, acting2, acting3],
    imageLayout: 'gallery',
    galleryAspect: 'video',
    imageFocus: ['center', 'center', 'center']
  },
  {
    id: 'radio',
    title: 'Radio Jockey — The Voice Behind the Mic',
    subtitle: 'Boom FM 106.6',
    description:
      'As a dynamic Radio Jockey on Boom FM 106.6, Haseeb Khan captivates audiences with energetic storytelling and inspiring conversations. He hosts popular shows including Positive Pakistan with Haseeb Khan and Morning Smiles with Haseeb Khan — spreading optimism, personal growth, and community spirit.',
    images: [radioImg]
  },
  {
    id: 'podcast',
    title: 'Talk Series / Podcast',
    subtitle: 'ABN Podcast',
    description:
      'Haseeb Khan brings thought-provoking dialogue to life through diverse podcast series under the ABN Podcast umbrella — including Surgeon Koe Koe, Second Thought with Haseeb Khan, The Other Side, and Rise and Lead 360. Each series explores unique dimensions of personal growth, leadership, and self-discovery — from reflective storytelling and deep conversations to transformative ideas that challenge perspectives. With his signature warmth and insight, Haseeb Khan creates a space where voices, visions, and values come together to inspire positive change and purposeful living.',
    images: HASEEB_PODCAST_IMAGES,
    imageLayout: 'gallery',
    galleryAspect: 'video'
  },
  {
    id: 'web-series',
    title: 'Web Series / Storytelling Saga',
    description:
      'Haseeb Khan is a versatile and seasoned actor whose work spans web series and short films, blending authenticity, creativity, and emotional depth. His notable web series include Middle Se Upper (produced by Kenwood), a socially insightful drama; Mrs and Mrs Shamim, exploring contemporary relationships; and Khatarnak, an intense, suspense-driven thriller. In short films, he has delivered compelling performances, including Darling, which highlights his ability to bring nuanced characters to life. With years of experience in acting, teaching, and public engagement, Haseeb continues to captivate audiences through meaningful storytelling and memorable performances.',
    images: [webSeries1, webSeries2, webSeries3],
    imageLayout: 'gallery',
    galleryAspect: 'video'
  },
  {
    id: 'comedy',
    title: 'Comedy & Screen Performances',
    description:
      'Haseeb Khan is a versatile actor renowned for his engaging and expressive performances in comedy across television and digital platforms. His notable works include Jutt and Bond, Inspector Khojee, and Haste Baste on Hum TV, as well as Couples on Hum TV, Timmy G on ARY, Sawateen on Neo TV, and Doctor Love on Geo TV. Through these projects, Haseeb has showcased impeccable comic timing, wit, and the ability to connect with diverse audiences, blending humor with relatability. His work continues to highlight his versatility and mastery of comedic storytelling in both light-hearted and socially resonant narratives.',
    images: [comedyImg, comedy2, comedy3, comedy4, comedy5, comedy6],
    imageLayout: 'gallery',
    galleryAspect: 'video'
  },
  {
    id: 'publications',
    title: 'Publications & Authorship',
    description:
      'A prolific author reflecting deep expertise in communication, personal development, and professional excellence — offering practical wisdom and real-world techniques for students and professionals alike.',
    items: [
      'Communication: The Invisible Power',
      'Brand Yourself',
      'Public Speaking: Speak to Inspire',
      'The Art of Non-Verbal',
      'Personality and Hygiene'
    ],
    images: [publicationsImg]
  },
  {
    id: 'theatre',
    title: 'Theatrical & Creative Performance',
    description:
      'Haseeb Khan has showcased his remarkable talent and versatility both as a director and actor in a wide range of theatrical productions. His notable works include Shikwa Jawab-e-Shikwa, Jutt & Bound, Ek Phool 3 Fool, East Meets West, Twice Upon a Time, Heer Ranjha, Identity, Akeli aur Hatak, and Peeno Kumari. Each performance reflects his deep understanding of storytelling, emotion, and stagecraft, blending artistic expression with powerful social and cultural themes. His creative direction and compelling performances continue to inspire audiences and elevate the standard of contemporary theatre.',
    images: [theatreImg]
  },
  {
    id: 'brands',
    title: 'Brand Representation & Ambassadorship',
    description:
      'Haseeb Khan has proudly collaborated with several national and international brands, serving as a brand ambassador, campaign face, and voice of influence across diverse industries. His engaging personality, credibility, and creative storytelling have made him a trusted choice for both corporate and public campaigns. Notable collaborations include MCB, Kenwood, Superior University, Lays, Protex, Tameer Pakistan, and DOSTEA — each reflecting his ability to connect with audiences, enhance brand identity, and deliver impactful messages with authenticity and charm.',
    items: ['MCB', 'Kenwood', 'Superior University', 'Lays', 'Protex', 'Tameer Pakistan', 'DOSTEA'],
    images: [brandsImg]
  }
];

export const HASEEB_STAFF: Staff = {
  id: 'haseeb-khan',
  name: 'Haseeb Khan',
  role: 'Actor · Educator · Trainer · Host',
  linkedin: 'https://www.linkedin.com/in/haseeb-khan-43b52a10a/',
  titles: ['Actor', 'Educator', 'Trainer', 'Host', 'Author'],
  summary:
    'A luminary of the arts with decades across acting, education, training, and hosting. Known as The SmileNaire — inspiring growth through communication, creativity, and joy.',
  bio:
    'Haseeb Khan is a versatile creative professional whose journey spans acting, education, training, hosting, radio, and content creation. With 28 years shaping minds at Pakistan\'s leading institutions and 25 years captivating audiences on stage and screen, he empowers individuals through communication, branding, leadership, and happiness — leaving a lasting impact on every platform he engages with.',
  image: haseebProfile,
  sections: HASEEB_PROFILE_SECTIONS,
  highlights: [
    'Certified Trainer — Carnelian',
    '28+ Years in Education',
    '25+ Years in Acting',
    'Author of 5 Books',
    '17+ Years Hosting & Master of Ceremony',
    'Radio Jockey — Boom FM 106.6'
  ]
};
