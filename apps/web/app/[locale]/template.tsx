'use client';

import { RootProvider } from '@portfolio/frontend-features-core';
import { ScreenTransitionComponent } from '@portfolio/frontend-ui-shared';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ScreenTransitionComponent previousPath="/">
      <RootProvider>{children}</RootProvider>
    </ScreenTransitionComponent>
  );
}
