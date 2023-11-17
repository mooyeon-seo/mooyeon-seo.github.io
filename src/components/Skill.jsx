import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles"; // Import makeStyles from @mui/styles

const useStyles = makeStyles({
  skill: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    "&:hover": {
      boxShadow:
        "0px 0px 10px rgba(0, 0, 0, 0.5)" /* add box-shadow on hover */,
    },
  },
});

export default function Skill({ category }) {
  const classes = useStyles();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      className={classes.skill}
    >
      <Typography variant="h4">{category.title}</Typography>
      {category.skills.map((skill, index) => (
        <Typography variant="subtitle1" key={index} >{skill}</Typography>
      ))}
    </motion.div>
  );
}
