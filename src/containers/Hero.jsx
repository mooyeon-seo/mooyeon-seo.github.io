import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { motion } from "framer-motion";
import RotatingSquare from "../components/RotatingSquare";

const useStyles = makeStyles((theme) => ({
  hero: {
    height: "100vh", // This will make the hero section take up the full height of the viewport
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  heroContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
  },
  arrow: {
    width: 0,
    height: 0,
    color: "black",
    borderTop: "solid 20px transparent",
    borderBottom: "solid 20px transparent",
    borderLeft: "solid 20px white",
    cursor: "pointer",
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <section className={classes.hero}>
      <div className={classes.heroContent}>
        <RotatingSquare />
        <motion.div
          animate={{ x: 50 }}
          className={`${classes.textContainer} text-container`}
        >
          <Typography variant="h4" align="center">
            My name is{" "}
          </Typography>
          <Typography variant="h1" align="center">
            Mooyeon Seo.
          </Typography>
          <List>
            <ListItem>
              <Typography variant="h4" align="center">
                I'm a Full-Stack Software Developer
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h4" align="center">
                I'm a Recent Graduate from University of Waterloo
              </Typography>
            </ListItem>
          </List>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={classes.arrow}
      />
    </section>
  );
}
