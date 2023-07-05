import { HomePage } from "./page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar.jsx";
import { About } from "./page/About";
import { Logement } from "./components/Logement";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<Logement />} />
      </Routes>
    </Router>
  );
};
