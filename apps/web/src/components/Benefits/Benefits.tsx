import css from "./Benefits.module.css";

const benefits = [
  {
    title: "PROFESSIONELLE TRAINER",
    text: "Erfahrene Coaches",
  },
  {
    title: "MODERNE AUSSTATTUNG",
    text: "Hochwertige Trainingsgeräte",
  },
  {
    title: "COMMUNITY",
    text: "Gemeinsam trainieren",
  },
  {
    title: "ECHTE ERGEBNISSE",
    text: "Selbstvertrauen aufbauen",
  },
];

export default function Benefits() {
  return (
    <section className={css.benefits_section} id="benefits">
      <div className={`container ${css.benefits_container}`}>
        <p className={css.benefits_label}>UNSERE VORTEILE</p>

        <h2 className={css.benefits_title}>WARUM STRIKEBULL?</h2>

        <p className={css.benefits_description}>
          Modernes Coaching, hochwertige Ausstattung und eine Community, die
          dich motiviert und voranbringt.
        </p>

        <ul className={css.benefits_list}>
          {benefits.map((benefit) => (
            <li className={css.benefits_item} key={benefit.title}>
              <div className={css.benefits_svg_wrapper}>
                <svg
                  className={css.benefits_svg_circle}
                  width="32"
                  height="32"
                  aria-hidden="true"
                >
                  <use href="/svg/sprite.svg#icon-ellipse" />
                </svg>
                <svg
                  className={css.benefits_svg_check}
                  width="32"
                  height="32"
                  aria-hidden="true"
                >
                  <use href="/svg/sprite.svg#icon-check-benefits" />
                </svg>
              </div>

              <div className={css.benefits_description_container}>
                <h3 className={css.benefits_subtitle}>{benefit.title}</h3>

                <p className={css.benefits_text}>{benefit.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
