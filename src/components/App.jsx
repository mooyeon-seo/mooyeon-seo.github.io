import React, { useState } from "react";
import Header from "./Header";
import About from "./About";
// import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Education from "./Education";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <About />
      <Education />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}
