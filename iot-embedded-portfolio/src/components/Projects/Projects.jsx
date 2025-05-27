import React from 'react';
import projectsData from '../../data/projects';
import './Projects.css'; // Assuming you will create a CSS file for styling

const Projects = () => {
    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tech">
                            {project.technologies.map((tech, techIndex) => (
                                <span className="tech-tag" key={techIndex}>{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                            {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;