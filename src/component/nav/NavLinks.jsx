import {useState} from "react";
import {Link} from "react-router-dom";
import {Stack} from "@mui/material";
import {NavLinkNames} from "../../assets/constants";

const NavLink = ({name, active = false}) => {
  // TODO: add scrolling on click

  return (
    <Link to={{pathname: ""}}>
      <div className={active ? "navlink navlink-active" : "navlink"}>
        {name}
      </div>
    </Link>
  );
};

const NavLinkProvider = () => {
  const [active] = useState("Home");
  return (
    <Stack direction="row" spacing={2}>
      {NavLinkNames.map((link) => {
        return <NavLink name={link} active={active === link} />;
      })}
    </Stack>
  );
};

export default NavLinkProvider;
