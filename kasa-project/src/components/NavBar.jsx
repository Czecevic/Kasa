import img from "../assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        <img src={img}></img>
      </a>
      <ul>
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/about">A Propos</a>
        </li>
      </ul>
    </nav>
  );
};
