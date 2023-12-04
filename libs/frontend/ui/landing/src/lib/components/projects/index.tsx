import { motion, useTransform } from 'framer-motion';
import Link from 'next/link';
import cn from 'classnames';

import {
  ScrollProvider,
  useNavigation,
  useScroll,
} from '@portfolio/frontend-features-core';

import styles from './projects.module.scss';

const Content = () => {
  const progress = useScroll();

  return (
    <div className={cn(styles.portfolio, styles.wrapper)}>
      <Link href={'/portfolio'}>
        <motion.div
          className={styles.blob}
          style={{
            scale: useTransform(progress, [0, 0.8, 1], [0, 1, 1]),
            opacity: useTransform(progress, [0, 0.8, 1], [0, 1, 1]),
          }}
        >
          <span className={styles.layer} />
          <span className={styles.layer} />
          <span className={styles.layer} />
          <div className={styles.heading}>
            <h3>Portfolio</h3>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export const ProjectsComponent = () => {
  const { setActiveSection } = useNavigation();

  return (
    <main className={styles.projects}>
      <div className={styles.content}>
        <svg viewBox="0 0 1440 590" className={styles.waves}>
          <path d="M 0,600 C 0,600 0,200 0,200 C 120.89952153110048,192.8995215311005 241.79904306220095,185.79904306220098 340,192 C 438.20095693779905,198.20095693779902 513.7033492822967,217.70334928229664 595,225 C 676.2966507177033,232.29665071770336 763.3875598086123,227.38755980861245 871,211 C 978.6124401913877,194.61244019138755 1106.7464114832537,166.74641148325358 1205,163 C 1303.2535885167463,159.25358851674642 1371.6267942583731,179.6267942583732 1440,200 C 1440,200 1440,600 1440,600 Z" />
          <path d="M 0,600 C 0,600 0,400 0,400 C 126.49760765550238,416.3062200956938 252.99521531100476,432.6124401913876 333,426 C 413.00478468899524,419.3875598086124 446.51674641148327,389.8564593301436 541,381 C 635.4832535885167,372.1435406698564 790.9377990430623,383.9617224880382 891,406 C 991.0622009569377,428.0382775119618 1035.732057416268,460.29665071770336 1118,461 C 1200.267942583732,461.70334928229664 1320.1339712918661,430.8516746411483 1440,400 C 1440,400 1440,600 1440,600 Z" />
        </svg>

        <ScrollProvider
          debug={false}
          options={{
            end: '+=92%',
            start: '10% bottom',
            pin: false,
            onEnter: () => setActiveSection(1),
            onUpdate: () => setActiveSection(1),
          }}
        >
          <Content />
        </ScrollProvider>
      </div>
    </main>
  );
};
