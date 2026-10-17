import css from "./About.module.css";
import { motion } from "motion/react";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      viewport={{ once: false }}
      className={css.about_section}
      id="about"
    >
      <div className={`container ${css.about_container}`}>
        <div className={css.about_wrapper}>
          <p className={css.about_text}>UNSERE GESCHICHTE</p>
          <h2 className={css.about_title}>ÜBER UNSEREN CLUB</h2>
          <p className={css.about_description}>
            Strikebull ist ein moderner MMA-Club für alle – von Anfängern bis
            hin zu professionellen Athleten. Hochwertiges Coaching, eine
            unterstützende Community und der Fokus auf persönliche
            Weiterentwicklung stehen bei uns im Mittelpunkt.
          </p>
          <a className={css.about_btn_learn} href="#classes">
            MEHR ERFAHREN
          </a>
        </div>
        <img
          className={css.about_img}
          src=""
          alt="MMA fighters training at Strikebull MMA Club"
        />
      </div>
    </motion.section>
  );
}
