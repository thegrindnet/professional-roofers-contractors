import { useEffect, useRef, useState } from "react";
import "./Navigation.css";
import { business, navigationLinks } from "../../utils/constants.js";
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const root = useRef(null);
  const toggle = useRef(null);
  useEffect(() => {
    if (!open) return;
    function onKey(event) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    function onPointer(event) {
      if (!root.current?.contains(event.target)) setOpen(false);
    }
    function onResize() {
      if (window.innerWidth > 760) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);
  function navigate(event) {
    setOpen(false);
    const section = document.querySelector(
      event.currentTarget.getAttribute("href"),
    );
    if (section) {
      section.setAttribute("tabindex", "-1");
      section.focus({ preventScroll: true });
    }
  }
  return (
    <nav className="navigation" aria-label="Main navigation" ref={root}>
      <button
        ref={toggle}
        className="navigation__toggle"
        aria-expanded={open}
        aria-controls="main-navigation"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        <span className="navigation__toggle-lines" aria-hidden="true" />
        <span className="navigation__toggle-label">Menu</span>
      </button>
      <div
        id="main-navigation"
        className={`navigation__panel${open ? " navigation__panel--open" : ""}`}
      >
        <ul className="navigation__links">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a onClick={navigate} href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          className="button button--primary navigation__mobile-call"
          href={business.phoneHref}
        >
          Call now · {business.phone}
        </a>
      </div>
    </nav>
  );
}
