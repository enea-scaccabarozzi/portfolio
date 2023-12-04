'use client';

import {
  NavigationProvider,
  CursorProvider,
} from '@portfolio/frontend-features-core';
import { LandigPageComponent } from '@portfolio/frontend-ui-landing';

export const LandingPage = () => {
  return (
    <CursorProvider>
      <NavigationProvider>
        <LandigPageComponent />
      </NavigationProvider>
    </CursorProvider>
  );
};
