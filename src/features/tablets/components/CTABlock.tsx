// بخش CTA
import pillsSec71 from "../images/pills-sec7-1.png";

export const CTABlock = () => (
  <div className="overlap-9" data-aos="pulse">
    <div className="CTA">
      <div className="overlap-10">
        <div className="text-wrapper-18">The Future of Longevity</div>
        <p className="start-your-tablet">
          <span className="span">Start your tablet subscription today</span>
          <span className="text-wrapper-19"> or join the revolution and become a </span>
          <span className="text-wrapper-20">brand partner</span>
          <span className="text-wrapper-19">.</span>
        </p>
        <div className="text-wrapper-21">Monthly Subscription €xx.xx</div>
        <div className="text-wrapper-22">LVQ+</div>
        <div className="div-wrapper">
          <div className="text-wrapper-23">Start Subscription</div>
        </div>
      </div>
    </div>
    <img className="pills" alt="Pills" src={pillsSec71} />
  </div>
);
