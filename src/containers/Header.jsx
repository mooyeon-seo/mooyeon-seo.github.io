import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Toolbar, Typography, Button, FormControlLabel, Switch } from "@material-ui/core";
import { toggleTheme } from "../stores/darkStore";

export default function Header() {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.dark.isDark);
    const [showHeader, setShowHeader] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleScroll = () => {
        window.requestAnimationFrame(() => {
            const currentScrollPos = window.scrollY;
            const show = prevScrollPos > currentScrollPos || currentScrollPos < 10;
            setPrevScrollPos(currentScrollPos);
            setShowHeader(show);
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    return (
        <AppBar position="fixed" color={isDarkMode ? "default" : "primary"} style={{ top: showHeader ? 0 : "-70px" }}>
            <Toolbar style={{ justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h6" style={{ fontStyle: "italic" }}>Mooyeon Seo</Typography>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Button color="inherit" href="#">
                        Education
                    </Button>
                    <Button color="inherit" href="#">
                        Projects
                    </Button>
                    <Button color="inherit" href="#">
                        Work Experience
                    </Button>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={isDarkMode}
                                onChange={() => dispatch(toggleTheme())}
                                name="theme-switch"
                                color="secondary"
                            />
                        }
                    />
                </div>
            </Toolbar>
        </AppBar>
    );
}
