import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { UI } from "../constants/ui";

const ProjectContainer = styled("div")({
  margin: UI.margin,
  padding: UI.padding,
  transition: "box-shadow 0.3s ease-in-out" /* add transition effect */,
  "&:hover": {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" /* add box-shadow on hover */,
  },
});

export default function FeaturedProject({ project }) {
  return (
    <ProjectContainer>
      <Typography variant="h4" align="center">
        {project.title}
      </Typography>
    </ProjectContainer>
  );
}
