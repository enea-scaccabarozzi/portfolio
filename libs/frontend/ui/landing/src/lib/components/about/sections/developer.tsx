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
    <div className={cn(styles.section, styles.sectionB)}>
      <svg viewBox="172.12 172.2 80.98 80.8" className={styles.rectangle}>
        <motion.path
          d="M241 240.9v-56.6h-56.8v56.6"
          style={{
            pathLength: useTransform(progress, [0, 0.8, 1], [0, 1, 1]),
            opacity: useTransform(progress, [0, 0.8, 1], [0, 1, 1]),
          }}
        />
      </svg>
      <svg viewBox="172.12 172.2 80.98 80.8" className={styles.rectangle}>
        <motion.path
          d="M241 240.9v-56.6h-56.8v56.6"
          style={{
            pathLength: useTransform(progress, [0, 0.8, 1], [0, 1, 1]),
            opacity: useTransform(progress, [0, 0.8, 1], [0, 1, 1]),
          }}
        />
      </svg>
      <TriggerSpecialCursor>
        <Link href={'/developer'}>
          <div className={styles.header}>
            <motion.div
              style={{
                x: useTransform(progress, [0, 0.8, 1], [200, 0, 0]),
                opacity: useTransform(progress, [0, 0.8, 1], [0, 1, 1]),
              }}
            >
              <h3>Developer</h3>
            </motion.div>
          </div>
        </Link>
      </TriggerSpecialCursor>
    </div>
  );
};

export const DeveloperSection = () => {
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
