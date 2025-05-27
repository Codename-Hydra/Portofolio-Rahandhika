import React from 'react';
import skillsData from '../../data/skills';
import './Skills.css'; // Assuming you will create a CSS file for styling

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h2>Keahlian</h2>
            <div className="skills-container">
                {skillsData.map((skill) => (
                    <div key={skill.id} className="skill-card">
                        <i className={skill.icon}></i>
                        <h3>{skill.name}</h3>
                        <p>{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;