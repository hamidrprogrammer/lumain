import PropTypes from "prop-types";
import React from "react";
import basket from "../appuser/basket.svg";
import globe from "../appuser/globe.svg";
import logo from "../appuser/logo.svg";
import profile from "../appuser/profile.png";
import "./nav.css";

interface Props {
  nav: "dark";
  className: any;
}

export const Nav = ({ nav, className }: Props): JSX.Element => {
  return (
    <div className={`nav ${className}`}>
      <div className="group">
        <div className="div">Bottle</div>

        <div className="text-wrapper-2">Tablets</div>

        <div className="text-wrapper-3">Revolution</div>

        <div className="text-wrapper-4">Vision</div>

        <div className="text-wrapper-5">Science</div>
      </div>

      <img className="basket" alt="Basket" src={basket} />

      <img className="profile" alt="Profile" src={profile} />

      <img className="globe" alt="Globe" src={globe} />

      <img className="logo" alt="Logo" src={logo} />
    </div>
  );
};

Nav.propTypes = {
  nav: PropTypes.oneOf(["dark"]),
};
