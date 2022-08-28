import {React, useState, useEffect} from "react";

// MUI Components
import {Stack, Typography, Grow} from "@mui/material";
import {Card, CardContent, CardMedia, CardActionArea} from "@mui/material";
import {IconButton, Avatar} from "@mui/material";
import Loader from "../Small Components/Loader";

// MUI Icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

// Social URLs
const LinkedinURL = "https://linkedin.com/in/abhishekworks787";
const GithubURL = "https://github.com/Mrhb787";

const Contact = () => {
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Stack
      sx={{
        minHeight: "calc(100vh - 64px)",
        width: "100%",
        backgroundColor: "#0A1929",
      }}
      justifyContent="center"
      alignItems="center"
    >
      {!Loading ? (
        <Grow in={!Loading} timeout={1000}>
          <Card
            sx={{
              maxWidth: 350,
              backgroundColor: "rgb(15, 53, 94)",
              color: "whitesmoke",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="340"
                image="images/Abhishek.jpeg"
                alt="Abhishek Singh"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{fontFamily: "'Plus Jakarta Sans', sans-serif"}}
                >
                  Abhishek Singh
                </Typography>
                <Typography variant="caption">
                  B.Tech | Information Technology
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  sx={{marginTop: "10px"}}
                >
                  <IconButton
                    size="small"
                    sx={{backgroundColor: "whitesmoke"}}
                    onClick={() => {
                      window.open("https://iiitl.ac.in", "_blank");
                    }}
                  >
                    <Avatar src="images/iiitl_logo.png" alt="IIITL" />
                  </IconButton>
                  <Typography variant="caption">
                    Indian Institute of Information Technology, Lucknow
                  </Typography>
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                  <IconButton
                    color="primary"
                    onClick={() => {
                      window.open(LinkedinURL, "_blank");
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      window.open(GithubURL, "_blank");
                    }}
                  >
                    <GitHubIcon sx={{color: "whitesmoke"}} />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      window.open(
                        "mailto:abhishekworks787@gmail.com",
                        "_blank"
                      );
                    }}
                    color="error"
                  >
                    <EmailIcon />
                  </IconButton>
                </Stack>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grow>
      ) : (
        <Loader />
      )}
    </Stack>
  );
};

export default Contact;
