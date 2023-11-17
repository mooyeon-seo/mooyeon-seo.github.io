import "./Work.css";
import React from "react";
import { Paper } from "@mui/material";
import { motion } from "framer-motion";
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
      <Paper>
        <TimeLine timeline={timeline} location={location} />
        <div
          style={{
            padding: "10px",
            fontSize: "14px",
            color: "#666",
            gap: "10px",
            display: "flex",
            flexDirection: "column",
            borderLeft: "1px solid #981616",
          }}
        >
          <Navigation title={company} link={link} />
          <h4>{position.toUpperCase()}</h4>
          <Description descriptions={descriptions} />
        </div>
      </Paper>
    </motion.div>
  );
}
