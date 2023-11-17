import {
  Button,
  TextField,
  Snackbar,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import Title from "../components/Title";

const contactMeEndPoint =
  "https://formsubmit.co/a05cff5bd96d976661ee9f2de6570335";

export default function ContactMe() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
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
    }
  };

  const handleClose = () => {
    setIsSent(false);
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (name.trim() === "") {
      errors.name = "Name is required";
      isValid = false;
    }

    if (email.trim() === "") {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (message.trim() === "") {
      errors.message = "Message is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      style={{ width: "max(60%, 400px)", margin: "auto", marginBottom: "30px" }}
    >
      <Title title="Contact Me ❤️" />
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 15 }}
      >
        <Typography variant="subtitle1" align="center">
          Send me an email down here 👋
        </Typography>
        <div
          style={{ display: "grid", gap: 15, gridTemplateColumns: "1fr 1fr" }}
        >
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name ? true : false}
            helperText={errors.name}
            required
          />

          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email ? true : false}
            helperText={errors.email}
            required
          />
        </div>

        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={7}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          error={errors.message ? true : false}
          helperText={errors.message}
        />
        <Button
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          color="success"
          size="large"
        >
          <Typography variant="h5" sx={{ width: "max(60%, 150px)" }}>
            SEND ➤
          </Typography>
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
