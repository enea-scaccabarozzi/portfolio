'use client';

import Image from 'next/image';
import { motion, useTransform } from 'framer-motion';
import { useFormatter, useTranslations } from 'next-intl';

import { IProject } from '@portfolio/frontend-types';

import styles from './hero.module.scss';
import {
  ScrollProvider,
  useSpring,
  useScroll,
} from '@portfolio/frontend-features-core';

interface IProps {
  project: IProject;
}

interface INestedProps {
  title: string;
  thumbnail: string;
  period: [string, string | undefined];
}

export const Content = ({ thumbnail, title, period }: INestedProps) => {
  const progress = useScroll();
  const format = useFormatter();
  const t = useTranslations('Portfolio');

  return (
    <div className={styles.hero}>
      <motion.h2
        className={styles.title}
        style={{
          y: useTransform(useSpring(progress), [0, 1], [0, 500]),
        }}
      >
        {title}
      </motion.h2>
      <div className={styles.thumbnailWrapper}>
        <Image
          src={thumbnail}
          alt={title}
          className={styles.thumbnail}
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <motion.div
        className={styles.scrollIndicator}
        style={{
          // x: useTransform(useSpring(progress), [0, 0.2, 1], [0, -1000, -1000]),
          opacity: useTransform(useSpring(progress), [0, 0.1, 1], [1, 0, 0]),
          scale: useTransform(useSpring(progress), [0, 0.1, 1], [1, 0, 0]),
        }}
      >
        {t('scroll')}
        <div className={styles.icon} />
      </motion.div>
      <motion.div
        className={styles.timeperiod}
        style={{
          x: useTransform(
            useSpring(progress),
            [0, 0.4, 1],
            ['0', '-100vw', '-100vw']
          ),
        }}
      >
        <span>
          {format.dateTime(new Date(period[0]), {
            year: 'numeric',
            month: 'long',
          })}
        </span>{' '}
        --{' '}
        <span>
          {period[1]
            ? format.dateTime(new Date(period[1]), {
                year: 'numeric',
                month: 'long',
              })
            : t('now')}
        </span>
      </motion.div>
    </div>
  );
};

export const HeroComponent = ({ project }: IProps) => {
  return (
    <ScrollProvider
      debug={false}
      options={{
        end: '+=200%',
        start: '120% bottom',
        pin: false,
      }}
    >
      <Content
        title={project.title}
        thumbnail={project.thumbnail}
        period={project.period}
      />
    </ScrollProvider>
  );
};
