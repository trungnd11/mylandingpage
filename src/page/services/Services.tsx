import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from "react";
import { ThemeContext } from "../../components/ContextTheme/ContextTheme";
const serviceArr = [
  {
    name: "Html5, css(sass)",
    description: "Use it proficiently",
    icon: "fa-brands fa-html5",
  },
  {
    name: "Javascript(ES5, ES6)",
    description: "Use it proficiently",
    icon: "fa-brands fa-js",
  },
  {
    name: "ReactJs",
    description: "1 years",
    icon: "fa-brands fa-react",
  },
  {
    name: "Java(Spring boot)",
    description: "1 years",
    icon: "fa-brands fa-java",
  },
  {
    name: "Jquery",
    description: "Use it proficiently",
    icon: "fa-brands fa-js-square",
  },
  {
    name: "Bootstrap 4 ,5",
    description: "Use it proficiently",
    icon: "fa-brands fa-bootstrap",
  },
];

function Services(prop:any, ref:any) {
  const { theme } = useContext(ThemeContext);
  const [offset, setOffset] = useState<number>(0);

  useImperativeHandle(ref, () => offset, [offset]);

  useEffect(() => {
    const offsetDiv: any = document.getElementById("services");
    setOffset(offsetDiv.offsetTop);
  }, [offset]);

  return (
    <div id="services" className="wapper-service">
      <div className="container">
        <div className="services-heading">
          <h2 className="services-title">Programing Language</h2>
          <p className="services-description">
            Always learning new technologies!
          </p>
        </div>
        <div className="services-content">
          {serviceArr.map((item, index) => (
            <div
              className={`single-service ${
                theme === "dark" && "single-service-dark"
              }`}
              key={index}
            >
              <i
                className={`${item.icon} ${theme === "dark" && "icon-dark"}`}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Services);
