import {
  HeroComponent,
  LandingBackground,
  ProjectsComponent,
} from '@portfolio/frontend-ui-landing';
import { AboutComponent } from '@portfolio/frontend-ui-landing/server';
import { NavbarComponent } from '@portfolio/frontend-ui-shared';
import { FooterComponent } from '@portfolio/frontend-ui-shared/server';

export const LandingPage = () => {
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
