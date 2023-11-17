import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

export default function Skill({ category }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
    >
      <Paper>
        <Typography level="h3">{category.title}</Typography>
        {category.skills.map((skill, index) => (
          <Typography level="subtitle3">{skill}</Typography>
        ))}
      </Paper>
    </motion.div>
  );
}
