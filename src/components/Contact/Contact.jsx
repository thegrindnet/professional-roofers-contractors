import "./Contact.css";
import { business } from "../../utils/constants.js";
import Icon from "../Icon/Icon.jsx";
export default function Contact() {
  return (
    <section
      className="contact section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact__top">
          <div>
            <p className="eyebrow">Let’s get your project started</p>
            <h2 id="contact-title">
              Your next roof
              <br />
              starts with a conversation.
            </h2>
            <p>
              Tell us where your property is, what kind of roof you have, and
              what you need. We’ll take it from there.
            </p>
          </div>
          <a className="button button--light" href={business.estimateHref}>
            Request an estimate by email <Icon name="diagonal" />
          </a>
        </div>
        <div className="contact__grid">
          <a className="contact__item" href={business.phoneHref}>
            <Icon name="phone" />
            <span>
              CALL JERRY ORTEGA<strong>{business.phone}</strong>
            </span>
            <Icon name="diagonal" />
          </a>
          <a className="contact__item" href={business.officeHref}>
            <Icon name="building" />
            <span>
              CALL THE OFFICE<strong>{business.office}</strong>
            </span>
            <Icon name="diagonal" />
          </a>
          <a
            className="contact__item contact__item--email"
            href={business.emailHref}
          >
            <Icon name="mail" />
            <span>
              EMAIL US<strong>{business.email}</strong>
            </span>
            <Icon name="diagonal" />
          </a>
        </div>
        <div className="contact__hours">
          <span>{business.hours}</span>
          <span>Serving the {business.serviceArea}</span>
        </div>
      </div>
    </section>
  );
}
