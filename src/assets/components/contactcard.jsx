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

// static
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GithubIcon from "@mui/icons-material/GitHub";

const ContactCard = ({data}) => {
  const dispactURL = (platform, required = true) => {
    if (required) {
      return data?.socials?.required.find(
        (social) => social.platform === platform
      )?.url;
    }
    return data?.socials?.other.find((social) => social.platform === platform)
      ?.url;
  };

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
        <Avatar src={data?.photo} sx={{"--Avatar-size": "10rem"}} />
        <Chip
          size="sm"
          variant="soft"
          color="neutral"
          sx={{
            mt: -1,
            mb: 1,
            border: "3px",
            textTransform: "uppercase",
          }}
        >
          {data?.tag}
        </Chip>
        <Typography level="title-lg">{data?.name}</Typography>
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
            onClick={() => openUrl(dispactURL("github"))}
          >
            <GithubIcon />
          </IconButton>
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            onClick={() => openUrl(dispactURL("instagram"))}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            onClick={() => openUrl(dispactURL("twitter"))}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            size="sm"
            variant="plain"
            color="neutral"
            onClick={() => openUrl(dispactURL("linkedin"))}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </CardContent>
      <CardOverflow sx={{bgcolor: "black"}}>
        <CardActions buttonFlex="1">
          <ButtonGroup variant="outlined" sx={{bgcolor: "background.surface"}}>
            <Button onClick={() => openUrl(dispactURL("topmate", false))}>
              Message
            </Button>
            <Button onClick={() => openUrl(dispactURL("topmate", false))}>
              Connect
            </Button>
          </ButtonGroup>
        </CardActions>
      </CardOverflow>
    </Card>
  );
};

export default ContactCard;
