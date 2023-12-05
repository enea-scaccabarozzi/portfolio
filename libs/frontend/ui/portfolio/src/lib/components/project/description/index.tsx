import { motion, useTransform } from 'framer-motion';

import {
  ScrollProvider,
  useSpring,
  useScroll,
} from '@portfolio/frontend-features-core';

import styles from './description.module.scss';

interface IProps {
  description: string;
}

const Content = ({ description }: IProps) => {
  const progress = useScroll();

  return (
    <motion.div
      className={styles.descriptionContainer}
      style={{
        scale: useTransform(useSpring(progress), [0, 0.5, 1], [0, 1, 1]),
        opacity: useTransform(useSpring(progress), [0, 0.5, 1], [0, 1, 1]),
      }}
    >
      <p className={styles.description}>{description}</p>
    </motion.div>
  );
};

export const DescriptionComponent = ({ description }: IProps) => {
  return (
    <ScrollProvider
      debug={false}
      options={{
        end: '+=50%',
        start: '-50% bottom',
        pin: false,
      }}
    >
      <Content description={description} />
    </ScrollProvider>
  );
};
