import { Typography, Grid, Paper } from '@material-ui/core';

export default function Card({ title, subtitle, description, link }) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper>
                <img src={link} alt={description} width="100%" />
                <Typography variant="h5" component="h3">
                    {title}
                </Typography>
                <Typography variant="subtitle1" component="p">
                    {subtitle}
                </Typography>
            </Paper>
        </Grid>
    )
}