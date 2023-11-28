import Title from "../components/Title";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { UI } from "../constants/ui";
import { styled } from "@mui/system";
import Project from "../components/Project";

const projects = [
  {
    title: "WLP4 Compiler ⭐",
    category: "Academic (MIPS)",
    description: "Compiler for WLP4, which is a strict subset of C++",
    link: "",
    backgroundColor: "#980036",
  },
  {
    title: "OS/161 ⭐",
    category: "Academic (C)",
    description: "Implement Core Features like fork, execv and virtual memory",
    link: "https://github.com/RedDevil2002/os161_modification",
    backgroundColor: "#cf838d",
  },
  {
    title: "RetagEm ⭐",
    category: "Business Solution (iOS)",
    description:
      "Streamlines the Process of Re-Tagging Items in Response to Frequent Promotions",
    link: "https://github.com/mooyeon-seo/RetagEm",
    backgroundColor: "#ef0056",
  },
  {
    title: "Will It Rain?",
    category: "AppStore (iOS)",
    description:
      "Tells you if it will rain in the next hour at your current location",
    link: "https://apps.apple.com/ca/app/will-it-rain/id6443710105",
    backgroundColor: "#ffcccc",
  },

  {
    title: "Basic To Do",
    category: "AppStore (iOS)",
    description:
      "Support basic CRUD operations for notes with local persistance",
    link: "https://apps.apple.com/us/app/basic-to-do/id1662248997",
    backgroundColor: "#bf0056",
  },
  {
    title: "Sentinel",
    category: "Volunteer Internship (iOS)",
    description: "Prototype of Parental Control App",
    link: "https://github.com/RedDevil2002/Sentinel",
    backgroundColor: "#991476",
  },
  {
    title: "Note Taking App",
    category: "Academic (Android)",
    description:
      "Support basic CRUD operations for notes with local persistance",
    link: "https://git.uwaterloo.ca/cs349-winter2022/m7seo",
    backgroundColor: "#ffccdd",
  },
  {
    title: "Battleship",
    category: "Academic (Android)",
    description: "A Classic Battleship Board Game with User Friendly UI",
    link: "https://github.com/RedDevil2002/Batteship",
    backgroundColor: "#e099dd",
  },
  {
    title: "Custom Exploit Scripts",
    category: "Academic (C)",
    description:
      "Gain Superuser Access Into An Old Operating System Back From Early 2000s",
    link: "",
    backgroundColor: "#ee99dd",
  },
];

const ProjectSection = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ProjectContent = styled("div")({
  height: "100%",
  display: "grid",
  gridTemplateColumns: `${UI.businessBoxUnit} ${UI.businessBoxUnit} ${UI.businessBoxUnit}`,
  gridTemplateRows: `${UI.businessBoxUnit} ${UI.businessBoxUnit} ${UI.businessBoxUnit}`,
  alignItems: "center",
  justifyContent: "center",
  gap: UI.gap,
  padding: UI.padding,
});

const BusinessLogo = styled("img")({
  maxWidth: "100%",
  height: "auto",
  objectFit: "contain",
  borderRadius: "20px",
});

export default function Projects() {
  return (
    <ProjectSection>
      <Title title="Project" />
      <ProjectContent>
      <BusinessLogo
              src="/assets/businesslogo.svg"
              alt="Raspberry Sherbet Logo"
              onClick={() => {
                window.open("https://raspberrysherbet.ca/repair", "_blank");
              }}
            />
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </ProjectContent>
    </ProjectSection>
  );
}
