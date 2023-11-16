import React from "react";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ContactMe from "../containers/ContactMe";  


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f5f5f5",
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
}));

function Footer() {
  const classes = useStyles();
  
  return (
    <footer>
      <Paper className={classes.root}>
        <ContactMe />
      </Paper>
    </footer>
  );
}

export default Footer;
