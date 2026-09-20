import { useEffect, useRef, useState } from "react";
import "./Gallery.css";
import { galleryItems } from "../../utils/constants.js";
import Icon from "../Icon/Icon.jsx";
export default function Gallery() {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(0);
  const dialog = useRef(null);
  const closeButton = useRef(null);
  const opener = useRef(null);
  const item = galleryItems[selected];
  function openPhoto(index, event) {
    opener.current = event.currentTarget;
    setSelected(index);
    dialog.current.showModal();
    closeButton.current?.focus();
  }
  function closePhoto() {
    dialog.current.close();
  }
  function move(direction) {
    setSelected(
      (current) =>
        (current + direction + galleryItems.length) % galleryItems.length,
    );
  }
  useEffect(() => {
    function onKey(event) {
      if (!dialog.current?.open) return;
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        setSelected(
          (current) =>
            (current +
              (event.key === "ArrowRight" ? 1 : -1) +
              galleryItems.length) %
            galleryItems.length,
        );
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return (
    <section
      className="gallery section"
      id="gallery"
      aria-labelledby="gallery-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The work speaks</p>
            <h2 id="gallery-title">
              See what goes
              <br />
              into a better roof.
            </h2>
          </div>
          <p>
            A closer look at the projects, the process, and the people behind
            the work.
          </p>
        </div>
        <div className="gallery__grid">
          {galleryItems
            .slice(0, expanded ? galleryItems.length : 6)
            .map((photo, index) => (
              <button
                className={`gallery__item${index === 0 ? " gallery__item--featured" : ""}`}
                key={photo.image}
                onClick={(event) => openPhoto(index, event)}
                aria-label={`Enlarge photo: ${photo.title}`}
              >
                <img
                  src={photo.image}
                  alt={photo.alt}
                  loading="lazy"
                  width="680"
                  height="510"
                />
                <span className="gallery__overlay">
                  <span>
                    <small>{photo.category}</small>
                    <strong>{photo.title}</strong>
                  </span>
                  <Icon name="diagonal" />
                </span>
              </button>
            ))}
        </div>
        <div className="gallery__bottom">
          <p>Roof systems. Real-world results.</p>
          <button
            className="button button--outline"
            aria-expanded={expanded}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show fewer photos" : "View all project photos"}{" "}
            <Icon name="arrow" />
          </button>
        </div>
      </div>
      <dialog
        ref={dialog}
        className="gallery__dialog"
        aria-label="Project photo viewer"
        onClose={() => opener.current?.focus()}
        onClick={(event) => {
          if (event.target === dialog.current) closePhoto();
        }}
      >
        <div className="gallery__dialog-inner">
          <button
            ref={closeButton}
            className="gallery__close"
            onClick={closePhoto}
            aria-label="Close photo viewer"
          >
            <Icon name="close" />
          </button>
          <img src={item.image} alt={item.alt} />
          <div className="gallery__dialog-footer">
            <button
              className="gallery__previous"
              onClick={() => move(-1)}
              aria-label="Previous photo"
            >
              <Icon name="chevron" />
            </button>
            <p aria-live="polite">
              {item.title}
              <small>
                {selected + 1} / {galleryItems.length}
              </small>
            </p>
            <button onClick={() => move(1)} aria-label="Next photo">
              <Icon name="chevron" />
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
}
