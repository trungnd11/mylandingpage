/* eslint-disable jsx-a11y/anchor-is-valid */

export default function NavigateMobile() {
  return (
    <div className="navigate-mobile">
      <div className="list-item">
        <ul>
          <a href="#home">
            <li className="item">
              <i className="fa-solid fa-house"></i>
              <span>Home</span>
            </li>
          </a>
          <a href="#about">
            <li className="item">
              <i className="fa-solid fa-address-card"></i>
              <span>About</span>
            </li>
          </a>
          <a href="#experience">
            <li className="item">
              <i className="fa-solid fa-clock-rotate-left"></i>
              <span>Expe...</span>
            </li>
          </a>
          <a href="#services">
            <li className="item">
              <i className="fa-solid fa-gear"></i>
              <span>Skill</span>
            </li>
          </a>
          <a href="#project">
            <li className="item">
              <i className="fa-solid fa-file-lines"></i>
              <span>Project</span>
            </li>
          </a>
          <a href="#contact">
            <li className="item">
              <i className="fa-solid fa-user-check"></i>
              <span>Contact</span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
