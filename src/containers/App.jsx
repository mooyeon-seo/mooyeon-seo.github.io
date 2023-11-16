import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Education from "./Education";
import Works from "./Works";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

export default function App() {
  const isDarkMode = useSelector((state) => state.dark.isDark);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? "dark" : "light",
        },
      }),
    [isDarkMode]
  );
  useEffect(() => {
    console.log(`dark mode = ${isDarkMode} in App`);
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div style={{ marginTop: "80px" }}>
        <Projects />
      </div>
      <Education />
      <Works />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}
