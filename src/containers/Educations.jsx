import React from "react";
import { styled } from "@mui/system";
// Import Components
import Title from "../components/Title";
import Icon from "../components/Icon";
import { UI } from "../constants/ui";
import Education from "../components/Education";

// const EducationContainer = styled("div")({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: UI.gap,
//   padding: UI.padding,
//   margin: UI.margin,
// });

// const EducationContent = styled("div")(({ theme }) => ({
//   display: "grid",
//   gridTemplateColumns: "1fr 4fr",
//   gap: 5,
//   "&:hover": {
//     boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
//   },
//   padding: UI.padding,
//   margin: UI.margin,
// }));

// <WorksContainer className="works">

const EducationContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: UI.gap,
  padding: "0 " + UI.padding,
  margin: "0 " + UI.margin,
});

export default function Educations() {
  return (
    <EducationContainer>
      <Title title="Education" />
      <Education
        timeline={"SEPTEMBER 2023 ~ Present"}
        school={"CODECADEMY"}
        degree={"Full-Stack Engineer Path"}
        location={"Remote"}
        descriptions={[
          "Graduated with Distinction",
          "Received University of Waterloo President’s Scholarship",
        ]}
      />
      <Education
        timeline={"SEPTEMBER 2016 ~ AUGUST 2022"}
        school={"UNIVERSITY OF WATERLOO"}
        degree={"Computer Science"}
        location={"Waterloo, Ontario"}
        descriptions={[
          "Graduated with Distinction",
          "Received University of Waterloo President’s Scholarship",
        ]}
      >
        <Icon alt="University of Waterloo Seal" src="assets/uw_seal.png" />
      </Education>
    </EducationContainer>
  );
}