import "./App.css";
import img from "./assets/home_cover.png";
import { LocationMaison } from "./components/LocationMaison";

export const HomePage = () => {
  return (
    <>
      <img src={img} className="homepage_picture"></img>
      <LocationMaison></LocationMaison>
    </>
  );
};
