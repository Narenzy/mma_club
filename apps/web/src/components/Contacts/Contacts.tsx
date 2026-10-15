import css from "./Contacts.module.css";
import { useForm } from "react-hook-form";
import { contactSchema } from "../../validation/contactSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import type { InferType } from "yup";

type ContactFormData = InferType<typeof contactSchema>;

export default function Contacts() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: yupResolver(contactSchema) });

  //after  add backand / need real data use + reset() for form!!
  //alsom {isSuccess && (
  //<p className={css.success_message}>
  //Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
  //</p>
  //)}
  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    reset();
  };

  return (
    <section className={css.contacts_section} id="contacts">
      <div className={`container ${css.contacts_container}`}>
        <div className={css.contacts_top}>
          <div className={css.contacts_info}>
            <p className={css.contacts_label}>GET IN TOUCH</p>
            <h2 className={css.contacts_title}>CONTACT US</h2>
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
              title="Strikebull MMA Club location"
            />
          </div>
        </div>
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
              {...register("firstName")}
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
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className={css.form_error}>{errors.lastName.message}</p>
            )}
          </div>

          <div className={css.form_field}>
            <label htmlFor="email">Email</label>
            <input
              className={css.form_input}
              id="email"
              type="email"
              autoComplete="email"
              {...register("email")}
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
              {...register("message")}
            />
            {errors.message && (
              <p className={css.form_error}>{errors.message.message}</p>
            )}
          </div>

          <div className={css.form_actions}>
            <button className={css.form_button} type="submit">
              NACHRICHT SENDEN
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
