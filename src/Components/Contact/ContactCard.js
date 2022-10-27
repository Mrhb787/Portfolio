// MUI-Joy Components
import {AspectRatio, Link} from "@mui/joy";
import {Card, Chip, Typography} from "@mui/joy";

const ContactCard = ({Name, Location, Designation, imgURL}) => {
  return (
    <Card
      variant="outlined"
      row
      sx={{
        width: 320,
        gap: 2,
        "&:hover": {
          boxShadow: "md",
          borderColor: "neutral.outlinedHoverBorder",
        },
      }}
    >
      <AspectRatio ratio="1" sx={{width: 90}}>
        <img src={imgURL} loading="lazy" alt="Abhishek Singh" />
      </AspectRatio>
      <div>
        <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
          {Name}
        </Typography>
        <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
          <Link overlay underline="none" sx={{color: "text.tertiary"}}>
            {Location}
          </Link>
        </Typography>
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{pointerEvents: "none"}}
        >
          {Designation}
        </Chip>
      </div>
    </Card>
  );
};

export default ContactCard;
