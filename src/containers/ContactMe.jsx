import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import Title from "../components/Title";

export default function ContactMe() {
  return (
    <div className="contactMeContainer" style={{ margin: 10, padding: 10 }}>
      <FormControl
        action="https://formsubmit.co/raspberrrysherbet.ca"
        method="POST"
        color="primary"
        fullWidth="true"
      >
        <Title title="Contact Me" />
        <FormHelperText id="my-helper-text" style={{ textAlign: "center" }}>
        Thank you for reaching out! I will do my best to respond to your message within 48 hours. I look forward to connecting with you soon!
        </FormHelperText>
        <div
          style={{ display: "flex", justifyContent: "space-evenly", gap: 15 }}
        >
          <FormControl style={{ marginTop: 25 }} fullWidth="true">
            <FormLabel>Email</FormLabel>
            <TextField type="email" name="email" required />
          </FormControl>

          <FormControl style={{ marginTop: 25 }} fullWidth="true">
            <FormLabel>Name</FormLabel>
            <TextField type="name" name="name" required />
          </FormControl>
        </div>

        <FormControl style={{ marginTop: 25 }}>
          <FormLabel>Message</FormLabel>
          <TextField multiline="true" rows="3" maxRows={10} />
        </FormControl>
        <Button type="submit" style={{ marginTop: 25 }}>
          Send
        </Button>
      </FormControl>
    </div>
  );
}
