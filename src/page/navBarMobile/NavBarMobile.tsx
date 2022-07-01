
import { forwardRef, useState, useImperativeHandle } from "react";
import avatar from "../../static/image/avatar.jpg";

function NavBarMobile(prop: any, ref: any) {
  const [showNav, setshowNav] = useState<boolean>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useImperativeHandle(ref, () => ({showMenuItem, showNav}), [showNav]);

  const showMenuItem = () => {
    setshowNav(!showNav);
  }

  return (
    <div className="nav-container">
      <div
        className={`nav-header ${showNav && "show-nav-header"}`}
      >
        <div className="nav-avatar">
          <img src={avatar} alt="" />
        </div>
        <div className={`nav-title`}>
          <p>Nguyen Dinh Trung</p>
          <span>I'm Developer</span>
        </div>
        <div className="nav-btn" onClick={showMenuItem}>
          <i className={`fa-brands fa-windows ${showNav && "active-btn"}`} />
        </div>
      </div>
      <div className={`list-profile ${showNav && "showNav"}`}>
        <ul className="lists-menu">
          <a href="#home">
            <li className="item" onClick={showMenuItem}>
              <i className="fa-solid fa-house" />
              <a href="#home">Home</a>
            </li>
          </a>
          <a href="#about">
            <li className="item" onClick={showMenuItem}>
              <i className="fa-solid fa-address-card" />
              <a href="#about">About</a>
            </li>
          </a>
          <a href="#experience">
            <li className="item" onClick={showMenuItem}>
              <i className="fa-solid fa-clock-rotate-left" />
              <a href="#experience">Experience</a>
            </li>
          </a>
          <a href="#services">
            <li className="item" onClick={showMenuItem}>
              <i className="fa-solid fa-gear" />
              <a href="#services">Services</a>
            </li>
          </a>
          <a href="#project">
            <li className="item" onClick={showMenuItem}>
              <i className="fa-solid fa-file-lines" />
              <a href="#project">Project</a>
            </li>
          </a>
          <a href="#contact">
            <li className="item" onClick={showMenuItem}>
              <i className="fa-solid fa-user-check" />
              <a href="#contact">Contact</a>
            </li>
          </a>
        </ul>
        <div className="link-git">
          <a href="https://github.com/trungnd11" className="btn github">
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
