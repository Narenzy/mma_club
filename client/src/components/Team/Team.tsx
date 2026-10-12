import css from "./Team.module.css";

export default function Team() {
  return (
    <section id="team" className={css.team_section}>
      <div className={`container ${css.team_container}`}>
        <p className={css.team_label}>MEET THE TEAM</p>
        <h2 className={css.team_title}>OUR TEAM</h2>
        <div className={css.team_items}>
          <ul className={css.team_list}>
            <li className={css.team_item}>
              <img
                className={css.team_image}
                src="/images/chernenko_dmytro.webp"
                alt="Dmytro Chernenko, boxing coach"
              />

              <h3 className={css.team_member_name}>CHERNENKO DMYTRO</h3>

              <p className={css.team_description}>Head Coach / Boxing Coach</p>
            </li>

            <li className={css.team_item}>
              <img
                className={css.team_image}
                src="/images/chernenko_syzanna.webp"
                alt="Syzanna Chernenko administrator"
              />

              <h3 className={css.team_member_name}>CHERNENKO SYZANNA</h3>

              <p className={css.team_description}>Administrator</p>
            </li>

            <li className={css.team_item}>
              <img
                className={css.team_image}
                src="/images/imhof_andreas.webp"
                alt="Imhof Andreas Club President"
              />

              <h3 className={css.team_member_name}>IMHOF ANDREAS</h3>

              <p className={css.team_description}>President / Head Partner</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
