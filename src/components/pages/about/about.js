import React from "react";
import "./about.css";
import bipul from "../../../images/bipul.png";
import cv from "../../downloads/Bipul_Panthi_CV.pdf";
function About() {
  return (
    <>
      <div className="about" id="about">
        <div className="left">
          <div className="img-container">
            <img src={bipul} alt="" id="bipul"></img>
          </div>
        </div>
        <div className="right">
          <div className="details">
            <h1 className="details-title">ABOUT ME</h1>
            <div className="details-content">
              Hello! It's me Bipul Panthi, an enthusiastic and credentialed MEXT
              scholar interested in robotics, software development and web-app
              development. I am a self-motivated learner and currently studying
              mechanical engineering in Tokyo Institute of Technology.
              <br />
              My career goal is to be a full-stack developer.
              <p />
              <a href={cv} target="_blank" id="download-cv">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
