import { notFound } from 'next/navigation';

import { ProjectComponent } from '@portfolio/frontend-ui-portfolio';
import { IProject } from '@portfolio/frontend-types';

import imgA from '../assets/project_01.jpg';
import imgB from '../assets/project_02.jpg';
import imgC from '../assets/project_03.jpg';
import imgD from '../assets/project_04.png';
import imgE from '../assets/project_05.png';
import thumbnail from '../assets/project_06.jpg';

const getSrc = (src: typeof thumbnail) => {
  return typeof src === 'string' ? src : src.src;
};

const PROJECT: IProject = {
  title: 'Reprehenderit pariatur',
  slug: 'pariatur',
  categories: ['Fugiat deserunt', 'Consectetur', 'Ipsum', 'Tempor deserunt'],
  description:
    'Labore ipsum excepteur excepteur ipsum. Tempor eiusmod laborum consectetur cillum ad eiusmod est consectetur. Quis culpa occaecat proident mollit exercitation nostrud est velit. Aliqua ut officia tempor fugiat exercitation. Eu enim quis sit et esse tempor fugiat. Reprehenderit anim excepteur incididunt excepteur officia voluptate fugiat sunt et minim amet.',
  images: [
    getSrc(imgA),
    getSrc(imgB),
    getSrc(imgC),
    getSrc(imgD),
    getSrc(imgE),
  ],
  links: {
    github: 'https://github.com',
    website: 'https://me.eneascaccabarozzi.xyz',
    googlePlay: 'https://play.google.com',
  },
  role: 'Lead Developer',
  stack: ['Next.js', 'Nest.js', 'Aws'],
  commissioner: 'Do tempor',
  thumbnail: getSrc(thumbnail),
  period: ['2023-02-01T00:00:00.000Z', '2023-04-01T00:00:00.000Z'],
};

const PROJECTS_SLUGS = ['pariatur', 'aliqua', 'amet'];

interface IProps {
  projectSlug: string;
}

export const ProjectPage = ({ projectSlug }: IProps) => {
  if (!PROJECTS_SLUGS.includes(projectSlug)) notFound();

  return <ProjectComponent project={PROJECT} />;
};
