// MUI Components
import {Stack} from "@mui/material";

// Components
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Stack
      sx={{
        minHeight: "calc(100vh - 48px)",
        width: "100%",
        padding: "15px 24px",
      }}
      spacing={2}
      alignItems="center"
    >
      <ContactCard
        Name="Abhishek Singh"
        Location="Banglore, India"
        Designation="Software Enginner"
        imgURL="images/Abhishek.jpeg"
      />
      <ContactForm />
    </Stack>
  );
};
export default Contact;
