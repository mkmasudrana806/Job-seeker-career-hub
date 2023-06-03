import React, { useContext } from "react";
import "./hero.css";
import { JobsContext } from "../../contextProvider/ContextProvider";
import { Link } from "react-router-dom";

const Hero = ({ hero }) => {
  const heroSection = hero?.heroSection || {};
  const { image, description } = heroSection;
  return (
    <div className="hero">
      <div className="hero-text">
        <h1 className="hero-title">
          <span className="">One Step</span> Closer To Your{" "}
          <span className="primary-color">Dream Job</span>
        </h1>
        <p>{description}</p>
        <Link className="primary-btn">Get Started</Link>
      </div>
      <div className="hero-image">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
