import Router from "../api/routes";
import "../assets/components/style.css";

import NavBar from "../components/nav/Nav";
import UnderDev from "../assets/components/underdev";
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <UnderDev />
      <Router />
    </div>
  );
};

export default App;
