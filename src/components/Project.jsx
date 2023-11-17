import { Typography, Card, CardMedia, CardContent, Modal } from "@mui/material";
import { makeStyles } from "@mui/styles"; // Import makeStyles from @mui/styles

const useStyles = makeStyles({
  container: {
    position: "relative",
    "&:hover $image": {
      display: "block",
    },
  },
  image: {
    display: "none",
  },
  project: {
    "&:hover": {
      boxShadow:
        "0px 0px 10px rgba(0, 0, 0, 0.5)" /* add box-shadow on hover */,
    },
  },
});

export default function Project({ project }) {
  const classes = useStyles();

  return (
    <Card className={classes.project}>
      <a href={project.link ?? ""}>
        <CardMedia
          sx={{
            width: 200,
            height: 200,
            margin: "0 auto",
            backgroundSize: "contain",
          }}
          image={project.backgroundImage.src}
          title={project.backgroundImage.alt}
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
    </Card>
  );
}
