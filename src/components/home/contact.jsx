import {Typography} from "@mui/material";
import {Stack, Divider} from "@mui/joy";
import ContactCard from "../../assets/components/contactcard";
import ContactForm from "../../assets/components/contactform";

const Contact = () => {
  return (
    <Stack className="fadeIn section contact" spacing={1}>
      <Typography variant="h1" className="reveal">
        <strong>Contact</strong>
      </Typography>
      <Stack
        divider={<Divider orientation="vertical" />}
        direction="row"
        spacing={2}
      >
        <ContactCard />
        <ContactForm />
      </Stack>
    </Stack>
  );
};

export default Contact;
