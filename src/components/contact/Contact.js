import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { MdOutlineEmail } from "react-icons/md";
import "./contact.css";

const Contact = () => {
  const { t } = useTranslation("common");
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    // emailjs
    //   .sendForm(
    //     "service_k2qawqh",
    //     "template_c6rkpn6",
    //     formRef.current,
    //     "X7K7ebhIeOy3YwHki"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>{t("contact.getInTouch")}</h5>
      <h5>{t("contact.contactSubTitle")}</h5>
      <h2>Contact Us</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h5>{t("contact.email")}</h5>
            <h6>{t("contact.companyEmail")}</h6>
            <a href="mailto:mekomerikomg@gmail.com">{t("contact.sendMsg")}</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={t("contact.fullName")}
            name="user_name"
            required
          />
          <input type="text" placeholder="Subject" name="user_email" required />
          <textarea
            placeholder={t("contact.yourMsg")}
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {t("contact.sendAMsg")}
          </button>
          {message && <span>{t("contact.thankYouMsg")}</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
