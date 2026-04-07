export interface Translations {
  nav: {
    experience: string
    projects: string
    blog: string
  }
  home: {
    role: string
    bio: string
  }
  experience: {
    title: string
    present: string
  }
  projects: {
    title: string
  }
  blog: {
    title: string
    minRead: string
    onThisPage: string
  }
  meta: {
    siteDescription: string
    experienceDescription: string
    projectsDescription: string
    blogDescription: string
  }
  footer: {
    copyright: string
  }
  breadcrumbs: {
    home: string
    blog: string
    experience: string
    projects: string
  }
  rss: {
    feed: string
    blogTitle: string
    blogDescription: string
  }
}

export const en: Translations = {
  nav: {
    experience: 'Experience',
    projects: 'Projects',
    blog: 'Blog',
  },
  home: {
    role: 'Senior Software Developer',
    bio: 'I design and build backend systems, cloud infrastructure, and AI pipelines. I care about reliability, clean interfaces, and shipping software that lasts.',
  },
  experience: {
    title: 'Career',
    present: 'Present',
  },
  projects: {
    title: 'Projects',
  },
  blog: {
    title: 'Blog',
    minRead: 'min read',
    onThisPage: 'On this page',
  },
  meta: {
    siteDescription:
      'Senior Software Developer. I design and build backend systems, cloud infrastructure, and AI pipelines.',
    experienceDescription:
      'Professional experience and career path of Enea Scaccabarozzi — roles, responsibilities, and technical growth.',
    projectsDescription:
      "Open source contributions and side projects by Enea Scaccabarozzi — tools, libraries, and systems I've built.",
    blogDescription:
      'Technical notes and knowledge collected over the years — cloud infrastructure, AI systems, and software architecture.',
  },
  footer: {
    copyright: '© {year} Enea Scaccabarozzi',
  },
  breadcrumbs: {
    home: 'Home',
    blog: 'Blog',
    experience: 'Career',
    projects: 'Projects',
  },
  rss: {
    feed: 'RSS Feed',
    blogTitle: 'Enea Scaccabarozzi — Blog',
    blogDescription: 'Technical notes and knowledge collected over the years.',
  },
}
