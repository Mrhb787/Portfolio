import {Stack, Typography, Button} from "@mui/material";

import FileDownloadIcon from "@mui/icons-material/FileDownload";
import WorkIcon from "@mui/icons-material/Work";

import {resumeURL, LandingPageBG} from "../../assets/constants";
import {screenWidth} from "../../assets/utils";

const LandingPageLeft = () => {
  return (
    <Stack spacing={1}>
      <Typography variant="h1">Hi</Typography>
      <Typography variant="h2">It's Abhishek</Typography>
      <Typography variant="h5">OTAKU | Backend Engineer</Typography>
      <Typography variant="body">
        Experience in building microservices and scalable systems
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button
          className="hireme-btn"
          variant="outlined"
          color="warning"
          endIcon={<WorkIcon />}
        >
          Hire Me
        </Button>
        <Button
          className="getcv-btn"
          variant="outlined"
          color="warning"
          endIcon={<FileDownloadIcon />}
          onClick={() => {
            window.open(resumeURL, "_blank");
          }}
        >
          Download CV
        </Button>
      </Stack>
    </Stack>
  );
};

const LandingPageRight = () => {
  return <div style={{width: screenWidth() * 0.4}}></div>;
};

const LandingPage = () => {
  return (
    <Stack
      justifyContent="space-evenly"
      alignItems="center"
      direction="row"
      className="fadeIn section"
      sx={{
        background: `url(${LandingPageBG})`,
        backgroundSize: "contain",
      }}
    >
      <LandingPageLeft />
      <LandingPageRight />
    </Stack>
  );
};

export default LandingPage;
