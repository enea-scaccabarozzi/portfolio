import { PortfolioComponent } from '@portfolio/frontend-ui-portfolio';
import { IProject } from '@portfolio/frontend-types';

import imgA from '../assets/mockup_01.jpg';
import imgB from '../assets/mockup_02.png';
import imgC from '../assets/mockup_03.png';

const PROJECTS: IProject[] = [
  {
    title: 'Reprehenderit pariatur',
    slug: 'pariatur',
    categories: ['Fugiat deserunt', 'Consectetur', 'Ipsum', 'Tempor deserunt'],
    description:
      'Labore ipsum excepteur excepteur ipsum. Tempor eiusmod laborum consectetur cillum ad eiusmod est consectetur. Quis culpa occaecat proident mollit exercitation nostrud est velit. Aliqua ut officia tempor fugiat exercitation. Eu enim quis sit et esse tempor fugiat. Reprehenderit anim excepteur incididunt excepteur officia voluptate fugiat sunt et minim amet.',
    images: [],
    links: {},
    role: 'Lead Developer',
    stack: ['Next.js', 'Nest.js', 'Aws'],
    commissioner: 'Do tempor',
    thumbnail: typeof imgA === 'string' ? imgA : imgA.src,
    period: ['2023-02-01T00:00:00.000Z', '2023-04-01T00:00:00.000Z'],
  },
  {
    title: 'Fugiat ea aliqua',
    slug: 'aliqua',
    categories: ['Fugiat deserunt', 'Consectetur', 'Ipsum', 'Tempor deserunt'],
    description:
      'Do cillum dolor commodo tempor. Nisi consectetur veniam ut proident est qui in incididunt ipsum nisi ut. Esse officia consectetur adipisicing adipisicing et exercitation enim velit nulla culpa officia velit sint amet. Consectetur sunt sint non irure mollit magna est non veniam occaecat.',
    images: [],
    links: {},
    role: 'Lead Developer',
    stack: ['Next.js', 'Nest.js', 'Aws'],
    commissioner: 'Ullamco dolor',
    thumbnail: typeof imgB === 'string' ? imgB : imgB.src,
    period: ['2023-07-01T00:00:00.000Z', '2023-08-01T00:00:00.000Z'],
  },
  {
    title: 'Anim amet',
    slug: 'amet',
    categories: ['Fugiat deserunt', 'Consectetur', 'Ipsum', 'Tempor deserunt'],
    description:
      'Magna ea pariatur elit qui quis anim culpa minim incididunt veniam eiusmod est. Eiusmod elit exercitation veniam ullamco ad pariatur et amet eu. Dolore est in in aliquip elit ipsum.',
    images: [],
    links: {},
    role: 'Lead Developer',
    stack: ['Next.js', 'Nest.js', 'Aws'],
    commissioner: 'Sunt culpa commodo dolor sit excepteur ipsum fugiat.',
    thumbnail: typeof imgC === 'string' ? imgC : imgC.src,
    period: ['2023-08-01T00:00:00.000Z', '2023-012-01T00:00:00.000Z'],
  },
];

export const PortfolioPage = () => {
  return <PortfolioComponent projects={PROJECTS} />;
};
