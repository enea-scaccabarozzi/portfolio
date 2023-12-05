'use client';

import Image from 'next/image';
import { motion, useTransform } from 'framer-motion';

import { IProject } from '@portfolio/frontend-types';
import {
  ScrollProvider,
  useScroll,
  useSpring,
} from '@portfolio/frontend-features-core';

import styles from './images.module.scss';

interface IProps {
  project: IProject;
}

interface INestedProps {
  title: string;
  image: string;
  isReverse?: boolean;
}

const Content = ({ image, title, isReverse }: INestedProps) => {
  const progress = useScroll();

  return (
    <motion.div
      className={styles.imageWrapper}
      style={{
        x: useTransform(
          useSpring(progress),
          [0, 0.5, 1],
          [isReverse ? 200 : -200, 0, isReverse ? -200 : 200]
        ),
        opacity: useTransform(progress, [0, 0.5, 1], [0, 1, 1]),
      }}
    >
      <Image
        src={image}
        alt={title}
        className={styles.image}
        width={0}
        height={0}
        sizes="100vw"
      />
    </motion.div>
  );
};

export const ImagesComponent = ({ project }: IProps) => {
  return (
    <div className={styles.imageContainer}>
      {project.images.map((image, i) => (
        <ScrollProvider
          debug={false}
          options={{
            end: '+=200%',
            start: 'start bottom',
            pin: false,
          }}
        >
          <Content
            title={project.title}
            image={image}
            isReverse={i % 2 === 0}
            key={i}
          />
        </ScrollProvider>
      ))}
    </div>
  );
};
