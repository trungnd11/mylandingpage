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
import { useEffect, useState, useRef } from "react";
import NavBarMobile from "../../page/navBarMobile/NavBarMobile";

export default function Container() {

  const [showScroll, setshowScroll] = useState<boolean>();
  const navBarRef = useRef<any>();

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
                <a href="#home">Home</a>
              </li>
              <li className="item">
                <i className="fa-solid fa-address-card" />
                <a href="#about">About</a>
              </li>
              <li className="item">
                <i className="fa-solid fa-clock-rotate-left" />
                <a href="#experience">Experience</a>
              </li>
              <li className="item">
                <i className="fa-solid fa-gear" />
                <a href="#services">Services</a>
              </li>
              <li className="item">
                <i className="fa-solid fa-file-lines" />
                <a href="#project">Project</a>
              </li>
              <li className="item">
                <i className="fa-solid fa-user-check" />
                <a href="#contact">Contact</a>
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
      <div className="wapper-content" onClick={closeNavbar}>
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