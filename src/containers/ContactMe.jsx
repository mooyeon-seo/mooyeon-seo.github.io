import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import { motion } from "framer-motion";
import Title from "../components/Title";

export default function ContactMe() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      style={{ margin: 10, padding: 10 }}
    >
      <Title title="Contact Me" />
      <FormHelperText id="my-helper-text" style={{ textAlign: "center" }}>
          Thank you for reaching out! I will do my best to respond to your
          message within 48 hours. I look forward to connecting with you soon!
        </FormHelperText>
      <FormControl
        action="https://formsubmit.co/raspberrrysherbet.ca"
        method="POST"
        color="primary"
        fullWidth="true"
      > 
        <div
          style={{ display: "flex", justifyContent: "space-evenly", gap: 15 }}
        >
          <FormGroup style={{ marginTop: 25 }} fullWidth="true">
            <FormLabel>Email</FormLabel>
            <TextField type="email" name="email" required />
          </FormGroup>

          <FormGroup style={{ marginTop: 25 }} fullWidth="true">
            <FormLabel>Name</FormLabel>
            <TextField type="name" name="name" required />
          </FormGroup>
        </div>

        <FormGroup style={{ marginTop: 25 }}>
          <FormLabel>Message</FormLabel>
          <TextField multiline="true" rows="3" maxRows={10} />
        </FormGroup>
        <Button type="submit" style={{ marginTop: 25 }}>
          Send
        </Button>
      </FormControl>
    </motion.div>
  );
}
