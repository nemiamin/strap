import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import { useTranslation } from "react-i18next";
import "./intro.css";

const Intro = () => {
  const { t } = useTranslation("common");
  return (
    <section id="about">
      <h5>{t("intro.getToKnow")}</h5>
      <h2>{t("intro.aboutUs")}</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="/logo.jpeg" alt="Sarah Nowicki" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>{t("intro.projects")}</h5>
              <small>{t("intro.projectsCompleted")}</small>
            </article>
          </div>
          <p>{t("intro.aboutUsDesc")}</p>
          <p>{t("intro.aboutUsDesc2")}</p>
          <a href="#contact" className="btn btn-primary">
            {t("welcome.contactUsBtn")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
