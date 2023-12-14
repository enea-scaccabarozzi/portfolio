import { FEATURES } from '../../content/features';

import { FadeIn } from '../shared/fade-in';
import { FeaturesBento } from '../shared/feature-bento';

export const FeaturesComponent = () => {
  return (
    <FadeIn className="py-16 md:py-24 lg:py-32">
      <FeaturesBento
        body="Crafted from a personal project, this template stands out with its modern tech stack, offering unparalleled flexibility and a smooth development experience. It's not just a tool, but a reflection of passion and innovation, tailored for your unique creative showcase"
        features={FEATURES}
        header="Why Bother?"
      />
    </FadeIn>
  );
};
