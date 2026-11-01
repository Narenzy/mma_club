import css from './FreeTrial.module.css';
import type { Dispatch, SetStateAction } from 'react';
import { motion } from 'motion/react';
import type { ContactPlanId, ContactRequestType } from '../../types/contact.ts';

type FreeTrialProps = {
  setSelectedPlanId: Dispatch<SetStateAction<ContactPlanId>>;
  setRequestType: Dispatch<SetStateAction<ContactRequestType>>;
};

export default function FreeTrial({
  setSelectedPlanId,
  setRequestType,
}: FreeTrialProps) {
  const handleFreeTrialClick = () => {
    setSelectedPlanId(null);
    setRequestType('trial');
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <motion.section
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={css.freetrial_section}
      id="free-trial"
    >
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
    </motion.section>
  );
}
