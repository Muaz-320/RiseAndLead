export interface Course {
  id: string;
  title: string;
  category: 'Leadership' | 'Programming' | 'Self Grooming' | 'Self Awareness';
  description: string;
  duration: string;
  instructor: string;
  image: string;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
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
