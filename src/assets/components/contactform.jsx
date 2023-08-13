import {Stack, Sheet, Input, Textarea, Button} from "@mui/joy";
const ContactForm = () => {
  return (
    <Sheet
      className="reveal"
      variant="soft"
      color="neutral"
      sx={{padding: "15px", borderRadius: "12px"}}
    >
      <form>
        <Stack spacing={1}>
          <Stack direction="row" spacing={2}>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </Stack>
          <Input
            type="email"
            placeholder="Contact Email"
            required
            name="email"
          />
          <Input placeholder="Subject" required name="subject" />
          <Textarea minRows={5} placeholder="Details" required name="details" />
          <Button>Submit</Button>
        </Stack>
      </form>
    </Sheet>
  );
};

export default ContactForm;
