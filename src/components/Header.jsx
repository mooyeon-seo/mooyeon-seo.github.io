import React from "react";
import { AppBar, Toolbar, Typography, Button, FormControlLabel, Switch } from "@material-ui/core";

export default function Header(props) {
    const {isDarkMode, toggleDarkMode} = props;

    return (
        <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
            <Toolbar style={{ justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h6">Mooyeon Seo</Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Button color="inherit" href="#">Education</Button>
                    <Button color="inherit" href="#">Projects</Button>
                    <Button color="inherit" href="#">Work Experience</Button>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={isDarkMode}
                                onChange={toggleDarkMode}
                                name="darkModeToggle"
                                color="secondary"
                            />
                        }
                        label={isDarkMode ? "Light" : "Dark"}
                    />
                </div>
            </Toolbar>
        </AppBar>
    );
}
