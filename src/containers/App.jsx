import React, { useEffect } from "react";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { Element } from 'react-scroll';
import Projects from "./Projects";
import Footer from "./Footer";
import Education from "./Education";
import Works from "./Works";
import Hero from "./Hero";
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
      <div>
        <Element name="hero" className="element" snap>
          <Hero />
        </Element>
        <Element name="projects" className="element" snap>
          <Projects />
        </Element>
        <Element name="education" className="element" snap>
          <Education />
        </Element>
        <Element name="works" className="element" snap>
          <Works />
        </Element>
        <Element name="footer" className="element" snap>
          <Footer />
        </Element>
        <Element name="skills" className="element" snap>
          <Skills />
        </Element>
      </div>
    </ThemeProvider>
  );
}
