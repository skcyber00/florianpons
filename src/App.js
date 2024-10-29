import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Competences from "./pages/Competences";
import Projets from "./pages/Projets/Projets";
import ProjetsPrettiersun from "./pages/Projets/Prettiersun";
import ProjetsSleake from "./pages/Projets/Sleake";
import ProjetsResavion from "./pages/Projets/Resavion";
import ProjetsAdista from "./pages/Projets/Adista";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NavBar from "./components/Navigations/NavBar";
import Share from "./components/Navigations/Share";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/apropos" element={<Apropos />} />
        <Route exact path="/competences" element={<Competences />} />
        <Route exact path="/projets" element={<Projets />} />
        <Route
          exact
          path="/projets/prettiersun"
          element={<ProjetsPrettiersun />}
        />
        <Route exact path="/projets/sleake" element={<ProjetsSleake />} />
        <Route exact path="/projets/resavion" element={<ProjetsResavion />} />
        <Route exact path="/projets/adista" element={<ProjetsAdista />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Share />
    </Router>
  );
}

export default App;
