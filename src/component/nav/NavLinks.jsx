import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Stack} from "@mui/material";

const NavLinkNames = [
  "Home",
  "About",
  "Education",
  "Experience",
  "Projects",
  "Contact",
];

const NavLink = ({name, active = false, curr}) => {
  const windowHeight = window.innerHeight;
  const handleClick = () => {
    const currentPosition = NavLinkNames.findIndex((name) => name === curr);
    const yPos = currentPosition * windowHeight;
    window.scrollTo({
      top: yPos,
      behavior: "smooth",
    });
  };

  return (
    <Link to={{pathname: ""}} onClick={handleClick}>
      <div className={active ? "navlink navlink-active" : "navlink"}>
        {name}
      </div>
    </Link>
  );
};

const NavLinks = () => {
  const windowHeight = window.innerHeight;
  const [active, setActive] = useState("Home");

  const handleScroll = () => {
    const position = window.pageYOffset;
    const currentActive = parseInt((position + 100) / windowHeight);
    setActive(NavLinkNames[currentActive]);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Stack direction="row" spacing={2}>
      <NavLink
        name="Home"
        active={active === NavLinkNames[0]}
        curr={NavLinkNames[0]}
      />
      <NavLink
        name="About"
        active={active === NavLinkNames[1]}
        curr={NavLinkNames[1]}
      />
      <NavLink
        name="Education"
        active={active === NavLinkNames[2]}
        curr={NavLinkNames[2]}
      />
      <NavLink
        name="Experience"
        active={active === NavLinkNames[3]}
        curr={NavLinkNames[3]}
      />
      <NavLink
        name="Projects"
        active={active === NavLinkNames[4]}
        curr={NavLinkNames[4]}
      />
      <NavLink
        name="Contact"
        active={active === NavLinkNames[5]}
        curr={NavLinkNames[5]}
      />
    </Stack>
  );
};

export default NavLinks;
