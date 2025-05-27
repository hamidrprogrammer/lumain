import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FutureContainer = styled.section`
  padding: 6rem 0;
  background-color: #001520;
  position: relative;
  overflow: hidden;
  color: white;
`;

const FutureContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FutureTitle = styled(motion.h2)`
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

const FutureSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 4rem;
  opacity: 0.9;
  max-width: 700px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TimelineContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const TimelineDate = styled.div`
  flex: 0 0 150px;
  text-align: right;
  font-size: 1.2rem;
  font-weight: 600;
  color: #00e0ff;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TimelineLine = styled.div`
  flex: 0 0 2px;
  height: 100px;
  background: linear-gradient(to bottom, #00e0ff, #00a0ff);
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: linear-gradient(45deg, #00e0ff, #00a0ff);
    box-shadow: 0 0 15px rgba(0, 224, 255, 0.5);
  }
  
  @media (max-width: 768px) {
    height: 50px;
  }
`;

const TimelineContent = styled.div`
  flex: 1;
  text-align: left;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const TimelineTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const TimelineDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.8;
`;

const FutureButton = styled(motion.button)`
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

const BackgroundWaves = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/water-waves.png');
  background-size: cover;
  opacity: 0.1;
  z-index: 1;
`;

interface FutureSectionProps {}

const FutureSection: React.FC<FutureSectionProps> = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [timelineRef, timelineInView] = useInView({
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
  
  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  
  const timelineItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
  
  const timelineItems = [
    {
      id: 1,
      date: '2023',
      title: 'Research & Development',
      description: 'Initial breakthrough in hydrogen infusion technology and prototype development.',
    },
    {
      id: 2,
      date: '2024',
      title: 'Product Launch',
      description: 'Official launch of the LumiVitae Hydrogen Water Bottle to select markets.',
    },
    {
      id: 3,
      date: '2025',
      title: 'Global Expansion',
      description: 'Expanding our reach to international markets and introducing new product lines.',
    },
    {
      id: 4,
      date: '2026',
      title: 'Next Generation Technology',
      description: 'Unveiling advanced hydrogen delivery systems and wellness integration platforms.',
    },
  ];
  
  return (
    <FutureContainer>
      <BackgroundWaves />
      
      <FutureContent>
        <div ref={titleRef}>
          <FutureTitle
            variants={titleVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
          >
            The <span>Future</span> of Longevity
          </FutureTitle>
          
          <FutureSubtitle
            variants={subtitleVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
          >
            Our journey is just beginning. Discover how LumiVitae is pioneering the future of wellness through continuous innovation and scientific advancement.
          </FutureSubtitle>
        </div>
        
        <TimelineContainer
          ref={timelineRef}
          variants={timelineVariants}
          initial="hidden"
          animate={timelineInView ? "visible" : "hidden"}
          as={motion.div}
        >
          {timelineItems.map((item) => (
            <TimelineItem key={item.id} variants={timelineItemVariants}>
              <TimelineDate>{item.date}</TimelineDate>
              <TimelineLine />
              <TimelineContent>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineDescription>{item.description}</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
        
        <FutureButton
          variants={buttonVariants}
          initial="hidden"
          animate={timelineInView ? "visible" : "hidden"}
          whileHover="hover"
          whileTap="tap"
        >
          Join Our Journey
        </FutureButton>
      </FutureContent>
    </FutureContainer>
  );
};

export default FutureSection;
