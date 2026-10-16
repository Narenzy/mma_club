import css from "./Benefits.module.css";

const benefits = [
  {
    title: "PRO COACHES",
    text: "Experienced trainers",
  },
  {
    title: "MODERN FACILITIES",
    text: "Quality equipment",
  },
  {
    title: "COMMUNITY",
    text: "Train together",
  },
  {
    title: "REAL RESULTS",
    text: "Build confidence",
  },
];

export default function Benefits() {
  return (
    <section className={css.benefits_section} id="benefits">
      <div className={`container ${css.benefits_container}`}>
        <p className={css.benefits_label}>OUR ADVANTAGES</p>

        <h2 className={css.benefits_title}>WHY CHOOSE STRIKEBULL</h2>

        <p className={css.benefits_description}>
          Modern coaching, quality facilities and a community that pushes you
          forward.
        </p>

        <ul className={css.benefits_list}>
          {benefits.map((benefit) => (
            <li className={css.benefits_item} key={benefit.title}>
              <svg
                className={css.benefits_svg_circle}
                width="32"
                height="32"
                aria-hidden="true"
              >
                <use href="/svg/sprite.svg#icon-ellipse" />
              </svg>

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
