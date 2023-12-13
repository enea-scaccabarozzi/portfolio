'use client';

import { useTranslations } from 'next-intl';

import { IProject } from '@portfolio/frontend-types';
import { Link } from '@portfolio/frontend-utils/server';

import { PortfolioBackground } from './background';
import { PortfolioSection } from './section';

import styles from './portfolio.module.scss';

interface IProps {
  projects: IProject[];
}

export const PortfolioComponent = ({ projects }: IProps) => {
  const t = useTranslations('Portfolio');
  return (
    <main className={styles.portfolioPage}>
      <PortfolioBackground>
        <>
          <div className={styles.overlay}>
            <div className={styles.bottomOverlayBorder} />
            <Link href="/" className={styles.homeLink}>
              « Home »
            </Link>
            <div className={styles.topOverlayBorder} />
          </div>
          <div className={styles.heading}>
            <h2 className={styles.title}>{t('heading')}</h2>
            <p className={styles.subtitle}>{t('subtitle')}</p>
          </div>

          <div className={styles.spacer} />
          {projects.map((project, ind) => (
            <PortfolioSection
              key={project.slug}
              project={project}
              isReverse={ind % 2 !== 0}
            />
          ))}
        </>
      </PortfolioBackground>
    </main>
  );
};
