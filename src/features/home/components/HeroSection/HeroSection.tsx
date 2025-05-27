import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroContainer = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #001520;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-image: url('/images/water-texture.png');
  background-size: cover;
  background-position: center;
  opacity: 0.6;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: radial-gradient(circle at center, rgba(0, 20, 30, 0.4) 0%, rgba(0, 20, 30, 0.8) 100%);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButton = styled(motion.button)`
  background: linear-gradient(45deg, #00e0ff, #00a0ff);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 224, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(0, 224, 255, 0.5);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ScrollText = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  opacity: 0.7;
`;

const ScrollIcon = styled(motion.div)`
  width: 30px;
  height: 50px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 15px;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    width: 6px;
    height: 6px;
    background-color: white;
    border-radius: 50%;
    transform: translateX(-50%);
  }
`;

const WaterRipple = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  background-image: url('/images/water-ripple.png');
  background-size: cover;
  opacity: 0.3;
`;

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  const rippleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  useEffect(() => {
    if (rippleRef.current) {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth) * 20 - 10;
        const y = (clientY / window.innerHeight) * 20 - 10;
        
        if (rippleRef.current) {
          rippleRef.current.style.transform = `translate(${x}px, ${y}px)`;
        }
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);
  
  const scrollVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };
  
  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.8,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    tap: {
      scale: 0.95,
    },
  };
  
  const scrollIconVariants = {
    initial: { y: 0 },
    animate: {
      y: 10,
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };
  
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };
  
  return (
    <HeroContainer ref={ref}>
      <HeroBackground />
      <WaterRipple 
        ref={rippleRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      />
      <HeroOverlay />
      
      <HeroContent>
        <motion.div style={{ opacity, y }}>
          <HeroTitle
            variants={titleVariants}
            initial="hidden"
            animate={controls}
          >
            Turning Water into <span style={{ color: '#fff' }}>Wellness</span>
          </HeroTitle>
          
          {/* <HeroSubtitle
            variants={subtitleVariants}
            initial="hidden"
            animate={controls}
          >
            Experience the revolutionary hydrogen-infused water technology that transforms hydration and enhances your wellbeing.
          </HeroSubtitle> */}
          
          {/* <HeroButton
            variants={buttonVariants}
            initial="hidden"
            animate={controls}
            whileHover="hover"
            whileTap="tap"
          >
            Shop Now
          </HeroButton> */}
        </motion.div>
      </HeroContent>
      
      <ScrollIndicator
        onClick={handleScrollDown}
        variants={scrollVariants}
        initial="hidden"
        animate={controls}
      >
        <ScrollText>Scroll Down</ScrollText>
        <ScrollIcon
          // variants={scrollIconVariants}
          initial="initial"
          animate="animate"
        />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection;
