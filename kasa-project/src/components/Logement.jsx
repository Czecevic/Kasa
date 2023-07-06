import { useParams } from "react-router-dom";
import { callData } from "../callData";
import { Error } from "../page/Error";
import { StarRating } from "./StarRating";
import { useState } from "react";
import { Carousel } from "./Carousel";

export const Logement = () => {
  const [desc, setDesc] = useState(false);
  const [equip, setEquip] = useState(false);
  const data = callData();
  const { id } = useParams();

  const descButton = () => {
    setDesc(!desc);
  };

  const equipButton = () => {
    setEquip(!equip);
  };
  // console.log(data);
  const dataLocation = data.find((item) => item.id === id);
  if (!dataLocation) {
    return <Error />;
  }

  return (
    <div className="allElementResa">
      <div className="imgResa">
        <Carousel images={dataLocation.pictures} />
      </div>
      <div className="profilAndTitre">
        <div className="title">
          <h2>{dataLocation.title}</h2>
          <ul className="tag">
            {dataLocation.tags.map((tagName, index) => (
              <li key={index}>{tagName}</li>
            ))}
          </ul>
        </div>
        <div className="user">
          <div className="userDetail">
            <h3>{dataLocation.host.name}</h3>
            <img src={dataLocation.host.picture} alt="Host" />
          </div>
          <StarRating rating={dataLocation.rating} />
        </div>
      </div>
      <div className="DescriptionAndEquipement">
        <div className="Description">
          <button onClick={descButton}>
            Description
            <span
              className={`arrow-size ${desc ? "rotate-icon" : ""}`}
              role="img"
              aria-label="Arrow"
            >
              ↑
            </span>
          </button>
          {desc ? (
            <p className={`description-paragraph ${desc ? "show" : "hide"}`}>
              {dataLocation.description}
            </p>
          ) : null}
        </div>
        <div className="Equipement">
          <button onClick={equipButton}>
            Equipement
            <span
              className={`arrow-size ${equip ? "rotate-icon" : ""}`}
              role="img"
              aria-label="Arrow"
            >
              ↑
            </span>
          </button>
          {equip ? (
            <ul>
              {dataLocation.equipments.map((equipementName, index) => (
                <li key={index}>{equipementName}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
    // <h1>test</h1>
  );
};
