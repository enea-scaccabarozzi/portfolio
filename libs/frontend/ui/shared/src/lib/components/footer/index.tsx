import {
  IconKey,
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
} from '@tabler/icons-react';
import Link from 'next/link';

import styles from './footer.module.scss';

export const FooterComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.column}>
          <p className={styles.text}>
            Progettato & realizzato con il{' '}
            <span role="img" aria-label="heart emoji">
              💖
            </span>{' '}
            da Enea Scaccabarozzi
          </p>
          <p className={styles.text}>
            Scopri il codice e clona questo progetto da{' '}
            <Link
              href="https://github.com/enea-scaccabarozzi/Portfolio"
              target="new"
            >
              Github
            </Link>
          </p>
          <div className={styles.rowDivider} />
          <p className={styles.text}>
            &copy; {new Date().getFullYear()} Enea Scaccabarozzi
          </p>
        </div>
        <div className={styles.columnDivider} />
        <div className={styles.column}>
          <p className={styles.text}>Restiamo in contatto!</p>
          <div className={styles.social}>
            <Link href="mailto:me@eneascaccabarozzi.xyz">
              <div className={styles.icon}>
                <IconMail size={30} />
              </div>
            </Link>
            <Link href="https://github.com/enea-scaccabarozzi" target="new">
              <div className={styles.icon}>
                <IconBrandGithub size={30} />
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/enea-scaccabarozzi-9660ba266"
              target="new"
            >
              <div className={styles.icon}>
                <IconBrandLinkedin size={30} />
              </div>
            </Link>
            <Link
              href="https://keys.openpgp.org/search?q=90C9F3394510E1F8AA51F0120D88E46B2B9C6700"
              target="new"
            >
              <div className={styles.icon}>
                <IconKey size={30} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
