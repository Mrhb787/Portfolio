import {useState} from "react";

// MUI Components
import {Stack} from "@mui/material";

// MUI-joy Components
import {Card, TextField, Textarea, Typography, Button} from "@mui/joy";

// Components
import ContactFormSubmit from "./ContactFormSubmit";

// MUI Icons
import NameIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";

const StartIcon = ({Icon}) => {
  return (
    <Button variant="soft" color="neutral" size="sm">
      {Icon}
    </Button>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => {
      return {...prev, [e.target.name]: e.target.value};
    });
  };

  return (
    <Card
      variant="outlined"
      row
      sx={{
        width: 320,
        gap: 2,
      }}
    >
      <Stack spacing={1} sx={{width: "100%"}}>
        <Typography level="h2" fontSize="lg" mb={0.5}>
          Contact Me
        </Typography>
        <TextField
          size="sm"
          placeholder="Name"
          startDecorator={
            <StartIcon Icon={<NameIcon sx={{fontSize: "0.8em"}} />} />
          }
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          size="sm"
          placeholder="Email"
          type="email"
          startDecorator={
            <StartIcon Icon={<MailIcon sx={{fontSize: "0.8em"}} />} />
          }
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          size="sm"
          placeholder="Contact Number (Optional)"
          startDecorator={
            <StartIcon Icon={<CallIcon sx={{fontSize: "0.8em"}} />} />
          }
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleChange}
        />
        <TextField
          size="sm"
          placeholder="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <Textarea
          size="sm"
          placeholder="Your Message..."
          minRows={5}
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <ContactFormSubmit formData={formData} />
      </Stack>
    </Card>
  );
};

export default ContactForm;
