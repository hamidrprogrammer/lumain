import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../../../shared/components/Navbar';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection/IntroSection';
import BottleShowcase from '../../products/components/BottleShowcase/BottleShowcase';
import PowerStarsSection from '../../products/components/PowerStarsSection/PowerStarsSection';
import GlowingHeartSection from '../../lifestyle/components/GlowingHeartSection/GlowingHeartSection';
import FeatureCardsSection from '../../products/components/FeatureCardsSection/FeatureCardsSection';
import ProductsSection from '../../products/components/ProductsSection/ProductsSection';
import LifestyleSection from '../../lifestyle/components/LifestyleSection/LifestyleSection';
import FutureSection from '../../lifestyle/components/FutureSection/FutureSection';
import Footer from '../../../shared/components/Footer';
import { useInView } from 'react-intersection-observer';

const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const HomePage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <PageContainer>
      <Navbar 
        scrolled={scrolled} 
        mobileMenuOpen={mobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
      />
      <HeroSection />
      <IntroSection />
      <BottleShowcase />
      <PowerStarsSection />
      {/* <GlowingHeartSection /> */}
      <FeatureCardsSection />
      <ProductsSection />
      <LifestyleSection />
      {/* <FutureSection /> */}
      <Footer />
    </PageContainer>
  );
};

export default HomePage;
