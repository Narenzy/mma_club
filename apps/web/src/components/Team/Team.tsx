import css from "./Team.module.css";
import { motion } from "motion/react";

export default function Team() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      viewport={{ once: false }}
      id="team"
      className={css.team_section}
    >
      <div className={`container ${css.team_container}`}>
        <p className={css.team_label}>DAS TEAM HINTER STRIKEBULL</p>
        <h2 className={css.team_title}>UNSER TEAM</h2>
        <div className={css.team_items}>
          <ul className={css.team_list}>
            <li className={css.team_item}>
              <img
                className={css.team_image}
                src="/images/chernenko_dmytro.webp"
                alt="Dmytro Chernenko, boxing coach"
              />

              <h3 className={css.team_member_name}>CHERNENKO DMYTRO</h3>

              <p className={css.team_description}>Cheftrainer / MMA trainer</p>
            </li>

            <li className={css.team_item}>
              <img
                className={css.team_image}
                src="/images/chernenko_syzanna.webp"
                alt="Syzanna Chernenko administrator"
              />

              <h3 className={css.team_member_name}>CHERNENKO SUZANNA</h3>

              <p className={css.team_description}>Administratorin</p>
            </li>

            <li className={css.team_item}>
              <img
                className={css.team_image}
                src="/images/imhof_andreas.webp"
                alt="Imhof Andreas Club President"
              />

              <h3 className={css.team_member_name}>IMHOF ANDREAS</h3>

              <p className={css.team_description}> Präsident / Hauptpartner</p>
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
