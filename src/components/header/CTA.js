import React from "react";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation("common");
  return (
    <div className="cta">
      <a href="#contact" className="btn btn-primary">
        {t("welcome.contactUsBtn")}
      </a>
    </div>
  );
};

export default CTA;
