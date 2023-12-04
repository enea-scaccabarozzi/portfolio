import { type ReactNode, createContext, useState } from 'react';

interface INavigationContext {
  activeSection: number;
  setActiveSection: (section: number) => void;
}

export const NavigationContext = createContext<INavigationContext>({
  activeSection: 0,
  setActiveSection: () => null,
});

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <NavigationContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </NavigationContext.Provider>
  );
};
