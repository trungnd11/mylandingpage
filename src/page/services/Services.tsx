
const serviceArr = [
  {
    name: "Html5, css(sass)",
    description: "2 years",
    icon: "fa-brands fa-html5",
  },
  {
    name: "Javascript(ES5, ES6)",
    description: "2 years",
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
    description: "2 years",
    icon: "fa-brands fa-js-square",
  },
  {
    name: "Bootstrap 4 ,5",
    description: "2 years",
    icon: "fa-brands fa-bootstrap",
  },
];

export default function Services() {
  return (
    <div id="services" className="wapper-service">
      <div className="container">
        <div className="services-heading">
          <h2 className="services-title">Services</h2>
          <p className="services-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione!
          </p>
        </div>
        <div className="services-content">
          {serviceArr.map((item, index) => (
            <div className="single-service" key={index}>
              <i className={item.icon} />
              <div className="service-body">
                <h6 className="service-title">{ item.name }</h6>
                <p className="service-description">
                  { item.description }
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}