import {useEffect, useState, Fragment} from "react";
import {useNavigate, useLocation} from "react-router-dom";

// MUI Components
import {Stack} from "@mui/material";

// MUI-joy components
import {CssVarsProvider, Button} from "@mui/joy";

const Routes = [
  {name: "Home", url: "/", icon: ""},
  {name: "About Me", url: "/about", icon: ""},
  {name: "Education", url: "/education", icon: ""},
  {name: "Coding Profile", url: "/coding", icon: ""},
  {name: "Projects", url: "/projects", icon: ""},
  {name: "Contact", url: "/contact", icon: ""},
  {name: "Resume", url: "/resume", icon: ""},
];

const NavLink = ({value, url, active, setActive}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setActive(url);
    navigate(url);
  };

  return (
    <CssVarsProvider>
      <Button
        size="sm"
        color="neutral"
        variant="soft"
        sx={{
          bgcolor: active === url ? "#dddee0" : "transparent",
          color: active === url ? "#700fe6" : "#dddee0",
          "&:hover": {color: "#700fe6"},
        }}
        onClick={handleClick}
      >
        {value}
      </Button>
    </CssVarsProvider>
  );
};

const NavLinks = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  // updates any changes made to location
  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <Stack direction="row" spacing={1} sx={{flexGrow: 1}}>
      {Routes.map((route, index) => (
        <Fragment key={index}>
          <NavLink
            value={route.name}
            url={route.url}
            active={active}
            setActive={setActive}
          />
        </Fragment>
      ))}
    </Stack>
  );
};

export default NavLinks;
