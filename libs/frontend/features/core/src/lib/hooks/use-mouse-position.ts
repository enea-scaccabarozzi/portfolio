'use client';

import React, { useEffect } from 'react';

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState([0, 0]);
  useEffect(() => {
    const updateMousePosition = ({ clientX, clientY }: MouseEvent) => {
      setMousePosition([clientX, clientY]);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return mousePosition;
};
