import Title from '../components/Title';
import ProjectSection from '../components/ProjectSection';
import FeaturedProject from '../components/FeaturedProject';

const projects = {
    iOS: [
        {
            title: "Will It Rain?",
            description: "Tells you if it will rain in the next hour at your current location. It had been published to the app store ",
            link: "https://apps.apple.com/ca/app/will-it-rain/id6443710105",
            backgroundImage: {
                src: '/assets/project/willitrain.png',
                alt: 'Will It Rain?'
            },
            images: []
        },
        {
            title: "Basic To Do",
            description: "Keeps track of your to do list. It had been published to the app store ",
            link: "https://apps.apple.com/us/app/basic-to-do/id1662248997",
            backgroundImage: {
                src: '/assets/project/basicToDo.png',
                alt: 'Basic To Do'
            },
            images: []
        },
        {
            title: "Sentinel",
            description: "Prototype of parental control app, as part of an unpaid internship...",
            link: "",
            backgroundImage: {
                src: '/assets/project/willitrain.png',
                alt: 'Will It Rain?'
            },
            images: []
        }
    ],
    web: [
        {
            title: "This Website",
            description: "My personal website, built with React, Material UI and framer-motion. It is hosted on Github Pages.",
            link: ""
        },
    ],
    android: [
        {
            title: "Note Taking App",
            description: "lorem ipsum more text here",
            link: "",
            backgroundImage: {
                src: '/assets/project/willitrain.png',
                alt: 'Will It Rain?'
            },
            images: []
        },
        {
            title: "Battleship",
            description: "lorem ipsum more text here",
            link: "",
            backgroundImage: {
                src: '/assets/project/willitrain.png',
                alt: 'Will It Rain?'
            },
            images: []
        },
    ],
    c: [
        {
            title: "WLP4 Compiler",
            description: "lorem ipsum more text here",
            link: "",
            backgroundImage: {
                src: '/assets/project/willitrain.png',
                alt: 'Will It Rain?'
            },
            images: []
        },
        {
            title: "OS161",
            description: "lorem ipsum more text here",
            link: "",
            backgroundImage: {
                src: '/assets/project/willitrain.png',
                alt: 'Will It Rain?'
            },
            images: []
        },
    ],
    featured: {
        title: "Raspberry Sherbet",
        descriptions: [
            "lorem ipsum more text here",
            "lorem ipsum more text here",
            "lorem ipsum more text here",
            "lorem ipsum more text here",
            "lorem ipsum more text here"
        ],
        link: "raspberrysherbet.ca",
    }
}

export default function Projects() {
    return (
        <div>
            <Title title="Project"/>
            <div>
                <FeaturedProject project={projects.featured} />
                <ProjectSection category="C/C++ Project" projects={projects.c} />
                <ProjectSection category="iOS DEVELOPMENT" projects={projects.web} />
                <ProjectSection category="ANDROID" projects={projects.android} />
                <ProjectSection category="WEBSITE" projects={projects.web} />
            </div>
            {/* <RotatingSquare/> */}
        </div>
    );
};
