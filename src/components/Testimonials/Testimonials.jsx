import { useState } from "react";
import "./Testimonials.css";
import { reviews } from "../../utils/constants.js";
import Icon from "../Icon/Icon.jsx";
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];
  return (
    <section
      className="testimonials section"
      id="reviews"
      aria-labelledby="reviews-title"
    >
      <div className="container testimonials__layout">
        <div className="testimonials__intro">
          <p className="eyebrow">From our customers</p>
          <h2 id="reviews-title">
            Confidence.
            <br />
            In their words.
          </h2>
          <p>
            Hear about the experience from people who have worked with our team.
          </p>
          <div className="testimonials__controls">
            <button
              aria-label="Previous review"
              onClick={() =>
                setIndex((index + reviews.length - 1) % reviews.length)
              }
            >
              <Icon name="arrow" />
            </button>
            <span>
              {String(index + 1).padStart(2, "0")}{" "}
              <i>/ {String(reviews.length).padStart(2, "0")}</i>
            </span>
            <button
              aria-label="Next review"
              onClick={() => setIndex((index + 1) % reviews.length)}
            >
              <Icon name="arrow" />
            </button>
          </div>
        </div>
        <div
          className="testimonials__quote"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="testimonials__mark" aria-hidden="true">
            “
          </span>
          <blockquote>
            <p>{review.text}</p>
            <footer>
              <div className="testimonials__avatar" aria-hidden="true">
                {review.name
                  .split(" ")
                  .map((word) => word[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase()}
              </div>
              <div>
                <strong>{review.name}</strong>
                <a href={review.url} target="_blank" rel="noopener noreferrer">
                  Google reviewer profile <Icon name="diagonal" />
                </a>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
