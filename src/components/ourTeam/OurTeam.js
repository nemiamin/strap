import React from "react";
import { useTranslation } from "react-i18next";
import "./ourteam.css";

const OurTeam = () => {
  const { t } = useTranslation("common");
  return (
    <section class="section-team">
      <h5>{t("ourTeam.ourTeam")}</h5>
      <h2>{t("ourTeam.letsMeet")}</h2>
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="single-person">
              <div class="person-image">
                <img src="/team3.jpeg" alt="" />
              </div>
              <div class="person-info">
                <h3 class="full-name">{t("ourTeam.team1")}</h3>
                <span class="speciality">{t("ourTeam.occupation")}</span>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="single-person">
              <div class="person-image">
                <img src="/team1.jpeg" alt="" />
              </div>
              <div class="person-info">
                <h3 class="full-name">{t("ourTeam.team2")}</h3>
                <span class="speciality">{t("ourTeam.occupation")}</span>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="single-person">
              <div class="person-image">
                <img src="/team2.jpeg" alt="" />
              </div>
              <div class="person-info">
                <h3 class="full-name">{t("ourTeam.team3")}</h3>
                <span class="speciality">{t("ourTeam.occupation")}</span>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="single-person">
              <div class="person-image">
                <img src="/team4.jpeg" alt="" />
              </div>
              <div class="person-info">
                <h3 class="full-name">{t("ourTeam.team4")}</h3>
                <span class="speciality">{t("ourTeam.occupation")}</span>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-3 m-auto">
            <div class="single-person">
              <div class="person-image">
                <img src="/team5.jpeg" alt="" />
              </div>
              <div class="person-info">
                <h3 class="full-name">{t("ourTeam.team5")}</h3>
                <span class="speciality">{t("ourTeam.occupation")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
