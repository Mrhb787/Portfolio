import "../../assets/static/home.css";
import About from "./about";
import Education from "./education";
import Experience from "./experience";
import Projects from "./projects";
import Contact from "./contact";
import LandingPage from "./landingpage";

const Home = () => {
  return (
    <div className="main">
      <LandingPage />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
