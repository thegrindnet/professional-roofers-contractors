import "./Faq.css";
import { faqs, business } from "../../utils/constants.js";
import Icon from "../Icon/Icon.jsx";
export default function Faq() {
  return (
    <section className="faq section" id="faq" aria-labelledby="faq-title">
      <div className="container faq__layout">
        <div>
          <p className="eyebrow">A little clarity</p>
          <h2 id="faq-title">
            Good questions.
            <br />
            Straight answers.
          </h2>
          <p>
            Have something else in mind?
            <br />
            Let’s talk about your roof.
          </p>
          <a className="text-link" href={business.phoneHref}>
            Give us a call <Icon name="arrow" />
          </a>
        </div>
        <div className="faq__list">
          {faqs.map((faq, index) => (
            <details className="faq__item" key={faq.question}>
              <summary>
                <span className="faq__number">0{index + 1}</span>
                <span>{faq.question}</span>
                <span className="faq__plus" aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
