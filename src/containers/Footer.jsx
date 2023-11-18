import React from "react";
import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import ContactMe from "../containers/ContactMe";

const RootPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(3),
}));

function Footer() {
  return (
    <footer>
      <RootPaper>
        <ContactMe />
      </RootPaper>
    </footer>
  );
}

export default Footer;
