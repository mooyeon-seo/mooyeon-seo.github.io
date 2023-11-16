import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import './Education.css'
import { Typography, Container, Grid, Paper } from "@material-ui/core";
// Import Components
import Description from "../components/Description";
import Title from "../components/Title";
import Card from "../components/Card";
import Navigation from "../components/Navigation";

export default function Education() {
  const isDarkMode = useSelector((state) => state.dark.isDark);

  return (
    <Paper className="education">
      <Title title="Education" />
      <div className="educationContent">
        <Card
          description="University of Waterloo Seal"
          link="assets/uw_seal.png"
        />
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
          <Description descriptions={[
            "Graduated with Distinction",
            "Received University of Waterloo President’s Scholarship",
          ]} />
        </div>
      </div>
    </Paper>
  );
}
