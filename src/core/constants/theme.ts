// Theme constants for the application
export const COLORS = {
  primary: '#00e0ff',
  primaryDark: '#00a0ff',
  secondary: '#002030',
  background: '#ffffff',
  darkBackground: '#001520',
  text: '#333333',
  lightText: '#ffffff',
  grey: '#f8f8f8',
  darkGrey: '#555555',
};

export const FONTS = {
  primary: "'Poppins', sans-serif",
  sizes: {
    xs: '0.75rem',
    sm: '0.9rem',
    md: '1rem',
    lg: '1.2rem',
    xl: '1.5rem',
    xxl: '2rem',
    xxxl: '2.5rem',
    hero: '3.5rem',
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

export const BREAKPOINTS = {
  xs: '576px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
};

export const TRANSITIONS = {
  default: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
  slow: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
  fast: 'all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1)',
};

export const SHADOWS = {
  small: '0 2px 5px rgba(0, 0, 0, 0.1)',
  medium: '0 5px 15px rgba(0, 0, 0, 0.1)',
  large: '0 10px 30px rgba(0, 0, 0, 0.1)',
  glow: '0 5px 20px rgba(0, 224, 255, 0.3)',
  strongGlow: '0 8px 25px rgba(0, 224, 255, 0.5)',
};

export const GRADIENTS = {
  primary: 'linear-gradient(45deg, #00e0ff, #00a0ff)',
  overlay: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4))',
  darkOverlay: 'linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1))',
  radialGlow: 'radial-gradient(circle, rgba(0, 224, 255, 0.3) 0%, rgba(0, 160, 255, 0) 70%)',
};

export const SPACING = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  xxl: '4rem',
  section: '6rem',
};

export const BORDER_RADIUS = {
  small: '5px',
  medium: '10px',
  large: '15px',
  round: '30px',
  circle: '50%',
};

export const Z_INDEX = {
  background: 1,
  content: 2,
  overlay: 3,
  header: 1000,
  modal: 2000,
  tooltip: 3000,
};
