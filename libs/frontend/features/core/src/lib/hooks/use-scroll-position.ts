import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const getScrollPosition = () => {
    return {
      x: window.scrollX,
      y: window.scrollY,
    };
  };

  const [scrollPosition, setScrollPosition] = useState(getScrollPosition());

  useEffect(() => {
    const handleScroll = () => setScrollPosition(getScrollPosition());

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
};
