'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import cn from 'classnames';

import {
  useMousePosition,
  useWindowDimensions,
} from '@portfolio/frontend-features-core';

import styles from './layout.module.scss';

interface IProps {
  title: string;
  text: string;
  imgUrl: string;
  rowReverse?: boolean;
}

export const LayoutComponent = ({
  title,
  text,
  imgUrl,
  rowReverse,
}: IProps) => {
  const router = useRouter();
  const mousePosition = useMousePosition();
  const window = useWindowDimensions();

  const computeTranslation = () => {
    const x = mousePosition[0];
    const y = mousePosition[1];

    if (y === undefined || x === undefined)
      return { x: undefined, y: undefined };

    const xRange = [0, window.width] as const;
    const yRange = [0, window.height] as const;

    const xTranslationRange = [-50, 50] as const;
    const yTranslationRange = [-50, 50] as const;

    const xTranslation =
      ((x - xRange[0]) / (xRange[1] - xRange[0])) *
        (xTranslationRange[1] - xTranslationRange[0]) +
      xTranslationRange[0];
    const yTranslation =
      ((y - yRange[0]) / (yRange[1] - yRange[0])) *
        (yTranslationRange[1] - yTranslationRange[0]) +
      yTranslationRange[0];

    return { x: xTranslation, y: yTranslation };
  };

  return (
    <main className={styles.layoutRoot}>
      <div className={styles.background}>
        <div className={styles.topbar}>
          <div className={styles.headerHrapper}>
            <h1 className={styles.layoutHeader}>{title}</h1>
          </div>
        </div>
        <div className={styles.rightbar}>
          <div className={styles.linkWrapper}>
            <div className={styles.layoutLink} onClick={() => router.back()}>
              « Home »
            </div>
          </div>
        </div>
        <div className={styles.layoutContentWrapper}>
          <div
            className={cn(
              styles.layoutContent,
              rowReverse ? styles.reverse : ''
            )}
          >
            <div className={styles.column}>
              <div className={styles.textContainer}>
                <p className={styles.text}>{text}</p>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.blobContainer}>
                <div className={styles.blob}>
                  <motion.div
                    className={styles.image}
                    style={{
                      backgroundImage: `url(${imgUrl})`,
                      ...computeTranslation(),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
