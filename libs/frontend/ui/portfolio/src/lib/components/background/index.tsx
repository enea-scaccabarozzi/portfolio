'use client';

import { motion } from 'framer-motion';
import cn from 'classnames';

import { useCursor, useMousePosition } from '@portfolio/frontend-features-core';

import styles from './background.module.scss';

interface IProps {
  children: React.ReactNode;
  isDark?: boolean;
}

export const PortfolioBackground = ({ children, isDark }: IProps) => {
  const mousePosition = useMousePosition();
  const { isSpecial } = useCursor();

  return (
    <div
      className={cn(
        styles.background,
        'bg-gradient-to-b',
        isDark ? 'from-dark to-dark' : 'from-light to-light-400'
      )}
    >
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
