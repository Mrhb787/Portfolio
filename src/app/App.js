import Router from "../api/routes";
import "../assets/components/style.css";
import data from "../api/portfolioData.json";
import NavBar from "../components/nav/Nav";
import UnderDev from "../assets/components/underdev";
const App = () => {
  return (
    <div className="App">
      <NavBar data={data.components.navbar} />
      {process.env.REACT_APP_NODE_ENV === "DEVELOPMENT" && <UnderDev />}
      <Router data={data} />
    </div>
  );
};

export default App;
