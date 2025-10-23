import {Stack, Typography} from "@mui/material";
import Hyperlink from "../../assets/components/hyperlink";
import ContactCard from "../../assets/components/contactcard";

const About = ({data, meta}) => {
  return (
    <Stack
      justifyContent="space-evenly"
      alignItems="center"
      direction="row"
      className="fadeIn section about"
    >
      <ContactCard data={meta} />
      <Stack spacing={2} sx={{maxWidth: "500px"}}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h1" className="reveal">
            It's Intro
          </Typography>
        </Stack>
        <Typography variant="body1" className="reveal">
          Hi, I am Abhishek. A Software Engineer graduated from{" "}
          <Hyperlink url="https://iiitl.ac.in" text={data.details.college} />
        </Typography>
        <Typography variant="h6" className="reveal">
          {data.details.motto}
        </Typography>
        <Typography className="reveal">
          Would be glad to work with you. {data.details.hobbies}.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default About;
