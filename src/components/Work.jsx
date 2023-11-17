import "./Work.css";
import React from "react";
import { Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
// import other components
import TimeLine from "./Timeline";
import Description from "./Description";
import Navigation from "./Navigation";

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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <Paper className='work' >
        <TimeLine timeline={timeline} location={location} />
        <div
          style={{
            padding: "10px",
            fontSize: "14px",
            gap: "10px",
            display: "flex",
            flexDirection: "column",
            borderLeft: "1px solid #981616",
          }}
        >
          <Navigation title={company} link={link} />
          <Typography variant="subtitle1">{position.toUpperCase()}</Typography>
          <Description descriptions={descriptions} />
        </div>
      </Paper>
    </motion.div>
  );
}
