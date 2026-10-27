import css from "./Classes.module.css";
import { useState } from "react";
import type { Category } from "../../types/classes";
import { categories, classesShedule } from "../../data/classes";
import { motion } from "motion/react";

export default function Classes() {
  const [activeCategory, setActiveCategory] = useState<Category>("Alle");

  const filteredClasses =
    activeCategory === "Alle"
      ? classesShedule
      : classesShedule.filter((item) => item.discipline === activeCategory);

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      viewport={{ once: false }}
      className={css.classes_section}
      id="classes"
    >
      <div className={`container ${css.classes_container}`}>
        <div className={css.classes_text_container}>
          <p className={css.classes_label}>DEIN TRAINING PLANEN</p>

          <h2 className={css.classes_title}>TRAININGSPLAN</h2>

          <div className={css.classes_filter}>
            {categories.map((category) => (
              <button
                className={`${css.classes_btn} ${
                  activeCategory === category ? css.classes_btn_active : ""
                }`}
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className={css.classes_info_container}>
          <ul className={css.classes_list}>
            {filteredClasses.map((item) => (
              <li
                className={css.classes_item}
                key={`${item.day}-${item.time}-${item.discipline}`}
              >
                <span className={css.classes_day}>{item.day}</span>
                <span className={css.classes_time}>{item.time}</span>
                <strong className={css.classes_discipline}>
                  {item.discipline}
                </strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
