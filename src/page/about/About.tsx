/* eslint-disable jsx-a11y/anchor-is-valid */
import "./about.scss";
import avatar from "../../static/image/avatar2.jpg";

export default function About() {
  return (
    <div id="about" className="about-wapper">
      <div className="about-img">
        <img
          src={avatar}
          alt=""
        />
      </div>
      <div className="about-content">
        <div className="section-heading">
          <h2>About Me</h2>
          <h6>I am Full-Stack Web Developer</h6>
        </div>
        <p>
          Sed ut perspiciatis unde accusantium doloremque laudantium,totam rem
          aperiam.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi.
        </p>
        <hr />
        <ul className="about-info">
          <li>
            <span>Name:</span> <p>Nguyen Dinh Trung</p>
          </li>
          <li>
            <span>Email:</span>
            <p>
              <a href="mailto:trung.dn9500@gmail.com">trung.dn9500@gmail.com</a>
            </p>
          </li>
          <li>
            <span>Age:</span> <p>25</p>
          </li>
          <li>
            <span>From:</span> <p>Hanoi</p>
          </li>
        </ul>
        <a className="btn btn-wiggle" href="#contact">
          <span>Contact</span>
        </a>
        <a className="btn btn-pulse" href="#experience">
          <span>Experience</span>
        </a>
      </div>
    </div>
  );
}
