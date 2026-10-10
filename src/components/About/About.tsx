import css from "./About.module.css";

export default function About() {
  return (
    <section className={css.about_section} id="about">
      <div className={`container ${css.about_container}`}>
        <div className={css.about_wrapper}>
          <p className={css.about_text}>OUR STORY</p>
          <h2 className={css.about_title}>ABOUT OUR CLUB</h2>
          <p className={css.about_description}>
            Strikebull is a modern MMA club built for everyone — from beginners
            to professional athletes. High-level coaching, a supportive
            community and a focus on personal growth.
          </p>
          <a className={css.about_btn_learn} href="#classes">
            LEARN MORE
          </a>
        </div>
        <img
          className={css.about_img}
          src=""
          alt="MMA fighters training at Strikebull MMA Club"
        />
      </div>
    </section>
  );
}
