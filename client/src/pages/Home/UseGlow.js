// GlowContext.js
import React, { createContext, useState } from 'react';

export const GlowContext = createContext();

export const GlowProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <GlowContext.Provider value={{ isHovered, handleMouseEnter, handleMouseLeave }}>
      {children}
    </GlowContext.Provider>
  );
};
