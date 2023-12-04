import { DeveloperSection } from './sections/developer';
import { EnthusiasticSection } from './sections/enthusiastic';
import { StudentSection } from './sections/student';

import styles from './about.module.scss';

export const AboutComponent = () => {
  return (
    <main className={styles.about}>
      <StudentSection />
      <DeveloperSection />
      <EnthusiasticSection />
    </main>
  );
};
