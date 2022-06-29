
import { forwardRef, useState, useImperativeHandle } from "react";
import avatar from "../../static/image/avatar.jpg";

function NavBarMobile(prop: any, ref: any) {
  const [showNav, setshowNav] = useState<boolean>();

  useImperativeHandle(ref, () => showMenuItem, [showNav]);

  const showMenuItem = () => {
    setshowNav(!showNav);
  }

  return (
    <div className="nav-container">
      <div className="nav-header">
        <div className="nav-avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="nav-title">
          <p>Nguyen Dinh Trung</p>
          <span>I'm Developer</span>
        </div>
        <div className="nav-btn" onClick={showMenuItem}>
          <i className={`fa-brands fa-windows ${showNav && "active-btn"}`} />
        </div>
      </div>
      <div className={`list-profile ${showNav && "showNav"}`}>
        <ul className="lists-menu">
          <li className="item" onClick={showMenuItem}>
            <i className="fa-solid fa-house" />
            <a href="#home">Home</a>
          </li>
          <li className="item" onClick={showMenuItem}>
            <i className="fa-solid fa-address-card" />
            <a href="#about">About</a>
          </li>
          <li className="item" onClick={showMenuItem}>
            <i className="fa-solid fa-clock-rotate-left" />
            <a href="#experience">Experience</a>
          </li>
          <li className="item" onClick={showMenuItem}>
            <i className="fa-solid fa-gear" />
            <a href="#services">Services</a>
          </li>
          <li className="item" onClick={showMenuItem}>
            <i className="fa-solid fa-file-lines" />
            <a href="#project">Project</a>
          </li>
          <li className="item" onClick={showMenuItem}>
            <i className="fa-solid fa-user-check" />
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="nav-close" onClick={showMenuItem}>
          <i className="fa-solid fa-circle-xmark" />
        </div>
      </div>
    </div>
  );
}

export default forwardRef(NavBarMobile);
