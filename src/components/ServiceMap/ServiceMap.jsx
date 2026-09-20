import { useState } from "react";
import "./ServiceMap.css";
import { business } from "../../utils/constants.js";
import Icon from "../Icon/Icon.jsx";
export default function ServiceMap() {
  const [loaded, setLoaded] = useState(false);
  return (
    <section
      className="service-map"
      id="service-area"
      aria-labelledby="map-title"
    >
      <div className="container service-map__layout">
        <div className="service-map__info">
          <p className="eyebrow">Close to home</p>
          <h2 id="map-title">
            From El Paso
            <br />
            to Las Cruces.
          </h2>
          <p>
            Based in Chaparral, New Mexico.
            <br />
            Contact us to discuss service at your property.
          </p>
          <div className="service-map__address">
            <Icon name="pin" />
            <span>
              {business.streetAddress || "Street address — to be provided"}
              <strong>Chaparral, NM</strong>
            </span>
          </div>
          <a
            className="text-link"
            href={business.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Chaparral on Google Maps <Icon name="diagonal" />
          </a>
        </div>
        <div className="service-map__map">
          {loaded ? (
            <iframe
              title="Google map centered on Chaparral, New Mexico — general service region, not an office address"
              src={business.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <div className="service-map__placeholder">
              <Icon name="pin" />
              <h3>Chaparral, New Mexico</h3>
              <p>Between El Paso and Las Cruces</p>
              <button
                className="button button--primary"
                onClick={() => setLoaded(true)}
              >
                Load Google Map <Icon name="diagonal" />
              </button>
              <small>
                Loads a map from Google. General area, not an office pin.
              </small>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
