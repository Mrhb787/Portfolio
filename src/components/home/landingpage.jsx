import {Stack, Typography} from "@mui/material";
import Button from "@mui/joy/Button";

import FileDownloadIcon from "@mui/icons-material/FileDownload";
import WorkIcon from "@mui/icons-material/Work";

import {resumeURL, LandingPageData} from "../../assets/constants";
import {screenWidth, dispatchDriveDownloadLink} from "../../assets/utils";

const LandingPageLeft = () => {
  return (
    <Stack spacing={1}>
      <Typography variant="h1">{LandingPageData.title}</Typography>
      <Typography variant="h2">{LandingPageData.subtitle}</Typography>
      <Typography variant="h5">{LandingPageData.position}</Typography>
      <Typography variant="body">{LandingPageData.intro}</Typography>
      <Stack direction="row" spacing={2}>
        <Button
          className="landing-btn"
          variant="soft"
          color="success"
          endDecorator={<WorkIcon />}
        >
          Hire Me
        </Button>
        <Button
          className="landing-btn"
          variant="solid"
          color="primary"
          endDecorator={<FileDownloadIcon />}
          onClick={() => {
            window.open(dispatchDriveDownloadLink(resumeURL), "_blank");
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
        background: `url(${LandingPageData.backgroundImg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <LandingPageLeft />
      <LandingPageRight />
    </Stack>
  );
};

export default LandingPage;
