import { useParams } from "react-router-dom";
import { callData } from "../callData";
import { Error } from "../page/Error";
import { StarRating } from "./StarRating";

export const HouseDetails = () => {
  const data = callData();
  const { id } = useParams();
  console.log(data);
  const dataLocation = data.find((data) => data.id === id);
  if (!dataLocation) {
    return <Error />;
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
    // <h1>test</h1>
  );
};
