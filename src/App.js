import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Competences from "./pages/Competences";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NavBar from "./components/Navigations/NavBar";
import Share from "./components/Navigations/Share";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/apropos" element={<Apropos />} />
          <Route exact path="/competences" element={<Competences />} />
          <Route exact path="/projets" element={<Projets />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Share />
      </div>
    </Router>
  );
}

export default App;
