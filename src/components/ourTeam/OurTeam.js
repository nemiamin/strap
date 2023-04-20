import React from "react";
import "./ourteam.css";

const OurTeam = () => {
  return (
    <section class="section-team">
      <h5>Our Team</h5>
      <h2>Let's meet with our team members</h2>
      <div class="container">
        {/* <div class="row justify-content-center text-center">
          <div class="col-md-8 col-lg-6">
            <div class="header-section">
              <h4 class="small-title">Our Team</h4>
              <h3 class="title">Let's meet with our team members</h3>
            </div>
          </div>
        </div> */}
        <div class="row">
          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="single-person">
              <div class="person-image">
                <img src="/team3.jpeg" alt="" />
                {/* <span class="icon">
                  <i class="fab fa-html5"></i>
                </span> */}
              </div>
              <div class="person-info">
                <h3 class="full-name">Tara Poluton</h3>
                <span class="speciality">Safety and Health Practitioner</span>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="single-person">
              <div class="person-image">
                <img src="/team1.jpeg" alt="" />
                {/* <span class="icon">
                  <i class="fab fa-wordpress-simple"></i>
                </span> */}
              </div>
              <div class="person-info">
                <h3 class="full-name">Ayodeji Falade</h3>
                <span class="speciality">Safety and Health Practitioner</span>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="single-person">
              <div class="person-image">
                <img src="/team2.jpeg" alt="" />
                {/* <span class="icon">
                  <i class="fab fa-angular"></i>
                </span> */}
              </div>
              <div class="person-info">
                <h3 class="full-name">Sarah Nowicki</h3>
                <span class="speciality">Safety and Health Practitioner</span>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="single-person">
              <div class="person-image">
                <img src="/team4.jpeg" alt="" />
                {/* <span class="icon">
                  <i class="fab fa-js"></i>
                </span> */}
              </div>
              <div class="person-info">
                <h3 class="full-name">Preet Amin</h3>
                <span class="speciality">Safety and Health Practitioner</span>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 col-xl-3 m-auto">
            <div class="single-person">
              <div class="person-image">
                <img src="/team5.jpeg" alt="" />
                {/* <span class="icon">
                  <i class="fab fa-js"></i>
                </span> */}
              </div>
              <div class="person-info">
                <h3 class="full-name">Rayla Croy</h3>
                <span class="speciality">Safety and Health Practitioner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
