/* eslint-disable jsx-a11y/anchor-is-valid */
import avatar from "@/assets/image/avatar3.jpg";
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
import { ThemeContext } from "@/components/ContextTheme/ContextTheme";
import { OffsetModel } from "@/model/OffsetModel";
import { offsetDefault } from "@/components/container/Container";
import { getAgeByYearOfBirth } from "@/helpper/helpper";
import {useGetAbout} from "@/page/about/hooks/useGetAbout";
import parse from 'html-react-parser';
import AppImage from "@/components/AppImage/AppImage";
import AppSkeletonWrapper from "@/components/AppSkeletonWrapper/AppSkeletonWrapper";
import AppTextSkeleton from "@/components/AppTextSkeleton/AppTextSkeleton";

const leftInAnimation = keyframes`${rotateInDownLeft}`;
const rightInAnimation = keyframes`${rotateInDownRight}`;

const Image = styled.div`
  animation: ${(prop: { animate: boolean }) => prop.animate && css`2s ${leftInAnimation} forwards`};
`;

const Info = styled.div`
  animation: ${(prop: { animate: boolean }) =>
    prop.animate && css`2s ${rightInAnimation} forwards`};
`;

function About(prop: any, ref: any) {
  const { theme } = useContext(ThemeContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState<OffsetModel>(offsetDefault);

  const { about, isLoading } = useGetAbout();

  useImperativeHandle(ref, () => offset, [offset]);

  useEffect(() => {
    if (aboutRef.current)
      setOffset(() => ({
        offsetHeight: aboutRef.current?.offsetHeight,
        offsetTop: aboutRef.current?.offsetTop,
      }));
  }, []);

  return (
    <InView triggerOnce={true}>
      {({ ref, inView }) => (
        <div ref={ref} className="about-container">
          <div ref={aboutRef} id="about" className="about-wapper">
            <Image animate={inView} className="about-img">
              <AppImage src={about?.avatarUrl} alt={about?.name} />
            </Image>
            <Info animate={inView} className="about-content">
              <div className="section-heading">
                <Info animate={inView}>
                  <h2>About Me</h2>
                </Info>
                <h6 className={`${theme === "dark" && "title-dark"}`}>
                  { about?.title }
                </h6>
              </div>
              <AppSkeletonWrapper loading={isLoading} skeleton={<AppTextSkeleton lines={10} />}>
              <div className="content-description">
                { parse(about?.description ?? "") }
              </div>
              <hr />
                <ul className="about-info">
                  <li>
                    <span>Name:</span> <p>{ about?.name }</p>
                  </li>
                  <li>
                    <span>Email:</span>
                    <p>
                      <a
                        className={`${theme === "dark" && "title-dark"}`}
                        href={`mailto:${about?.email}`}
                      >
                        { about?.email }
                      </a>
                    </p>
                  </li>
                  <li>
                    <span>Age:</span> <p>{ getAgeByYearOfBirth(1995) }</p>
                  </li>
                  <li>
                    <span>From:</span> <p>{ about?.from }</p>
                  </li>
                </ul>
              </AppSkeletonWrapper>
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
