import { createContext } from 'react';
import { Theme } from '../../hooks/useTheme';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDark: boolean;
  isLight: boolean;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);