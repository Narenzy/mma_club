import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.hero_section}>
      <div className={`container ${css.hero_container}`}>
        <h1 className={css.hero_title}>STRIKEBULL MMA CLUB</h1>
        <p className={css.hero_text_under}>
          More than a gym. A place to grow stronger, sharpen your skills, and
          train with purpose.
        </p>
        <div className={css.hero_action}>
          <a href="#contact" className={css.hero_btn_book}>
            BOOK A FREE TRIAL
          </a>

          <a href="#about" className={css.hero_btn_learn}>
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
}
