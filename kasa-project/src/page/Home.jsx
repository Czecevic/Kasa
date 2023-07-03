import "../App.css";
import img from "../assets/home_cover.png";
import { HomeCards } from "../components/HomeCards";

export const HomePage = () => {
  return (
    <>
      <div className="imgHome">
        <img src={img}>
        </img>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <HomeCards></HomeCards>
    </>
  );
};
