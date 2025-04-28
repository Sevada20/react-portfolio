import React from "react";
import SkillsList from "../SkillsList/SkillList";
import "./style.css";

const skills = [
  "HTML",
  "CSS",
  "JSS",
  "SCSS",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next JS",
  "Redux",

  "REST API",
  "Git",
  "Oracle SQL",
];

const SkillSection = () => (
  <div className="skillsBlockWrapper">
    <h2>My Skills</h2>
    <SkillsList skills={skills} />
  </div>
);

export default SkillSection;
