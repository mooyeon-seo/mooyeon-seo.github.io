import { Typography, Grid, Paper } from '@material-ui/core';
export default function Description({title, subtitle}) {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper>
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