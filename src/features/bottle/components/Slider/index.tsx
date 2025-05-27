import slide2 from "../../images/imageSlidTwo.png";
import slide3 from "../../images/imageSlideTree.png";
import slide4 from "../../images/imageSlideFure.png"
import image4 from "../../images/image-4.png";
import { forwardRef, useImperativeHandle, useState } from "react";
import './Slider.css'; 

const slidesData = [
  {
    image: image4,
    text: "Reduces oxidative stress – the root cause of aging, fatigue, and chronic disease."
  },
  {
    image: slide2,
    text: "Boosts natural antioxidants like glutathione, the body’s master detoxifier."
  },
  {
    image: slide3,
    text: "Enhances energy production at a cellular level by optimizing mitochondrial function."
  },
   {
    image: slide4,
    text: "Supports healthy inflammation response, helping the body recover faster."
  },
  // Add more slides as needed
];


export type SliderHandle = {
  next: () => void;
  back: () => void;

};
export const Slider = forwardRef<SliderHandle>((props, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);
 useImperativeHandle(ref, () => ({
    next: () => {
     goNext()
    },
    back: () => {
      goPrev();
    },
    
  }));

  const goNext = () => {
    if(activeIndex==0){
    setActiveIndex(1);

    }
  };

  const goPrev = () => {
     if(activeIndex==1){
    setActiveIndex(0);

    }
    
  };

  return (
    <div className="slider">
      <div 
        className="slides-wrapper"
        style={{ transform: `translateX(-${activeIndex * 20}%)` }}
      >
        {slidesData.map((slide, index) => (
          <div className="slide" key={index}>
            <img 
              src={slide.image} 
              alt="Slide content" 
              className="rectangle"
            />
            <div className="slide-content">
              <p className="slide-text">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      

    </div>
  );
});