import React from 'react';
import './skills.css';
import arduino from '../../../logos/arduino.png';
import c from '../../../logos/c.png';
import css from '../../../logos/css.png';
import docker from '../../../logos/docker.png';
import flutter from '../../../logos/flutter.png';
import github from '../../../logos/github.png';
import html from '../../../logos/html.png';
import javascript from '../../../logos/javascript.png';
import matlab from '../../../logos/matlab.png';
import python from '../../../logos/python.png';
import raspberrypi from '../../../logos/raspberrypi.png';
import react from '../../../logos/react.png';
import typescript from '../../../logos/typescript.png';


function Skills() {
  return (
      <>
      <div className="skills">
          <div className="skills-content">
              <h1 className="skills-title">
                  MY SKILLS
              </h1>
              <div className="skills-content">
                  Here are my skills that I have been practising since long!
              </div>
              <div className="skills-images">
                  <img src={arduino} alt ="arduino" title='Arduino'></img>
                  <img src={c} alt ="c" title='C'></img>
                  <img src={css} alt ="css" title='CSS'></img>
                  <img src={docker} alt ="docker" title='Docker'></img>
                  <img src={flutter} alt ="flutter" title='Flutter'></img>
                  <img src={github} alt ="github" title='Github'></img>
                  <img src={html} alt ="html" title='HTML'></img>
                  <img src={javascript} alt ="javascript" title='JavaScript'></img>
                  <img src={matlab} alt ="matlab" title='MATLAB'></img>
                  <img src={python} alt ="python" title='Python'></img>
                  <img src={raspberrypi} alt ="raspberrypi" title='RaspberryPI'></img>
                  <img src={react} alt ="react" title='React'></img>
                  <img src={typescript} alt ="typescript" title='TypeScript'></img>
              </div>
          </div>
      </div>
      </>
  )
}

export default Skills;