import React from "react";
import "./Hero.css";
import hand_icon from "../../Assets/hand_icon.png";
import arrow_icon from "../../Assets/arrow.png";
import hero_image from "../../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-contents">
        <h2>Order Your favorite T-Shirt here</h2>
        <p>
          Explore our diverse collection of T-shirts, each crafted with premium
          materials and designed with passion. Our mission is to bring style and
          comfort to your wardrobe, one unique piece at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Hero;
