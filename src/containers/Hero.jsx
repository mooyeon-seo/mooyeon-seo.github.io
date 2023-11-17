import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@mui/material";
import RotatingSquare from "../components/RotatingSquare";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: "#f5f5f5",
    padding: "2rem",
  },
  heroContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 25
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 15    
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <section className={classes.hero}>
      <div className={classes.heroContent}>
        <RotatingSquare />
        <div className={`${classes.textContainer} text-container`}>
          <Typography variant="h4" align="center">
            Nice to meet you, Mooyeon Seo
          </Typography>
          <Typography variant="h6" align="center">
            I'm looking for a full-time position as a software developer, currently based in Toronto, Ontario.
          </Typography>          
        </div>
      </div>
    </section>
  );
}
