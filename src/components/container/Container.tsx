import React from "react";
import "./container.scss";
import avatar from "../../static/image/avatar.jpg";
import Home from "../../page/home/Home";

export default function Container() {
  return (
    <div className="container-profile">
      <div className="slideBar">
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
                <span className="slide-text">
                  <b>Developer</b>
                </span>
              </p>
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
        <div className="social">
          <ul className="list-social">
            <li className="item-social">
              <a href="#">
                <i className="fa-brands fa-facebook" />
              </a>
            </li>
            <li className="item-social">
              <a href="#">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li className="item-social">
              <a href="#">
                <i className="fa-brands fa-twitter" />
              </a>
            </li>
          </ul>
          <h6>Copyright © 2020 Trung </h6>
        </div>
      </div>
      <div className="wapper-content">
        <Home />
      </div>
    </div>
  );
}
