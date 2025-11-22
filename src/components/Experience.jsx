import React from 'react';
import { motion } from 'framer-motion';

const ExperienceItem = ({ data }) => (
    <div className="mb-lg">
        <div className="flex justify-between items-center mb-sm" style={{ flexWrap: 'wrap' }}>
            <h3 className="text-large">{data.company}</h3>
            <span className="text-small">{data.period}</span>
        </div>
        <h4 className="text-body mb-sm" style={{ fontWeight: 600 }}>{data.role} — {data.location}</h4>
        <ul style={{ paddingLeft: '1.2rem' }}>
            {data.description.map((item, index) => (
                <li key={index} className="text-body mb-sm" style={{ listStyleType: 'disc' }}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const Experience = ({ experience, education }) => {
    return (
        <section className="container section">
            <div className="grid">
                <h2 className="section-title">Experience</h2>
                <div className="section-content">
                    {experience.map((job, index) => (
                        <ExperienceItem key={index} data={job} />
                    ))}

                    <div style={{ marginTop: 'var(--spacing-lg)' }}>
                        <h3 className="text-large mb-md">Education</h3>
                        <div className="flex justify-between items-center mb-sm">
                            <h4 className="text-body" style={{ fontWeight: 600 }}>{education.institution}</h4>
                            <span className="text-small">{education.period}</span>
                        </div>
                        <p className="text-body">{education.degree}</p>
                        <p className="text-small mt-sm">GPA: {education.gpa}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
