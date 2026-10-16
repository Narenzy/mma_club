import css from "./Pricing.module.css";
import { pricingPlans } from "../../data/pricing";
import type { Dispatch, SetStateAction } from "react";

type PricingProps = {
  selectedPlanId: string | null;
  setSelectedPlanId: Dispatch<SetStateAction<string | null>>;
};
export default function Pricing({
  selectedPlanId,
  setSelectedPlanId,
}: PricingProps) {
  return (
    <section className={css.pricing_section} id="pricing">
      <div className={`container ${css.pricing_container}`}>
        <div className={css.pricing_text_container}>
          <p className={css.pricing_label}>MEMBERSHIP</p>
          <h2 className={css.pricing_title}>PRICING PLANS</h2>
        </div>

        <div className={css.pricing_plans_container}>
          {pricingPlans.map((plan) => {
            const isActive = selectedPlanId === plan.id;

            return (
              <article
                className={`${css.pricing_plan_article} ${
                  isActive ? css.pricing_plan_active : ""
                }`}
                key={plan.id}
                onClick={() => setSelectedPlanId(isActive ? null : plan.id)}
              >
                <h3 className={css.plans_title}>{plan.title}</h3>

                <p className={css.plans_price}>{plan.price}</p>

                <p className={css.plans_description}>{plan.description}</p>

                <ul className={css.pricing_list}>
                  {plan.features.map((feature) => (
                    <li className={css.pricing_list_item} key={feature}>
                      <svg
                        className={css.pricing_check_icon}
                        width="18"
                        height="18"
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

                    document
                      .getElementById("contacts")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  TARIF WÄHLEN
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
