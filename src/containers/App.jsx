import React from "react";
import Header from "./Header";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Education from "./Education";

export default function App() {
  return (
    <>
      <Header />
      <div style={{ marginTop: "80px" }}>
        <Projects />
      </div>
      <Education />
      <Education />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
