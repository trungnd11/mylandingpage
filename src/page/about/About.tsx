/* eslint-disable jsx-a11y/anchor-is-valid */
import avatar from "../../static/image/avatar2.jpg";
import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from "react";
import { ThemeContext } from "../../components/ContextTheme/ContextTheme";

function About(prop: any, ref: any) {
  const { theme } = useContext(ThemeContext);
  const aboutRef = useRef<any>(null);
  const [offset, setOffset] = useState<number>(0);
  
  useImperativeHandle(ref, () => offset, [offset]);
  
  useEffect(() => {
    setOffset(aboutRef.current.offsetTop);
  }, [offset]);
  

  return (
    <div ref={aboutRef} id="about" className="about-wapper">
      <div className="about-img">
        <img src={avatar} alt="" />
      </div>
      <div className="about-content">
        <div className="section-heading">
          <h2>About Me</h2>
          <h6 className={`${theme === "dark" && "title-dark"}`}>
            I am Full-Stack Web Developer
          </h6>
        </div>
        <div className="content-description">
          <p>I am love programing and new technologies.</p>
          <p>
            I always spend my free time learning new technologies to upgrade
            myself to be a senior programmer. And, I want to learn and improve
            my knowledge through a professional working environment.
          </p>
        </div>
        <hr />
        <ul className="about-info">
          <li>
            <span>Name:</span> <p>Nguyen Dinh Trung</p>
          </li>
          <li>
            <span>Email:</span>
            <p>
              <a
                className={`${theme === "dark" && "title-dark"}`}
                href="mailto:trung.dn9500@gmail.com"
              >
                trung.dn9500@gmail.com
              </a>
            </p>
          </li>
          <li>
            <span>Age:</span> <p>26</p>
          </li>
          <li>
            <span>From:</span> <p>Hanoi</p>
          </li>
        </ul>
        <div className="wapper-btn">
          <a
            className={`btn btn-wiggle ${theme === "dark" && "btn-dark"}`}
            href="#contact"
          >
            <span>Contact</span>
          </a>
          <a
            className={`btn btn-pulse ${theme === "dark" && "btn-dark"}`}
            href="#experience"
          >
            <span>Experience</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(About);
