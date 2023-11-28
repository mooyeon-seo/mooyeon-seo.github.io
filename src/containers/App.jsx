import React, { useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import Projects from "./Projects";
import Footer from "./Footer";
import Educations from "./Educations";
import Works from "./Works";
import Hero from "./Hero";
import Skills from "./Skills";
import Business from "./Business";

export default function App() {
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: "light",
        },
      }),
    []
  );

  useEffect(() => {
    console.log(`dark mode = ${theme} in App`);
  });

  return (
    <ThemeProvider theme={theme}>
      <Hero />
      <Projects />
      <Educations />
      <Works />
      <Footer />
      <Skills />
    </ThemeProvider>
  );
}
