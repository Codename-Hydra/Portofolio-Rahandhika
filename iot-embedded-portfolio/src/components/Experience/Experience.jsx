import React from 'react';
import experienceData from '../../data/experience';

const Experience = () => {
    return (
        <section id="experience">
            <h2>Experience</h2>
            <div className="experience-timeline">
                {experienceData.map((item, index) => (
                    <div key={index} className="experience-item">
                        <h3>{item.position}</h3>
                        <h4>{item.company}</h4>
                        <p>{item.period}</p>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;