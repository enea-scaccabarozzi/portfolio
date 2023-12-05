'use client';

import { motion, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';
import cn from 'classnames';

import { IProject } from '@portfolio/frontend-types';
import {
  ScrollProvider,
  useScroll,
  useSpring,
} from '@portfolio/frontend-features-core';

import styles from './section.module.scss';

interface IProps {
  project: IProject;
  isReverse?: boolean;
}

const Content = ({ project, isReverse }: IProps) => {
  const progress = useScroll();

  return (
    <div className={cn(styles.section, isReverse ? styles.reversed : '')}>
      <div className={styles.content}>
        <motion.div
          style={{
            x: useTransform(
              useSpring(progress),
              [0, 0.5, 1],
              [isReverse ? 200 : -200, 0, isReverse ? -200 : 200]
            ),
            height: '100%',
          }}
          transition={{ delay: 2, duration: 5 }}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={project.thumbnail}
              alt={project.title}
              className={styles.image}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </motion.div>
        <Link href={`/portfolio/${project.slug}`}>
          <div className={styles.heading}>
            <motion.div
              className={styles.date}
              style={{
                x: useTransform(
                  useSpring(progress),
                  [0, 0.5, 1],
                  [isReverse ? -250 : 250, 0, isReverse ? 250 : -250]
                ),
                opacity: useTransform(progress, [0, 0.5, 1], [0, 1, 0]),
              }}
            >
              {moment(project.period[0]).format('MMMM, YYYY')}
            </motion.div>
            <motion.div
              className={styles.header}
              style={{
                x: useTransform(
                  useSpring(progress),
                  [0, 0.5, 1],
                  [isReverse ? -300 : 300, 0, isReverse ? 300 : -300]
                ),
                opacity: useTransform(progress, [0, 0.5, 1], [0, 1, 0]),
              }}
            >
              <h2>{project.title}</h2>
            </motion.div>
            <motion.span
              className={styles.discoverMore}
              style={{
                x: useTransform(
                  useSpring(progress),
                  [0, 0.5, 1],
                  [isReverse ? -200 : 200, 0, isReverse ? 200 : -200]
                ),
                opacity: useTransform(progress, [0, 0.5, 1], [0, 1, 0]),
              }}
            >
              Scopri di più
            </motion.span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export const PortfolioSection = ({ project, isReverse }: IProps) => {
  return (
    <ScrollProvider
      debug={false}
      options={{
        end: '+=200%',
        start: 'start bottom',
        pin: false,
      }}
    >
      <Content project={project} isReverse={isReverse} />
    </ScrollProvider>
  );
};
