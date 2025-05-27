import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GlowingHeartContainer = styled.section`
  padding: 6rem 0;
  background-color: #001520;
  position: relative;
  overflow: hidden;
  color: white;
`;

const GlowingHeartContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const HeartInfo = styled.div`
  flex: 1;
  max-width: 500px;
  
  @media (max-width: 992px) {
    max-width: 100%;
    text-align: center;
    order: 2;
  }
`;

const HeartTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  span {
    color: #00e0ff;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeartDescription = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeartButton = styled(motion.button)`
  background: linear-gradient(45deg, #00e0ff, #00a0ff);
  color: #002030;
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

const HeartImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  @media (max-width: 992px) {
    order: 1;
  }
`;

const PersonImage = styled(motion.div)`
  width: 400px;
  height: 500px;
  background-image: url('/images/Home.png');
  background-size: cover;
  background-position: center;
  position: relative;
  
  @media (max-width: 768px) {
    width: 300px;
    height: 400px;
  }
`;

const HeartGlow = styled(motion.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(0, 224, 255, 0.8) 0%, rgba(0, 160, 255, 0) 70%);
  border-radius: 50%;
  filter: blur(10px);
  z-index: 2;
`;

const HeartShape = styled(motion.div)`
  position: absolute;
  width: 80px;
  height: 80px;
  top: 30%;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  background: linear-gradient(45deg, #00e0ff, #00a0ff);
  z-index: 3;
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(45deg, #00e0ff, #00a0ff);
  }
  
  &:before {
    top: -40px;
    left: 0;
  }
  
  &:after {
    top: 0;
    left: -40px;
  }
`;

const BackgroundParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/particles-bg.png');
  background-size: cover;
  opacity: 0.1;
  z-index: 1;
`;

interface GlowingHeartSectionProps {}

const GlowingHeartSection: React.FC<GlowingHeartSectionProps> = () => {
  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const heartGlowControls = useAnimation();
  const heartShapeControls = useAnimation();
  
  useEffect(() => {
    if (imageInView) {
      // Animate the heart glow
      heartGlowControls.start({
        opacity: [0.2, 0.8, 0.2],
        scale: [0.8, 1.2, 0.8],
        transition: {
          duration: 3,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        },
      });
      
      // Animate the heart shape
      heartShapeControls.start({
        scale: [0.8, 1, 0.8],
        transition: {
          duration: 1.5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        },
      });
    }
  }, [imageInView, heartGlowControls, heartShapeControls]);
  
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
  
  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: 'easeOut',
      },
    },
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
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
  
  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };
  
  return (
    <GlowingHeartContainer>
      <BackgroundParticles />
      
      <GlowingHeartContent>
        <HeartInfo ref={infoRef}>
          <HeartTitle
            variants={titleVariants}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
          >
            Feel the <span>Cellular Rejuvenation</span>
          </HeartTitle>
          
          <HeartDescription
            variants={descriptionVariants}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
          >
            Hydrogen-rich water works at the cellular level, neutralizing harmful free radicals and supporting your body's natural healing processes. Experience improved energy, enhanced recovery, and overall wellness from within.
          </HeartDescription>
          
          <HeartButton
            variants={buttonVariants}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
            whileHover="hover"
            whileTap="tap"
          >
            Experience The Difference
          </HeartButton>
        </HeartInfo>
        
        <HeartImageWrapper ref={imageRef}>
          <PersonImage
            variants={imageVariants}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
          />
          <HeartGlow animate={heartGlowControls} />
          <HeartShape animate={heartShapeControls} />
        </HeartImageWrapper>
      </GlowingHeartContent>
    </GlowingHeartContainer>
  );
};

export default GlowingHeartSection;
