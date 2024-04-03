import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../themeContext/ThemeContext";

const Project = ({ title, img, index }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Link
      style={{ backgroundColor: theme ? "#555" : "white" }}
      className='project'
      to={`/projects/${index}`}
    >
      <li>
        <img src={img} alt='Project img' className='project__img' />
        <h3
          style={{ color: theme ? "white" : "black" }}
          className='project__title'
        >
          {title}
        </h3>
      </li>
    </Link>
  );
};

export default Project;
