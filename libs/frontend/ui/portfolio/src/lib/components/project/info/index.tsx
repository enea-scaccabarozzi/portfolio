'use client';

import {
  IconBrandGit,
  IconBrandGooglePlay,
  IconWorld,
} from '@tabler/icons-react';
import { motion, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { IProject } from '@portfolio/frontend-types';
import {
  ScrollProvider,
  useScroll,
  useSpring,
} from '@portfolio/frontend-features-core';
import { Link } from '@portfolio/frontend-features-core';

import styles from './info.module.scss';

interface IProps {
  project: IProject;
}

interface INestedProps {
  categories: string[];
  links: {
    github?: string;
    website?: string;
    googlePlay?: string;
  };
  role: string;
  stack: string[];
  commissioner: string;
}

const Content = ({
  role,
  commissioner,
  links,
  categories,
  stack,
}: INestedProps) => {
  const progress = useScroll();
  const t = useTranslations('Portfolio');

  return (
    <div className={styles.info}>
      <div className={styles.column}>
        <div className={styles.row}>
          <motion.span
            className={styles.label}
            style={{
              x: useTransform(useSpring(progress), [0, 1], [-400, 0]),
              opacity: useTransform(useSpring(progress), [0, 1], [0, 1]),
            }}
          >
            {t('role')}
          </motion.span>
          <motion.span
            className={styles.value}
            style={{
              x: useTransform(useSpring(progress), [0, 1], [-600, 0]),
              opacity: useTransform(useSpring(progress), [0, 1], [0, 1]),
            }}
          >
            {role}
          </motion.span>
        </div>
        <div className={styles.row}>
          <motion.span
            className={styles.label}
            style={{
              x: useTransform(useSpring(progress), [0, 1], [-700, 0]),
              opacity: useTransform(useSpring(progress), [0, 1], [0, 1]),
            }}
          >
            {t('commissioner')}
          </motion.span>
          <motion.span
            className={styles.value}
            style={{
              x: useTransform(useSpring(progress), [0, 1], [-800, 0]),
              opacity: useTransform(useSpring(progress), [0, 1], [0, 1]),
            }}
          >
            {commissioner}
          </motion.span>
        </div>
        <div className={styles.links}>
          <motion.div
            style={{
              x: useTransform(useSpring(progress), [0, 1], [-600, 0]),
              opacity: useTransform(useSpring(progress), [0, 1], [0, 1]),
            }}
          >
            {links.website && (
              <Link href={links.website} target="new">
                <div className={styles.icon}>
                  <IconWorld strokeWidth={1} size={30} />
                </div>
              </Link>
            )}
          </motion.div>
          <motion.div
            style={{
              x: useTransform(useSpring(progress), [0, 1], [-700, 0]),
              opacity: useTransform(useSpring(progress), [0, 1], [0, 1]),
            }}
          >
            {links.github && (
              <Link href={links.github} target="new">
                <div className={styles.icon}>
                  <IconBrandGit strokeWidth={1} size={30} />
                </div>
              </Link>
            )}
          </motion.div>
          <motion.div
            style={{
              x: useTransform(useSpring(progress), [0, 1], [-800, 0]),
              opacity: useTransform(useSpring(progress), [0, 1], [0, 1]),
            }}
          >
            {links.googlePlay && (
              <Link href={links.googlePlay} target="new">
                <div className={styles.icon}>
                  <IconBrandGooglePlay strokeWidth={1} size={30} />
                </div>
              </Link>
            )}
          </motion.div>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.column}>
        <div className={styles.section}>
          <motion.span
            className={styles.title}
            style={{
              x: useTransform(useSpring(progress), [0, 1], [400, 0]),
              opacity: useTransform(useSpring(progress), [0, 1], [0, 1]),
            }}
          >
            {t('categories')}
          </motion.span>
          <motion.div
            className={styles.tags}
            style={{
              x: useTransform(useSpring(progress), [0, 1], [500, 0]),
              opacity: useTransform(useSpring(progress), [0, 1], [0, 1]),
            }}
          >
            {categories.map((tag, i) => (
              <span className={styles.tag} key={i}>
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
        <div className={styles.section}>
          <motion.span
            className={styles.title}
            style={{
              x: useTransform(useSpring(progress), [0, 1], [600, 0]),
              opacity: useTransform(useSpring(progress), [0, 1], [0, 1]),
            }}
          >
            {t('stack')}
          </motion.span>
          <motion.div
            className={styles.tags}
            style={{
              x: useTransform(useSpring(progress), [0, 1], [700, 0]),
              opacity: useTransform(useSpring(progress), [0, 1], [0, 1]),
            }}
          >
            {stack.map((tag, i) => (
              <span className={styles.tag} key={i}>
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export const InfoComponent = ({ project }: IProps) => {
  return (
    <ScrollProvider
      debug={false}
      options={{
        end: '+=30%',
        start: 'start bottom',
        pin: false,
      }}
    >
      <Content
        role={project.role}
        commissioner={project.commissioner}
        links={project.links}
        categories={project.categories}
        stack={project.stack}
      />
    </ScrollProvider>
  );
};
