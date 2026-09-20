import "./Services.css";
import { services } from "../../utils/constants.js";
import Icon from "../Icon/Icon.jsx";
export default function Services() {
  return (
    <section
      className="services section"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Built for your property</p>
            <h2 id="services-title">
              Different roofs.
              <br />
              One professional team.
            </h2>
          </div>
          <p>
            From commercial buildings to familiar rooflines, explore the system
            that fits your property and your plans.
          </p>
        </div>
        <div className="services__grid">
          {services.map((service) => (
            <a className="services__card" href="#contact" key={service.title}>
              <div className="services__top">
                <Icon name={service.icon} />
                <span>{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.detail}</p>
              <span className="services__link">
                Discuss your project <Icon name="diagonal" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
