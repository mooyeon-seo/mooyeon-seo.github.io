import "./Work.css";
import React from "react";
import { Paper } from "@material-ui/core";
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
    <Paper className="work">
      <TimeLine timeline={timeline} location={location} />
      <div style={{
        padding: "10px",  
        fontSize: "14px",
        color: "#666",
        gap: "10px",
        display: "flex",
        flexDirection: "column",
        borderLeft: "1px solid #981616",
      }}>
        <Navigation title={company} link={link} />
        <h4>{position.toUpperCase()}</h4>
        <Description descriptions={descriptions} />
      </div>
    </Paper>
  );
}
