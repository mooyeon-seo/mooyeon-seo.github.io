import { Box, List, ListItem } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Skill({ category }) {
    return (
        <Box textAlign={"start"}>
            <Typography level="h2">{category.title}</Typography>
            <List>
                {category.skills.map((skill, index) => (
                    <ListItem key={index}>{skill}</ListItem>
                ))}
            </List>            
        </Box>
    )
}