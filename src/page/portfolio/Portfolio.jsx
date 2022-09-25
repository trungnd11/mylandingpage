import { useState, useContext, forwardRef, useImperativeHandle, useEffect } from "react";
import { zoomInDown, fadeInLeft, fadeInRight } from "react-animations";
import Radium from "radium";
import { InView } from "react-intersection-observer";
import styled, { keyframes } from "styled-components";
import { imgArr } from "./PortfolioData"
import { ThemeContext } from "../../components/ContextTheme/ContextTheme";

const animation = {
  bounce: {
    animation: "x 1s",
    animationName: Radium.keyframes(zoomInDown, "bounce"),
  },
};

const leftInAnimation = keyframes`${fadeInLeft}`;
const rightInAnimation = keyframes`${fadeInRight}`;

const LeftContent = styled.div`
  animation: 3s ${leftInAnimation} forwards;
`;

const RightContent = styled.div`
  animation: 3s ${rightInAnimation} forwards;
`;

function Portfolio(prop, ref) {

  const [listImg, setListImg] = useState(imgArr);
  const [tabActive, settabActive] = useState({
    all: true,
    fullStack: false,
    frontend: false,
    backend: false
  });
  const { theme } = useContext(ThemeContext);
  const [offset, setOffset] = useState(0);

  useImperativeHandle(
    ref,
    () => offset,
    [offset],
  )

  useEffect(() => {
    const offSetDiv = document.getElementById("project");
    setOffset(offSetDiv.offsetTop);
  }, [offset])

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
    <InView>
      {({ref, inView}) => (
        <div ref={ref}>
          <div id="project" className={`wapper-portfolio ${theme === "dark" && "wapper-portfolio-dark"}`}>
            <div className="container">
              {
                inView && (
                  <LeftContent className="portfolio-heading">
                    <h2 className="portfolio-title">My Project</h2>
                    <p className="portfolio-description">
                      Always do as much as you can!
                    </p>
                  </LeftContent>
                )
              }
              {
                inView && (
                  <RightContent className="list-portfolio">
                {theme !== "dark" ? (<ul className="list-inline works-filter">
                  <li
                    className={`list-inline-item ${tabActive.all && "tab-active"} `}
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
                </ul>) : (<ul className="list-inline-dark works-filter">
                  <li
                    className={`list-inline-item-dark ${tabActive.all && "tab-active-dark"} `}
                    onClick={filterAll}
                  >
                    All
                  </li>
                  <li
                    className={`list-inline-item-dark ${
                      tabActive.fullStack && "tab-active-dark"
                    }`}
                    onClick={filterFullstack}
                  >
                    Full Stack
                  </li>
                  <li
                    className={`list-inline-item-dark ${
                      tabActive.frontend && "tab-active-dark"
                    }`}
                    onClick={filterFrontend}
                  >
                    Front End
                  </li>
                  <li
                    className={`list-inline-item-dark ${
                      tabActive.backend && "tab-active-dark"
                    }`}
                    onClick={filterBackend}
                  >
                    Back End
                  </li>
                </ul>)}
              </RightContent>
                )
              }
              <div className="img-portfolio">
                {listImg.map((item) => (
                  inView && (
                    <Radium.StyleRoot className="works-item" key={item.id}>
                      <div className="work-wapper" style={animation.bounce}>
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
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
}

export default forwardRef(Portfolio);
