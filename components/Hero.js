import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <header id="home" className="container mx-auto">
      <Navbar />
      <div className="">
        <Carousel />
      </div>
    </header>
  );
};

export default Hero;
