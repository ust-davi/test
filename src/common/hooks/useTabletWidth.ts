import React, { useEffect, useState } from 'react';

const useTabletWidth = () => {
  const [windowSize, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', reportWindowSize);
    return () => window.removeEventListener('resize', reportWindowSize);
  }, []);

  const TabletWidth = windowSize > 768;

  return TabletWidth;
};

export default useTabletWidth;
