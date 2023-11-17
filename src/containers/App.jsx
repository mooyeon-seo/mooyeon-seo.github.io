import React, { useEffect } from "react";
import Projects from "./Projects";
import Footer from "./Footer";
import Education from "./Education";
import Works from "./Works";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import Skills from "./Skills";

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
      <Projects />
      <Education />
      <Works />
      <Footer />
      <Skills />
    </ThemeProvider>
  );
}
