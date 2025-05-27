import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LifestyleContainer = styled.section`
  padding: 6rem 0;
  background-color: #fff;
  position: relative;
  overflow: hidden;
    background-image: url('/images/imageBlue.png');
height:860px;
background-size: cover;
`;
const LifestyleContainerTwo = styled.section`
  padding: 6rem 0;
  background-color: #fff;
  position: relative;
  overflow: hidden;
    background-image: url('/images/imageBlueTwo.png');
height:500px;
background-size: cover;
`;
const LifestyleContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  display: flex;
  align-items: center;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const LifestyleImage = styled.div`
  flex: 1;
  height: 500px;
  background-image: url('/images/imageBlue.png');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 992px) {
    width: 100%;
    height: 400px;
  }
`;

const LifestyleOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
  z-index: 1;
`;

const LifestyleInfo = styled.div`
  flex: 1;
  padding: 0 3rem;
  
  @media (max-width: 992px) {
    padding: 0;
  }
`;

const LifestyleQuote = styled(motion.blockquote)`
  font-size: 1.8rem;
  font-weight: 300;
  font-style: italic;
  line-height: 1.5;
  color: #002030;
  margin-bottom: 2rem;
  position: relative;
  
  &:before {
    content: '"';
    font-size: 4rem;
    color: rgba(0, 160, 255, 0.2);
    position: absolute;
    top: -1.5rem;
    left: -1.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LifestyleAuthor = styled(motion.p)`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
  
  span {
    font-weight: 600;
    color: #002030;
  }
`;

const BackgroundGlow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(0, 224, 255, 0.05) 0%, rgba(0, 0, 0, 0) 50%),
    radial-gradient(circle at 80% 70%, rgba(0, 160, 255, 0.05) 0%, rgba(0, 0, 0, 0) 50%);
  z-index: 1;
`;

interface LifestyleSectionProps {}

const LifestyleSection: React.FC<LifestyleSectionProps> = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const quoteVariants = {
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
  
  const authorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
  };
  
  return (
    <>
   
    <LifestyleContainer>
      <BackgroundGlow />
      
      <LifestyleContent>
        {/* <LifestyleImage>
          <LifestyleOverlay />
        </LifestyleImage>
        
        <LifestyleInfo ref={ref}>
          <LifestyleQuote
            variants={quoteVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </LifestyleQuote>
          
          <LifestyleAuthor
            variants={authorVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            - <span>Sarah Johnson</span>, Wellness Advocate
          </LifestyleAuthor>
        </LifestyleInfo> */}
      </LifestyleContent>
    </LifestyleContainer>
     <LifestyleContainerTwo/>
    </>
  );
};

export default LifestyleSection;
