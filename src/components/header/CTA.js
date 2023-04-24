import React from "react";
import CV from "../../assets/cv_meri_gogichashvili.pdf";

const CTA = () => {
  return (
    <div className="cta">
      {/* <a href={CV} download className="btn">
        Download Report
      </a> */}
      <a href="#contact" className="btn btn-primary">
        {/* Let's talk */}
        Contact Us
      </a>
    </div>
  );
};

export default CTA;
