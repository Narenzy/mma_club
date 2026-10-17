import css from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer_section}>
      <div className={`container ${css.footer_container}`}>
        <h2 className={css.footer_title}>STRIKEBULL MMA CLUB</h2>
        <p className={css.footer_text}>
          © 2026 Strikebull. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
