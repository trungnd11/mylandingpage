import React from "react";
import "./container.scss";
import avatar from "../../static/image/avatar.jpg";

export default function Container() {
  return (
    <div className="container-profile">
      <div className="slideBar">
        <div className="avatar">
          <div className="img">
            <div className="status-active"></div>
            <img src={avatar} alt="my" />
          </div>
          <div className="caption">
            <h4>Nguyen Dinh Trung</h4>
            <p>I'm Developer</p>
          </div>
        </div>
        <div className="list-profile">
          <ul className="lists-menu">
            <li className="item">
              <i className="fa-solid fa-house" />
              Home
            </li>
            <li className="item">
              <i className="fa-solid fa-address-card" />
              About
            </li>
            <li className="item">
              <i className="fa-solid fa-clock-rotate-left" />
              Experience
            </li>
            <li className="item">
              <i className="fa-solid fa-gear" />
              Services
            </li>
            <li className="item">
              <i className="fa-solid fa-file-lines" />
              Portfolio
            </li>
            <li className="item">
              <i className="fa-solid fa-user-check" />
              Clients
            </li>
            <li className="item">
              <i className="fa-brands fa-blogger" />
              Blog
            </li>
          </ul>
        </div>
      </div>
      <div className="wapper-content"></div>
    </div>
  );
}
