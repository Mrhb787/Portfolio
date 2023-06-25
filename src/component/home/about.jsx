import {Stack, Typography, Button} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import {resumeURL} from "../../assets/constants";
import ProfileImg from "../../assets/images/profile.jpeg";

const About = ({loading}) => {
  return (
    <Stack
      justifyContent="space-evenly"
      alignItems="center"
      direction="row"
      className={loading ? "" : "fadeIn"}
      sx={{minHeight: "calc(100vh)"}}
    >
      <img src={ProfileImg} alt="Developer" className="about-img" />
      <Stack spacing={2} sx={{maxWidth: "500px"}}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography className="title-1" variant="h1">
            About Me
          </Typography>
        </Stack>
        <Typography className="body-1" variant="body1">
          Hi, I am Abhishek. A Software Engineer graduated from Indian Institue
          of Information Technology, Lucknow.
        </Typography>
        <Typography className="body-1" variant="body1">
          My descipline is more than my motivation towards any work i do. Would
          be glad to work with you. Ohh also i love watching anime, gym &
          playing games.
        </Typography>
        <Button
          className="getcv-btn"
          variant="contained"
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

export default About;
