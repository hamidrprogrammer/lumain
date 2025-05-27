import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Styled components for the section
const FeatureCardsContainer = styled.section`
  padding: 3rem 0;
  background-color:rgb(255, 255, 255);
  position: relative;
  overflow: hidden;
`;

const FeatureCardsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
`;

const CardImage = styled.div`
  height: 220px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
  z-index: 1;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color:rgb(255, 255, 255);
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #666;
  margin-bottom: 1rem;
    color:rgb(255, 255, 255);

`;

const CardButton = styled(motion.button)`
  background: transparent;
 color:rgb(255, 255, 255);
  border: 2px solid rgb(255, 255, 255);
  padding: 0.5rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
      background: color:rgb(255, 255, 255);

  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;

  
`;

const ProductCard = styled(FeatureCard)`
  background-color: #e8ecef;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: contain;
  padding: 1rem;
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

interface FeatureCardsSectionProps {}

const FeatureCardsSection: React.FC<FeatureCardsSectionProps> = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
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

  const buttonVariants = {
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

  const featureCards = [
    {
      id: 1,
      title: 'Vision',
      description: 'Turning water into wellness, kindness, culture, vision in light.',
      image: '/images/imagecardOne.png',
      buttonText: 'Our Mission',
           isBig:true,
    },
    {
      id: 2,
      title: 'Revolution',
      description: 'Join the movement to light up the world—empowering health, wealth, and purpose through our brand partnership.',
      image: '/images/imagecardtwo.png',
      buttonText: 'Become a Partner',
       isBig:false,
    },
    {
      id: 3,
      title: 'Science',
      description: 'Harness the power of molecular hydrogen to support energy, immunity, and cellular vitality.',
    image: '/images/imageFure.png',
          buttonText: 'Explore the Science',
                       isBig:false,     
         

    },
    {
      id: 4,
      title: 'Community',
      description: 'Be part of a vibrant, supportive community transforming daily wellness journeys.',
      buttonText: 'Join the Community',
                       isBig:true,
      image: '/images/imageFure.png',
    },
  
  ];

  return (
    <FeatureCardsContainer>
      <BackgroundGlow />
      <FeatureCardsContent>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <CardsGrid>
          {featureCards.map((card, index) => {
  const isBig = card.isBig;

  // const gridColumn = isBig? "1 / 2" : "2 / 3";
  let isEven = false
   if(index==0||index==3){
    isEven = true
   }
  const CardComponent = FeatureCard;
const gridColumn = isBig
    ? isEven
      ? "1 / 2" // big on left for even
      : "2 / 3" // big on right for odd
    : isEven
      ? "2 / 3" // small on right for even
      : "1 / 2"; // s
  return (
    <CardComponent
      key={card.id}
      variants={cardVariants}
      style={{ backgroundImage: `url(${card.image})`, gridColumn: isEven? "1 / 2" : "2 / 3",
    aspectRatio: isEven ? "2 / 1.3" : "auto", 
   backgroundSize: "cover",         // ✅ تصویر کل فضا رو بپوشونه بدون کشیدگی
  backgroundPosition: "center",    // ✅ تصویر از وسط نمایش داده بشه
  backgroundRepeat: "no-repeat",}}
    >
      <CardOverlay />
      {/* <CardContent>
        <div>
          <CardTitle>{card.title}</CardTitle>
          <CardDescription>{card.description}</CardDescription>
        </div>
        <CardButton
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          {card.buttonText}
        </CardButton>
      </CardContent> */}
    </CardComponent>
  );
})}
          </CardsGrid>
        </motion.div>
      </FeatureCardsContent>
    </FeatureCardsContainer>
  );
};

export default FeatureCardsSection;