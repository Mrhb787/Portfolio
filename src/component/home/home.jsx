import "../../assets/static/home.css";
import {NavLinkNames} from "../../assets/constants";

import About from "./about";
import Education from "./education";
import Experience from "./experience";
import Projects from "./projects";
import Contact from "./contact";
import LandingPage from "./landingpage";

const Sections = [
  <LandingPage />,
  <About />,
  <Education />,
  <Experience />,
  <Projects />,
  <Contact />,
];

const Home = () => {
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
