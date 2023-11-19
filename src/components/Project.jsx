import { Typography, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import { UI } from "../constants/ui"; 

const ProjectContainer = styled('div')({
  margin: UI.margin,
  padding: UI.padding,
  transition: "box-shadow 0.3s ease-in-out" /* add transition effect */,
  "&:hover": {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" /* add box-shadow on hover */,
  },
  width: "80%", // set width to 100%
  height: "80%", // set height to 100%
});

export default function Project({ project }) {
  return (
    <ProjectContainer>
      <CardContent>
        <Typography variant="h4" align="center">
          {project.title}
        </Typography>
        <Typography variant="subtitle1" align="center">
          {project.description}
        </Typography>
      </CardContent>
    </ProjectContainer>
  );
}
