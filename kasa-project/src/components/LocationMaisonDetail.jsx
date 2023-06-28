import { useParams } from "react-router-dom";
import { datas } from "../DB/data";
import { StarRating } from "./StarRating";

export const LocationMaisonDetail = () => {
  const { id } = useParams();
  const dataLocation = datas.find((data) => data.id === id);
  // console.log(dataLocation);
  if (!dataLocation) {
    return <h1>error 404</h1>;
  }

  return (
    <div>
      <img src={dataLocation.pictures[1]} />
      <div>
        <h2>{dataLocation.title}</h2>
        <ul>
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
        <div className="userRating">
          <StarRating rating={dataLocation.rating} />
        </div>
      </div>
      <div className="Description">
        <h4>Description</h4>
        <p>{dataLocation.description}</p>
      </div>
      <div className="Equipement">
        <h4>Equipements</h4>
        <ul>
          {dataLocation.equipments.map((equipementName, index) => (
            <li key={index}>{equipementName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
