'use client';

import { MotionValue, useMotionValue } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef, type ReactNode, createContext } from 'react';

import { clamp } from '@portfolio/utils';

export const ScrollContext = createContext<MotionValue<number>>(
  new MotionValue()
);

const DEFAULT_OPTIONS = {
  end: '+=100%',
  pin: true,
  scrub: true,
  start: 'top top',
};

interface IProps {
  children: ReactNode;
  debug?: boolean;
  options?: Omit<ScrollTrigger.Vars, 'markers' | 'trigger'>;
}

export const ScrollProvider = ({
  children,
  debug = false,
  options = {},
}: IProps) => {
  const refScrollTrigger = useRef<HTMLDivElement>(null);

  const refTimeline = useRef<gsap.core.Timeline>();

  const progress = useMotionValue(0);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (refScrollTrigger.current) {
      refTimeline.current = gsap.timeline({
        scrollTrigger: {
          ...DEFAULT_OPTIONS,
          ...options,
          markers: debug,
          trigger: refScrollTrigger.current,
          onUpdate: (instance) => {
            if (options.onUpdate) options.onUpdate(instance);
            progress.set(clamp(instance.progress, 0, 1));
          },
        },
      });
    }

    return () => {
      // Kill and clear the timeline and scrolltrigger instance when updated/unmounted.
      refTimeline.current?.scrollTrigger?.kill();
      refTimeline.current?.kill();
      refTimeline.current?.clear();
    };
  }, [debug, options, progress]);

  return (
    <div ref={refScrollTrigger}>
      <ScrollContext.Provider value={progress}>
        {children}
      </ScrollContext.Provider>
    </div>
  );
};
