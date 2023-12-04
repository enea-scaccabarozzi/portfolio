'use client';

import { useRouter } from 'next/navigation';

import { FooterComponent } from '@portfolio/frontend-ui-shared';
import { IProject } from '@portfolio/frontend-types';

import { PortfolioBackground } from './background';
import { PortfolioSection } from './section';

import styles from './portfolio.module.scss';

interface IProps {
  projects: IProject[];
}

export const PortfolioComponent = ({ projects }: IProps) => {
  const router = useRouter();

  return (
    <>
      <main className={styles.portfolioPage}>
        <PortfolioBackground>
          <>
            <div className={styles.overlay}>
              <div className={styles.bottomOverlayBorder} />
              <div onClick={() => router.back()} className={styles.homeLink}>
                « Home »
              </div>
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
      <FooterComponent />
    </>
  );
};
