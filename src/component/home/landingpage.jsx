import {Stack, Typography, Button} from "@mui/material";

import FileDownloadIcon from "@mui/icons-material/FileDownload";
import WorkIcon from "@mui/icons-material/Work";

import {resumeURL} from "../../assets/constants";
const LandingPage = ({loading}) => {
  return (
    <Stack
      justifyContent="space-evenly"
      alignItems="center"
      direction="row"
      className={loading ? "" : "fadeIn"}
      sx={{minHeight: "calc(100vh)"}}
    >
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography className="title-1" variant="h1">
            Hello
          </Typography>
          <div className="title-1-line">
            <img
              src="/gifs/goku-happy.gif"
              alt="happy-happy-happy"
              className="title-1-line-img"
            />
          </div>
        </Stack>
        <Typography className="title-2" variant="h2">
          I am Abhishek
        </Typography>
        <Typography className="title-3" variant="h5">
          OTAKU | Full Stack Developer
        </Typography>
        <Stack direction="row" spacing={3}>
          <Button
            className="hireme-btn"
            variant="contained"
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
      <img src="/images/homeimg.png" alt="Developer" className="home-img" />
    </Stack>
  );
};

export default LandingPage;
