import { useContext } from 'react';

import { ScrollContext } from '../contexts/scroll-context';

export const useScroll = () => {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }

  return context;
};
