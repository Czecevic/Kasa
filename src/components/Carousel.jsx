/* eslint-disable react/prop-types */
import { useState } from "react";
import imgLeft from "../assets/chevron-left-solid.svg";
import imgRight from "../assets/chevron-right-solid.svg";

export const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const preventPicture = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextPicture = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (images.length > 1) {
    return (
      <div className="carousel">
        <button onClick={preventPicture} className="left">
          <img src={imgLeft} alt="arrow-left" className="arrow-img" />
        </button>
        <div className="carousel-content">
          <img src={images[currentImageIndex]} alt="carousel" />
          <div className="carousel-number">
            <p>
              {currentImageIndex + 1} / {images.length}
            </p>
          </div>
        </div>
        <button onClick={nextPicture} className="right">
          <img src={imgRight} alt="arrow-right" className="arrow-img" />
        </button>
      </div>
    );
  } else {
    return (
      <div className="carousel">
        <div className="carousel-content">
          <img src={images[currentImageIndex]} alt="carousel" />
        </div>
      </div>
    );
  }
};
