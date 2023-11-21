import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { UI } from "../constants/ui";
import { styled } from "@mui/system";
import { navigationOnClick } from "../constants/navigationOnClick.js";

const ProjectTextContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  padding: UI.padding,
  gap: UI.gap,
  color: "white",
});

export default function Project({ project }) {
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
      initial={{ opacity: 0.65 }}
      whileInView={{ opacity: 1 }}
      style={{ height: "100%", width: "100^" }}
      onClick={() => navigationOnClick(project.link)}
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
