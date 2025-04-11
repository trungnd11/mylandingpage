import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { InView } from "react-intersection-observer";
import { fadeInLeft, fadeInRight } from "react-animations";
import styled, { keyframes, css } from "styled-components";
import { ThemeContext } from "@/components/ContextTheme/ContextTheme";
import { OffsetModel } from "@/model/OffsetModel";
import { offsetDefault } from "@/components/container/Container";

const leftInAnimation = keyframes`${fadeInLeft}`;
const rightInAnimation = keyframes`${fadeInRight}`;

const Content = styled.div`
  animation: ${(prop: { animate: boolean }) =>
    prop.animate && css`2s ${leftInAnimation} forwards`};
`;

const Company = styled.div`
  animation: ${(prop: { animate: boolean }) =>
    prop.animate && css`2s ${rightInAnimation} forwards`};
`;

function Experience(_prop: any, ref: any) {
  const { theme } = useContext(ThemeContext);
  const [offset, setOffset] = useState<OffsetModel>(offsetDefault);

  useImperativeHandle(ref, () => offset, [offset]);

  useEffect(() => {
    const offsetDiv: HTMLDivElement | any = document.getElementById("experience");
    if (offsetDiv) {
      setOffset(() => ({
        offsetHeight: offsetDiv.offsetHeight,
        offsetTop: offsetDiv.offsetTop,
      }));
    }
  }, []);

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
            <Content animate={inView} className="exp-content">
              <h5 className={`subtitle ${theme === "dark" && "subtitle-dark"}`}>
                <Content animate={inView}>Having 6 years Experience</Content>
              </h5>
              <h3>
                Amazing <span>experience</span> with those companies
              </h3>
              <p>
                Great work experience and environment helps me learn new
                knowledge and improve my work experience.
              </p>
            </Content>
            <Company animate={inView} className="exp-container">
              <div
                className={`exp-block ${theme === "dark" && "exp-block-dark"}`}
              >
                <i
                  className={`fa-solid fa-building ${
                    theme === "dark" && "icon-dark"
                  }`}
                ></i>
                <h4>Foxcom</h4> <h6>2014 - 2015</h6>
              </div>
              <div
                className={`exp-block ${theme === "dark" && "exp-block-dark"}`}
              >
                <i
                  className={`fa-solid fa-building ${
                    theme === "dark" && "icon-dark"
                  }`}
                ></i>
                <h4>Canon</h4> <h6>2016 - 3 months</h6>
              </div>
              <div
                className={`exp-block ${theme === "dark" && "exp-block-dark"}`}
              >
                <i
                  className={`fa-solid fa-building ${
                    theme === "dark" && "icon-dark"
                  }`}
                ></i>
                <h4>Samsung</h4> <h6>2016 - 2019</h6>
              </div>
              <div
                className={`exp-block ${theme === "dark" && "exp-block-dark"}`}
              >
                <i
                  className={`fa-solid fa-building ${
                    theme === "dark" && "icon-dark"
                  }`}
                ></i>
                <h4>AC Tech</h4> <h6>2019 - 2020</h6>
              </div>
              <div
                className={`exp-block ${theme === "dark" && "exp-block-dark"}`}
              >
                <i
                  className={`fa-solid fa-building ${
                    theme === "dark" && "icon-dark"
                  }`}
                ></i>
                <h4>VETC</h4> <h6>2021 - 2024</h6>
              </div>
              <div
                className={`exp-block ${theme === "dark" && "exp-block-dark"}`}
              >
                <i
                  className={`fa-solid fa-building ${
                    theme === "dark" && "icon-dark"
                  }`}
                ></i>
                <h4>FPT</h4> <h6>2024 - Present</h6>
              </div>
            </Company>
          </div>
        </div>
      )}
    </InView>
  );
}

export default forwardRef(Experience);
