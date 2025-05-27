import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PowerContainer = styled.section`
  padding: 6rem 0;
  background-color: #001520;
  position: relative;
  overflow: hidden;
  color: white;
  display: flex;
  align-items: flex-end;
    justify-content: flex-end;
`;

const PowerContent = styled.div`
 width: 100%;
 
  margin: 0 auto;
  padding: 15% 0% 0% 0%;
 
  display: flex;
  opacity: 1;
  
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

const PowerTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 200;
  margin-bottom: 1.5rem;
    width: 40%;
  span {
    color: #00e0ff;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PowerSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  opacity: 1;
  width: 40%;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const BubblesContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  margin-bottom: 4rem;
`;

const Bubble = styled(motion.div)<{ size: number; left: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  left: ${props => props.left};
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(0, 224, 255, 0.3);
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 10%;
    left: 15%;
    width: 20%;
    height: 20%;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
  }
`;

const BubbleContent = styled.div`
  z-index: 2;
  font-weight: 600;
  font-size: 1.2rem;
  color: white;
`;

const PowerButton = styled(motion.button)`
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
const BottleButton = styled(motion.button)`
  background: linear-gradient(45deg,rgb(255, 255, 255),rgb(255, 255, 255));
  color: #1C1F23;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 200;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 224, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(0, 224, 255, 0.5);
  }
`;
const FeatureButton = styled.div`
  display: flex;
  width: 60%;

 flex-direction: row;
 align-items: center;
 justify-content: center;
`;
const BottleButtonTwo = styled(motion.button)`
  color: #fff;
  border: none;
  background: transparent;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  margin-left: 1rem;
  font-weight: 200;
  border-radius: 30px;
  border: 1px solid #fff;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 224, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(0, 224, 255, 0.5);
  }
`;
const BackgroundWaves = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/water-waves.png');
  background-size: cover;
  opacity: 0.4;
  z-index: 1;
`;

interface PowerStarsSectionProps {}

const PowerStarsSection: React.FC<PowerStarsSectionProps> = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [bubblesRef, bubblesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
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
  
  const subtitleVariants = {
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
  
  const bubbleVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.1 * custom,
        ease: 'easeOut',
      },
    }),
  };
  
  const floatVariants = {
    initial: (custom: number) => ({
      y: 0,
    }),
    animate: (custom: number) => ({
      y: [-15, 0, -15],
      transition: {
        duration: 4 + custom,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'loop',
      },
    }),
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.8,
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
  
  const bubbles = [
    { id: 1, content: 'H+', size: 120, left: '10%', delay: 0 },
    { id: 2, content: 'O2-', size: 150, left: '30%', delay: 1 },
    { id: 3, content: 'H2', size: 180, left: '50%', delay: 2 },
    { id: 4, content: 'OH-', size: 140, left: '70%', delay: 3 },
    { id: 5, content: 'H2O', size: 160, left: '85%', delay: 4 },
  ];
  
  return (
    <PowerContainer>
      <BackgroundWaves />
      
      <PowerContent>
        <div ref={titleRef}>
          <PowerTitle
            variants={titleVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
          >
            The Power <br/>of the Stars
          </PowerTitle>
          
          <PowerSubtitle
            variants={subtitleVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
          >
           Now in Your Water. A Tablet Unlike Anything Before. Drop. Dissolve. Transform.
          </PowerSubtitle>
               <FeatureButton>
        <BottleButton
            variants={buttonVariants}
            initial="hidden"
            animate={bubblesInView ? "visible" : "hidden"}
            whileHover="hover"
            whileTap="tap"
          >
            Learn more
          </BottleButton>
          <BottleButtonTwo
            variants={buttonVariants}
            initial="hidden"
            animate={bubblesInView ? "visible" : "hidden"}
            whileHover="hover"
            whileTap="tap"
          >
            Buy bottle
          </BottleButtonTwo>
            
          </FeatureButton>
        </div>
        
    
     
      
      </PowerContent>
    </PowerContainer>
  );
};

export default PowerStarsSection;
