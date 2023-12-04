'use client';

import Link from 'next/link';
import cn from 'classnames';

import { useNavigation } from '@portfolio/frontend-features-core';

import styles from './navbar.module.scss';

export const NavbarComponent = () => {
  const { activeSection } = useNavigation();

  return (
    <nav className={cn(styles.navbar, 'bg-dark/20')}>
      <div className={styles.logo}>
        <Link href="#landing" className={styles.link}>
          <svg viewBox="0 0 200 200" className={styles.svg}>
            <path d="M98.71977,178.09388v-132.57468l68.8478,154.4808h8.53485v-199.14651h-8.53485v175.24893l-68.8478,-157.89474h-8.53485v159.8862zM24.18208,200h79.08962v-8.53485h-70.83926v-100.71124h41.53627v-8.53485h-41.53627v-73.68421h70.83926v-8.53485h-79.37411z"></path>
          </svg>
        </Link>
      </div>
      <ul>
        <li
          className={cn(
            styles.anchor,
            activeSection === 0 ? styles.active : ''
          )}
        >
          <Link href="#about" className={styles.link}>
            About
          </Link>
        </li>
        <li
          className={cn(
            styles.anchor,
            activeSection === 1 ? styles.active : ''
          )}
        >
          <Link href="#portfolio" className={styles.link}>
            Portfolio
          </Link>
        </li>
      </ul>
      <div className={styles.intl}>
        <div className={styles.toggle}>
          <input type="checkbox" className={styles.checkbox} />
          <div className={styles.knobs}>
            <span />
          </div>
          <div className={styles.layer} />
        </div>
      </div>
    </nav>
  );
};
