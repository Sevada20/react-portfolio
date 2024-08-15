import React, { useContext } from "react";
import { ThemeContext } from "../../themeContext/ThemeContext";
import "./style.css";

const ExperienceEducation = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="experience-education-container">
      <div className="section">
        <h2 style={{ color: theme ? "#eee" : "#333" }}>Education</h2>
        <div style={{ color: theme ? "#ccc" : "#667" }} className="education">
          <h3 style={{ color: theme ? "#ccc" : "#667" }}>
            National Polytechnic University of Armenia (NPUA) - Bachelor's
            Degree
          </h3>
          <p>2015 - 2019</p>
          <p>Studied at NPUA, obtaining a Bachelor's degree.</p>
          <p>
            Parallel to my studies, I started learning at the Microsoft
            Innovation Center, thus taking my first steps into programming.
          </p>
        </div>
        <div className="education">
          <h3>PicsArt Academy - General Programming</h3>
          <p>2021</p>
          <p>
            Participated in the General Programming program at PicsArt Academy,
            gaining knowledge and skills in various programming concepts.
          </p>
        </div>
        <div className="education">
          <h3>Business Development Group - HTML/CSS, JS</h3>
          <p>June - September 2022</p>
          <p>
            Studied HTML, CSS, and JavaScript at the Business Development Group,
            acquiring fundamental web development skills.
          </p>
        </div>
        <div className="education">
          <h3>TCO Team - React.js</h3>
          <p>December 2022 - February 2023</p>
          <p>
            Completed a React.js course at TCO Team, gaining proficiency in
            building dynamic web applications with React.js.
          </p>
        </div>
      </div>
      <div className="section">
        <h2>Experience</h2>
        <div className="experience">
          <h3>Team Telecom - React Intern Developer</h3>
          <p>2023</p>
          <p>
            Worked on the Team Energy project, developing various features and
            functionalities using React.js and integrating with APIs. Improved
            user experience and implemented smart solutions to enhance project
            efficiency.
          </p>
          <p>
            Had the opportunity to learn and apply advanced programming concepts
            and problem-solving skills.
          </p>
        </div>
        <div className="experience">
          <h3>PicsArt Academy - Intern Developer</h3>
          <p>
            <p>April 2024 - Present</p>
          </p>
          <p>
            I'm currently engaged in practical work within PicsArt Academy,
            contributing to a startup project with immense potential called
            'Yelp for Armenia.' During my involvement, I have taken on the role
            of a tech lead for a period of time and am currently i am developer.
          </p>
          <p>
            Had the opportunity to learn and apply advanced programming concepts
            and problem-solving skills.
          </p>
        </div>
        <div className="experience">
          <h3>Project CRM in a credit company - React Developer</h3>
          <p>
            <p>2024(June) - Present</p>
          </p>
          <p>
            I work remotely on a CRM project for a credit company using React,
            Redux Toolkit, JSS and other technologies. This project gave me
            valuable experience in frontend development and the ability to
            quickly solve problems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceEducation;
