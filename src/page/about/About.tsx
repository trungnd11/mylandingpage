/* eslint-disable jsx-a11y/anchor-is-valid */
import avatar from "../../static/image/avatar2.jpg";
import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { InView } from "react-intersection-observer";
import { rotateInDownRight, rotateInDownLeft } from "react-animations";
import styled, { keyframes, css } from "styled-components";
import { ThemeContext } from "../../components/ContextTheme/ContextTheme";
import { OffsetModel } from "../../model/OffsetModel";
import { offsetDefault } from "../../components/container/Container";

const leftInAnimation = keyframes`${rotateInDownLeft}`;
const rightInAnimation = keyframes`${rotateInDownRight}`;

const Image = styled.div`
  animation: ${(prop: { animate: boolean }) =>
    prop.animate && css`2s ${leftInAnimation} forwards`};
`;

const Info = styled.div`
  animation: ${(prop: { animate: boolean }) =>
    prop.animate && css`2s ${rightInAnimation} forwards`};
`;

function About(prop: any, ref: any) {
  const { theme } = useContext(ThemeContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState<OffsetModel>(offsetDefault);

  useImperativeHandle(ref, () => offset, [offset]);

  useEffect(() => {
    if (aboutRef.current)
      setOffset(() => ({
        offsetHeight: aboutRef.current?.offsetHeight,
        offsetTop: aboutRef.current?.offsetTop,
      }));
  }, []);

  return (
    <InView>
      {({ ref, inView }) => (
        <div ref={ref} className="about-container">
          <div ref={aboutRef} id="about" className="about-wapper">
            <Image animate={inView} className="about-img">
              <img src={avatar} alt="" />
            </Image>
            <Info animate={inView} className="about-content">
              <div className="section-heading">
                <Info animate={inView}>
                  <h2>About Me</h2>
                </Info>
                <h6 className={`${theme === "dark" && "title-dark"}`}>
                  I am Full-Stack Web Developer
                </h6>
              </div>
              <div className="content-description">
                <p>I am love programing and new technologies.</p>
                <p>
                  I always spend my free time learning new technologies to
                  upgrade myself to be a senior programmer. And, I want to learn
                  and improve my knowledge through a professional working
                  environment.
                </p>
              </div>
              <hr />
              <ul className="about-info">
                <li>
                  <span>Name:</span> <p>Nguyen Dinh Trung</p>
                </li>
                <li>
                  <span>Email:</span>
                  <p>
                    <a
                      className={`${theme === "dark" && "title-dark"}`}
                      href="mailto:trung.dn9500@gmail.com"
                    >
                      trung.dn9500@gmail.com
                    </a>
                  </p>
                </li>
                <li>
                  <span>Age:</span> <p>26</p>
                </li>
                <li>
                  <span>From:</span> <p>Hanoi</p>
                </li>
              </ul>
              <div className="wapper-btn">
                <a
                  className={`btn btn-wiggle ${theme === "dark" && "btn-dark"}`}
                  href="#contact"
                >
                  <span>Contact</span>
                </a>
                <a
                  className={`btn btn-pulse ${theme === "dark" && "btn-dark"}`}
                  href="#experience"
                >
                  <span>Experience</span>
                </a>
              </div>
            </Info>
          </div>
        </div>
      )}
    </InView>
  );
}

export default forwardRef(About);
