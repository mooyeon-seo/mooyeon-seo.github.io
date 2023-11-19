import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
// import other components
import TimeLine from "./Timeline";
import Description from "./Description";
import Navigation from "./Navigation";
import { UI } from "../constants/ui";
import { styled } from "@mui/system";

const StyledWork = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 4fr" /* set the width of the columns */,
  gap: UI.gap,
  margin: UI.margin,
  padding: UI.padding,
  transition: "box-shadow 0.3s ease-in-out" /* add transition effect */,
  "&:hover": {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" /* add box-shadow on hover */,
  },
});

const StyledRightContent = styled("div")({
  padding: UI.padding,
  fontSize: "14px",
  gap: UI.gap,
  display: "flex",
  flexDirection: "column",
  borderLeft: "1px solid #ffcccc",
});

export default function Work({
  timeline,
  company,
  position,
  location,
  link,
  descriptions,
}) {
  return (
    <motion.div
      initial={{ x: -50 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1.2 }}
    >
      <StyledWork>
        <TimeLine timeline={timeline} location={location} />
        <StyledRightContent>
          <Navigation title={company} link={link} />
          <Typography variant="subtitle1">{position.toUpperCase()}</Typography>
          <Description descriptions={descriptions} />
        </StyledRightContent>
      </StyledWork>
    </motion.div>
  );
}
