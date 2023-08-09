import {Stack, Typography} from "@mui/material";

import ProfileImg from "../../assets/images/profile.jpeg";

const About = () => {
  return (
    <Stack
      justifyContent="space-evenly"
      alignItems="center"
      direction="row"
      className="fadeIn"
    >
      <img src={ProfileImg} alt="Developer" className="about-img" />
      <Stack spacing={2} sx={{maxWidth: "500px"}}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h1">It's Intro</Typography>
        </Stack>
        <Typography variant="body1">
          Hi, I am Abhishek. A Software Engineer graduated from Indian Institue
          of Information Technology, Lucknow.
        </Typography>
        <Typography variant="h6">Descipline defeats Talent!</Typography>
        <Typography>
          Would be glad to work with you. I like anime, gym & playing minecraft.
          Do You ?
        </Typography>
      </Stack>
    </Stack>
  );
};

export default About;
