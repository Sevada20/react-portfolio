import React from 'react';
import SkillsList from '../SkillsList/SkillList';
import './style.css';

const skills = [
  'HTML','CSS','JavaScript','TypeScript','React',
  'Redux','JSS','REST API','Git','Oracle SQL'
];

const SkillSection = () => (
  <div className="skillsBlockWrapper">
    <h2>My Skills</h2>
    <SkillsList skills={skills} />
  </div>
);

export default SkillSection;
