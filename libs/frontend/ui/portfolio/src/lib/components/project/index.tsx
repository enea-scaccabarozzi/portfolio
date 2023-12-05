'use client';

import Link from 'next/link';

import { IProject } from '@portfolio/frontend-types';
import { FooterComponent } from '@portfolio/frontend-ui-shared';

import { PortfolioBackground } from '../background';
import { HeroComponent } from './hero';
import { InfoComponent } from './info';
import { ImagesComponent } from './images';

import styles from './project.module.scss';
import { DescriptionComponent } from './description';

interface IProps {
  project: IProject;
}

export const ProjectComponent = ({ project }: IProps) => {
  return (
    <>
      <PortfolioBackground isDark>
        <main className={styles.projectPage}>
          <div className={styles.closeLink}>
            <Link href="/portfolio">Close</Link>
          </div>
          <HeroComponent project={project} />

          <InfoComponent project={project} />

          <DescriptionComponent description={project.description} />

          <ImagesComponent project={project} />
        </main>
      </PortfolioBackground>
      <FooterComponent />
    </>
  );
};
