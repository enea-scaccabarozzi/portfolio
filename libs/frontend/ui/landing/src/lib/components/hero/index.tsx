import { motion, useTransform } from 'framer-motion';

import { ScrollProvider, useScroll } from '@portfolio/frontend-features-core';

import styles from './hero.module.scss';

const Content = () => {
  const progress = useScroll();

  return (
    <main className={styles.landing}>
      <div className={styles.content}>
        <motion.div
          className={styles.heading}
          style={{
            scale: useTransform(progress, [0, 1], [1, 0.1]),
          }}
        >
          <div className={styles.cutter}>
            <h1>Enea</h1>
          </div>
          <div className={styles.cutter}>
            <h2>Scaccabarozzi</h2>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export const HeroComponent = () => {
  return (
    <ScrollProvider debug={false} options={{ start: 'top top', pin: false }}>
      <Content />
    </ScrollProvider>
  );
};
