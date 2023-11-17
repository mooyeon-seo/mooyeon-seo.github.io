import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import Project from "./Project";

export default function ProjectSection({ category, projects }) {
    return (
        <div style={{ padding: 10, margin: 10 }}>
            {/* Heading for the project section */}
            <Typography variant="h4" align="center">
                {category}
            </Typography>
            {/* list of projects */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
            >
                <Grid container spacing={2}>
                    {Array.isArray(projects) &&
                        projects.map((project, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Project
                                    project={project}
                                />
                            </Grid>
                        ))}
                </Grid>
            </motion.div>
        </div>
    );
}
