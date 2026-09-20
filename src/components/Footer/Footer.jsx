import "./Footer.css";
import { business, images, navigationLinks } from "../../utils/constants.js";
import Icon from "../Icon/Icon.jsx";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" aria-label="Back to home">
              <img
                src={images.logo}
                width="1000"
                height="333"
                alt={business.name}
                loading="lazy"
              />
            </a>
            <p>{business.tagline}</p>
          </div>
          <nav className="footer__nav" aria-label="Footer navigation">
            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href="#faq">FAQs</a>
          </nav>
          <div className="footer__contact">
            <span>LET’S TALK ROOFING</span>
            <a href={business.phoneHref}>
              {business.phone} <Icon name="diagonal" />
            </a>
            <p>{business.hours}</p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} {business.name}
          </p>
          <div>
            {business.facebookUrl ? (
              <a
                href={business.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook <Icon name="diagonal" />
              </a>
            ) : (
              <span>Facebook — link to be provided</span>
            )}
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </div>
      <div className="footer__mobile-actions">
        <a href={business.phoneHref}>
          <Icon name="phone" /> Call now
        </a>
        <a href="#contact">
          Request an estimate <Icon name="diagonal" />
        </a>
      </div>
    </footer>
  );
}
