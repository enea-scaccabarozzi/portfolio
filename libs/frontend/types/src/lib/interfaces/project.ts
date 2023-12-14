export interface IProject {
  slug: string;
  title: string;
  categories: string[];
  description: string;
  thumbnail: string;
  images: string[];
  links: {
    github?: string;
    website?: string;
    googlePlay?: string;
  };
  role: string;
  stack: string[];
  period: [string, string | undefined];
  commissioner: string;
}
