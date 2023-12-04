'use client';

import {
  NavbarComponent,
  FooterComponent,
} from '@portfolio/frontend-ui-shared';

import { LandingBackground } from './background';
import { HeroComponent } from './hero';
import { AboutComponent } from './about';
import { ProjectsComponent } from './projects';

export const LandigPageComponent = () => {
  return (
    <main>
      <NavbarComponent />
      <LandingBackground>
        <>
          <HeroComponent />
          <AboutComponent />
          <ProjectsComponent />
        </>
      </LandingBackground>
      <FooterComponent />
    </main>
  );
};
