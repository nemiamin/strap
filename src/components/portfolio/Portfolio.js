import React from "react";
import { useTranslation } from "react-i18next";
import "./portfolio.css";
import PopoverDemo from "./Popover";
import FormsPopover from "./FormsPopover";
import Appendices from "./Appendices";

const Portfolio = () => {
  const { t } = useTranslation("common");
  const soloProjects = [
    {
      id: 1,
      title: t("portfolio.workTitle1"),
      img: "/department1.jpeg",
      description: "",
      technologies: "",
      link: "https://melodic-boba-111583.netlify.app/",
      github: "https://github.com/Meri-MG/bookstore---react",
    },
    {
      id: 1,
      title: t("portfolio.workTitle2"),
      img: "/project2.jpeg",
      description: "",
      technologies: "",
      link: "https://melodic-boba-111583.netlify.app/",
      github: "https://github.com/Meri-MG/bookstore---react",
    },
  ];

  return (
    <section id="portfolio">
      <h5>{t("portfolio.recentWork")}</h5>
      <div className="container portfolio__container ">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              {pro.title === "Forms & Templates" ? (
                <FormsPopover />
              ) : (
                <>
                  <PopoverDemo />
                  <Appendices />
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
