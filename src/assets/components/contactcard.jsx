import Avatar from "@mui/joy/Avatar";
import Chip from "@mui/joy/Chip";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";

import {openUrl} from "../utils";
import {Contact} from "../constants";
// static
import ProfileImg from "../static/images/profile.jpeg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GithubIcon from "@mui/icons-material/GitHub";

const ContactCard = () => {
  return (
    <Card
      sx={{
        width: 320,
        maxWidth: "100%",
        boxShadow: "lg",
      }}
      color="neutral"
      className="reveal"
    >
      <CardContent
        sx={{alignItems: "center", textAlign: "center", color: "#fff"}}
      >
        <Avatar src={ProfileImg} sx={{"--Avatar-size": "10rem"}} />
        <Chip
          size="sm"
          variant="soft"
          color="neutral"
          sx={{
            mt: -1,
            mb: 1,
            border: "3px",
          }}
        >
          DEV
        </Chip>
        <Typography level="title-lg">Abhishek Singh</Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 2,
            "& > button": {borderRadius: "2rem"},
          }}
        >
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            onClick={() => openUrl(Contact.others.github)}
          >
            <GithubIcon />
          </IconButton>
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            onClick={() => openUrl(Contact.others.instagram)}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            onClick={() => openUrl(Contact.others.twitter)}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            onClick={() => openUrl(Contact.others.linkedin)}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </CardContent>
      <CardOverflow sx={{bgcolor: "black"}}>
        <CardActions buttonFlex="1">
          <ButtonGroup variant="outlined" sx={{bgcolor: "background.surface"}}>
            <Button onClick={() => openUrl(Contact.others.topmatemessage)}>
              Message
            </Button>
            <Button onClick={() => openUrl(Contact.others.topmate)}>
              Connect
            </Button>
          </ButtonGroup>
        </CardActions>
      </CardOverflow>
    </Card>
  );
};

export default ContactCard;
