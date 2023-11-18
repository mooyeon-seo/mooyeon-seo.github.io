import React from "react";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
// Import Components
import Description from "../components/Description";
import Title from "../components/Title";
import Icon from "../components/Icon";
import Navigation from "../components/Navigation";
import Timeline from "../components/Timeline";
import { UI } from '../constants/ui';


const EducationContainer = styled("div")({
  margin: UI.margin,
  padding: UI.padding,
});

const EducationContent = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 4fr",
  padding: 10,
  gap: 5,
  "&:hover": {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
  },
}));

const TimelineContainer = styled("div")({
  display: "flex",
  gap: 0,
  justifyContent: "flex-start",
});

const DescriptionContainer = styled("div")({
  padding: "10px",
  gap: "10px",
  display: "flex",
  flexDirection: "column",
  borderLeft: "1px solid #981616",
});

export default function Education() {
  return (
    <EducationContainer>
      <Title title="Education" />
      <motion.div
        initial={{ x: 50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <EducationContent>
          <TimelineContainer>
            <Timeline
              timeline="SEPTEMBER 2016 - AUGUST 2022"
              location="Waterloo, Ontario"
            />
            <Icon alt="University of Waterloo Seal" src="assets/uw_seal.png" />
          </TimelineContainer>
          <DescriptionContainer>
            <Navigation
              title={"University of Waterloo".toUpperCase()}
              link=""
            />
            <h4>Computer Science</h4>
            <Description
              descriptions={[
                "Graduated with Distinction",
                "Received University of Waterloo President’s Scholarship",
              ]}
            />
          </DescriptionContainer>
        </EducationContent>
      </motion.div>
    </EducationContainer>
  );
}
