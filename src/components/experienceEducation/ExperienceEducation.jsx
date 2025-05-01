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
            National Polytechnic University of Armenia (NPUA)
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
          <h3>Haysell - Frontend Developer</h3>
          <p>2025-present </p>
          <p>
            Currently working on Unitech eCommerce shop and the main Haysell
            application, a platform designed to help users manage and control
            their businesses.
          </p>
          <p>
            Had the opportunity to learn and apply advanced programming concepts
            and problem-solving skills.
          </p>
        </div>
        <div className="experience">
          <h3>PicsArt Academy - Frontend Developer</h3>
          <p>
            <p>2024 - Present</p>
          </p>
          <p>
            Participated in the development of a web platform that helps users
            discover all businesses and services across Armenia (project
            duration: ~1 year). Currently working on two new projects: a web
            application for the Picsart Academy platform, and a coworking space
            booking system for Picsart, allowing users to reserve seats and
            workspaces.
          </p>
        </div>
        <div className="experience">
          <h3>Project CRM in a credit company - Frontend Developer</h3>
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
        <div className="experience">
          <h3>Team Telecom - Frontend Developer</h3>
          <p>2023</p>
          <p>
            React Developer on the Team Energy CRM system, utilizing React and
            Material-UI to create a responsive user interface. Additionally,
            improved my data management skills by studying SQL.
          </p>
          <p>
            Had the opportunity to learn and apply advanced programming concepts
            and problem-solving skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceEducation;
