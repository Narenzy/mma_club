import { useState } from "react";
import css from "./Header.module.css";

// change svg to sprite.svg //

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={` .container ${css.header}`}>
      <div className={css.logo}>
        <a href="#home" className={css.logo}>
          <img
            src="/svg/strikebull-logo.svg"
            alt="Strikebull MMA Club"
            className={css.logo_img}
          />
        </a>
      </div>
      <nav className={`${css.nav} ${isOpen ? css.open : ""}`}>
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
      <button
        className={css.burger_button}
        aria-label="Toogle navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src="/svg/burger-menu.svg"
          alt="Strikebull Menu"
          className={css.burger_button_img}
        />
      </button>
    </header>
  );
}
