import {Fragment} from "react";
import {Stack, Typography, Divider, Link} from "@mui/material";
import {ContactDetails} from "../../assets/constants";

const ContactItem = ({imgSrc, type, value, url}) => {
  return (
    <Stack direction="row" spacing={3} className="contactItem">
      <img src={imgSrc} alt={imgSrc} className="item-img" />
      <Stack spacing={1}>
        <Typography variant="h5">{type}</Typography>
        <Divider />
        <Link href={url} target="_blank" className="contact-link">
          <Typography variant="caption">{value}</Typography>
        </Link>
      </Stack>
    </Stack>
  );
};

const Contact = ({loading}) => {
  return (
    <Stack
      className={loading ? "" : "fadeIn"}
      sx={{minHeight: "calc(100vh - 98px)"}}
      spacing={1}
    >
      <Typography className="title-1" variant="h1">
        Contact
      </Typography>
      <div className="title-1-line"></div>
      <Stack spacing={2} direction="row">
        {ContactDetails.map((e) => (
          <Fragment key={e.company}>
            <ContactItem
              imgSrc={e.imgSrc}
              type={e.type}
              value={e.value}
              url={e.url}
            />
          </Fragment>
        ))}
      </Stack>
    </Stack>
  );
};

export default Contact;
