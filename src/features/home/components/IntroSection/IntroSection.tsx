import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const IntroContainer = styled.section`
  padding: 6rem 0;
  background-color: #fff;
  position: relative;
  overflow: hidden;
`;

const IntroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const IntroHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-center;
 width: 100%;
`;

const IntroTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  flex: 0.6;
  
  margin-bottom: 1.5rem;
  color: #002030;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(45deg, #00e0ff, #00a0ff);
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const IntroDescription = styled(motion.p)`
  font-size: 1.6rem;
  line-height: 1.6;
  color: #072C3D;
   flex: 0.3;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const IntroFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #002030;
  
  span {
    background: linear-gradient(45deg, #00e0ff, #00a0ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
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

interface IntroSectionProps {}

const IntroSection: React.FC<IntroSectionProps> = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [featuresRef, featuresInView] = useInView({
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
  
  const featureVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1 * i,
        ease: 'easeOut',
      },
    }),
  };
  
  const features = [
    {
      id: 1,
      title: 'Blending the wisdom of nature',
      description: `Our revolutionary technology harnesses the power of hydrogen to create water that works in harmony with your body's natural processes.`,
    },
    {
      id: 2,
      title: 'With pioneering advanced technology',
      description: 'The LumiVitae Hydrogen Water Bottle redefines hydration for a healthy lifestyle through cutting-edge scientific innovation.',
    },
    {
      id: 3,
      title: 'A testament to thoughtful design and innovation',
      description: 'Every aspect of our product has been meticulously crafted to deliver optimal performance and user experience.',
    },
    {
      id: 4,
      title: 'Backed by scientific research',
      description: 'Our hydrogen-infused water technology is supported by extensive studies on cellular rejuvenation and antioxidant properties.',
    },
  ];
  
  return (
    <IntroContainer>
      <BackgroundGlow />
      
      <IntroContent>
        <IntroHeader ref={headerRef}>
          <IntroTitle
            variants={titleVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            <>
  Blending the <br />
  wisdom of nature
</>
          </IntroTitle>
          
          <IntroDescription
            variants={descriptionVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
          >
            With pioneering advanced technology, the LumiVitae Hydrogen Water Bottle redefines hydration for a healthy lifestyle. A testament to thoughtful design and innovation, backed by scientific research on cellular rejuvenation and antioxidant properties.
          </IntroDescription>
        </IntroHeader>
        
        <IntroFeatures ref={featuresRef}>
          {/* {features.map((feature, i) => (
            <FeatureItem
              key={feature.id}
              custom={i}
              variants={featureVariants}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
            >
              <FeatureTitle>
                <span>{feature.title.split(' ')[0]}</span> {feature.title.split(' ').slice(1).join(' ')}
              </FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureItem>
          ))} */}
        </IntroFeatures>
      </IntroContent>
    </IntroContainer>
  );
};

export default IntroSection;
