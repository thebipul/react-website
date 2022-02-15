import React from 'react';
import './about.css';
import bipul from '../../../images/bipul.png';
import cv from '../../downloads/Bipul_Panthi_CV1.pdf';
function About() {
  return (
    <>
    <div className="about">
        
        <div className="left">
            <div className="img-container">
            <img src={bipul} alt='' id='bipul'></img>
            
        </div>
        </div>
        <div className="right">
            <div className="details">
                <h1 className="details-title">ABOUT ME</h1>
                <div className="details-content">
                Hello! It's me Bipul Panthi, an enthusiastic and credentialed MEXT scholar interested in robotics, software development and web-app development. I am currently studying mechanical engineering in Tokyo Institute of Technology.
                <p/>
                <a href={cv} target="_blank" id='download-cv'>Download CV</a>
                </div>
            </div>


        </div>
    </div>
    </>
  )
}

export default About;