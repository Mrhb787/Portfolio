import {useState, useEffect, Fragment} from "react";
import "./home.css";

import Preloader from "../../assets/components/Preloader";
import VideoBG from "../../assets/components/VideoBG";
import LandingPage from "./landingpage";
import About from "./about";
import Education from "./education";
import Experience from "./experience";
import Projects from "./projects";

// constants
import {preloaderToken, preloaderTimeout} from "../../assets/constants";

const Home = () => {
  const [loading, setLoading] = useState(
    !Boolean(sessionStorage.getItem(preloaderToken))
  );

  useEffect(() => {
    if (!Boolean(sessionStorage.getItem(preloaderToken))) {
      setLoading(true);
      sessionStorage.setItem(preloaderToken, true);
      setTimeout(() => {
        setLoading(false);
      }, preloaderTimeout);
    }
  }, []);

  return (
    <Fragment>
      {loading && <Preloader />}
      {!loading && (
        <div className="main">
          <VideoBG />
          <div className="overlay">
            <div className={loading ? "container" : "container fadeIn"}>
              <LandingPage loading={loading} />
              <About loading={loading} />
              <Education loading={loading} />
              <Experience loading={loading} />
              <Projects loading={loading} />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Home;
