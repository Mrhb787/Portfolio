// React Hooks
import {useState, useContext} from "react";

// MUI Components

// Nav Components
import TopBar from "./TopBar";

// Custom Styling
import "./NavBar.css";

const NavBar = () => {
  // Nav Data States
  const [openSideBar, setOpenSideBar] = useState(false);

  return <TopBar />;
};

export default NavBar;
