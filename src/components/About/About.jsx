import "./About.css";
import { business, images } from "../../utils/constants.js";
import Icon from "../Icon/Icon.jsx";
export default function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="container about__layout">
        <div className="about__visual">
          <img
            src={images.membrane}
            alt="Roofing team carefully installing material along a roof edge"
            width="680"
            height="510"
            loading="lazy"
          />
          <div className="about__signature">
            <span>
              PROFESSIONAL ROOFERS
              <br />
              AND CONTRACTORS, LLC
            </span>
            <strong>
              Local people.
              <br />
              Professional work.
            </strong>
          </div>
        </div>
        <div className="about__content">
          <p className="eyebrow">Your roof. Our focus.</p>
          <h2 id="about-title">
            The right people
            <br />
            over your head.
          </h2>
          <p>
            Based in Chaparral, New Mexico, Professional Roofers and
            Contractors, LLC is led by Jerry Ortega and specializes in
            commercial roof systems.
          </p>
          <p>
            From modified, TPO, and PVC to shingle and metal roofing, we help
            you explore the options for your property. Tell us what you have in
            mind. We’ll talk through your needs and the next steps.
          </p>
          <div className="about__details">
            <div>
              <span>BASED IN</span>
              <strong>Chaparral, NM</strong>
            </div>
            <div>
              <span>SERVING</span>
              <strong>El Paso & Las Cruces</strong>
            </div>
          </div>
          <a className="text-link" href={business.phoneHref}>
            Talk with Jerry Ortega <Icon name="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
