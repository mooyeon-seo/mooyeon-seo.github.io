import Title from "../components/Title";
import ProjectSection from "../components/ProjectSection";
import FeaturedProject from "../components/FeaturedProject";
import styled from "styled-components";

const projects = [
  {
    title: "WLP4 Compiler",
    description: "lorem ipsum more text here",
    link: "",
    backgroundImage: {
      src: "/assets/project/willitrain.png",
      alt: "Will It Rain?",
    },
    images: [],
  },
  {
    title: "OS161",
    description: "lorem ipsum more text here",
    link: "",
    backgroundImage: {
      src: "/assets/project/willitrain.png",
      alt: "Will It Rain?",
    },
    images: [],
  },
  {
    title: "Will It Rain?",
    description:
      "Tells you if it will rain in the next hour at your current location. It had been published to the app store ",
    link: "https://apps.apple.com/ca/app/will-it-rain/id6443710105",
    backgroundImage: {
      src: "/assets/project/willitrain.png",
      alt: "Will It Rain?",
    },
    images: [],
  },
  {
    title: "Basic To Do",
    description:
      "Keeps track of your to do list. It had been published to the app store ",
    link: "https://apps.apple.com/us/app/basic-to-do/id1662248997",
    backgroundImage: {
      src: "/assets/project/basicToDo.png",
      alt: "Basic To Do",
    },
    images: [],
  },
  {
    title: "Sentinel",
    description:
      "Prototype of parental control app, as part of an unpaid internship...",
    link: "",
    backgroundImage: {
      src: "/assets/project/willitrain.png",
      alt: "Will It Rain?",
    },
    images: [],
  },
  {
    title: "This Website",
    description:
      "My personal website, built with React, Material UI and framer-motion. It is hosted on Github Pages.",
    link: "",
  },
  {
    title: "Note Taking App",
    description: "lorem ipsum more text here",
    link: "",
    backgroundImage: {
      src: "/assets/project/willitrain.png",
      alt: "Will It Rain?",
    },
    images: [],
  },
  {
    title: "Battleship",
    description: "lorem ipsum more text here",
    link: "",
    backgroundImage: {
      src: "/assets/project/willitrain.png",
      alt: "Will It Rain?",
    },
    images: [],
  },
];

const ProjectsContainer = styled("div")({
    height: "100%",
});

export default function Projects() {
  return (
    <ProjectsContainer>
      <Title title="Project" />
      <div>
        <ProjectSection category="" projects={projects} />
      </div>
    </ProjectsContainer>
  );
}
