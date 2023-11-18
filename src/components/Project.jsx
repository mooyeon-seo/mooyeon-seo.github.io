import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import { styled } from "@mui/system";

const Container = styled(Card)({
  position: "relative",
  "&:hover .image": {
    display: "block",
  },
  "&:hover": {
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
  },
});

const Image = styled(CardMedia)({
  display: "none",
});

export default function Project({ project }) {
  return (
    <Container>
      <a href={project.link ?? ""}>
        <Image
          sx={{
            width: 200,
            height: 200,
            margin: "0 auto",
            backgroundSize: "contain",
          }}
          image={project.backgroundImage.src}
          title={project.backgroundImage.alt}
          className="image"
        />
      </a>

      <CardContent>
        <Typography variant="h4" align="center">
          {project.title}
        </Typography>
        <Typography variant="subtitle1" align="center">
          {project.description}
        </Typography>
      </CardContent>
    </Container>
  );
}
