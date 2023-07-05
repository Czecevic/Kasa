/* eslint-disable react/prop-types */
import { useState } from "react";

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

  return (
    <div className="carousel">
      <button onClick={preventPicture} className="left">
        &lt;
      </button>
      <img src={images[currentImageIndex]} alt="carousel"></img>
      <button onClick={nextPicture} className="right">
        &gt;
      </button>
    </div>
  );
};
