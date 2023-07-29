import { useLocation } from "react-router-dom";
import img from "../assets/logo.png";

export const Navbar = () => {
  const location = useLocation().pathname;
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        <img src={img} alt="Logo" />
      </a>
      <ul>
        <li>
          {location == "/" ? (
            <a className="active" href="/">
              Accueil
            </a>
          ) : (
            <a href="/">Accueil</a>
          )}
        </li>
        <li>
          {location == "/about" ? (
            <a className="active" href="/about">
              A Propos
            </a>
          ) : (
            <a href="/about">A Propos</a>
          )}
        </li>
      </ul>
    </nav>
  );
};
