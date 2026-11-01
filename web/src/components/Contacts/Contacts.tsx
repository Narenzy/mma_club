import css from './Contacts.module.css';
import { useForm } from 'react-hook-form';
import { contactSchema } from '../../validation/contactSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { pricingPlans } from '../../data/pricing';
import type { InferType } from 'yup';
import type { Dispatch, SetStateAction } from 'react';
import { motion } from 'motion/react';
import { createContact } from '../../services/contactsApi.ts';
import type { ContactPlanId, ContactRequestType } from '../../types/contact.ts';
import { toast } from 'sonner';
import { TailSpin } from 'react-loader-spinner';

type ContactFormData = InferType<typeof contactSchema>;

type ContactsProps = {
  selectedPlanId: ContactPlanId;
  setSelectedPlanId: Dispatch<SetStateAction<ContactPlanId>>;
  requestType: ContactRequestType;
  setRequestType: Dispatch<SetStateAction<ContactRequestType>>;
};

export default function Contacts({
  selectedPlanId,
  setSelectedPlanId,
  requestType,
  setRequestType,
}: ContactsProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: yupResolver(contactSchema) });

  const selectedPlan = pricingPlans.find((plan) => plan.id === selectedPlanId);

  const onSubmit = async (data: ContactFormData) => {
    try {
      const payload = {
        ...data,
        requestType,
        planId: requestType === 'membership' ? selectedPlanId : null,
      };

      await createContact(payload);
      toast.success('Ihre Anfrage wurde erfolgreich gesendet.');

      setSelectedPlanId(null);
      setRequestType('contact');
      reset();
    } catch (error) {
      console.error('Error creating contact:', error);
      toast.error(
        'Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.',
      );
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
      }}
      viewport={{ once: true }}
      className={css.contacts_section}
      id="contacts"
    >
      <div className={`container ${css.contacts_container}`}>
        <div className={css.contacts_top}>
          <div className={css.contacts_info}>
            <p className={css.contacts_label}>KONTAKTIERE UNS</p>
            <h2 className={css.contacts_title}>KONTAKT</h2>
            <address className={css.contacts_address}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Masanserstrasse+205+7000+Chur"
                target="_blank"
                rel="noopener noreferrer"
              >
                Masanserstrasse 205, 7000 Chur
              </a>
              <a href="tel:+41791234567">+41 79 123 45 67</a>
              <a href="mailto:strikebull@mail.ch">strikebull@mail.ch</a>
            </address>
          </div>
          <div className={css.contacts_map}>
            <iframe
              src="https://www.google.com/maps?q=Masanserstrasse+205,+7000+Chur&output=embed"
              className={css.map_iframe}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort des Strikebull MMA Clubs"
            />
          </div>
        </div>
        {selectedPlan && (
          <div className={css.selected_plan}>
            <p className={css.selected_plan_label}>Ausgewählter Tarif</p>

            <p className={css.selected_plan_value}>
              {selectedPlan.title} — {selectedPlan.price}
            </p>
          </div>
        )}
        <form
          className={css.contacts_form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className={css.form_field}>
            <label htmlFor="firstName">Vorname</label>
            <input
              className={css.form_input}
              id="firstName"
              type="text"
              autoComplete="given-name"
              {...register('firstName')}
            />
            {errors.firstName && (
              <p className={css.form_error}>{errors.firstName.message}</p>
            )}
          </div>

          <div className={css.form_field}>
            <label htmlFor="lastName">Nachname</label>
            <input
              className={css.form_input}
              id="lastName"
              type="text"
              autoComplete="family-name"
              {...register('lastName')}
            />
            {errors.lastName && (
              <p className={css.form_error}>{errors.lastName.message}</p>
            )}
          </div>

          <div className={css.form_field}>
            <label htmlFor="email">E-Mail</label>
            <input
              className={css.form_input}
              id="email"
              type="email"
              autoComplete="email"
              {...register('email')}
            />
            {errors.email && (
              <p className={css.form_error}>{errors.email.message}</p>
            )}
          </div>

          <div className={css.form_field}>
            <label htmlFor="message">Nachricht</label>
            <textarea
              className={css.form_textarea}
              id="message"
              rows={8}
              {...register('message')}
            />
            {errors.message && (
              <p className={css.form_error}>{errors.message.message}</p>
            )}
          </div>

          <div className={css.form_actions}>
            <button
              className={css.form_button}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <TailSpin
                    height={18}
                    width={18}
                    color="currentColor"
                    ariaLabel="loading"
                    visible={true}
                  />
                  WIRD GESENDET...
                </>
              ) : (
                'NACHRICHT SENDEN'
              )}
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}
