import Title from '../components/Title';
import ProjectSection from '../components/ProjectSection';

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
    ]
}

export default function Projects() {
    return (
        <div>
            <Title title="Project"/>

            <div>
                <ProjectSection category="iOS DEVELOPMENT" projects={projects.iOS} />
            </div>
            {/* <RotatingSquare/> */}
        </div>
    );
};
