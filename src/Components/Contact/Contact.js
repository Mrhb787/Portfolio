import { React, useState, useEffect } from "react";

// MUI Components
import { Stack, Typography } from "@mui/material";
import { Card, CardContent, CardMedia, CardActionArea } from "@mui/material";
import { IconButton, Avatar } from "@mui/material";
import Loader from "../Small Components/Loader";

// MUI Icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

// Social URLs
const LinkedinURL = "https://linkedin.com/in/abhishekworks787";
const GithubURL = "https://github.com/Mrhb787";

const Contact = () => {

    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 2000);
    }, []);

    return (
        <Stack
            sx={{ minHeight: "calc(100vh - 65px)", width: "100%" }}
            justifyContent="center"
            alignItems="center"
        >
            {Loading ?
                <Card sx={{ maxWidth: 350 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="340"
                            image="images/Abhishek.jpeg"
                            alt="Abhishek Singh"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div" >
                                Abhishek Singh
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                B.Tech | Information Technology
                            </Typography>
                            <Stack direction="row" alignItems="center" >
                                <IconButton size="small">
                                    <Avatar src="images/iiitl_logo.png" alt="IIITL" />
                                </IconButton>
                                <Typography variant="caption" color="text.secondary">
                                    Indian Institute of Information Technology, Lucknow
                                </Typography>
                            </Stack>
                            <Stack spacing={2} direction="row" alignItems="center">
                                <IconButton color="primary" onClick={() => {
                                    window.open(LinkedinURL, "_blank");
                                }}>
                                    <LinkedInIcon />
                                </IconButton>
                                <IconButton onClick={() => {
                                    window.open(GithubURL, "_blank");
                                }} >
                                    <GitHubIcon />
                                </IconButton>
                                <IconButton onClick={() => {
                                    window.open("mailto:abhishekworks787@gmail.com", "_blank");
                                }} color="error">
                                    <EmailIcon />
                                </IconButton>
                            </Stack>
                        </CardContent>
                    </CardActionArea>
                </Card> : <Loader />
            }

        </Stack >
    );
};

export default Contact;
