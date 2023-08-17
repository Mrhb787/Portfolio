import {AppBar, Toolbar, Typography} from "@mui/material";
import NavLinks from "./NavLinks";
import "../../assets/static/nav.css";

const Nav = ({data}) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <div className="nav-head">
          <Typography className="nav-title">{data.navTitle}</Typography>
        </div>
        <NavLinks data={data.navLinks} />
      </Toolbar>
    </AppBar>
  );
};
export default Nav;
