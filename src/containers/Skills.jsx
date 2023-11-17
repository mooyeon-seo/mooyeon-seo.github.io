import { Box } from "@mui/material";
import Title from "../components/Title";
import Skill from "../components/Skill";

export default function Skills() {
  const categories = {
    languages: {
      title: "Languages",
      skills: [
        "JavaScript",
        "Python",
        "Java",
        "C",
        "C++",
        "HTML",
        "CSS",
        "SQL",
        "Bash",
        "Swift",
        "",
      ],
    },
    frameworks: {
      title: "Frameworks",
      skills: ["React", "Node", "Express", "Redux", "Graph QL", "Bootstrap", "Material UI", "Tailwind CSS", "Jest", "Enzyme", "Mocha", "Chai", "Jasmine", "Cypress", "React Testing Library", "Jest"],
    },
    databases: {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
    tools: {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Netlify",
        "Postman",
        "VSCode",
        "XCode",
        "Android Studio",
        "PostgreSQL",
      ],
    },
    designs: {
      title: "Designs",
      skills: ["Figma", "Procreate"],
    },
  };
  return (
    <>
      <Title title="Skills" />
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", width: "100%", padding: 10 }}>
        <Skill category={categories.languages} />
        <Skill category={categories.frameworks} />
        <Skill category={categories.databases} />
        <Skill category={categories.tools} />
        <Skill category={categories.designs} />
      </Box>
    </>
  );
}
