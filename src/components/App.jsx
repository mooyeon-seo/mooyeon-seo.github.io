import React from "react";
import Header from "./Header";
import About from "./About";
// import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Education from "./Education";

export default function App() {
  return (
    <>
      <Header />
      <About />
      <Education />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </>
  );
}
