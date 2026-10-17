import css from "./Hero.module.css";
import { motion } from "motion/react";

import type { Dispatch, SetStateAction } from "react";

type HeroProps = {
  setSelectedPlanId: Dispatch<SetStateAction<string | null>>;
};

export default function Hero({ setSelectedPlanId }: HeroProps) {
  const handleFreeTrialClick = () => {
    setSelectedPlanId(null);
  };
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className={css.hero_section}
      id="hero"
    >
      <div className={`container ${css.hero_container}`}>
        <h1 className={css.hero_title}>STRIKEBULL MMA CLUB</h1>
        <p className={css.hero_text_under}>
          Mehr als nur ein Fitnessstudio. Ein Ort, an dem du stärker wirst,
          deine Fähigkeiten verbesserst und mit einem klaren Ziel trainierst.
        </p>
        <div className={css.hero_action}>
          <a
            href="#contacts"
            className={css.hero_btn_book}
            onClick={handleFreeTrialClick}
          >
            GRATIS PROBETRAINING BUCHEN
          </a>

          <a href="#about" className={css.hero_btn_learn}>
            MEHR ERFAHREN
          </a>
        </div>
      </div>
    </motion.section>
  );
}
