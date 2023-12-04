import {
  AboutComponent,
  HeroComponent,
  LandingBackground,
  ProjectsComponent,
} from '@portfolio/frontend-ui-landing';
import {
  FooterComponent,
  NavbarComponent,
} from '@portfolio/frontend-ui-shared';

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
