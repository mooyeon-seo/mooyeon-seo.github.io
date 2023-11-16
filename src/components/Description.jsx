import { Typography, Grid, Paper } from "@material-ui/core";
export default function Description({ descriptions }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper>
        {descriptions &&
          descriptions.map((description) => (
            <Typography variant="subtitle1" component="p">
              {description}
            </Typography>
          ))}
      </Paper>
    </Grid>
  );
}
