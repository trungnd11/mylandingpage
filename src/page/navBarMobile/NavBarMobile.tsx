
import { forwardRef, useState, useImperativeHandle, useContext } from "react";
import { ThemeContext } from "../../components/ContextTheme/ContextTheme";
import avatar from "../../static/image/avatar.jpg";

function NavBarMobile(prop: any, ref: any) {
  const [showNav, setshowNav] = useState<boolean>();
  const { theme } = useContext(ThemeContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useImperativeHandle(ref, () => ({showMenuItem, showNav}), [showNav]);

  const showMenuItem = () => {
    setshowNav(!showNav);
  }

  return (
    <div className="nav-container">
      <div
        className={`nav-header ${theme === "dark" && "nav-header-dark"} ${
          showNav && "show-nav-header"
        }`}
      >
        <div className="nav-avatar">
          <a href="#about">
            <img src={avatar} alt="" />
          </a>
        </div>
        <div className={`nav-title`}>
          <p>Nguyen Dinh Trung</p>
          <span className="silent-text" style={{ marginRight: "10px" }}>
            I'm a
          </span>
          <span
            className={`slide-text ${theme === "dark" && "slide-text-dark"}`}
          >
            Developer
            <span className={`slide ${theme === "dark" && "slide-dark"}`} />
          </span>
        </div>
        <div className="nav-btn" onClick={showMenuItem}>
          <i
            className={`fa-brands fa-windows ${
              theme === "dark" && "icon-dark"
            } ${showNav && "active-btn"}`}
          />
        </div>
      </div>
      <div
        className={`list-profile ${theme === "dark" && "list-profile-dark"} ${
          showNav && "showNav"
        }`}
      >
        <ul className="lists-menu">
          <a href="#home">
            <li className="item" onClick={showMenuItem}>
              <i
                className={`fa-solid fa-house ${
                  theme === "dark" && "link-dark"
                } `}
              />
              <a className={`${theme === "dark" && "link-dark"}`} href="#home">
                Home
              </a>
            </li>
          </a>
          <a href="#about">
            <li className="item" onClick={showMenuItem}>
              <i
                className={`fa-solid fa-address-card ${
                  theme === "dark" && "link-dark"
                }`}
              />
              <a className={`${theme === "dark" && "link-dark"}`} href="#about">
                About
              </a>
            </li>
          </a>
          <a href="#experience">
            <li className="item" onClick={showMenuItem}>
              <i
                className={`fa-solid fa-clock-rotate-left ${
                  theme === "dark" && "link-dark"
                }`}
              />
              <a
                className={`${theme === "dark" && "link-dark"}`}
                href="#experience"
              >
                Experience
              </a>
            </li>
          </a>
          <a href="#services">
            <li className="item" onClick={showMenuItem}>
              <i
                className={`fa-solid fa-gear ${
                  theme === "dark" && "link-dark"
                }`}
              />
              <a
                className={`${theme === "dark" && "link-dark"}`}
                href="#services"
              >
                Services
              </a>
            </li>
          </a>
          <a href="#project">
            <li className="item" onClick={showMenuItem}>
              <i
                className={`fa-solid fa-file-lines ${
                  theme === "dark" && "link-dark"
                }`}
              />
              <a
                className={`${theme === "dark" && "link-dark"}`}
                href="#project"
              >
                Project
              </a>
            </li>
          </a>
          <a href="#contact">
            <li className="item" onClick={showMenuItem}>
              <i
                className={`fa-solid fa-user-check ${
                  theme === "dark" && "link-dark"
                }`}
              />
              <a
                className={`${theme === "dark" && "link-dark"}`}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </a>
        </ul>
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
    </div>
  );
}

export default forwardRef(NavBarMobile);
