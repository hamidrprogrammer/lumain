import React, { useEffect, useImperativeHandle, useState ,forwardRef, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bottleHandGoldBottle1 from "../images/bottle-hand-gold-bottle-1.png";
import bottleSec8Gold from "../images/bottle-sec8-gold.png";
import bottleSec8Grey from "../images/bottle-sec8-grey.png";
import group62 from "../images/group-6-2.png";
import group6 from "../images/group-6.png";
import group72 from "../images/group-7-2.png";
import group7 from "../images/group-7.png";
import hydrationReimaginedEnergyTunedToYou from "../images/hydration-reimagined-energy-tuned-to-you.svg";
import iconoirColorFilter from "../images/iconoir-color-filter.svg";
import iconoirHydrogen from "../images/iconoir-hydrogen.svg";
import iconoirSineWave from "../images/iconoir-sine-wave.svg";
import image2 from "../images/image-2.png";
import image3 from "../images/image-3.png";
import image5 from "../images/image-5.png";


import image from "../images/iconoir-color-filter.svg";
import ionMagnet from "../images/iconoir-color-filter.svg";
import line2 from "../images/iconoir-color-filter.svg";
import materialSymbolsWaterLossRounded from "../images/iconoir-color-filter.svg";
import membrane2 from "../images/group-6.png";
import membrane from "../images/group-6.png";
import powerUpIgniteVitalityElevatePerformance from "../images/poerup.png"
import radixIconsDimensions from "../images/iconoir-color-filter.svg";
import rectangle4 from "../images/iconoir-color-filter.svg";
import rectangle5 from "../images/iconoir-color-filter.svg";
import rectangle6 from "../images/iconoir-color-filter.svg";
import "./style.css";
import sunlightCapturedEnergyUnleashed from "./iconoir-color-filter.svg";
import styled from 'styled-components';
import FooterMain from "../../../shared/components/Footer";
import Navbar from "../../../shared/components/Navbar";
import { Slider, SliderHandle } from "../components/Slider";

const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

export const Bottle = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدت زمان انیمیشن: 1 ثانیه
      easing: "ease-in-out", // نوع easing برای حرکت روان
      offset: 100, // انیمیشن 100 پیکسل قبل از ورود به viewport شروع می‌شود
      once: true, // انیمیشن فقط یک‌بار اجرا شود
    });
  }, []);
 const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const sliderRef = useRef<SliderHandle>(null);

  return (
         <PageContainer>

      <Navbar 
        scrolled={scrolled} 
        mobileMenuOpen={mobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
      />
    <div className="bottle">
      <div className="div-2">
        <div className="div-3" data-aos="fade-up">
          <div className="div-3">
            <div className="overlap-group">
              <img
                className="bottle-hand-gold"
                alt="Bottle hand gold"
                src={bottleHandGoldBottle1}
              />
              <div className="frame">
                <div className="text-wrapper-5">Start your journey</div>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-6">Buy bottle</div>
              </div>
              <div className="text-wrapper-7">
                LumiVitae Hydrogen Water Technology
              </div>
              <p className="the-future-of-water">
                The Future of Water is here.
                <br />
                Blending the wisdom of nature with pioneering advanced
                technology.
              </p>
            </div>
          </div>
        </div>

        <div className="CTA" data-aos="fade-up">
          <div className="overlap">
            <img
              className="bottle-gold"
              alt="Bottle gold"
              src={bottleSec8Gold}
            />
            <img
              className="bottle-grey"
              alt="Bottle grey"
              src={bottleSec8Grey}
            />
            <div className="details">
              <div className="group-2">
                <img
                  className="iconoir-color-filter"
                  alt="Iconoir color filter"
                  src={iconoirColorFilter}
                />
                <div className="text-wrapper-8">Chromotherapy</div>
              </div>
              <div className="group-3">
                <img
                  className="iconoir-hydrogen"
                  alt="Iconoir hydrogen"
                  src={iconoirHydrogen}
                />
                <div className="text-wrapper-8">Molecular Hydrogen</div>
              </div>
              <div className="group-4">
                <p className="text-wrapper-8">Diameter 6 cm / 2.4 in</p>
                <p className="p">Height 22 cm / 8.7 in</p>
                <img
                  className="radix-icons"
                  alt="Radix icons"
                  src={radixIconsDimensions}
                />
              </div>
              <div className="group-5">
                <div className="text-wrapper-8">Frequency</div>
                <img
                  className="iconoir-sine-wave"
                  alt="Iconoir sine wave"
                  src={iconoirSineWave}
                />
              </div>
              <div className="group-6">
                <div className="text-wrapper-8">Magnetic Field</div>
                <img className="ion-magnet" alt="Ion magnet" src={ionMagnet} />
              </div>
              <div className="group-7">
                <div className="text-wrapper-9">100°c Membrane</div>
                <img className="membrane" alt="Membrane" src={membrane} />
              </div>
              <div className="group-8">
                <p className="text-wrapper-8">Volume 320ml / 10.8 fl oz</p>
                <img
                  className="material-symbols"
                  alt="Material symbols"
                  src={materialSymbolsWaterLossRounded}
                />
              </div>
            </div>
            <div className="details-2">
              <div className="group-2">
                <img
                  className="iconoir-color-filter"
                  alt="Iconoir color filter"
                  src={iconoirColorFilter}
                />
                <div className="text-wrapper-8">Chromotherapy</div>
              </div>
              <div className="group-3">
                <img
                  className="iconoir-hydrogen"
                  alt="Iconoir hydrogen"
                  src={iconoirHydrogen}
                />
                <div className="text-wrapper-8">Molecular Hydrogen</div>
              </div>
              <div className="group-4">
                <p className="text-wrapper-8">Diameter 6 cm / 2.4 in</p>
                <p className="p">Height 22 cm / 8.7 in</p>
                <img
                  className="radix-icons"
                  alt="Radix icons"
                  src={radixIconsDimensions}
                />
              </div>
              <div className="group-5">
                <div className="text-wrapper-8">Frequency</div>
                <img
                  className="iconoir-sine-wave"
                  alt="Iconoir sine wave"
                  src={iconoirSineWave}
                />
              </div>
              <div className="group-6">
                <div className="text-wrapper-8">Magnetic Field</div>
                <img className="ion-magnet" alt="Ion magnet" src={ionMagnet} />
              </div>
              <div className="group-7">
                <div className="text-wrapper-9">100°c Membrane</div>
                <img className="membrane" alt="Membrane" src={membrane2} />
              </div>
              <div className="group-8">
                <p className="text-wrapper-8">Volume 320ml / 10.8 fl oz</p>
                <img
                  className="material-symbols"
                  alt="Material symbols"
                  src={materialSymbolsWaterLossRounded}
                />
              </div>
            </div>
            <img className="line" alt="Line" src={line2} />
            <div className="text-wrapper-10">Redefine your well being</div>
            <p className="order-a-bottle-today">
              <span className="span">Order a bottle today</span>
              <span className="text-wrapper-11"> or join the revolution and </span>
              <span className="text-wrapper-12">become a brand partner</span>
              <span className="text-wrapper-11">.</span>
            </p>
            <div className="text-wrapper-13">LumiVitæ Bottle €498.00</div>
            <div className="text-wrapper-14">Graphite Sand</div>
            <div className="text-wrapper-15">LumiVitæ Bottle €498.00</div>
            <div className="text-wrapper-16">Desert Gold</div>
            <div className="frame-2">
              <div className="text-wrapper-6">Buy Bottle</div>
            </div>
            <div className="frame-3">
              <div className="text-wrapper-6">Buy Bottle</div>
            </div>
          </div>
        </div>

        <div className="section-eleven" data-aos="fade-up">
          <div className="overlap-2">
            <div className="text-wrapper-17" data-aos="fade-up" data-aos-delay="100">Chromotherapy</div>
            <p className="text-wrapper-18" data-aos="fade-up" data-aos-delay="200">
              Color your style and fit your mood
            </p>
          </div>
        </div>

        <div className="section-ten" data-aos="fade-up">
          <div className="overlap-3">
            <div className="text-wrapper-19">Energy</div>
            <img
              className="power-up-ignite"
              alt="Power up ignite"
              src={powerUpIgniteVitalityElevatePerformance}
            />
            <p className="text-wrapper-20">
              Designed to stimulate cellular oxidation and amplify Yang energy,
              this frequency supports circulation, endurance, and sustained
              vitality—helping you move through life with strength and momentum.
            </p>
          </div>
        </div>

        <div className="section-nine" data-aos="fade-up">
          <div className="overlap-4">
            <div className="text-wrapper-21">Recovery</div>
            <p className="restore-balance">
              <span className="span">Restore</span>
              <span className="text-wrapper-11"> balance. </span>
              <span className="span">Reduce</span>
              <span className="text-wrapper-11"> oxidative stress. </span>
              <span className="span">Reclaim your energy</span>
              <span className="text-wrapper-11">.</span>
            </p>
            <p className="text-wrapper-22">
              Infused with a frequency that supports YIN energy restoration,
              LumiVitæ helps bring the body back into equilibrium—reducing
              oxidative stress and enhancing cellular renewal.
            </p>
          </div>
        </div>

        <div className="section-eight" data-aos="fade-up">
          <div className="overlap-5">
            <div className="text-wrapper-23">Lumivitae Frequency</div>
             <div className="text-wrapper-90">Sunlight, captured. Energy, unleashed.</div>
          

           
          </div>
        </div>

        <div className="section-seven" data-aos="fade-up">
          <div className="overlap-6">
            <div className="text-wrapper-24">Frequency</div>
            <img
              className="hydration-reimagined"
              alt="Hydration reimagined"
              src={hydrationReimaginedEnergyTunedToYou}
            />
            <div className="flexcontainer">
              <p className="text">
                <span className="text-wrapper-25">
                  Water is more than just a drink. It’s a conductor of energy, a
                  carrier of life, and now—an experience tailored to you.
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper-25">
                  That’s why we created the LumiVitæ Frequency Lid—a
                  breakthrough in hydration that restores water’s energetic
                  blueprint, aligning it with your body’s needs.
                </span>
              </p>
            </div>
            <div className="frame-4" data-aos="fade-up" data-aos-delay="0">
              <div className="text-wrapper-26">Lumivitae</div>
            </div>
            <div className="frame-5" data-aos="fade-up" data-aos-delay="100">
              <div className="text-wrapper-26">Energy</div>
            </div>
            <div className="frame-6" data-aos="fade-up" data-aos-delay="200">
              <div className="text-wrapper-26">Recovery</div>
            </div>
            <p className="text-wrapper-27">
              Tap below to discover each frequency.
            </p>
          </div>
        </div>

        <div className="section-six" data-aos="fade-up">
          <div className="overlap-7">
            <p className="we-created-planet">
              <span className="text-wrapper-28">We created </span>
              <span className="text-wrapper-29">Planet Earth in a Bottle</span>
              <span className="text-wrapper-28">.</span>
            </p>
            <div className="frame-7" data-aos="fade-right">
              <div className="ellipse" />
              <p className="text-wrapper-30">
                3 unique frequencies
                <br />
                in the lid
              </p>
            </div>
            <div className="frame-8" data-aos="fade-left">
              <div className="ellipse" />
              <p className="text-wrapper-30">
                Hydrogen rich 3 <br />
                phase formula
              </p>
            </div>
            <div className="frame-9" data-aos="fade-right">
              <div className="chromotherapy">
                Chromotherapy
                <br />
                features 7 colours
              </div>
              <div className="ellipse" />
            </div>
            <div className="frame-10" data-aos="fade-left">
              <div className="ellipse" />
              <div className="text-wrapper-31">Magnetic Ring Base</div>
            </div>
          </div>
        </div>

        <div className="section-five" data-aos="fade-up">
          <div className="we-created-planet-wrapper">
            <p className="we-created-planet-2">
              <span className="text-wrapper-32">We created </span>
              <span className="text-wrapper-33">Planet Earth in a Bottle</span>
              <span className="text-wrapper-32">.</span>
            </p>
          </div>
        </div>

        <div className="overlap-8">
         
          
          <div className="section-four" data-aos="fade-up">
            <Slider ref={sliderRef}/>
            <div className="overlap-9">
              <p className="text-wrapper-34">Why Your Body Needs It.</p>
              <p className="text-wrapper-35">
                Over 3,000 scientific studies, including 200+ clinical trials,
                suggest that H2 holds extraordinary benefits across virtually
                every organ system:
              </p>
              <p className="molecular-hydrogen">
                <span className="text-wrapper-25">
                  Molecular hydrogen transforms ordinary water into an{" "}
                </span>
                <span className="text-wrapper-36">antioxidant powerhouse</span>
                <span className="text-wrapper-25">
                  —fuelling every cell, every system, every sip.
                </span>
              </p>
              <p className="it-s-not-just-water">
                <span className="text-wrapper-25">
                  It’s not just water. It’s the{" "}
                </span>
                <span className="text-wrapper-36">future of wellness</span>
                <span className="text-wrapper-25">. And it starts Now.</span>
              </p>
              <img className="img" alt="Group" src={group62} onClick={() => sliderRef.current?.next()} />
              <img className="group-9" alt="Group" src={group72} onClick={() => sliderRef.current?.back()}/>
            </div>
          </div>
        </div>

        <div className="section-three" data-aos="fade-up">
          <div className="overlap-10">
            <div className="text-wrapper-38">Molecular Hydrogen</div>
            <p className="the-smallest">
              <span className="text-wrapper-28">The </span>
              <span className="text-wrapper-29">Smallest Molecule</span>
              <span className="text-wrapper-28">. The </span>
              <span className="text-wrapper-29">Biggest Impact</span>
              <span className="text-wrapper-28">.</span>
            </p>
            <div className="flexcontainer-2">
              <p className="text">
                <span className="text-wrapper-25">
                  It’s the simplest element in the universe—yet one of the most
                  powerful for the human body. Molecular hydrogen (H2) is
                  redefining what’s possible in cellular health, recovery, and
                  longevity.
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper-25">
                  So small, it reaches where others can’t.
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper-25">
                  H2 is the lightest, most bioavailable molecule, penetrating
                  deep into cells and even crossing the blood-brain barrier. It
                  works at the source of oxidative stress, targeting and
                  neutralizing the most harmful free radicals before they cause
                  damage.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="overlap-wrapper" data-aos="fade-up">
          <div className="overlap-11">
            <div className="frame-11">
              <img className="image-2" alt="Image" src={image3} />
              <img className="image-3" alt="Image" src={image2} />
              <img className="image-4" alt="Image" src={image5} />
              <p className="premium-electrodes">
                <span className="span">Premium Electrodes</span>
                <span className="text-wrapper-11">
                  {" "}
                  – Crafted for efficiency, ensuring the highest hydrogen
                  infusion.
                </span>
              </p>
              <p className="advanced-PEM">
                <span className="span">Advanced PEM Membrane</span>
                <span className="text-wrapper-11">
                  {" "}
                  – Separates gases for pure, therapeutic hydrogen, free from
                  unwanted byproducts.
                </span>
              </p>
              <p className="low-voltage">
                <span className="span">Low-Voltage Operation</span>
                <span className="text-wrapper-11">
                  {" "}
                  – Maximizes energy efficiency while maintaining optimal
                  performance.
                </span>
              </p>
            </div>
            <div className="hydrogen-pioneering">
              Hydrogen <br />
              Pioneering Technology
            </div>
            <div className="text-wrapper-39">Pure Hydrogen. Perfected.</div>
            <p className="text-wrapper-40">
              LumiVitæ redefines hydration with cutting-edge engineering,
              delivering clean, hydrogen-rich water with unparalleled precision.
            </p>
            <p className="every-sip-meets-the">
              <span className="span">Every sip</span>
              <span className="text-wrapper-11"> meets the </span>
              <span className="span">highest standards of purity</span>
              <span className="text-wrapper-11">
                , safety, and effectiveness—a seamless fusion of innovation and
                wellness.
              </span>
            </p>
            <p className="this-isn-t-just">
              <span className="text-wrapper-41">
                This isn’t just water. It’s{" "}
              </span>
              <span className="text-wrapper-42">next-generation hydration</span>
              <span className="text-wrapper-41">.</span>
            </p>
            <img className="group-10" alt="Group" src={group6} />
            <img className="group-11" alt="Group" src={group7} />
          </div>
        </div>

        <div className="overlap-group-wrapper" data-aos="fade-up">
          <div className="overlap-12">
            <div className="text-wrapper-43">Magnetic Field</div>
            <p className="earth-s-energy">
              <span className="span">Earth’s Energy</span>
              <span className="text-wrapper-11">. Infused in </span>
              <span className="span">Every Sip</span>
              <span className="text-wrapper-11">.</span>
            </p>
            <div className="flexcontainer-3">
              <p className="text-2">
                <span className="span">Water in nature</span>
                <span className="text-wrapper-11">
                  {" "}
                  is never still—it moves, flows, and{" "}
                </span>
                <span className="span">
                  interacts with the Earth’s magnetic field
                </span>
                <span className="text-wrapper-11">
                  , maintaining its natural vitality.
                  <br />
                </span>
              </p>
              <p className="text-2">
                <span className="text-wrapper-11">LumiVitæ’s </span>
                <span className="span">Magnetic Base</span>
                <span className="text-wrapper-11">
                  {" "}
                  recreates this effect, using{" "}
                </span>
                <span className="span">intricately calibrated magnets</span>
                <span className="text-wrapper-11"> to mimic the </span>
                <span className="span">Earth’s core energy.</span>
                <span className="text-wrapper-11">
                  {" "}
                  This subtle yet powerful field enhances the structure of
                  water, supporting{" "}
                </span>
                <span className="span">
                  natural alignment, bioavailability, and cellular balance
                </span>
                <span className="text-wrapper-11">
                  .<br />
                </span>
              </p>
              <p className="text-2">
                <span className="text-wrapper-11">
                  Hydration, as nature intended—
                </span>
                <span className="span">
                  alive, energized, and in harmony with the world around you
                </span>
                <span className="text-wrapper-11">.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="chromo-colours" data-aos="fade-up">
          <p className="colour-your">
            <span className="text-wrapper-41">Colour Your Hydration. </span>
            <span className="text-wrapper-42">Align Your Energy.</span>
          </p>
          <div className="flexcontainer-i">
            <p className="text-i" data-aos="fade-up" data-aos-delay="0">
              <span className="text-wrapper-41">
                With LumiVitæ’s Chromotherapy, you can personalize your
                hydration experience by choosing from seven unique light
                colours. Each color carries its own energetic signature,
                aligning with your body’s natural rhythm to support balance,
                clarity, and vitality.
                <br />
              </span>
            </p>
            <p className="text-i" data-aos="fade-up" data-aos-delay="100">
              <span className="text-wrapper-41">Let your water </span>
              <span className="text-wrapper-42">become an expression</span>
              <span className="text-wrapper-41">
                {" "}
                of how you feel. <br />
              </span>
            </p>
            <p className="text-i" data-aos="fade-up" data-aos-delay="200">
              <span className="text-wrapper-42">Choose</span>
              <span className="text-wrapper-41"> the color that </span>
              <span className="text-wrapper-42">fits your moment</span>
              <span className="text-wrapper-41">.</span>
            </p>
          </div>
          <div className="colours">
            <div className="ellipse-2" data-aos="zoom-in" data-aos-delay="0" />
            <div className="ellipse-3" data-aos="zoom-in" data-aos-delay="100" />
            <div className="ellipse-4" data-aos="zoom-in" data-aos-delay="200" />
            <div className="ellipse-5" data-aos="zoom-in" data-aos-delay="300" />
            <div className="ellipse-6" data-aos="zoom-in" data-aos-delay="400" />
            <div className="ellipse-7" data-aos="zoom-in" data-aos-delay="500" />
            <div className="ellipse-8" data-aos="zoom-in" data-aos-delay="600" />
          </div>
        </div>

        <div className="nav-2">
          <div className="group-12">
            <div className="text-wrapper-44">Frequency</div>
            <div className="text-wrapper-45">Chromotherapy</div>
            <div className="text-wrapper-46">Hydrogen</div>
            <div className="text-wrapper-47">Magnetic Field</div>
          </div>
          <div className="frame-12">
            <div className="text-wrapper-48">Buy bottle</div>
          </div>
        </div>
      </div>
    </div>
    <FooterMain/>
         </PageContainer>

  );
};

// Create this CSS file


