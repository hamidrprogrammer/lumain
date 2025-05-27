import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { COLORS, FONTS, BREAKPOINTS, TRANSITIONS, SHADOWS, GRADIENTS, SPACING, BORDER_RADIUS, Z_INDEX } from '../constants/theme';

// Create theme context
const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

// Theme object based on current mode
const getTheme = (darkMode: boolean) => ({
  colors: {
    ...COLORS,
    background: darkMode ? COLORS.darkBackground : COLORS.background,
    text: darkMode ? COLORS.lightText : COLORS.text,
  },
  fonts: FONTS,
  breakpoints: BREAKPOINTS,
  transitions: TRANSITIONS,
  shadows: SHADOWS,
  gradients: GRADIENTS,
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  zIndex: Z_INDEX,
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = getTheme(darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
