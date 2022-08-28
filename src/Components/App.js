import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Education from "./Education/Education";
import Contact from "./Contact/Contact";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
