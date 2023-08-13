import {AppBar, Toolbar, Typography} from "@mui/material";
import "../../assets/static/nav.css";
import {NavTitle} from "../../assets/constants";
import NavLinks from "./NavLinks";

const Nav = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <div className="nav-head">
          <Typography className="nav-title">{NavTitle.title}</Typography>
        </div>
        <NavLinks />
      </Toolbar>
    </AppBar>
  );
};
export default Nav;
