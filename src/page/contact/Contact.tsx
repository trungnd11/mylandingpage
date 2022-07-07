import { forwardRef, useContext, useEffect, useImperativeHandle, useState } from "react";
import { ThemeContext } from "../../components/ContextTheme/ContextTheme";

function Contact(prop:any, ref:any) {
  const { theme } = useContext(ThemeContext);
  const [offset, setOffset] = useState<number>(0);

  useImperativeHandle(ref, () => offset, [offset]);

  useEffect(() => {
    const offsetDiv: any = document.getElementById("contact");
    setOffset(offsetDiv.offsetTop);
  }, [offset]);
  return (
    <div id="contact" className="wapper-contact">
      <div className="container">
        <div className="contact-content">
          <i
            className={`fa-solid fa-phone ${theme === "dark" && "icon-dark"}`}
          />
          <h3>Call Us</h3>
          <ul>
            <a href="tel: 0869887809">
              <li className={`${theme === "dark" && "title-dark"}`}>0869887809</li>
            </a>
            <a href="tel: 0356970795">
              <li className={`${theme === "dark" && "title-dark"}`}>0356970795</li>
            </a>
          </ul>
        </div>
        <div className="contact-content">
          <i
            className={`fa-solid fa-envelope ${
              theme === "dark" && "icon-dark"
            }`}
          />
          <h3>Email Us</h3>
          <ul>
            <a href="mailto:trung.dn9500@gmail.com">
              <li className={`${theme === "dark" && "title-dark"}`}>trung.dn9500@gmail.com</li>
            </a>
          </ul>
        </div>
        <div className="contact-content">
          <i
            className={`fa-solid fa-location-dot ${
              theme === "dark" && "icon-dark"
            }`}
          />
          <h3>Address</h3>
          <ul>
            <li>Danphuong - Hanoi</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Contact);
