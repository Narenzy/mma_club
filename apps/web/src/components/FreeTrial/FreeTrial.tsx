import css from "./FreeTrial.module.css";
import type { Dispatch, SetStateAction } from "react";

type FreeTrialProps = {
  setSelectedPlanId: Dispatch<SetStateAction<string | null>>;
};

export default function FreeTrial({ setSelectedPlanId }: FreeTrialProps) {
  const handleFreeTrialClick = () => {
    setSelectedPlanId(null);
    document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className={css.freetrial_section} id="free-trial">
      <div className={`container ${css.freetrial_container}`}>
        <p className={css.freetrial_label}>JETZT STARTEN</p>
        <h2 className={css.freetrial_title}>GRATIS PROBETREINING</h2>
        <p className={css.freetrial_description}>
          Lerne unsere Trainer kennen, erlebe die Atmosphäre und finde das
          passende Programm für dich.
        </p>
        <button
          className={css.freetrial_btn}
          type="button"
          onClick={handleFreeTrialClick}
        >
          GRATIS PROBETREINING
        </button>
      </div>
    </section>
  );
}
