import {Link} from "react-router-dom";
import {Stack} from "@mui/material";

const NavLink = ({path, name, active = false}) => {
  return (
    <Link to={path}>
      <div className={active ? "navlink navlink-active" : "navlink"}>
        {name}
      </div>
    </Link>
  );
};

const NavLinks = () => {
  return (
    <Stack direction="row" spacing={2}>
      <NavLink path="/" name="Home" />
      <NavLink path="/about" name="About" />
      <NavLink path="/education" name="Education" />
      <NavLink path="/experience" name="Experience" />
      <NavLink path="/projects" name="Projects" />
      <NavLink path="/contact" name="Contact" />
    </Stack>
  );
};

export default NavLinks;
