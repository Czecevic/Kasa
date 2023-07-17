/* eslint-disable react/prop-types */
import { useState } from "react";
import img from "../assets/chevron-up-solid.svg";

export const ElementOpen = ({ className, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={className}>
      <button onClick={handleClick}>
        {title}
        <span className={`arrowImgOfElement ${isOpen ? "" : "rotate-icon"}`}>
          <img src={img} alt="arrow-up" />
        </span>
      </button>
      {isOpen && <div className="aboutText">{content}</div>}
    </div>
  );
};
