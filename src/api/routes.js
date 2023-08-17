import {useRoutes} from "react-router-dom";

// Components
import Home from "../components/home/home";
const Router = ({data}) => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home data={data} />,
    },
  ]);
  return routes;
};

export default Router;
