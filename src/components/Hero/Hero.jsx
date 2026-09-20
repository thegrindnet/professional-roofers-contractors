import "./Hero.css";
import { business, images } from "../../utils/constants.js";
import Icon from "../Icon/Icon.jsx";
export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__visual">
        <picture>
          <source media="(max-width: 600px)" srcSet={images.heroMobile} />
          <img
            className="hero__image"
            src={images.hero}
            width="1920"
            height="1079"
            alt="Aerial view of a finished shingle roof on a home in a desert neighborhood"
            fetchPriority="high"
          />
        </picture>
      </div>
      <div className="hero__angle" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">Professional Roofers and Contractors, LLC</p>
          <h1 id="hero-title">
            Strong roofs.
            <br />
            Solid{" "}
            <span>
              peace
              <br className="hero__break" /> of mind.
            </span>
          </h1>
          <p className="hero__description">
            The right roof starts with the right team. Commercial roofing and
            roof systems for properties across El Paso and Las Cruces.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contact">
              Request an estimate <Icon name="diagonal" />
            </a>
            <a className="button button--outline" href="#gallery">
              Explore our work
            </a>
          </div>
          <div className="hero__note">
            <span>BASED IN CHAPARRAL, NM</span>
            <span>BUILT AROUND YOUR PROPERTY</span>
          </div>
        </div>
        <div className="hero__caption">
          <span>REAL PROJECTS. REAL CRAFTSMANSHIP.</span>
          <a href="#gallery" aria-label="View our roofing projects">
            <Icon name="diagonal" />
          </a>
        </div>
      </div>
      <div className="hero__systems">
        <div className="container hero__systems-inner">
          <span>
            THE RIGHT SYSTEM.
            <br />
            <strong>FOR YOUR ROOF.</strong>
          </span>
          <p>
            Modified <i aria-hidden="true">/</i> TPO <i aria-hidden="true">/</i>{" "}
            PVC <i aria-hidden="true">/</i> Shingle <i aria-hidden="true">/</i>{" "}
            Metal
          </p>
          <a href={business.phoneHref}>
            Let’s talk roofing <Icon name="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
