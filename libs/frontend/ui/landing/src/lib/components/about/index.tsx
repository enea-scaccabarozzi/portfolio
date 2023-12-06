import { useTranslations } from 'next-intl';

import { DeveloperSection } from './sections/developer';
import { EnthusiasticSection } from './sections/enthusiastic';
import { StudentSection } from './sections/student';

import styles from './about.module.scss';

export const AboutComponent = () => {
  const t = useTranslations('Landing');

  return (
    <main className={styles.about} id="about">
      <StudentSection title={t('student')} />
      <DeveloperSection title={t('developer')} />
      <EnthusiasticSection title={t('enthusiastic')} />
    </main>
  );
};
