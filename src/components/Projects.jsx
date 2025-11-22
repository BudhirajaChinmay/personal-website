import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => (
    <div className="mb-md" style={{ border: '1px solid var(--color-light-gray)', padding: 'var(--spacing-sm)' }}>
        <div className="flex justify-between items-center mb-sm">
            <h3 className="text-large" style={{ fontSize: '1.25rem' }}>{project.title}</h3>
            {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="accent">
                    <FaExternalLinkAlt />
                </a>
            )}
        </div>
        <p className="text-body mb-sm">{project.description}</p>
        <div className="flex" style={{ flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.tags.map((tag, index) => (
                <span key={index} style={{
                    fontSize: '0.75rem',
                    border: '1px solid var(--color-text)',
                    padding: '0.25rem 0.5rem',
                    textTransform: 'uppercase'
                }}>
                    {tag}
                </span>
            ))}
        </div>
    </div>
);

const Projects = ({ projects, skills }) => {
    return (
        <section className="container section">
            <div className="grid">
                <h2 className="section-title">Skills & Projects</h2>
                <div className="section-content">
                    <div className="mb-lg">
                        <h3 className="text-large mb-md">Technical Skills</h3>
                        <div className="flex" style={{ flexWrap: 'wrap', gap: '0.5rem' }}>
                            {skills.map((skill, index) => (
                                <span key={index} style={{
                                    fontSize: '1rem',
                                    backgroundColor: 'var(--color-text)',
                                    color: 'var(--color-bg)',
                                    padding: '0.5rem 1rem',
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <h3 className="text-large mb-md">Selected Projects</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--spacing-md)' }}>
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
