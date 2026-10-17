import css from "./Footer.module.css";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className={css.footer_section}
    >
      <div className={`container ${css.footer_container}`}>
        <h2 className={css.footer_title}>STRIKEBULL MMA CLUB</h2>
        <p className={css.footer_text}>
          © 2026 Strikebull. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
