import './contact.scss';

export default function Contact() {
  return (
    <div id="contact" className="wapper-contact">
      <div className="container">
        <div className="contact-content">
          <i className="fa-solid fa-phone" />
          <h3>Call Us</h3>
          <ul>
            <a href="tel: 0869887809">
              <li>0869887809</li>
            </a>
            <a href="tel: 0356970795">
              <li>0356970795</li>
            </a>
          </ul>
        </div>
        <div className="contact-content">
          <i className="fa-solid fa-envelope" />
          <h3>Email Us</h3>
          <ul>
            <a href="mailto:trung.dn9500@gmail.com">
              <li>trung.dn9500@gmail.com</li>
            </a>
          </ul>
        </div>
        <div className="contact-content">
          <i className="fa-solid fa-location-dot" />
          <h3>Address</h3>
          <ul>
            <li>Danphuong - Hanoi</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
