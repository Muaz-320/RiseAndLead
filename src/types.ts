export type OfferingPillarId = 'hr' | 'film' | 'technology' | 'singing' | 'services';

export interface OfferingProgram {
  id: string;
  title: string;
  duration: string;
  items: string[];
  description?: string;
  technologies?: string[];
}

export interface OfferingPillar {
  id: OfferingPillarId;
  label: string;
  programs: OfferingProgram[];
}

export interface StaffEducation {
  degree: string;
  institution: string;
}

export interface StaffRole {
  title: string;
  period: string;
  location?: string;
  description?: string;
  skills?: string[];
}

export interface StaffCompanyExperience {
  company: string;
  meta?: string;
  roles: StaffRole[];
}

export interface StaffExperience {
  current?: string;
  previous?: string[];
  companies?: StaffCompanyExperience[];
}

export type StaffSectionImageLayout = 'gallery' | 'featured';
export type StaffImageFocus = 'top' | 'center' | 'bottom';
export type StaffGalleryAspect = 'video' | 'portrait';

export interface StaffProfileSection {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  items?: string[];
  images?: string[];
  featuredImage?: string;
  imageLayout?: StaffSectionImageLayout;
  imageFocus?: StaffImageFocus[];
  galleryAspect?: StaffGalleryAspect;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  bio: string;
  summary?: string;
  image: string;
  linkedin?: string;
  titles?: string[];
  education?: StaffEducation;
  experience?: StaffExperience;
  expertise?: string[];
  featuredHighlight?: string;
  highlights?: string[];
  approach?: string[];
  sections?: StaffProfileSection[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  year: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
