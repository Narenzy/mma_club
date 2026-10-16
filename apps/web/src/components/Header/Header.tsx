import { useEffect, useState } from "react";
import css from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={css.header} id="home">
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
          className={`${css.nav} ${isMenuOpen ? css.open : ""}`}
          aria-label="Main navigation"
        >
          {isMenuOpen && (
            <button
              type="button"
              className={css.close_button}
              aria-label="Close navigation"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>
          )}

          <a href="#hero" className={css.header_link} onClick={handleNavClick}>
            Home
          </a>

          <a href="#about" className={css.header_link} onClick={handleNavClick}>
            About
          </a>

          <a
            href="#classes"
            className={css.header_link}
            onClick={handleNavClick}
          >
            Classes
          </a>

          <a
            href="#contacts"
            className={css.header_link}
            onClick={handleNavClick}
          >
            Contact
          </a>
          <a
            href="#programs"
            className={css.header_link}
            onClick={handleNavClick}
          >
            Programs
          </a>
        </nav>

        {!isMenuOpen && (
          <button
            type="button"
            className={css.burger_button}
            aria-label="Open navigation"
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            onClick={() => setIsMenuOpen(true)}
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
