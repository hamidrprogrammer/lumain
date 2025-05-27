import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProductsContainer = styled.section`


  position: relative;
  overflow: hidden;
`;

const ProductsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled(motion.div)`
height:600px;
  
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  
`;

const ProductImage = styled.div`
  height:600px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
 
  position: relative;
`;

const ProductContent = styled.div`
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #002030;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const ProductPrice = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #002030;
  margin-bottom: 1.5rem;
  
  span {
    color: #00a0ff;
  }
`;

const ProductButton = styled(motion.button)`
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
  align-self: flex-start;
  
  &:hover {
    box-shadow: 0 6px 20px rgba(0, 224, 255, 0.5);
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

const BackgroundSize= styled.div`
  
  height: 30px;
 
`;
interface ProductsSectionProps {}

const ProductsSection: React.FC<ProductsSectionProps> = () => {
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
  
  const products = [
    {
      id: 1,
      title: 'Bottle',
      description: 'The LumiVitae Hydrogen Water Bottle combines elegant design with cutting-edge technology to deliver hydrogen-rich water anytime, anywhere.',
      price: '$149.99',
       image: '/images/imageProductTwo.png',
   
    },
    {
      id: 2,
      title: 'Tablets',
      description: 'Our hydrogen-generating tablets are perfect for travel or on-the-go use. Simply drop into water and experience the benefits of molecular hydrogen.',
      price: '$39.99',
        image: '/images/imageProduct.png',
    },
  ];
  
  return (
    <ProductsContainer>
      <BackgroundGlow />
      
      <ProductsContent
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        as={motion.div}
      >
        {products.map((product) => (
          <ProductCard key={product.id} variants={cardVariants}>
            <ProductImage style={{ backgroundImage: `url(${product.image})`, }} />
            {/* <ProductContent> */}
              {/* <ProductTitle>{product.title}</ProductTitle>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>From <span>{product.price}</span></ProductPrice>
              <ProductButton
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Shop Now
              </ProductButton> */}
            {/* </ProductContent> */}
          </ProductCard>
        ))}
      </ProductsContent>
      <BackgroundSize/>
    </ProductsContainer>
  );
};

export default ProductsSection;
