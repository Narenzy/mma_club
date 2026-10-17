import css from "./Programs.module.css";

export default function Programs() {
  return (
    <section className={css.section_programs} id="programs">
      <div className={`container ${css.programs_container}`}>
        <p className={css.programs_label}>TRAINING BEI STRIKEBULL</p>
        <h2 className={css.programs_title}>MMA TRAINING</h2>
        <div className={css.classes_items}>
          <ul className={css.classes_list}>
            <li className={css.classes_item}>
              <img
                className={css.classes_image}
                src="/images/mma.webp"
                alt="MMA-Training"
              />

              <h3 className={css.classes_title}>MMA</h3>

              <p className={css.classes_description}>
                Schlagtechniken, Grappling und praxisnahe Kampffähigkeiten.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
