import React from 'react';

const ProjectCard = ({ title, description, image, link }) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{description}</p>
            <a href={link}>View project</a>
        </div>
    );
};

export default ProjectCard;
