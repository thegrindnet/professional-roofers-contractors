import "./Header.css";
import { business, images } from "../../utils/constants.js";
import Navigation from "../Navigation/Navigation.jsx";
import Icon from "../Icon/Icon.jsx";
export default function Header() {
  return (
    <header className="header">
      <div className="header__utility">
        <div className="container header__utility-inner">
          <span>
            {business.location} <span className="header__separator">/</span>{" "}
            Serving the {business.serviceArea}
          </span>
          <a href={business.officeHref}>Office: {business.office}</a>
        </div>
      </div>
      <div className="container header__main">
        <a
          href="#home"
          className="header__brand"
          aria-label={`${business.name} — home`}
        >
          <img
            src={images.logo}
            width="1000"
            height="333"
            alt={business.name}
          />
        </a>
        <Navigation />
        <a className="header__call" href={business.phoneHref}>
          <Icon name="phone" />
          <span>
            Call Jerry Ortega<strong>{business.phone}</strong>
          </span>
        </a>
      </div>
    </header>
  );
}
