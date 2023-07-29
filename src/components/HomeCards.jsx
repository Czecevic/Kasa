import { callData } from "../callData";
import { Link } from "react-router-dom";
export const HomeCards = () => {
  const data = callData();
  return (
    <div className="container">
      {data.map((data) => (
        <div key={data.id} className="card">
          <Link to={`/${data.id}`}>
            <img src={data.pictures[0]}></img>
          </Link>
          <div>
            <h2>{data.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};
