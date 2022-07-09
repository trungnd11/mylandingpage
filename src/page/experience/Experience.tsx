import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from "react";
import { ThemeContext } from "../../components/ContextTheme/ContextTheme";

function Experience(prop: any, ref: any) {
  const { theme } = useContext(ThemeContext);
  const [offset, setOffset] = useState<number>(0);

  useImperativeHandle(ref, () => offset, [offset]);

  useEffect(() => {
    const offsetDiv:any = document.getElementById("experience");
    setOffset(offsetDiv.offsetTop);
  }, [offset]);
  
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
            4 years working in electronics but with passion for technology, I decided
            to pursue my IT industry.
          </p>
          <p>
            Great work experience and environment helps me learn new knowledge
            and improve my work experience.
          </p>
        </div>
        <div className="exp-container">
          <div className={`exp-block ${theme === "dark" && "exp-block-dark"}`}>
            <i
              className={`fa-solid fa-building ${
                theme === "dark" && "icon-dark"
              }`}
            ></i>
            <h4>Foxcom</h4> <h6>2014 - 2015</h6>
          </div>
          <div className={`exp-block ${theme === "dark" && "exp-block-dark"}`}>
            <i
              className={`fa-solid fa-building ${
                theme === "dark" && "icon-dark"
              }`}
            ></i>
            <h4>Canon</h4> <h6>2016 - 3 months</h6>
          </div>
          <div className={`exp-block ${theme === "dark" && "exp-block-dark"}`}>
            <i
              className={`fa-solid fa-building ${
                theme === "dark" && "icon-dark"
              }`}
            ></i>
            <h4>Samsung</h4> <h6>2016 - 2020</h6>
          </div>
          <div className={`exp-block ${theme === "dark" && "exp-block-dark"}`}>
            <i
              className={`fa-solid fa-building ${
                theme === "dark" && "icon-dark"
              }`}
            ></i>
            <h4>AC Tech</h4> <h6>2020 - Present</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Experience)
