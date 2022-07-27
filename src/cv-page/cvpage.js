import React from "react";
import cv from "./cv.pdf";
import cvFirst from "./cv-first-page.png";
import cvSecond from "./cv-second-page.png";
import { Link } from "react-router-dom";

const CvPage = () => {
  return (
    <div>
      <div className="cv-layout">
        <Link to={cv} target="_blank" download>
          Click here to download
        </Link>
        <img className="cv-image" src={cvFirst} alt="cv first" />
        <img className="cv-image" src={cvSecond} alt="cv second" />
      </div>
    </div>
  );
};

export default CvPage;
