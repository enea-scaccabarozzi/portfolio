'use client';

import { motion, useTransform } from 'framer-motion';
import cn from 'classnames';

import { Link } from '@portfolio/frontend-utils/server';
import {
  ScrollProvider,
  TriggerSpecialCursor,
  useNavigation,
  useScroll,
} from '@portfolio/frontend-utils';

import styles from '../about.module.scss';

interface IProps {
  title: string;
}

const Content = ({ title }: IProps) => {
  const progress = useScroll();

  return (
    <div className={cn(styles.section, styles.sectionA)}>
      <svg viewBox="0 0 425.2 425.2" className={styles.circle}>
        <motion.path
          d="M85.1,297.4c25.9,34.4,67,56.7,113.4,56.7c78.3,0,141.7-63.5,141.7-141.7S276.8,70.7,198.5,70.7
        c-46.4,0-87.5,22.3-113.4,56.7"
          style={{
            pathLength: useTransform(progress, [0, 0.8, 1], [0, 1, 1]),
            opacity: useTransform(progress, [0, 0.8, 1], [0, 1, 1]),
          }}
        />
      </svg>
      <TriggerSpecialCursor>
        <Link href={'/student'}>
          <div className={styles.header}>
            <motion.div
              style={{
                x: useTransform(progress, [0, 0.8, 1], [200, 0, 0]),
                opacity: useTransform(progress, [0, 0.8, 1], [0, 1, 1]),
              }}
            >
              <h3>{title}</h3>
            </motion.div>
          </div>
        </Link>
      </TriggerSpecialCursor>
    </div>
  );
};

export const StudentSection = ({ title }: IProps) => {
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
      <Content title={title} />
    </ScrollProvider>
  );
};
