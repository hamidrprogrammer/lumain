import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BottleContainer = styled.section`
 
  background-color: #000000;
  position: relative;
  overflow: hidden;
  color: white;
`;
const BottleContentBack = styled.div`
  max-width: 100%;

  display: flex;
  background: linear-gradient(to right,rgba(51, 191, 189, 0.46), rgba(0, 0, 0, 0.57), transparent); // 0.5 = 50% visible

`;
const BottleContent = styled.div`
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

const BottleInfo = styled.div`
  flex: 1;
  max-width: 500px;
  
  @media (max-width: 992px) {
    max-width: 100%;
    text-align: center;
  }
`;

const BottleTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color:#3FFFF8;
  
  span {
    background: linear-gradient(45deg, #00e0ff, #00a0ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BottleDescription = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const BottleFeatures = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin-bottom: 2.5rem;
`;

const BottleFeature = styled(motion.li)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const FeatureIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(45deg, #00e0ff, #00a0ff);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
  
  i {
    font-size: 0.8rem;
    color: #002030;
  }
`;
const FeatureButton = styled.div`
  display: flex;

 flex-direction: row;
 align-items: center;
 
`;

const FeatureText = styled.span`
  font-size: 1rem;
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
const BottleButtonTwo = styled(motion.button)`
  color:#3FFFF8;
  border: none;
  background: transparent;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  margin-left: 1rem;
  font-weight: 200;
  border-radius: 30px;
  border: 1px solid #3FFFF8;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 224, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(0, 224, 255, 0.5);
  }
`;
const BottleImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BottleImage = styled(motion.img)`
  max-height: 700px;
  // filter: drop-shadow(0 10px 30px rgba(0, 224, 255, 0.3));
`;

const GlowEffect = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 224, 255, 0.3) 0%, rgba(0, 160, 255, 0) 70%);
  z-index: 1;
`;

const BackgroundBubbles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/bubbles-bg.png');
  background-size: cover;
  opacity: 0.1;
  z-index: 1;
`;

interface BottleShowcaseProps {}

const BottleShowcase: React.FC<BottleShowcaseProps> = () => {
  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
  
  const featureListVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };
  
  const featureItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
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
        delay: 0.6,
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
  
  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };
  
  const features = [
    'Advanced hydrogen infusion technology',
    'Portable and rechargeable design',
    'Smart temperature control system',
    'Premium medical-grade materials',
  ];
  
  return (
    <BottleContainer>
      <BackgroundBubbles />
      <BottleContentBack>
      <BottleContent>
        <BottleInfo ref={infoRef}>
          <BottleTitle
            variants={titleVariants}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
          >
            LumiVitae <br/>Hydrogen Water Technology
          </BottleTitle>
          
          <BottleDescription
            variants={descriptionVariants}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
          >
            Experience the revolutionary hydrogen-infused water technology that transforms ordinary water into an extraordinary wellness elixir. Our patented system delivers optimal molecular hydrogen concentration for maximum health benefits.
          </BottleDescription>
          
          <BottleFeatures
            variants={featureListVariants}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
          >
            {/* {features.map((feature, index) => (
              <BottleFeature
                key={index}
                variants={featureItemVariants}
              >
                <FeatureIcon>
                  <i className="fas fa-check"></i>
                </FeatureIcon>
                <FeatureText>{feature}</FeatureText>
              </BottleFeature>
            ))} */}
          </BottleFeatures>
        
          
            <FeatureButton>
<BottleButton
            variants={buttonVariants}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
            whileHover="hover"
            whileTap="tap"
          >
            Learn more
          </BottleButton>
          <BottleButtonTwo
            variants={buttonVariants}
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
            whileHover="hover"
            whileTap="tap"
          >
            Buy bottle
          </BottleButtonTwo>
            
          </FeatureButton>
        </BottleInfo>
        
        <BottleImageWrapper ref={imageRef}>
          {/* <GlowEffect
            variants={glowVariants}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
          /> */}
        
          <BottleImage
            src="/images/battel.png"
            alt="LumiVitae Hydrogen Water Bottle"
            variants={imageVariants}
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          />
        </BottleImageWrapper>
      </BottleContent>
      </BottleContentBack>
    </BottleContainer>
  );
};

export default BottleShowcase;
