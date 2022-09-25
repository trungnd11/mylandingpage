import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from "react";
import { InView } from "react-intersection-observer";
import { fadeInLeft, fadeInRight } from "react-animations";
import styled, { keyframes } from "styled-components";
import { ThemeContext } from "../../components/ContextTheme/ContextTheme";

const leftInAnimation = keyframes`${fadeInLeft}`;
const rightInAnimation = keyframes`${fadeInRight}`;


const Content = styled.div`
  animation: 3s ${leftInAnimation} forwards;
`;

const Company = styled.div`
  animation: 3s ${rightInAnimation} forwards;
`;

function Experience(prop: any, ref: any) {
  const { theme } = useContext(ThemeContext);
  const [offset, setOffset] = useState<number>(0);

  useImperativeHandle(ref, () => offset, [offset]);

  useEffect(() => {
    const offsetDiv:any = document.getElementById("experience");
    setOffset(offsetDiv.offsetTop);
  }, [offset]);
  
  return (
    <InView>
      {({ ref, inView }) => (
        <div
          ref={ref}
          id="experience"
          className={`experience-area ${
            theme === "dark" && "experience-area-dark"
          }`}
        >
          <div className="container">
            {inView && (
              <Content className="exp-content">
                <h5
                  className={`subtitle ${theme === "dark" && "subtitle-dark"}`}
                >
                  {inView && <Content>Having 6 years Experience</Content>}
                </h5>
                <h3>
                  Amazing <span>experience</span> with those companies
                </h3>
                <p>
                  4 years working in electronics but with passion for
                  technology, I decided to pursue my IT industry.
                </p>
                <p>
                  Great work experience and environment helps me learn new
                  knowledge and improve my work experience.
                </p>
              </Content>
            )}
            {inView && (
              <Company className="exp-container">
                <div
                  className={`exp-block ${
                    theme === "dark" && "exp-block-dark"
                  }`}
                >
                  <i
                    className={`fa-solid fa-building ${
                      theme === "dark" && "icon-dark"
                    }`}
                  ></i>
                  <h4>Foxcom</h4> <h6>2014 - 2015</h6>
                </div>
                <div
                  className={`exp-block ${
                    theme === "dark" && "exp-block-dark"
                  }`}
                >
                  <i
                    className={`fa-solid fa-building ${
                      theme === "dark" && "icon-dark"
                    }`}
                  ></i>
                  <h4>Canon</h4> <h6>2016 - 3 months</h6>
                </div>
                <div
                  className={`exp-block ${
                    theme === "dark" && "exp-block-dark"
                  }`}
                >
                  <i
                    className={`fa-solid fa-building ${
                      theme === "dark" && "icon-dark"
                    }`}
                  ></i>
                  <h4>Samsung</h4> <h6>2016 - 2020</h6>
                </div>
                <div
                  className={`exp-block ${
                    theme === "dark" && "exp-block-dark"
                  }`}
                >
                  <i
                    className={`fa-solid fa-building ${
                      theme === "dark" && "icon-dark"
                    }`}
                  ></i>
                  <h4>AC Tech</h4> <h6>2020 - Present</h6>
                </div>
              </Company>
            )}
          </div>
        </div>
      )}
    </InView>
  );
}

export default forwardRef(Experience)
