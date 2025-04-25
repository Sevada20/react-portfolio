import React from 'react';
import './styles.css';

const SkillBadge = ({ skill }) => (
  <span className="skill-badge">{skill}</span>
);

const SkillsList = ({ skills }) => (
  <div className="skills-list">
    {skills.map(s => <SkillBadge key={s} skill={s} />)}
  </div>
);

export default SkillsList;
