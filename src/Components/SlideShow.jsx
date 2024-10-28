import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.jpg";
import hero4 from "../assets/images/hero4.jpg";

const SlideShow = () => {
  const images = [hero1, hero2, hero4];
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-50 z-30"></div>
      <div className="absolute z-40 top-[30%] w-full text-center">
        <h1 className="sm:text-8xl md:text-9xl text-6xl text-white font-bold text-center">
          SHIRTIFY
        </h1>
        <p className="text-white sm:text-xl text-lg">
          Your One Stop Shop For Everything Wears
        </p>
      </div>
      <Slide
        nextArrow={
          <button
            style={{
              background: "none",
              border: "0px",
              width: "0px",
            }}
          ></button>
        }
        prevArrow={
          <button
            style={{
              background: "none",
              border: "0px",
              width: "0px",
            }}
          ></button>
        }
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="each-slide-effect flex items-center justify-center h-80 bg-cover"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </Slide>
    </div>
  );
};

export default SlideShow;
