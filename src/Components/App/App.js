import React from "react";
import {Routes, Route} from "react-router-dom";
import "./App.css";

// Components
import Home from "../Home/Home";
import NavBar from "../Nav/NavBar";
import PageNotFound from "../assets/NotFound";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/education" element={<Home />} />
        <Route path="/coding" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/resume" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
