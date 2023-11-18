import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import { styled } from "@mui/system";

const ProjectContainer = styled('div')({

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
