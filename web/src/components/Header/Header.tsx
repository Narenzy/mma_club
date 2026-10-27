import { useEffect, useState } from "react";
import css from "./Header.module.css";
import { motion } from "motion/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const mobileMedia = window.matchMedia("(max-width: 767px)");

    const updateBodyScroll = () => {
      document.body.style.overflow =
        isMenuOpen && mobileMedia.matches ? "hidden" : "";
    };

    updateBodyScroll();

    mobileMedia.addEventListener("change", updateBodyScroll);

    return () => {
      document.body.style.overflow = "";
      mobileMedia.removeEventListener("change", updateBodyScroll);
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className={css.header}
      id="home"
    >
      <div className={`container ${css.header_container}`}>
        <a href="#hero" className={css.logo} onClick={handleNavClick}>
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
            Startseite
          </a>

          <a href="#about" className={css.header_link} onClick={handleNavClick}>
            Über uns
          </a>

          <a
            href="#classes"
            className={css.header_link}
            onClick={handleNavClick}
          >
            Trainingsplan
          </a>

          <a
            href="#contacts"
            className={css.header_link}
            onClick={handleNavClick}
          >
            Kontakt
          </a>
          <a
            href="#programs"
            className={css.header_link}
            onClick={handleNavClick}
          >
            Programme
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
            <svg
              className={css.burger_button_img}
              width="32"
              height="32"
              aria-hidden="true"
            >
              <use href="/svg/sprite.svg#icon-burger"></use>
            </svg>
          </button>
        )}
      </div>
    </motion.header>
  );
}
