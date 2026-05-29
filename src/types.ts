export interface Doctor {
  id: string;
  name: string;
  title: string;
  shortBio: string;
  longBio: string;
  imageUrl: string;
  specialties: string[];
  education: string[];
  credentials: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  category: 'cosmetic' | 'general' | 'restorative' | 'preventive';
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  rating: number;
  text: string;
  date: string;
  isCosmetic?: boolean;
}

export interface OfficeHour {
  day: string;
  hours: string;
}
