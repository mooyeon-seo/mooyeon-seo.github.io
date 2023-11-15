import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
    return (
        <div className="projects">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};

export default Projects;
