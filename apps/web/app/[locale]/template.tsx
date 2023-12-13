import { ScreenTransitionComponent } from '@portfolio/frontend-ui-shared';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ScreenTransitionComponent previousPath="/">
      {children}
    </ScreenTransitionComponent>
  );
}
