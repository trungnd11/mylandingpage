/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from "react";
import { ThemeContext } from "../../components/ContextTheme/ContextTheme";

export default function NavigateMobile() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="navigate-mobile">
      <div className={`list-item ${theme === "dark" && "list-item-dark"}`}>
        <ul>
          <a href="#home">
            <li className="item">
              <i
                className={`fa-solid fa-house ${
                  theme === "dark" && "item-dark"
                }`}
              ></i>
              <span className={`${theme === "dark" && "text-dark"}`}>Home</span>
            </li>
          </a>
          <a href="#about">
            <li className="item">
              <i
                className={`fa-solid fa-address-card ${
                  theme === "dark" && "item-dark"
                }`}
              ></i>
              <span className={`${theme === "dark" && "text-dark"}`}>
                About
              </span>
            </li>
          </a>
          <a href="#experience">
            <li className="item">
              <i
                className={`fa-solid fa-clock-rotate-left ${
                  theme === "dark" && "item-dark"
                }`}
              ></i>
              <span className={`${theme === "dark" && "text-dark"}`}>
                Expe...
              </span>
            </li>
          </a>
          <a href="#services">
            <li className="item">
              <i
                className={`fa-solid fa-gear ${
                  theme === "dark" && "item-dark"
                }`}
              ></i>
              <span className={`${theme === "dark" && "text-dark"}`}>
                Skill
              </span>
            </li>
          </a>
          <a href="#project">
            <li className="item">
              <i
                className={`fa-solid fa-file-lines ${
                  theme === "dark" && "item-dark"
                }`}
              ></i>
              <span className={`${theme === "dark" && "text-dark"}`}>
                Project
              </span>
            </li>
          </a>
          <a href="#contact">
            <li className="item">
              <i
                className={`fa-solid fa-user-check ${
                  theme === "dark" && "item-dark"
                }`}
              >
              </i>
              <span className={`${theme === "dark" && "text-dark"}`}>
                Contact
              </span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
