import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from "react";
import { ThemeContext } from "../../components/ContextTheme/ContextTheme";
import { bounceInDown, fadeInRight, fadeInLeft } from "react-animations";
import styled, { keyframes } from "styled-components";
import { InView } from "react-intersection-observer";
import { serviceArr } from "./ServicesData";

const tilte = keyframes`${bounceInDown}`;
const rightInAnimation = keyframes`${fadeInRight}`;
const leftInAnimation = keyframes`${fadeInLeft}`;

const Title = styled.div`
  animation: 3s ${tilte} forwards;
`;

const ContentRight = styled.div`
  animation: 3s ${rightInAnimation} forwards;
`;

const ContentLeft = styled.div`
  animation: 3s ${leftInAnimation} forwards;
`;


function Services(prop:any, ref:any) {
  const { theme } = useContext(ThemeContext);
  const [offset, setOffset] = useState<number>(0);

  useImperativeHandle(ref, () => offset, [offset]);

  useEffect(() => {
    const offsetDiv: any = document.getElementById("services");
    setOffset(offsetDiv.offsetTop);
  }, [offset]);

  return (
    <InView>
      {({ ref, inView }) => (
        <div ref={ref} id="services" className="wapper-service">
          <div className="container">
            <div className="services-heading">
              {inView && (
                <Title>
                  <h2 className="services-title">Programing Language</h2>
                  <p className="services-description">
                    Always learning new technologies!
                  </p>
                </Title>
              )}
            </div>
            <div className="services-content">
              {serviceArr.map((item, index) =>
                inView && index < 3 ? (
                  <ContentRight
                    className={`single-service ${
                      theme === "dark" && "single-service-dark"
                    }`}
                    key={index}
                  >
                    <i
                      className={`${item.icon} ${
                        theme === "dark" && "icon-dark"
                      }`}
                    />
                    <div className="service-body">
                      <h6
                        className={`service-title ${
                          theme === "dark" && "service-title-dark"
                        }`}
                      >
                        {item.name}
                      </h6>
                      <p className="service-description">{item.description}</p>
                    </div>
                  </ContentRight>
                ) : (
                  inView &&
                  index >= 3 && (
                    <ContentLeft
                      className={`single-service ${
                        theme === "dark" && "single-service-dark"
                      }`}
                      key={index}
                    >
                      <i
                        className={`${item.icon} ${
                          theme === "dark" && "icon-dark"
                        }`}
                      />
                      <div className="service-body">
                        <h6
                          className={`service-title ${
                            theme === "dark" && "service-title-dark"
                          }`}
                        >
                          {item.name}
                        </h6>
                        <p className="service-description">
                          {item.description}
                        </p>
                      </div>
                    </ContentLeft>
                  )
                )
              )}
            </div>
          </div>
        </div>
      )}
    </InView>
  );
}

export default forwardRef(Services);
