import React from "react";
// import { Nav } from "../Nav/Nav";
import checkoutShop1 from "../images/Checkout_Shop 1.png";
import group6 from "../images/Group 6.png";
import group7 from "../images/Group 7.png";
import line1 from "../images/Line 1.svg";
import maskGroup from "../images/Mask group.png";
import "./style.css";
import vector1 from "../images/Vector 1.svg";
import vector5 from "../images/Vector 1.svg";
import Navbar from "../../../shared/components/Navbar";
import { BuyOptionDesign } from "../components/BuyOptionDesign/BuyOptionDesign";
import FooterMain from "../../../shared/components/Footer";


export const BuyBottle = (): JSX.Element => {
  return (
    <>
    <Navbar/>
    <div className="buy-bottle">
      <div className="div-2">
        <div className="text-wrapper-6">Place your LumiVitae order</div>

        <p className="bottle-select-your">
          <span className="span">Bottle</span>

          <span className="text-wrapper-7">. Select your color.</span>
        </p>

        <p className="LVQ-choose-your">
          <span className="span">LVQ+</span>

          <span className="text-wrapper-7">. Choose your bundle.</span>
        </p>

        <p className="select-your">
          <span className="text-wrapper-8">Select your </span>

          <span className="text-wrapper-9">frequency</span>

          <span className="text-wrapper-8">.</span>
        </p>

        <div className="graphite">
          <div className="text-wrapper-10">Graphite Sand</div>

          <div className="overlap-group">
            <img className="vector" alt="Vector" src={vector1} />

            <div className="text-wrapper-11">1</div>

            <div className="text-wrapper-12">Quantity</div>
          </div>

          <div className="rectangle" />

          <div className="text-wrapper-13">320ml</div>

          <div className="text-wrapper-14">€498.00</div>
        </div>

        <div className="gold">
          <div className="text-wrapper-10">Desert Gold</div>

          <div className="rectangle-2" />

          <div className="overlap-group">
            <img className="vector" alt="Vector" src={vector5} />

            <div className="text-wrapper-15">0</div>

            <div className="text-wrapper-12">Quantity</div>
          </div>

          <div className="text-wrapper-13">320ml</div>

          <div className="text-wrapper-14">€498.00</div>
        </div>

        <div className="gallery">
          <img className="img" alt="Group" src={group6} />

          <img className="group-2" alt="Group" src={group7} />

          <div className="group-3">
            <div className="ellipse" />

            <div className="ellipse-2" />

            <div className="ellipse-3" />

            <div className="ellipse-4" />
          </div>
        </div>

        <div className="review-order">
          <div className="overlap">
            <div className="frame">
              <div className="text-wrapper-16">Add to Bag</div>
            </div>

            <div className="div-wrapper">
              <div className="text-wrapper-16">Checkout Now</div>
            </div>

            <div className="overlap-group-2">
              <img
                className="checkout-shop"
                alt="Checkout shop"
                src={checkoutShop1}
              />

              <div className="rectangle-3" />
            </div>

            <div className="your-new-lumivitae">
              Your new <br />
              LumiVitae order
            </div>

            <div className="text-wrapper-17">
              LumiVitae Bottle Graphite Sand
            </div>

            <div className="text-wrapper-18">IVQ+ Tablets</div>

            <div className="text-wrapper-19">Quantity 1</div>

            <div className="text-wrapper-20">€498.00</div>

            <img className="line" alt="Line" src={line1} />

            <div className="text-wrapper-21">€xx.xx</div>

            <div className="text-wrapper-22">Two packs</div>

            <div className="text-wrapper-23">One-time purchase</div>
          </div>
        </div>

        <div className="whats-in-the-box">
          <img className="mask-group" alt="Mask group" src={maskGroup} />

          <div className="text-wrapper-24">What’s in the box</div>

          <p className="wireless-charging">
            Wireless Charging Pad &amp; USB Charging Cable
          </p>

          <div className="text-wrapper-25">LumiVitae Hydrogen Water Bottle</div>

          <div className="text-wrapper-26">Online User Guide in English</div>
        </div>

        <div className="FA-qs">
          <div className="overlap-2">
            <div className="rectangle-4" />

            <p className="p">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            <div className="text-wrapper-27">Frequently Asked Questions</div>

            <p className="text-wrapper-28">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p>

            <p className="text-wrapper-29">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p>

            <p className="text-wrapper-30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p>

            <p className="text-wrapper-31">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p>

            <p className="text-wrapper-32">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit?
            </p>

            <img className="vector-2" alt="Vector" src={vector1} />

            <img className="vector-3" alt="Vector" src={vector5} />

            <img className="vector-4" alt="Vector" src={vector5} />

            <img className="vector-5" alt="Vector" src={vector5} />

            <img className="vector-6" alt="Vector" src={vector5} />
          </div>
        </div>

        <BuyOptionDesign
          className="buy-option-design-instance"
          property1="default"
                  hasDiv={true}
                   text="Two packs"
          text1="LVQ+ 60 Tablets"

        />
        <BuyOptionDesign
          className="design-component-instance-node"
          property1="default"
                  hasDiv={false}

          text="Two packs"
          text1="LVQ+ 60 Tablets"
        />
        <BuyOptionDesign
        key={2}
        hasDiv={false}
          className="buy-option-design-2"
          property1="default"
          text="Three pack set"
          text1="LVQ+ 90 Tablets"
        />
        <BuyOptionDesign
          className="buy-option-design-3"
          hasDiv={false}
          property1="default"
          text="30 Day"
          text1="Autoship Subscription"
        />
        <BuyOptionDesign
          className="buy-option-design-4"
          hasDiv={false}
          property1="default"
          text="60 Day"
          text1="Autoship Subscription"
        />
        <BuyOptionDesign
          className="buy-option-design-5"
          hasDiv={false}
          property1="default"
          text="90 Day"
          text1="Autoship Subscription"
        />
        <BuyOptionDesign
          className="buy-option-design-6"
          hasDiv={false}
          property1="default"
          text="One-time purchase"
          text1="No Subscription"
        />
       

        {/* <Nav className="nav-instance" nav="dark" /> */}
      </div>
      
    </div>
      <FooterMain/>
    </>
  );
};
