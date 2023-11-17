import { Button, TextField, Snackbar } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import Title from "../components/Title";

const contactMeEndPoint = "https://formsubmit.co/a05cff5bd96d976661ee9f2de6570335";

export default function ContactMe() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(contactMeEndPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        message: message,
        email: email,
      }),
    });
    console.log(response);
    setIsSent(true);
  };

  const handleClose = () => {
    setIsSent(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      style={{ margin: 10, padding: 10 }}
    >
      <Title title="Contact Me" />
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 10 }}
      >
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="contained" type="submit" onClick={(event) => {
          handleSubmit(event);
        }}>
          Submit
        </Button>
      </form>
      <Snackbar
        open={isSent}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Email sent successfully!"
      />
    </motion.div>
  );
}
