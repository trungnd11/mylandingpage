import { useContext } from "react";
import { ThemeContext } from "../../components/ContextTheme/ContextTheme";
import exp1 from "../../static/image/about-icon-01.png";
import exp2 from "../../static/image/about-icon-02.png";
import exp3 from "../../static/image/about-icon-03.png";
import exp4 from "../../static/image/about-icon-04.png";

export default function Experience() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      id="experience"
      className={`experience-area ${
        theme === "dark" && "experience-area-dark"
      }`}
    >
      <div className="container">
        <div className="exp-content">
          <h5 className={`subtitle ${theme === "dark" && "subtitle-dark"}`}>
            Having 6 years Experience
          </h5>
          <h3>
            Amazing <span>experience</span> with those companies
          </h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam
          </p>
          <p>
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>
        </div>
        <div className="exp-container">
          <div className={`exp-block ${theme === "dark" && "exp-block-dark"}`}>
            <i className={`fa-solid fa-building ${theme === "dark" && "icon-dark"}`}></i>
            <h4>Foxcom</h4> <h6>2014 - 2015</h6>
          </div>
          <div className={`exp-block ${theme === "dark" && "exp-block-dark"}`}>
            <i className={`fa-solid fa-building ${theme === "dark" && "icon-dark"}`}></i>
            <h4>Canon</h4> <h6>2016 - 3 months</h6>
          </div>
          <div className={`exp-block ${theme === "dark" && "exp-block-dark"}`}>
            <i className={`fa-solid fa-building ${theme === "dark" && "icon-dark"}`}></i>
            <h4>Samsung</h4> <h6>2016 - 2021</h6>
          </div>
          <div className={`exp-block ${theme === "dark" && "exp-block-dark"}`}>
            <i className={`fa-solid fa-building ${theme === "dark" && "icon-dark"}`}></i>
            <h4>AC Tech</h4> <h6>2021 - Present</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
