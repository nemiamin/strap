import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me.jpg";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Us</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            {/* <img src={ME} alt="me" /> */}
            <img src="/logo.jpeg" alt="Sarah Nowicki" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {/* <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article> */}
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
            We are a group of devoted safety and health professionals at STARP who are passionate about fostering workplace safety and defending employee health. We are experts in offering a variety of services that can assist companies in creating safer and healthier working environments for their staff.
          </p>
          <p>
          Occupational safety, health, and environmental management are all areas in which our team's seasoned as safety and health professionals are well-versed. We collaborate closely with our clients to identify potential risks and create practical measures to stop workplace accidents and injuries.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
