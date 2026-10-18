import css from "./Programs.module.css";
import { motion } from "motion/react";

export default function Programs() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: false }}
      className={css.section_programs}
      id="programs"
    >
      <div className={`container ${css.programs_container}`}>
        <p className={css.programs_label}>TRAINING BEI STRIKEBULL</p>
        <h2 className={css.programs_title}>MMA TRAINING</h2>
        <div className={css.classes_items}>
          <ul className={css.classes_list}>
            <li className={css.classes_item}>
              <picture>
                <source
                  media="(min-width: 1280px)"
                  srcSet="/images/prog-desk-img1x.webp 1x,
                          /images/prog-desk-img2x.webp 2x"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet="/images/prog-tab-img1x.webp 1x,
                          /images/prog-tab-img2x.webp 2x
                          "
                />

                <img
                  className={css.classes_image}
                  src="/images/prog-mob-1x.webp"
                  srcSet="/images/prog-mob-img1x.webp 1x,
                          /images/prog-mob-img2x.webp 2x
                          "
                  alt="MMA-Training"
                />
              </picture>

              <h3 className={css.classes_title}>MMA</h3>

              <p className={css.classes_description}>
                Schlagtechniken, Grappling und praxisnahe Kampffähigkeiten.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
