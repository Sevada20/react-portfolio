import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../themeContext/ThemeContext";
import sun from "../../img/icons/sun.svg";
import moon from "../../img/icons/moon.svg";
import "./style.css";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });

  return (
    <nav className='nav'>
      <div className='container'>
        <div className='nav-row'>
          <NavLink to='/' className='logo'>
            <strong>React</strong> portfolio
          </NavLink>

          <button
            className={
              theme ? "dark-mode-btn dark-mode-btn--active" : "dark-mode-btn"
            }
            onClick={toggleTheme}
          >
            <img src={sun} alt='Light mode' className='dark-mode-btn__icon' />
            <img src={moon} alt='Dark mode' className='dark-mode-btn__icon' />
          </button>

          <ul className='nav-list'>
            <li className='nav-list__item'>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive
                    ? "nav-list__link nav-list__link--active"
                    : "nav-list__link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className='nav-list__item'>
              <NavLink
                to='/about'
                className={({ isActive }) =>
                  isActive
                    ? "nav-list__link nav-list__link--active"
                    : "nav-list__link"
                }
              >
                About Me
              </NavLink>
            </li>
            <li className='nav-list__item'>
              <NavLink
                to='projects'
                className={({ isActive }) =>
                  isActive
                    ? "nav-list__link nav-list__link--active"
                    : "nav-list__link"
                }
              >
                Projects
              </NavLink>
            </li>
            <li className='nav-list__item'>
              <NavLink
                to='contacts'
                className={({ isActive }) =>
                  isActive
                    ? "nav-list__link nav-list__link--active"
                    : "nav-list__link"
                }
              >
                Contact Me Here
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
