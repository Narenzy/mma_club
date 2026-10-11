import css from "./Contacts.module.css";

export default function Contacts() {
  return (
    <section className={css.contacts_section} id="contacts">
      <div className={`container ${css.contacts_container}`}>
        <div className={css.contacts_top}>
          <div className={css.contacts_info}>
            <p className={css.contacts_label}>GET IN TOUCH</p>
            <h2 className={css.contacts_title}>CONTACT US</h2>
            <address className={css.contacts_address}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=123+Fight+Street+Zurich+Switzerland"
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
        <form className={css.contacts_form}>
          <div className={css.form_field}>
            <label htmlFor="firstName">Vorname</label>
            <input
              className={css.form_input}
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
            />
          </div>

          <div className={css.form_field}>
            <label htmlFor="lastName">Nachname</label>
            <input
              className={css.form_input}
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
            />
          </div>

          <div className={css.form_field}>
            <label htmlFor="email">Email</label>
            <input
              className={css.form_input}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>

          <div className={css.form_field}>
            <label htmlFor="message">Nachricht</label>
            <textarea
              className={css.form_textarea}
              id="message"
              name="message"
              rows={8}
            />
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
