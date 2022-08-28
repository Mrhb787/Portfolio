import React from "react";

// Custom Css
import "./Navbar.css";

// Mui Components
import {AppBar, Toolbar, Stack} from "@mui/material";
import {Avatar, Typography} from "@mui/material";

// Custom Components
import NavButton from "./NavButton";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import AboutIcon from "@mui/icons-material/InfoRounded";
import EduIcon from "@mui/icons-material/SchoolRounded";
import CodeIcon from "@mui/icons-material/Code";
import ProjectIcon from "@mui/icons-material/Work";
import ContactIcon from "@mui/icons-material/ContactPage";
import ResumeIcon from "@mui/icons-material/Download";

//  Resume Download URL
const Resume_URL =
  "https://drive.google.com/uc?id=1kxVtnjJkMBC2WTj7Ao1pgwQvgkYHzy3F&export=download?usp=sharing";

const Navbar = () => {
  return (
    <AppBar position="sticky" className="AppBar">
      <Toolbar>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{width: "100%"}}
          alignItems="center"
        >
          <Stack
            direction="row"
            sx={{height: "100%"}}
            spacing={2}
            alignItems="center"
          >
            <Avatar src="images/favicon.png" />
            <Typography variant="h5">Abhishek Singh</Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{height: "100%"}}
            spacing={2}
            alignItems="center"
          >
            <NavButton
              variant="filled"
              color="primary"
              value="Home"
              icon={<HomeIcon />}
              url="/"
            />
            <NavButton
              variant="filled"
              color="primary"
              value="About Me"
              icon={<AboutIcon />}
            />
            <NavButton
              variant="filled"
              color="primary"
              value="Education"
              icon={<EduIcon />}
              url="/education"
            />
            <NavButton
              variant="filled"
              color="primary"
              value="Coding"
              icon={<CodeIcon />}
            />
            <NavButton
              variant="filled"
              color="primary"
              value="Projects"
              icon={<ProjectIcon />}
            />
            <NavButton
              variant="filled"
              color="primary"
              value="Contact"
              icon={<ContactIcon />}
              url="/contact"
            />
            <NavButton
              variant="filled"
              color="secondary"
              value="Resume"
              icon={<ResumeIcon />}
              url={Resume_URL}
            />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
