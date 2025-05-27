import layer1 from "../images/layer-1.svg";

export const LiquidVitalQiSection = () => (
  <div className="liquid-vital-qi" data-aos="fade-in">
    <div className="overlap-group">
      <p className="liquid-vital-qi-a" data-aos="zoom-in">
        <span className="span">Liquid Vital Qi<br /></span>
        <span className="text-wrapper-5">A fluid lifeforce-energy concept.</span>
      </p>
      <img className="layer" alt="Layer" src={layer1} data-aos="flip-left" />
      <div className="flexcontainer" data-aos="fade-up" data-aos-delay="200">
        <p className="text">
          <span className="text-wrapper-6">Aging isn’t about the years that pass.<br /></span>
        </p>
        <p className="text">
          <span className="text-wrapper-6">It’s about what happens inside your cells.<br /></span>
        </p>
        <p className="text">
          <span className="text-wrapper-6">Every day, your body is either regenerating or breaking down.<br /></span>
        </p>
        <p className="text">
          <span className="text-wrapper-6">Every moment, your cells are either thriving or declining.<br /></span>
        </p>
        <p className="text">
          <span className="text-wrapper-6">What if you could shift the balance—not just slow aging, but actively reverse its effects?</span>
        </p>
      </div>
    </div>
  </div>
);
