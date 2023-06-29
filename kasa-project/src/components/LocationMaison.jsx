import { datas } from "../../public/data/data";
import { Link } from "react-router-dom";
export const LocationMaison = () => {
  return (
    <div className="container">
      {datas.map((data) => (
        <div key={data.id} className="card">
          <Link to={`/${data.id}`}>
            <img src={data.pictures[0]}></img>
          </Link>
          <div>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
