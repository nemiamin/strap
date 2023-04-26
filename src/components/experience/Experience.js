import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import "./experience.css";

const Experience = () => {
  const { t } = useTranslation("common");
  return (
    <section id="experience">
      <h2>{t("ourValues.ourCoreValues")}</h2>
      <div className=" experience__container">
        <div className="experience__frontend">
          <h3>{t("ourValues.coreValues")}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h5>{t("ourValues.safetyOriented")}</h5>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h5>{t("ourValues.truthful")}</h5>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h5>{t("ourValues.accountable")}</h5>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h5>{t("ourValues.responsible")}</h5>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h5>{t("ourValues.proactive")}</h5>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
