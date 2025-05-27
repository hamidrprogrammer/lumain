// components/StarsHeroSection.tsx
// بخش هیرو اصلی

import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import back from '../images/image-26.png';
const StarsHeroContainer = styled.div`
  height: 850px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const OverlapGroup = styled.div`
  background-image: url(${back});
  background-size: 100% 100%;
  height: 850px;
  position: relative;
  width: 100%;
`;

const BuyButton = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 100px;
  display: inline-flex;
  justify-content: center;
  left: 655px;
  padding: 9px 20px 10px;
  position: absolute;
  top: 414px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
  }
`;

const Title = styled.div`
  color: #3ffff8;
  font-family: "Inter", Helvetica;
  font-size: 60px;
  font-weight: 300;
  left: 489px;
  letter-spacing: 0;
  line-height: 72px;
  position: absolute;
  text-align: center;
  top: 266px;
  white-space: nowrap;
  text-shadow: 0 0 10px rgba(63, 255, 248, 0.4);
`;

const Subtitle = styled.p`
  color: #ffffff;
  font-family: "Inter", Helvetica;
  font-size: 30px;
  font-weight: 400;
  left: 561px;
  letter-spacing: 0;
  line-height: 36px;
  position: absolute;
  text-align: center;
  top: 358px;
  white-space: nowrap;
`;

export const StarsHeroSection = ({ ...props }) => (
  <StarsHeroContainer 
    className="stars-hero"
    data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="300"
    {...props}
  >
    <OverlapGroup className="overlap-2">
      <BuyButton 
        className="frame"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-anchor-placement="top-center"
      >
        <div className="text-wrapper-7">Buy Tablets</div>
      </BuyButton>

      <Title
        className="text-wrapper-8"
        data-aos="fade-down"
        data-aos-delay="400"
        data-aos-duration="800"
      >
        Introducing LVQ+
      </Title>

      <Subtitle
        className="p"
        data-aos="fade-right"
        data-aos-delay="600"
        data-aos-offset="200"
      >
        H2 + NAD Fusion Tablets
      </Subtitle>
    </OverlapGroup>
  </StarsHeroContainer>
);