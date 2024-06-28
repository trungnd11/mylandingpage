/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState, useRef, useContext } from "react";
import avatar from "../../static/image/avatar.jpg";
import Home from "../../page/home/Home";
import About from "../../page/about/About";
import Experience from "../../page/experience/Experience";
import Services from "../../page/services/Services";
import Portfolio from "../../page/portfolio/Portfolio";
import Contact from "../../page/contact/Contact";
import ScrollTop from "../scrollTop/ScrollTop";
import { ThemeContext } from "../ContextTheme/ContextTheme";
import NavBarMobile from "../../page/navBarMobile/NavBarMobile";
import NavigateMobile from "../../page/navigate-mobile/NavigateMobile";
import { OffsetModel } from "../../model/OffsetModel";

interface ActiveObj {
  home: boolean;
  about: boolean;
  experience: boolean;
  program: boolean;
  project: boolean;
  contact: boolean;
}

export const offsetDefault: OffsetModel = {
  offsetHeight: 0,
  offsetTop: 0,
};

export default function Container() {
  const [showScroll, setshowScroll] = useState<boolean>();
  const navBarRef = useRef<any>();
  const { theme, changeTheme } = useContext(ThemeContext);
  const [avtiveItem, setActiveItem] = useState<ActiveObj>({
    home: true,
    about: false,
    experience: false,
    program: false,
    project: false,
    contact: false,
  });
  const homeRef = useRef<OffsetModel>(offsetDefault);
  const aboutRef = useRef<OffsetModel>(offsetDefault);
  const experiencetRef = useRef<OffsetModel>(offsetDefault);
  const programRef = useRef<OffsetModel>(offsetDefault);
  const projectRef = useRef<OffsetModel>(offsetDefault);
  const contactRef = useRef<OffsetModel>(offsetDefault);

  const closeNavbar = (): void => {
    const show: boolean = navBarRef.current.showNav;
    show && navBarRef.current.showMenuItem();
  };

  const activeSlideBar = (heithScreen: number): void => {
    if (heithScreen <= homeRef.current.offsetHeight) {
      setActiveItem({
        home: true,
        about: false,
        experience: false,
        program: false,
        project: false,
        contact: false,
      });
    } else if (
      heithScreen > homeRef.current.offsetHeight &&
      heithScreen <=
        aboutRef.current.offsetTop + aboutRef.current.offsetHeight
    ) {
      setActiveItem({
        home: false,
        about: true,
        experience: false,
        program: false,
        project: false,
        contact: false,
      });
    } else if (
      heithScreen >
        aboutRef.current.offsetTop + aboutRef.current.offsetHeight &&
      heithScreen <=
        experiencetRef.current.offsetTop +
          experiencetRef.current.offsetHeight
    ) {
      setActiveItem({
        home: false,
        about: false,
        experience: true,
        program: false,
        project: false,
        contact: false,
      });
    } else if (
      heithScreen >
        experiencetRef.current.offsetTop +
          experiencetRef.current.offsetHeight &&
      heithScreen <=
        programRef.current.offsetTop + programRef.current.offsetHeight
    ) {
      setActiveItem({
        home: false,
        about: false,
        experience: false,
        program: true,
        project: false,
        contact: false,
      });
    } else if (
      heithScreen >
        programRef.current.offsetTop + programRef.current.offsetHeight &&
      heithScreen <
        projectRef.current.offsetTop + 500
    ) {
      setActiveItem({
        home: false,
        about: false,
        experience: false,
        program: false,
        project: true,
        contact: false,
      });
    } else if (
      heithScreen >
      projectRef.current.offsetTop + 500
    ) {
      setActiveItem({
        home: false,
        about: false,
        experience: false,
        program: false,
        project: false,
        contact: true,
      });
    }
  };

  const handleNavigate = (link: string) => window.open(link);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      window.scrollY > 500 ? setshowScroll(true) : setshowScroll(false);
      activeSlideBar(window.scrollY);
    });
  }, []);

  return (
    <div className="container-profile">
      <NavBarMobile ref={navBarRef} />
      <NavigateMobile />
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
            {theme === "light" ? (
              <ul className="lists-menu">
                <li className={`item ${avtiveItem.home && "active"}`}>
                  <i className="fa-solid fa-house" />
                  <a
                    className={`${theme === "dark" && "link-dark"} ${
                      avtiveItem.home && "active"
                    }`}
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li className={`item ${avtiveItem.about && "active"}`}>
                  <i className="fa-solid fa-address-card" />
                  <a
                    className={`${theme === "dark" && "link-dark"} ${
                      avtiveItem.about && "active"
                    }`}
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li className={`item ${avtiveItem.experience && "active"}`}>
                  <i className="fa-solid fa-clock-rotate-left" />
                  <a
                    className={`${theme === "dark" && "link-dark"} ${
                      avtiveItem.experience && "active"
                    }`}
                    href="#experience"
                  >
                    Experience
                  </a>
                </li>
                <li className={`item ${avtiveItem.program && "active"}`}>
                  <i className="fa-solid fa-gear" />
                  <a
                    className={`${theme === "dark" && "link-dark"} ${
                      avtiveItem.program && "active"
                    }`}
                    href="#services"
                  >
                    Programing Language
                  </a>
                </li>
                <li className={`item ${avtiveItem.project && "active"}`}>
                  <i className="fa-solid fa-file-lines" />
                  <a
                    className={`${theme === "dark" && "link-dark"} ${
                      avtiveItem.project && "active"
                    }`}
                    href="#project"
                  >
                    Project
                  </a>
                </li>
                <li className={`item ${avtiveItem.contact && "active"}`}>
                  <i className="fa-solid fa-user-check" />
                  <a
                    className={`${theme === "dark" && "link-dark"} ${
                      avtiveItem.contact && "active"
                    }`}
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="lists-menu-dark">
                <li className={`item-dark ${avtiveItem.home && "active-dark"}`}>
                  <i className="fa-solid fa-house" />
                  <a
                    className={`${theme === "dark" && "link-dark"} ${
                      avtiveItem.home && "active-dark"
                    }`}
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li
                  className={`item-dark ${avtiveItem.about && "active-dark"}`}
                >
                  <i className="fa-solid fa-address-card" />
                  <a
                    className={`${theme === "dark" && "link-dark"} ${
                      avtiveItem.about && "active-dark"
                    }`}
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li
                  className={`item-dark ${
                    avtiveItem.experience && "active-dark"
                  }`}
                >
                  <i className="fa-solid fa-clock-rotate-left" />
                  <a
                    className={`${theme === "dark" && "link-dark"} ${
                      avtiveItem.experience && "active-dark"
                    }`}
                    href="#experience"
                  >
                    Experience
                  </a>
                </li>
                <li
                  className={`item-dark ${avtiveItem.program && "active-dark"}`}
                >
                  <i className="fa-solid fa-gear" />
                  <a
                    className={`${theme === "dark" && "link-dark"} ${
                      avtiveItem.program && "active-dark"
                    }`}
                    href="#services"
                  >
                    Programing Language
                  </a>
                </li>
                <li
                  className={`item-dark ${avtiveItem.project && "active-dark"}`}
                >
                  <i className="fa-solid fa-file-lines" />
                  <a
                    className={`${theme === "dark" && "link-dark"} ${
                      avtiveItem.project && "active-dark"
                    }`}
                    href="#project"
                  >
                    Project
                  </a>
                </li>
                <li
                  className={`item-dark ${avtiveItem.contact && "active-dark"}`}
                >
                  <i className="fa-solid fa-user-check" />
                  <a
                    className={`${theme === "dark" && "link-dark"} ${
                      avtiveItem.contact && "active-dark"
                    }`}
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="link-git">
          <div
            className={`btn github ${theme === "dark" && "github-dark"}`}
            onClick={() => handleNavigate("https://github.com/trungnd11")}
          >
            <i className="fa-brands fa-github" />
            Github
          </div>
          <div 
            className="btn gitlab"
            onClick={() => handleNavigate("https://gitlab.com/trungnd11")}
          >
            <i className="fa-brands fa-gitlab" />
            Gitlab
          </div>
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
          {theme === "light" ? (
            <i className="fa-solid fa-moon"></i>
          ) : (
            <i className="fa-solid fa-sun"></i>
          )}
        </div>
        <Home ref={homeRef} />
        <About ref={aboutRef} />
        <Experience ref={experiencetRef} show={avtiveItem.experience} />
        <Services ref={programRef} />
        <Portfolio ref={projectRef} />
        <Contact ref={contactRef} />
        {showScroll && <ScrollTop />}
      </div>
    </div>
  );
}
