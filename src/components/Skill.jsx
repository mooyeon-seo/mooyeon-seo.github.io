import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { styled } from "@mui/system"; // Import styled from @mui/system

const SkillContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
  justifyContent: "center",
});

const StyledSkill = styled(motion.div)({
  padding: 10,
  margin: 10,
  borderRadius: 10,
  "&:hover": {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" /* add box-shadow on hover */,
  },
});

function SVGImage({ skill, width }) {
  const lowerCasedSkill = skill.toLowerCase();
  switch (lowerCasedSkill) {
    case "c++":
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
          width={width}
          alt={skill}
        />
      );

    case "html":
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
          width={width}
          alt={skill}
        />
      );
    case "css":
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
          width={width}
          alt={skill}
        />
      );

    case "node":
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          width={width}
          alt={skill}
        />
      );

    case "jest":
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
          width={width}
          alt={skill}
        />
      );
    case "mysql":
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
          width={width}
          alt={skill}
        />
      );

    case "netlify":
      return <img src="/assets/netlify.png" width={width} alt={skill} />;

    case "procreate":
      return <img src="/assets/procreate.png" width={width} alt={skill} />;
    default:
      return (
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${lowerCasedSkill}/${lowerCasedSkill}-original.svg`}
          width={width}
          alt={skill}
        />
      );
  }
}

export default function Skill({ category }) {
  return (
    <StyledSkill
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      <Typography variant="h4" textAlign={"center"}>
        {category.title.toUpperCase()}
      </Typography>
      <SkillContainer>
        {category.skills.map((skill, index) => (
          <Typography variant="subtitle1" key={index}>
            <SVGImage skill={skill} width={"45em"} />
          </Typography>
        ))}
      </SkillContainer>
    </StyledSkill>
  );
}
