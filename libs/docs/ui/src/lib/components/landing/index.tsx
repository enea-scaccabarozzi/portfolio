import { GradientSectionBorder } from '../shared/gradient-section-border';
import { LandingPageGlobalStyles } from '../shared/global-styles';
import { HeroComponent } from './hero';
import { FeaturesComponent } from './features';
import { LetterComponent } from './letter';

export const LandingComponent = () => {
  return (
    <>
      <LandingPageGlobalStyles />
      <div className="relative">
        <HeroComponent />
        <GradientSectionBorder>
          <FeaturesComponent />
        </GradientSectionBorder>
        <GradientSectionBorder>
          <LetterComponent />
        </GradientSectionBorder>
      </div>
    </>
  );
};
