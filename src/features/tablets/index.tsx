import React, { useState, useEffect } from "react";
import "./style.css";
import styled from 'styled-components';
import Navbar from "../../shared/components/Navbar";
import FooterMain from "../../shared/components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LiquidVitalQiSection } from "./components/LiquidVitalQiSection";
import { StarsHero } from "./components/StarsHero";
import { UnderwaterHero } from "./components/UnderwaterHero";
import { MidHeroText } from "./components/MidHeroText";
import { CTABlock } from "./components/CTABlock";

const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  background-color:rgb(0, 0, 0);
`;



// بخش Underwater Hero



// کامپوننت عمومی برای بخش‌های مواد تشکیل‌دهنده
const Section = ({ title, subtitle, descriptions, sectionClass, overlapClass, flexClass }) => (
  <div className={sectionClass} data-aos="fade-up">
    <div className={overlapClass}>
      <p>
        <span className="span">{title}<br /></span>
        <span className="text-wrapper-5">{subtitle}</span>
      </p>
      <div className={flexClass}>
        {descriptions.map((desc, index) => (
          <p key={index} className="text-2">
            <span className="text-wrapper-17">{desc}</span>
          </p>
        ))}
      </div>
    </div>
  </div>
);


export const TabletsPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    AOS.init({
      duration: 1000, // مدت زمان انیمیشن به میلی‌ثانیه
    });
  }, []);

  return (
    <PageContainer>
      <Navbar 
        scrolled={scrolled} 
        mobileMenuOpen={mobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
      />
      <div className="tablets">
        <div className="div-2">
          <LiquidVitalQiSection />
          <div className="overlap">
            <StarsHero />
            <UnderwaterHero />
            <MidHeroText />
            <div className="rectangle-2" />
            <div className="flexcontainer-2">
              <p className="span-wrapper">
                <span className="text-wrapper-15">Waiting on updated content and image ideas<br /></span>
              </p>
              <p className="span-wrapper">
                <span className="text-wrapper-16">Page layout changing.</span>
              </p>
            </div>
          </div>
          <Section
            sectionClass="section-four"
            overlapClass="overlap-5"
            flexClass="flexcontainer-3"
            title="Molecular Hydrogen (H2)"
            subtitle="The Element of Life."
            descriptions={[
              "Lighter than air. Stronger than time.",
              "The first element in existence. The fuel of stars.",
              "Now, a game-changer for human longevity.",
              "Selectively neutralizes oxidative stress—the #1 cause of aging.",
              "Penetrates deep into cells, crossing the blood-brain barrier for ultimate bioavailability.",
              "Supercharges mitochondria, boosting energy, endurance, and cellular function."
            ]}
          />
          <Section
            sectionClass="section-five"
            overlapClass="overlap-6"
            flexClass="flexcontainer-4"
            title="NAD+"
            subtitle="The Spark of Cellular Energy."
            descriptions={[
              "The molecule that powers life itself.",
              "NAD+ is essential for every cellular function—but it declines with age. LVQ+ restores it.",
              "Energizes every cell, improving focus, metabolism, and recovery.",
              "Drives mitochondrial function, the engine of life and longevity.",
              "Supports DNA repair, keeping your cells younger, longer."
            ]}
          />
          <Section
            sectionClass="section-six"
            overlapClass="overlap-7"
            flexClass="flexcontainer-5"
            title="Resveratrol"
            subtitle="The Longevity Molecule."
            descriptions={[
              "The science of anti-aging, in a single sip.",
              "A powerhouse polyphenol found in red grapes and ancient superfoods, known for extending lifespan.",
              "Activates Sirtuins, the master longevity genes.",
              "Enhances DNA repair and cardiovascular health.",
              "Mimics fasting benefits, improving metabolic function.",
              "The molecule of youth, in every drop."
            ]}
          />
          <Section
            sectionClass="section-seven"
            overlapClass="overlap-8"
            flexClass="flexcontainer-6"
            title="Spermidine"
            subtitle="The Cellular Renewal Catalyst"
            descriptions={[
              "The key to longevity, found in centenarians.",
              "A natural compound that stimulates autophagy, the body’s ability to clean and regenerate damaged cells.",
              "Supports brain health, immune function, and cellular repair.",
              "Triggers deep cellular detoxification.",
              "Found in populations with exceptional longevity."
            ]}
          />
          <CTABlock />
        </div>
      </div>
      <FooterMain />
    </PageContainer>
  );
};