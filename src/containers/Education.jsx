import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Education.css";
import { Typography, Container, Grid, Paper } from "@material-ui/core";
// Import Components
import Description from "../components/Description";
import Title from "../components/Title";
import Icon from "../components/Icon";
import Navigation from "../components/Navigation";
import Timeline from "../components/Timeline";

export default function Education() {
  const isDarkMode = useSelector((state) => state.dark.isDark);

  return (
    <Paper className="education">
      <Title title="Education" />
      <div className="educationContent">
        <div style={{ display: "flex", gap: 0, justifyContent: "flex-start" }}>
          <Timeline timeline="SEPTEMBER 2016 - AUGUST 2022" location="Waterloo, Ontario" />
          <Icon
            description="University of Waterloo Seal"
            link="assets/uw_seal.png"
          />
        </div>
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
          <Navigation title="University of Waterloo" link="" />
          <h4>Computer Science</h4>
          <Description
            descriptions={[
              "Graduated with Distinction",
              "Received University of Waterloo President’s Scholarship",
            ]}
          />
        </div>
      </div>
    </Paper>
  );
}
