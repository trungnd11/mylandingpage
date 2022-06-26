import { useState } from "react";
import { zoomInDown } from "react-animations";
import Radium from "radium";
import "./portfolio.scss";
import imgZsneaker from "../../static/image/portfolio-01.png";
import img30shine from "../../static/image/30shine.png";
import imgYody from "../../static/image/yody.png";

const imgArr = [
  {
    id: 1,
    name: "Shop Z-Sneaker",
    img: imgZsneaker,
    type: "fullstack",
    language: "java",
    linkgit: "https://github.com/trungnd11/z-sneaker",
    linkdemo: "https://trungnd11.github.io/z-sneaker/",
  },
  {
    id: 2,
    name: "30 Shine",
    img: img30shine,
    type: "frontend",
    language: "ReactJs",
    linkgit: "https://github.com/trungnd11/30shine",
    linkdemo: "https://trungnd11.github.io/30shine",
  },
  {
    id: 3,
    name: "Yody Shop",
    img: imgYody,
    type: "frontend",
    language: "ReactJs",
    linkgit: "https://github.com/trungnd11/yodyshop",
    linkdemo: "https://trungnd11.github.io/yodyshop",
  },
  {
    id: 4,
    name: "Shop Z-Sneaker",
    img: imgZsneaker,
    type: "backend",
    language: "java",
    linkgit: "https://trungnd11.github.io/z-sneaker/",
    linkdemo: "https://trungnd11.github.io/z-sneaker/",
  },
];

const animation = {
  bounce: {
    animation: "x 1s",
    animationName: Radium.keyframes(zoomInDown, "bounce"),
  },
};

export default function Portfolio() {

  const [listImg, setListImg] = useState(imgArr);
  const [tabActive, settabActive] = useState({
    all: true,
    fullStack: false,
    frontend: false,
    backend: false
  });

  const filterAll = () => {
    setListImg(imgArr);
    settabActive({
      all: true,
      fullStack: false,
      frontend: false,
      backend: false,
    });
  }

  const filterFullstack = () => {
    setListImg(imgArr.filter((item) => item.type === "fullstack"));
    settabActive({
      all: false,
      fullStack: true,
      frontend: false,
      backend: false,
    });
  }

  const filterFrontend = () => {
    setListImg(imgArr.filter((item) => item.type === "frontend"));
    settabActive({
      all: false,
      fullStack: false,
      frontend: true,
      backend: false,
    });
  }

  const filterBackend = () => {
    setListImg(imgArr.filter((item) => item.type === "backend"));
    settabActive({
      all: false,
      fullStack: false,
      frontend: false,
      backend: true,
    });
  };

  return (
    <div id="portfolio" className="wapper-portfolio">
      <div className="container">
        <div className="portfolio-heading">
          <h2 className="portfolio-title">My Project</h2>
          <p className="portfolio-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione!
          </p>
        </div>
        <div className="list-portfolio">
          <ul className="list-inline works-filter">
            <li
              className={`list-inline-item ${tabActive.all && "tab-active"}`}
              onClick={filterAll}
            >
              All
            </li>
            <li
              className={`list-inline-item ${
                tabActive.fullStack && "tab-active"
              }`}
              onClick={filterFullstack}
            >
              Full Stack
            </li>
            <li
              className={`list-inline-item ${
                tabActive.frontend && "tab-active"
              }`}
              onClick={filterFrontend}
            >
              Front End
            </li>
            <li
              className={`list-inline-item ${
                tabActive.backend && "tab-active"
              }`}
              onClick={filterBackend}
            >
              Back End
            </li>
          </ul>
        </div>
        <div className="img-portfolio">
          {listImg.map((item) => (
            <Radium.StyleRoot className="works-item">
              <div className="work-wapper" key={item.id} style={animation.bounce}>
                <div className="item-overlay">
                  <div className="category">{item.language}</div>
                  <img src={item.img} alt="" />
                  <div className="overlay-content">
                    <h6 className="overlay-title">{item.name}</h6>
                  </div>
                  <div className="overlay-btn">
                    <a
                      className="btn btn-primary"
                      href={item.linkgit}
                      data-lity=""
                    >
                      Github
                    </a>
                    <a className="btn btn-warning" href={item.linkdemo}>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </Radium.StyleRoot>
          ))}
        </div>
      </div>
    </div>
  );
}
