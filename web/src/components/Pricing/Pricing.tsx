import css from './Pricing.module.css';
import { pricingPlans } from '../../data/pricing';
import type { Dispatch, SetStateAction } from 'react';
import { motion } from 'motion/react';
import type { ContactPlanId, ContactRequestType } from '../../types/contact.ts';

type PricingProps = {
  selectedPlanId: ContactPlanId;
  setSelectedPlanId: Dispatch<SetStateAction<ContactPlanId>>;
  setRequestType: Dispatch<SetStateAction<ContactRequestType>>;
};
export default function Pricing({
  selectedPlanId,
  setSelectedPlanId,
  setRequestType,
}: PricingProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
      viewport={{ once: false }}
      className={css.pricing_section}
      id="pricing"
    >
      <div className={`container ${css.pricing_container}`}>
        <div className={css.pricing_text_container}>
          <p className={css.pricing_label}>MITGLIEDSCHAFT</p>
          <h2 className={css.pricing_title}>TARIFE</h2>
        </div>

        <div className={css.pricing_plans_container}>
          {pricingPlans.map((plan) => {
            const isActive = selectedPlanId === plan.id;

            return (
              <article
                className={`${css.pricing_plan_article} ${
                  isActive ? css.pricing_plan_active : ''
                }`}
                key={plan.id}
                onClick={() => {
                  if (isActive) {
                    setSelectedPlanId(null);
                    setRequestType('contact');
                  } else {
                    setSelectedPlanId(plan.id);
                    setRequestType('membership');
                  }
                }}
              >
                <h3 className={css.plans_title}>{plan.title}</h3>

                <p className={css.plans_price}>{plan.price}</p>

                <p className={css.plans_description}>{plan.description}</p>

                <ul className={css.pricing_list}>
                  {plan.features.map((feature) => (
                    <li className={css.pricing_list_item} key={feature}>
                      <svg
                        className={css.pricing_check_icon}
                        width="16"
                        height="16"
                        aria-hidden="true"
                      >
                        <use href="/svg/sprite.svg#icon-check" />
                      </svg>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={css.pricing_btn}
                  onClick={(event) => {
                    event.stopPropagation();

                    setSelectedPlanId(plan.id);
                    setRequestType('membership');

                    document
                      .getElementById('contacts')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  TARIF WÄHLEN
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
