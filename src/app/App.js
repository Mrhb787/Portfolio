import Router from "../api/routes";
import "../assets/components/style.css";

import NavBar from "../components/nav/Nav";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Router />
    </div>
  );
};

export default App;
