import './contact.scss';

export default function Contact() {
  return (
    <div className="wapper-contact">
      <div className="container">
        <div className="contact-content">
          <i className="fa-solid fa-phone" />
          <h3>Call Us</h3>
          <ul>
            <li>0869887809</li>
            <li>0356970795</li>
          </ul>
        </div>
        <div className="contact-content">
          <i className="fa-solid fa-envelope" />
          <h3>Email Us</h3>
          <ul>
            <li>trung.dn9500@gmail.com</li>
          </ul>
        </div>
        <div className="contact-content">
          <i className="fa-solid fa-location-dot" />
          <h3>Address</h3>
          <ul>
            <li>Hanoi</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
