import {Stack, Typography} from "@mui/material";
import Button from "@mui/joy/Button";

import FileDownloadIcon from "@mui/icons-material/FileDownload";
import WorkIcon from "@mui/icons-material/Work";

import {screenWidth, dispatchDriveDownloadLink} from "../../assets/utils";

const LandingPageLeft = ({title, subtitle, designation, intro, resume}) => {
  return (
    <Stack spacing={1}>
      <Typography variant="h1">{title}</Typography>
      <Typography variant="h2">{subtitle}</Typography>
      <Typography variant="h5">{designation}</Typography>
      <Typography variant="body">{intro}</Typography>
      <Stack direction="row" spacing={2}>
        <Button
          className="landing-btn"
          variant="soft"
          color="success"
          endDecorator={<WorkIcon />}
          onClick={() => {
            window.open("#contact", "_self");
          }}
        >
          Hire Me
        </Button>
        <Button
          className="landing-btn"
          variant="solid"
          color="primary"
          endDecorator={<FileDownloadIcon />}
          onClick={() => {
            window.open(dispatchDriveDownloadLink(resume.url), "_blank");
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

const LandingPage = ({data, resume}) => {
  return (
    <Stack
      justifyContent="space-evenly"
      alignItems="center"
      direction="row"
      className="fadeIn section"
      sx={{
        background: `url(${data.bgImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <LandingPageLeft
        resume={resume}
        title={data.title}
        subtitle={data.subtitle}
        designation={data.designation}
        intro={data.intro}
      />
      <LandingPageRight />
    </Stack>
  );
};

export default LandingPage;
