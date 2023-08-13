import {useRoutes} from "react-router-dom";

// Components
import Home from "../components/home/home";
const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return routes;
};

export default Router;
