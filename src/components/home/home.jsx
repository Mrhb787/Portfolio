import {useEffect} from "react";

import "../../assets/static/home.css";
import "../../assets/components/style.css";

import {reveal} from "../../assets/utils";

import About from "./about";
import Education from "./education";
import Experience from "./experience";
import Projects from "./projects";
import Contact from "./contact";
import LandingPage from "./landingpage";

const Home = ({data}) => {
  const Sections = [
    <LandingPage
      data={data.components.landingPage}
      resume={data.meta.resume}
    />,
    <About data={data.components.about} meta={data.meta} />,
    <Experience data={data.components.experience} />,
    <Education data={data.components.education} />,
    <Projects />,
    <Contact data={data.meta} />,
  ];

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
            id={data.components.navbar.navLinks[index]}
            key={data.components.navbar.navLinks[index]}
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
