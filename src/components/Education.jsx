import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Typography, Container, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    education: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    educationTitle: {
        marginBottom: theme.spacing(4),
    },
    educationItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
    },
    educationAchievements: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    educationImage: {
        width: '100%',
        height: 'auto',
        maxWidth: '300px',
    },
}));

export default function Education() {
    const isDarkMode = useSelector((state) => state.dark.isDark);
    const classes = useStyles();

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: isDarkMode ? 'dark' : 'light',
                },
            }),
        [isDarkMode],
    );

    useEffect(() => {
        console.log(`dark mode = ${isDarkMode} in education`);
    });

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.education}>
                <Container maxWidth="md">
                    <Typography variant="h2" align="center" className={classes.educationTitle}>
                        Education
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Paper className={classes.educationItem}>
                                <img src="/assets/uw_seal.png" alt="University of Waterloo Seal" className={classes.educationImage} />
                                <Typography variant="h5" component="h3" className={classes.educationDegree}>
                                    Bachelor of Science in Computer Science
                                </Typography>
                                <Typography variant="subtitle1" component="p" className={classes.educationSchool}>
                                    University of Waterloo
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={8}>
                            <Paper className={classes.educationAchievements}>
                                <Typography variant="h5" component="h3" className={classes.educationDegree}>
                                    Bachelor of Science in Computer Science
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </ThemeProvider>
    );
};
