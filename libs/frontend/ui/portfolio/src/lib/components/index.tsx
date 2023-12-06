'use client';

import { IProject } from '@portfolio/frontend-types';
import { Link } from '@portfolio/frontend-features-core';

import { PortfolioBackground } from './background';
import { PortfolioSection } from './section';

import styles from './portfolio.module.scss';

interface IProps {
  projects: IProject[];
}

export const PortfolioComponent = ({ projects }: IProps) => {
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
