import { useParams } from "react-router-dom";
import { callData } from "../callData";
import { Error } from "./Error";
import { StarRating } from "../components/StarRating";
import { Carousel } from "../components/Carousel";
import { ElementOpen } from "../components/ElementOpen";
export const Logement = () => {
  const data = callData();
  const { id } = useParams();
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
        <ElementOpen
          className="Description"
          title="Description"
          content={dataLocation.description}
        />
        <ElementOpen
          className="Equipement"
          title="Equipement"
          content={
            <ul>
              {dataLocation.equipments.map((equipementName, index) => (
                <li key={index}>{equipementName}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};
