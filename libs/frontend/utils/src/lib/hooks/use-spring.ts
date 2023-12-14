'use client';

import { MotionValue, useSpring as defaultSpring } from 'framer-motion';

export const useSpring = (motion: MotionValue<number>) =>
  defaultSpring(motion, {
    stiffness: 50,
    damping: 50,
    restDelta: 0.0001,
  }) as MotionValue<number>;
