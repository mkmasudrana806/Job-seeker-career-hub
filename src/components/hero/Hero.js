import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1 className="hero-title">
          <span className="">One Step</span> Closer To Your{" "}
          <span className="primary-color">Dream Job</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
          officia reiciendis dignissimos optio nihil ratione fugit vel ducimus a
          quae iure enim quas neque qui, vero, aperiam mollitia tenetur magni.
        </p>
        <div className="primary-btn">Get Started</div>
      </div>
      <div className="hero-image">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Hero;
