'use client';

import { CursorProvider } from './cursor-context';
import { NavigationProvider } from './navigation-context';

interface IProps {
  children: React.ReactNode;
}

export const RootProvider = ({ children }: IProps) => {
  return (
    <CursorProvider>
      <NavigationProvider>{children}</NavigationProvider>
    </CursorProvider>
  );
};
