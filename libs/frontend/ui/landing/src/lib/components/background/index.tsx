'use client';

import { motion } from 'framer-motion';
import cn from 'classnames';

import { useCursor, useMousePosition } from '@portfolio/frontend-utils';

import styles from './background.module.scss';

interface IProps {
  children: JSX.Element;
}

export const LandingBackground = ({ children }: IProps) => {
  const mousePosition = useMousePosition();
  const { isSpecial } = useCursor();

  return (
    <div className={styles.background}>
      <motion.div
        className={cn(styles.blob)}
        animate={{
          x: mousePosition[0],
          y: mousePosition[1],
          scale: isSpecial ? 0 : 1,
        }}
        transition={{ type: 'spring', mass: 2, damping: 60 }}
      />
      <motion.div
        className={cn(styles.specialBlob)}
        animate={{
          x: mousePosition[0],
          y: mousePosition[1],
          scale: isSpecial ? 1 : 0,
        }}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            id="circlePath"
            d="
          M 10, 50
          a 40,40 0 1,1 80,0
          a 40,40 0 1,1 -80,0
        "
          />
          <text id="text" textLength={Math.floor(Math.PI * 2 * 39)}>
            <textPath id="textPath" href="#circlePath">
              Scopri di più • Scopri di più •{' '}
            </textPath>
          </text>
        </svg>
      </motion.div>
      {children}
    </div>
  );
};
