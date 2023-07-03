import { useParams } from "react-router-dom";
import { callData } from "../callData";
import { Error } from "../page/Error";
import { StarRating } from "./StarRating";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const HouseDetails = () => {
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
  const dataLocation = data.find((data) => data.id === id);
  if (!dataLocation) {
    return <Error />;
  }

  return (
    <div className="allElementResa">
      <div className="imgResa">
        <img src={dataLocation.pictures[1]} />
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
            <img src={dataLocation.host.picture} />
          </div>
          <StarRating rating={dataLocation.rating} />
        </div>
      </div>
      <div className="DescriptionAndEquipement">
        <div className="Description">
          <button onClick={descButton}>
            Description
            {desc ? (
              <FontAwesomeIcon icon={faArrowDown} />
            ) : (
              <FontAwesomeIcon icon={faArrowUp} />
            )}
          </button>
          {desc ? <p>{dataLocation.description}</p> : !desc}
        </div>
        <div className="Equipement">
          <button onClick={equipButton}>
            Equipement
            {equip ? (
              <FontAwesomeIcon icon={faArrowDown} />
            ) : (
              <FontAwesomeIcon icon={faArrowUp} />
            )}
          </button>
          {equip ? (
            <ul>
              {dataLocation.equipments.map((equipementName, index) => (
                <li key={index}>{equipementName}</li>
              ))}
            </ul>
          ) : (
            !desc
          )}
        </div>
      </div>
    </div>
    // <h1>test</h1>
  );
};
