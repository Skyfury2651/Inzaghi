// Service Types
export interface Service {
  id: string
  slug: string
  title: string
  type: 'translation' | 'interpretation' | 'visa'
  category: string
  description: string
  content: string
  heroImage: string
  thumbnail: string
  benefits: Benefit[]
  process: ProcessStep[]
  pricing: PricingTier[]
  faqs: FAQ[]
  relatedServices: string[]
  seo: SEOData
  status: 'draft' | 'published'
  createdAt: string
  updatedAt: string
}

export interface Benefit {
  icon: string
  title: string
  description: string
}

export interface ProcessStep {
  number: number
  title: string
  description: string
  icon?: string
}

export interface PricingTier {
  language: string
  languageCode: string
  standardPrice: number
  specializedPrice: number
  currency: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
}

// Project Types
export interface Project {
  id: string
  slug: string
  title: string
  industry: string
  client: string
  description: string
  images: string[]
  date: string
  location: string
  serviceType: string
  featured: boolean
  status: 'draft' | 'published'
  createdAt: string
}

// Client Types
export interface Client {
  id: string
  name: string
  logo: string
  industry: string
  testimonial?: string
  testimonialAuthor?: string
  testimonialRole?: string
  website?: string
  featured: boolean
  order: number
}

// Team Types
export interface TeamMember {
  id: string
  slug: string
  name: string
  photo: string
  location: 'hanoi' | 'hcmc'
  languages: string[]
  bio: string
  role: string
  email?: string
  phone?: string
  order: number
  status: 'active' | 'inactive'
}

// Blog Types
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  thumbnail: string
  category: string
  tags: string[]
  author: Author
  views: number
  status: 'draft' | 'published'
  publishedAt: string
  createdAt: string
}

export interface Author {
  id: string
  name: string
  avatar: string
}

export interface BlogCategory {
  id: string
  slug: string
  name: string
  count: number
}

// Pricing Types
export interface TranslationPricing {
  id: string
  sourceLanguage: string
  targetLanguage: string
  standardPrice: number
  specializedPrice: number
  notarizationFee: number
}

export interface InterpretationPricing {
  id: string
  language: string
  level1: PriceRange
  level2: PriceRange
  level3: PriceRange
}

export interface PriceRange {
  min: number
  max: number
  currency: string
}

// Quote Types
export interface QuoteRequest {
  id: string
  serviceType: string
  name: string
  title: string
  phone: string
  email: string
  requirements: string
  status: 'new' | 'contacted' | 'quoted' | 'closed'
  notes: string
  createdAt: string
}

// Settings Types
export interface SiteSettings {
  companyName: string
  companyNameVi: string
  phones: string[]
  emails: string[]
  addresses: Address[]
  socialMedia: SocialLinks
  bankInfo: BankInfo
  registration: RegistrationInfo
  promoCode: PromoCode
}

export interface Address {
  city: string
  address: string
  phone: string
  isHeadquarters: boolean
}

export interface SocialLinks {
  facebook?: string
  linkedin?: string
  youtube?: string
  zalo?: string
}

export interface BankInfo {
  bankName: string
  accountNumber: string
  accountHolder: string
  branch: string
}

export interface RegistrationInfo {
  businessNumber: string
  issuedDate: string
  issuedBy: string
}

export interface PromoCode {
  code: string
  discount: number
  active: boolean
}

// Navigation Types
export interface NavItem {
  label: string
  to?: string
  children?: NavItem[]
  icon?: string
}

// Language Types
export interface Language {
  code: string
  name: string
  nameVi: string
  flag: string
  translationUrl: string
  interpretationUrl?: string
}

// Pagination Types
export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  perPage: number
  totalPages: number
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  errors?: Record<string, string[]>
}
