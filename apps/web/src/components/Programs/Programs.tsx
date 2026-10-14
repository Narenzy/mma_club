import css from "./Programs.module.css";

export default function Programs() {
  return (
    <section className={css.section_programs} id="programs">
      <div className={`container ${css.programs_container}`}>
        <p className={css.programs_label}>TRAIN YOUR WAY</p>
        <h2 className={css.programs_title}>OUR PROGRAMS</h2>
        <div className={css.classes_items}>
          <ul className={css.classes_list}>
            <li className={css.classes_item}>
              <img
                className={css.classes_image}
                src="/images/mma.webp"
                alt="MMA training"
              />

              <h3 className={css.classes_title}>MMA</h3>

              <p className={css.classes_description}>
                Striking, grappling, real fight skills.
              </p>
            </li>

            <li className={css.classes_item}>
              <img
                className={css.classes_image}
                src="/images/bjj.webp"
                alt="Brazilian Jiu-Jitsu training"
              />

              <h3 className={css.classes_title}>BRAZILIAN JIU-JITSU</h3>

              <p className={css.classes_description}>
                Technique, control, submissions.
              </p>
            </li>

            <li className={css.classes_item}>
              <img
                className={css.classes_image}
                src="/images/boxing.webp"
                alt="Boxing training"
              />

              <h3 className={css.classes_title}>BOXING</h3>

              <p className={css.classes_description}>
                Build power, speed and confidence.
              </p>
            </li>

            <li className={css.classes_item}>
              <img
                className={css.classes_image}
                src="/images/muay_thai.webp"
                alt="MUAY THAI training"
              />

              <h3 className={css.classes_title}>MUAY THAI</h3>

              <p className={css.classes_description}>
                Discipline, striking, mental strength.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
