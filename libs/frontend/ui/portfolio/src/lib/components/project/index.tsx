'use client';

import { useTranslations } from 'next-intl';

import { IProject } from '@portfolio/frontend-types';
import { Link } from '@portfolio/frontend-utils';

import { PortfolioBackground } from '../background';
import { HeroComponent } from './hero';
import { InfoComponent } from './info';
import { ImagesComponent } from './images';
import { DescriptionComponent } from './description';

import styles from './project.module.scss';

interface IProps {
  project: IProject;
}

export const ProjectComponent = ({ project }: IProps) => {
  const t = useTranslations('Portfolio');

  return (
    <PortfolioBackground isDark>
      <main className={styles.projectPage}>
        <div className={styles.closeLink}>
          <Link href="/portfolio">{t('close')}</Link>
        </div>
        <HeroComponent project={project} />

        <InfoComponent project={project} />

        <DescriptionComponent description={project.description} />

        <ImagesComponent project={project} />
      </main>
    </PortfolioBackground>
  );
};
