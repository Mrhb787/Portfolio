import {useEffect} from "react";

import "../../assets/static/home.css";
import "../../assets/components/style.css";
import {NavLinkNames} from "../../assets/constants";
import {reveal} from "../../assets/utils";

import About from "./about";
import Education from "./education";
import Experience from "./experience";
import Projects from "./projects";
import Contact from "./contact";
import LandingPage from "./landingpage";

const Sections = [
  <LandingPage />,
  <About />,
  <Experience />,
  <Education />,
  <Projects />,
  <Contact />,
];

const Home = () => {
  useEffect(() => {
    window.addEventListener("scroll", reveal);
    reveal();
    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <div className="main">
      {Sections.map((section, index) => {
        return (
          <section
            id={NavLinkNames[index]}
            key={NavLinkNames[index]}
            className="section"
          >
            {section}
          </section>
        );
      })}
    </div>
  );
};

export default Home;
