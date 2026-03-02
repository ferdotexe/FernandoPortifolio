export type SectionId = 'hero' | 'sobre-mim' | 'tecnologias' | 'projetos' | 'experiencia' | 'contato'

export type MenuItem = {
  id: SectionId
  label: string
}

export type SocialLink = {
  name: string
  url: string
}

export type TechnologyItem = {
  name: string
  iconUrl: string
}

export type PortfolioProject = {
  title: string
  description: string
  tags: string[]
  repoUrl: string
  imageUrl?: string
}

export type ExperienceItem = {
  company: string
  period: string
  role: string
  bullets: string[]
  marker: 'green' | 'white'
}

export type ContactInfo = {
  email: string
  phone: string
}

export type PortfolioData = {
  fullName: string
  role: string
  location: string
  photoUrl: string
  socials: SocialLink[]
  aboutText: string
  technologies: TechnologyItem[]
  projects: PortfolioProject[]
  experiences: ExperienceItem[]
  contact: ContactInfo
  menu: MenuItem[]
}
