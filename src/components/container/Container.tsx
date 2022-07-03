/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import avatar from "../../static/image/avatar.jpg";
import Home from "../../page/home/Home";
import About from "../../page/about/About";
import Experience from "../../page/experience/Experience";
import Services from "../../page/services/Services";
import Portfolio from "../../page/portfolio/Portfolio";
import Contact from "../../page/contact/Contact";
import ScrollTop from "../scrollTop/ScrollTop";
import { useEffect, useState, useRef, useContext } from "react";
import { ThemeContext } from "../ContextTheme/ContextTheme";
import NavBarMobile from "../../page/navBarMobile/NavBarMobile";

export default function Container() {

  const [showScroll, setshowScroll] = useState<boolean>();
  const navBarRef = useRef<any>();
  const { theme, changeTheme } = useContext(ThemeContext);

  const closeNavbar = (): void => {
    const show: boolean = navBarRef.current.showNav;
    show && navBarRef.current.showMenuItem();
  }

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 500 ? setshowScroll(true) : setshowScroll(false); 
    });
  }, [])

  return (
    <div className="container-profile">
      <NavBarMobile ref={navBarRef} />
      <div className={`slideBar ${theme === "dark" && "slideBar-dark"}`}>
        <div className="wapper-menu">
          <div className="avatar">
            <div className="img">
              <div className="status-active"></div>
              <img src={avatar} alt="my" />
            </div>
            <div className="caption">
              <h4>Nguyen Dinh Trung</h4>
              <p>
                <span className="silent-text">I'm a</span>
                <span
                  className={`slide-text ${
                    theme === "dark" && "slide-text-dark"
                  }`}
                >
                  Developer
                  <span
                    className={`slide ${theme === "dark" && "slide-dark"}`}
                  />
                </span>
              </p>
            </div>
          </div>
          <div className="list-profile">
            <ul className="lists-menu">
              <li className="item">
                <i className="fa-solid fa-house" />
                <a
                  className={`${theme === "dark" && "link-dark"}`}
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="item">
                <i className="fa-solid fa-address-card" />
                <a
                  className={`${theme === "dark" && "link-dark"}`}
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="item">
                <i className="fa-solid fa-clock-rotate-left" />
                <a
                  className={`${theme === "dark" && "link-dark"}`}
                  href="#experience"
                >
                  Experience
                </a>
              </li>
              <li className="item">
                <i className="fa-solid fa-gear" />
                <a
                  className={`${theme === "dark" && "link-dark"}`}
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li className="item">
                <i className="fa-solid fa-file-lines" />
                <a
                  className={`${theme === "dark" && "link-dark"}`}
                  href="#project"
                >
                  Project
                </a>
              </li>
              <li className="item">
                <i className="fa-solid fa-user-check" />
                <a
                  className={`${theme === "dark" && "link-dark"}`}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="link-git">
          <a
            href="https://github.com/trungnd11"
            className={`btn github ${theme === "dark" && "github-dark"}`}
          >
            <i className="fa-brands fa-github" />
            Github
          </a>
          <a href="https://gitlab.com/trungnd11" className="btn gitlab">
            <i className="fa-brands fa-gitlab" />
            Gitlab
          </a>
          <h6>Copyright © 2020 Trung </h6>
        </div>
      </div>
      <div
        className={`wapper-content ${
          theme === "dark" && "wapper-content-dark"
        }`}
        onClick={closeNavbar}
      >
        <div
          className={`change-theme ${theme === "dark" && "change-backgroud"}`}
          onClick={changeTheme}
        >
          {theme === "dark" ? (
            <i className="fa-solid fa-moon"></i>
          ) : (
            <i className="fa-solid fa-sun"></i>
          )}
        </div>
        <Home />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
        {showScroll && <ScrollTop />}
      </div>
    </div>
  );
}
