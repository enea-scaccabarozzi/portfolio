'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { useCursor } from '@portfolio/frontend-features-core';

interface IProps {
  children: React.ReactNode;
  previousPath?: string;
}

export const ScreenTransitionComponent = ({
  children,
  previousPath,
}: IProps) => {
  const { setIsSpecial } = useCursor();

  useEffect(() => {
    setIsSpecial(false);
  }, [setIsSpecial]);

  const isGoingToHome = usePathname() === previousPath;

  const layersBG = [
    '#e4d8fd',
    '#cec1ec',
    '#b5a7da',
    '#9889c6',
    '#7461b0',
    '#3f0097',
  ];
  return (
    <div
      style={{
        backgroundColor: layersBG.reverse()[0],
      }}
    >
      {layersBG.reverse().reduce(
        (res, color) => (
          <motion.main
            variants={{
              hidden: { x: isGoingToHome ? -500 : 500, y: 0 },
              enter: { x: 0, y: 0 },
            }}
            initial="hidden"
            animate="enter"
            transition={{ type: 'spring', duration: 1.2 }}
            style={{ backgroundColor: color }}
          >
            {res}
          </motion.main>
        ),
        children
      )}
    </div>
  );
};
