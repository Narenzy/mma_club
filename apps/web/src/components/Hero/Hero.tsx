import css from "./Hero.module.css";

import type { Dispatch, SetStateAction } from "react";

type HeroProps = {
  setSelectedPlanId: Dispatch<SetStateAction<string | null>>;
};

export default function Hero({ setSelectedPlanId }: HeroProps) {
  const handleFreeTrialClick = () => {
    setSelectedPlanId(null);
  };
  return (
    <section className={css.hero_section} id="hero">
      <div className={`container ${css.hero_container}`}>
        <h1 className={css.hero_title}>STRIKEBULL MMA CLUB</h1>
        <p className={css.hero_text_under}>
          More than a gym. A place to grow stronger, sharpen your skills, and
          train with purpose.
        </p>
        <div className={css.hero_action}>
          <a
            href="#contacts"
            className={css.hero_btn_book}
            onClick={handleFreeTrialClick}
          >
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
