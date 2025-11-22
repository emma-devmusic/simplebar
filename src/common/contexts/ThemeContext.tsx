import React, { ReactNode } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { ThemeContext } from './theme';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const themeHook = useTheme();
  
  return (
    <ThemeContext.Provider value={themeHook}>
      {children}
    </ThemeContext.Provider>
  );
};