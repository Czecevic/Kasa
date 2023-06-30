import "../App.css";
import img from "../assets/home_cover.png";
import { HomeCards } from "../components/HomeCards";

export const HomePage = () => {
  return (
    <>
      <img src={img} className="homepage_picture"></img>
      <HomeCards></HomeCards>
    </>
  );
};
