// MUI Components
import {AppBar, Toolbar} from "@mui/material";

// Components
import NavLinks from "./NavLinks";
import Login from "../Auth/Login";

// assets
import NavTitle from "../assets/NavTitle";

const TopBar = () => {
  return (
    <AppBar position="sticky" className="container-TopBar">
      <Toolbar variant="dense" sx={{width: "100%"}}>
        <NavTitle />
        <NavLinks />
        <Login />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
