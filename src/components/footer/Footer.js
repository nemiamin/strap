import React from "react";
import { useTranslation } from "react-i18next";
// import { BsLinkedin } from "react-icons/bs";
// import { FaGithub } from "react-icons/fa";
// import { FaAngellist } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <footer>
      <a href="#home" className="footer__logo">
        {t("welcome.companyName")}
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">{t("footer.home")}</a>
        </li>
        <li>
          <a href="#about">{t("footer.about")}</a>
        </li>
        <li>
          <a href="#portfolio">{t("footer.departments")}</a>
        </li>
        <li>
          <a href="#contact">{t("footer.contact")}</a>
        </li>
      </ul>
      {/* <div className="footer__socials">
        <a href="#" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a href="#" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="#" rel="noreferrer">
          <FaAngellist />
        </a>
      </div> */}
      <div className="footer__copyright"></div>
    </footer>
  );
};

export default Footer;
