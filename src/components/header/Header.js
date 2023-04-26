import React from "react";
import { useTranslation } from "react-i18next";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import Translation from "./Translation";

const Header = () => {
  const { t } = useTranslation("common");
  return (
    <header id="home">
      <div
        style={{
          textAlign: "right",
          marginRight: 20,
          position: "absolute",
          top: 10,
          right: 10,
        }}
      >
        <Translation />
      </div>
      <div className="container header__container">
        <h5>{t("welcome.title")}</h5>
        <h1>{t("welcome.companyName")}</h1>
        <CTA />
        <a href="#contact" className="scroll__down">
          {t("welcome.scrollDown")}
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
