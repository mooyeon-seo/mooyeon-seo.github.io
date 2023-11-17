import { Paper } from "@mui/material";
import Title from "../components/Title";
import Skill from "../components/Skill";

export default function Skills() {
  const categories = {
    languages: {
      title: "Languages",
      skills: [
        "JavaScript",
        "Python",
        "C",
        "C++",
        "HTML",
        "CSS",
        "Bash",
        "Swift",
        "PostgreSQL",
        "MySql",
        "MongoDB",
      ],
    },
    frameworks: {
      title: "Frameworks",
      skills: [
        "React",
        "Node",
        "Express",
        "Redux",
        "Bootstrap",
        "MaterialUI",
        "Jest",
      ],
    },
    tools: {
      title: "Tools",
      skills: ["Git", "GitHub", "Docker", "VSCode", "DigitalOcean"],
    },
    designs: {
      title: "Designs",
      skills: ["Figma", "Procreate"],
    },
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title title="Skills" />
      <section style={{ display: "grid", gridRow: "auto auto", gridTemplateColumns: "1fr 1fr" }}>
        <Skill category={categories.languages} />
        <Skill category={categories.frameworks} />
        <Skill category={categories.tools} />
        <Skill category={categories.designs} />
      </section>
    </div>
  );
}
