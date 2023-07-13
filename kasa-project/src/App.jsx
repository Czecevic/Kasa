import { HomePage } from "./page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./page/About.jsx";
import { Logement } from "./page/Logement.jsx";
import { Error } from "./page/Error.jsx";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/NavBar";

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};
