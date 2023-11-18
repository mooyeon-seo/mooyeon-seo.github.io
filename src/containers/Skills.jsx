import Title from "../components/Title";
import Skill from "../components/Skill";
import { motion } from "framer-motion";

export default function Skills() {
  const categories = {
    languages: {
      title: "Language",
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
      title: "Framework",
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
      title: "Tool",
      skills: ["Git", "GitHub", "Docker", "VSCode", "DigitalOcean"],
    },
    designs: {
      title: "Design",
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
      <Title title="Skill" />
      <motion.div
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <section
          style={{
            display: "grid",
            gridRow: "auto auto",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <Skill category={categories.languages} />
          <Skill category={categories.frameworks} />
          <Skill category={categories.tools} />
          <Skill category={categories.designs} />
        </section>
      </motion.div>
    </div>
  );
}
