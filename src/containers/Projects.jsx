import Title from "../components/Title";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { UI } from "../constants/ui";
import { styled } from "@mui/system";

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
    link: "",
    backgroundColor: "#cf838d",
  },
  {
    title: "MakeItEasy ⭐",
    category: "Business Solution (iOS)",
    description: "Streamlines the Process of Re-Tagging Items in Response to Frequent Promotions",
    link: "https://apps.apple.com/us/app/basic-to-do/id1662248997",
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
    link: "",
    backgroundColor: "#991476",
  },
  {
    title: "Note Taking App",
    category: "Academic (Android)",
    description:
      "Support basic CRUD operations for notes with local persistance",
    link: "",
    backgroundColor: "#ffccdd",
  },
  {
    title: "Battleship",
    category: "Academic (Android)",
    description: "A Classic Battleship Board Game with User Friendly UI",
    link: "",
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
  {
    title: "Sentimental Mirror",
    category: "Machine Learning (iOS)",
    description:
      "Server That Analyzes Your Messages And Posts Them on X (Twitter) With Your Sentiment Score",
    link: "",
    backgroundColor: "#ee44ff",
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
  gridTemplateColumns: `${UI.businessBoxUnit} ${UI.businessBoxUnit} ${UI.businessBoxUnit}`, // Three equal-width columns
  gridTemplateRows: `${UI.businessBoxUnit} ${UI.businessBoxUnit} ${UI.businessBoxUnit}`, // Three equal-width columns
  alignItems: "center",
  justifyContent: "center",
  gap: UI.gap,
  padding: UI.padding,
});

const ProjectTextContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  padding: UI.padding,
  gap: UI.gap,
  color: "white",
});

const DescriptionBlock = ({ project }) => {
  const Content = styled("div")({
    backgroundColor: project.backgroundColor
      ? project.backgroundColor
      : "black",
    borderRadius: UI.borderRadius,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    height: "100%",
    width: "100%",
    gap: UI.gap,
  });
  return (
    <motion.div
      whileHover={{ scale: 1.025 }}
      initial={{ x: 50 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1.2 }}
      style={{ height: "100%", width: "100^" }}
    >
      <Content>
        {project.title && (
          <ProjectTextContainer>
            <Typography
              variant="h6"
              align="center"
              color="white"
              fontFamily={"anton"}
            >
              {project.title}
            </Typography>
            <Typography variant="subtitle1">{project.category}</Typography>
            <Typography variant="subtitle1">{project.description}</Typography>
          </ProjectTextContainer>
        )}
      </Content>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <ProjectSection>
      <Title title="Project" />
      <Typography variant="subtitle1">
        
      </Typography>
      <ProjectContent>
        {projects.map((project) => (
          <DescriptionBlock project={project} />
        ))}
      </ProjectContent>
    </ProjectSection>
  );
}
