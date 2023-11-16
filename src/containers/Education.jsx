import React from "react";
import { makeStyles } from "@mui/styles";
// Import Components
import Description from "../components/Description";
import Title from "../components/Title";
import Icon from "../components/Icon";
import Navigation from "../components/Navigation";
import Timeline from "../components/Timeline";

const useStyles = makeStyles((theme) => ({
  education: {
    margin: 10,
    padding: 10,
  },
  educationContent: {
    display: "grid",
    gridTemplateColumns: "1fr 4fr" /* set the width of the columns */,
    padding: 10,
    gap: 5,
    "&:hover": {
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" /* add box-shadow on hover */,
    },
  },
  timelineContainer: {
    display: "flex",
    gap: 0,
    justifyContent: "flex-start",
  },
  timeline: {
    // your styles here
  },
  descriptionContainer: {
    padding: "10px",
    fontSize: "14px",
    color: "#666",
    gap: "10px",
    display: "flex",
    flexDirection: "column",
    borderLeft: "1px solid #981616",
  },
}));

export default function Education() {
  const classes = useStyles();

  return (
    <div className={classes.education}>
      <Title title="Education" />
      <div className={classes.educationContent}>
        <div className={classes.timelineContainer}>
          <Timeline
            timeline="SEPTEMBER 2016 - AUGUST 2022"
            location="Waterloo, Ontario"
            className={classes.timeline}
          />
          <Icon alt="University of Waterloo Seal" src="assets/uw_seal.png" />
        </div>
        <div className={classes.descriptionContainer}>
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
    </div>
  );
}
