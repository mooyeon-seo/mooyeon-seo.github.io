import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Typography, Container, Grid, Paper } from '@material-ui/core';
// Import Components
import Description from '../components/Description';
import Title from '../components/Title';
import Card from '../components/Card';
const useStyles = makeStyles((theme) => ({
    education: {
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(8, 0, 6),
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
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
}));

export default function Education() {
    const isDarkMode = useSelector((state) => state.dark.isDark);
    
    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: isDarkMode ? 'dark' : 'light',
                },
            }),
        [isDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Title title="Education" />
                <Card title="University of Waterloo, Honours BSc" subtitle="Computer Science" description="University of Waterloo Seal" link="assets/uw_seal.png"></Card>
                <Description title="I am awesome" subtitle="I am awesome" description="I am awesome" />
            </Container>
        </ThemeProvider>
    );
};
