import { useState } from "react";
import css from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={css.header}>
      <div className={`container ${css.header_container}`}>
        <a href="#home" className={css.logo}>
          <img
            src="/svg/bull-logo.svg"
            alt="Strikebull MMA Club"
            className={css.header_logo}
          />
        </a>

        <nav
          id="main-navigation"
          className={`${css.nav} ${isOpen ? css.open : ""}`}
          aria-label="Main navigation"
        >
          {isOpen && (
            <button
              type="button"
              className={css.close_button}
              aria-label="Close navigation"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          )}

          <a href="#home" className={css.header_link}>
            Home
          </a>

          <a href="#about" className={css.header_link}>
            About
          </a>

          <a href="#classes" className={css.header_link}>
            Classes
          </a>

          <a href="#contact" className={css.header_link}>
            Contact
          </a>
        </nav>

        {!isOpen && (
          <button
            type="button"
            className={css.burger_button}
            aria-label="Open navigation"
            aria-expanded={isOpen}
            aria-controls="main-navigation"
            onClick={() => setIsOpen(true)}
          >
            <svg className={css.burger_button_img} width="32" height="32">
              <use href="/svg/sprite.svg#icon-burger"></use>
            </svg>
          </button>
        )}
      </div>
    </header>
  );
}
