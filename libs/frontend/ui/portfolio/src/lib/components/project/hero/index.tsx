'use client';

import Image from 'next/image';
import { motion, useTransform } from 'framer-motion';
import moment from 'moment';

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
        className={styles.timeperiod}
        style={{
          x: useTransform(
            useSpring(progress),
            [0, 0.4, 1],
            ['0', '-100vw', '-100vw']
          ),
        }}
      >
        <span>{moment(period[0]).format('MMMM yyyy')}</span> --{' '}
        <span>{period[1] ? moment(period[1]).format('MMMM yyyy') : 'now'}</span>
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
