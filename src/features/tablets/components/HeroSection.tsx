// components/HeroSection.tsx
import React from 'react';
import styled from 'styled-components';
import layer1 from "../images/layer-1.svg";

const LiquidVitalQi = styled.div`
  height: 800px;
  left: 0;
  position: absolute;
  top: 1640px;
  width: 100%;
`;

const OverlapGroup = styled.div`
  background-color: #072c3d;
  height: 800px;
  position: relative;
  width: 100%;
`;

const HeroText = styled.p`
  color: #ffffff;
  font-size: 30px;
  font-weight: 400;
  left: 148px;
  letter-spacing: 0;
  line-height: 36px;
  position: absolute;
  top: 257px;
  width: 460px;
`;

const LayerImage = styled.img`
  height: 498px;
  left: 805px;
  position: absolute;
  top: 163px;
  width: 477px;
`;

const FlexContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 194px;
  left: 148px;
  position: absolute;
  top: 349px;
  width: 440px;
`;

export const HeroSection = ({ ...props }) => (
  <LiquidVitalQi className="liquid-vital-qi" {...props}>
    <OverlapGroup className="overlap-group">
      <HeroText className="liquid-vital-qi-a">
        <span className="span">
          Liquid Vital Qi<br />
        </span>
        <span className="text-wrapper-5">
          A fluid lifeforce-energy concept.
        </span>
      </HeroText>

      <LayerImage className="layer" alt="Layer" src={layer1} />

      <FlexContainer className="flexcontainer">
        {[
          "Aging isn’t about the years that pass.",
          "It’s about what happens inside your cells.",
          "Every day, your body is either regenerating or breaking down.",
          "Every moment, your cells are either thriving or declining.",
          "What if you could shift the balance—not just slow aging, but actively reverse its effects?"
        ].map((text, index) => (
          <p key={index} className="text">
            <span className="text-wrapper-6">{text}</span>
          </p>
        ))}
      </FlexContainer>
    </OverlapGroup>
  </LiquidVitalQi>
);