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
        <div className={`${classes.textContainer} text-container`}>
          <Typography variant="h4" align="center">
            My name is
          </Typography>
          <motion.div
            initial={{ scale: 0.88 }}
            whileInView={{ scale: 1.0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              align="center"
              sx={{
                background:
                  "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Mooyeon Seo
            </Typography>
          </motion.div>

          <List>
            <ListItem>
              <motion.div
                initial={{ x: 50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <Typography variant="h4" align="center">
                  I'm a Full-Stack Software Developer
                </Typography>
              </motion.div>
            </ListItem>
            <ListItem>
              <motion.div
                initial={{ x: 80 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 1.5 }}
              >
                <Typography variant="h4" align="center">
                  I'm a Recent Graduate from University of Waterloo
                </Typography>
              </motion.div>
            </ListItem>
          </List>
        </div>
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
