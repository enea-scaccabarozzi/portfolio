'use client';

import { motion } from 'framer-motion';

import { useCursor, useMousePosition } from '@portfolio/frontend-features-core';

import styles from './background.module.scss';

interface IProps {
  children: React.ReactNode;
}

export const PortfolioBackground = ({ children }: IProps) => {
  const mousePosition = useMousePosition();
  const { isSpecial } = useCursor();

  return (
    <div className={styles.background}>
      <motion.div
        className={styles.backgroundBlob}
        animate={{
          x: mousePosition[0],
          y: mousePosition[1],
          scale: isSpecial ? 0 : 1,
        }}
        transition={{ type: 'spring', mass: 2, damping: 60 }}
      />
      {children}
    </div>
  );
};
