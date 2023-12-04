'use client';

import { motion, useTransform } from 'framer-motion';
import Link from 'next/link';
import cn from 'classnames';

import styles from '../about.module.scss';

import {
  ScrollProvider,
  TriggerSpecialCursor,
  useNavigation,
  useScroll,
} from '@portfolio/frontend-features-core';

const Content = () => {
  const progress = useScroll();

  return (
    <div className={cn(styles.section, styles.sectionC)}>
      <svg viewBox="36.92 58.6 351.58 307.6" className={styles.triangle}>
        <motion.polyline
          style={{
            pathLength: useTransform(progress, [0, 0.8, 1], [0, 1, 1]),
            opacity: useTransform(progress, [0, 0.8, 1], [0, 1, 1]),
          }}
          points="343.6,297.4 376.4,354.1 49,354.1 212.7,70.7 245.4,127.3 "
        />
      </svg>
      <TriggerSpecialCursor>
        <Link href={'/enthusiastic'}>
          <div className={styles.header}>
            <motion.div
              style={{
                x: useTransform(progress, [0, 0.8, 1], [200, 0, 0]),
                opacity: useTransform(progress, [0, 0.8, 1], [0, 1, 1]),
              }}
            >
              <h3>Entusiasta</h3>
            </motion.div>
          </div>
        </Link>
      </TriggerSpecialCursor>
    </div>
  );
};

export const EnthusiasticSection = () => {
  const { setActiveSection } = useNavigation();

  return (
    <ScrollProvider
      debug={false}
      options={{
        end: '+=100%',
        start: '10% bottom',
        pin: false,
        onEnter: () => setActiveSection(0),
        onUpdate: () => setActiveSection(0),
      }}
    >
      <Content />
    </ScrollProvider>
  );
};
