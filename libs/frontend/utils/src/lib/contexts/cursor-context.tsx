'use client';

import { type ReactNode, createContext, useState } from 'react';

import { useCursor } from '../hooks/use-cursor';

interface ICursorContext {
  isSpecial: boolean;
  setIsSpecial: (value: boolean) => void;
}

export const CursorContext = createContext<ICursorContext>({
  isSpecial: false,
  setIsSpecial: () => null,
});

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [isSpecial, setIsSpecial] = useState(false);

  return (
    <CursorContext.Provider value={{ isSpecial, setIsSpecial }}>
      {children}
    </CursorContext.Provider>
  );
};

export const TriggerSpecialCursor = ({ children }: { children: ReactNode }) => {
  const { setIsSpecial } = useCursor();

  return (
    <div
      onMouseEnter={() => setIsSpecial(true)}
      onMouseLeave={() => setIsSpecial(false)}
    >
      {children}
    </div>
  );
};
