'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const isGoingToHome = usePathname() === '/';

  const layersBG = [
    '#e4d8fd',
    // "#d9cdf5",
    '#cec1ec',
    // "#c2b5e3",
    '#b5a7da',
    // "#a799d0",
    '#9889c6',
    // "#8876bc",
    '#7461b0',
    // "#5e44a4",
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
}
