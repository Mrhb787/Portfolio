import {AppBar, Toolbar, Typography} from "@mui/material";
import "./Nav.css";

import NavLinks from "./NavLinks";
const Nav = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <div className="nav-head">
          <img src="/images/navLogo.png" alt="" className="nav-logo" />
          <Typography className="nav-title">Abhishek | アビシェク</Typography>
        </div>
        <NavLinks />
      </Toolbar>
    </AppBar>
  );
};
export default Nav;
