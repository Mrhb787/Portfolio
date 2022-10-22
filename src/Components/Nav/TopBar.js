// MUI Components
import {AppBar, Toolbar} from "@mui/material";

// Components
import NavLinks from "./NavLinks";

// assets
import NavTitle from "../assets/NavTitle";

const TopBar = () => {
  return (
    <AppBar position="sticky" className="container-TopBar">
      <Toolbar variant="dense" sx={{width: "100%"}}>
        <NavTitle />
        <NavLinks />
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
