export interface NavbarProps {
  scrolled?: boolean;
  mobileMenuOpen?: boolean;
  toggleMobileMenu?: () => void;
}

export interface HeroSectionProps {}

export interface IntroSectionProps {}

export interface BottleShowcaseProps {}

export interface PowerStarsSectionProps {}

export interface GlowingHeartSectionProps {}

export interface FeatureCardsSectionProps {}

export interface ProductsSectionProps {}

export interface LifestyleSectionProps {}

export interface FutureSectionProps {}

export interface FooterProps {}

export interface AppRouterProps {}

export interface GlobalStylesProps {}

export interface HomePageProps {}

export interface ThemeProps {
  colors: {
    primary: string;
    primaryDark: string;
    secondary: string;
    background: string;
    darkBackground: string;
    text: string;
    lightText: string;
    grey: string;
    darkGrey: string;
  };
  fonts: {
    primary: string;
    sizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
      hero: string;
    };
    weights: {
      light: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  transitions: {
    default: string;
    slow: string;
    fast: string;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
    glow: string;
    strongGlow: string;
  };
  gradients: {
    primary: string;
    overlay: string;
    darkOverlay: string;
    radialGlow: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    section: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
    round: string;
    circle: string;
  };
  zIndex: {
    background: number;
    content: number;
    overlay: number;
    header: number;
    modal: number;
    tooltip: number;
  };
}
