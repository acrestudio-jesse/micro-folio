import "./App.css";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Routes, Route, useLocation } from "react-router-dom";
import projects from "./static/projects.json"
import techs from "./static/techs.json"

import { AnimatePresence } from "framer-motion";

function App() {
  console.log(techs, "💥");
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence initial={false} exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/portfolio" element={<Portfolio projectData={projects.projects} techData= {techs.techs}/>} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
