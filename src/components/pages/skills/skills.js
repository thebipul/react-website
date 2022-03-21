import React from "react";
import "./skills.css";
import arduino from "../../../logos/arduino.png";
import c from "../../../logos/c.png";
import css from "../../../logos/css.png";
import docker from "../../../logos/docker.png";
import figma from "../../../logos/figma.png";
import firebase from "../../../logos/firebase.png";
import flutter from "../../../logos/flutter.png";
import github from "../../../logos/github.png";
import html from "../../../logos/html.png";
import javascript from "../../../logos/javascript.png";
import matlab from "../../../logos/matlab.png";
import python from "../../../logos/python.png";
import raspberrypi from "../../../logos/raspberrypi.png";
import react from "../../../logos/react.png";
import typescript from "../../../logos/typescript.png";

import {
  CCard,
  CRow,
  CCol,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardImage,
  CCardFooter,
} from "@coreui/react";

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills-content">
        <h1 className="skills-title">MY SKILLS</h1>
        <div className="skills-content">
          Here are my skills that I have been practising since long!<br></br>
        </div>
        <div className="skills-cards">
          <CRow
            className="row"
            xs={{ cols: 1, gutter: 4 }}
            sm={{ cols: 1 }}
            md={{ cols: 2 }}
            lg={{ cols: 3 }}
            xl={{ cols: 3 }}
            xxl={{ cols: 4 }}
          >
            <CCol xs>
              <CCard className="card">
                <CCardImage src={arduino} />
                <CCardBody className="card-body">
                  <CCardTitle className="card-title">Arduino</CCardTitle>
                  <CCardText className="card-text">
                    <ul>
                      <li>Intermediate</li>
                      <li>Remote controlled car</li>
                      <li>Line tracer</li>
                      <li>Various small Projects</li>
                    </ul>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="card">
                <CCardImage src={c} />
                <CCardBody className="card-body">
                  <CCardTitle className="card-title">C</CCardTitle>
                  <CCardText className="card-text">
                    <ul>
                      <li>Basic</li>
                    </ul>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="card">
                <CCardImage src={css} />
                <CCardBody className="card-body">
                  <CCardTitle className="card-title">CSS</CCardTitle>
                  <CCardText className="card-text">
                    <ul>
                      <li>Intermediate</li>
                      <li>Website styling</li>
                      <li>Frontend</li>
                    </ul>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="card">
                <CCardImage src={docker} />
                <CCardBody className="card-body">
                  <CCardTitle className="card-title">Docker</CCardTitle>
                  <CCardText className="card-text">
                    <ul>
                      <li>Basic</li>
                    </ul>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="card">
                <CCardImage src={figma} />
                <CCardBody className="card-body">
                  <CCardTitle className="card-title">Figma</CCardTitle>
                  <CCardText className="card-text">
                    <ul>
                      <li>Intermediate</li>
                      <li>UI/UX design basics</li>
                    </ul>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="card">
                <CCardImage src={firebase} />
                <CCardBody className="card-body">
                  <CCardTitle className="card-title">Firebase</CCardTitle>
                  <CCardText className="card-text">
                    <ul>
                      <li>Basic</li>
                      <li>Login register authorisation</li>
                    </ul>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="card">
                <CCardImage src={flutter} />
                <CCardBody className="card-body">
                  <CCardTitle className="card-title">Flutter</CCardTitle>
                  <CCardText className="card-text">
                    <ul>
                      <li>Intermediate</li>
                      <li>Frotend of Mobile Apps</li>
                    </ul>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="card">
                <CCardImage src={github} />
                <CCardBody className="card-body">
                  <CCardTitle className="card-title">Github</CCardTitle>
                  <CCardText className="card-text">
                    <ul>
                      <li>Intermediate</li>
                      <li>Collaboration</li>
                    </ul>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="card">
                <CCardImage src={html} />
                <CCardBody className="card-body">
                  <CCardTitle className="card-title">HTML</CCardTitle>
                  <CCardText className="card-text">
                    <ul>
                      <li>Intermediate</li>
                      <li>Frontend</li>
                      <li>Portfolio Website</li>
                    </ul>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="card">
                <CCardImage src={javascript} />
                <CCardBody className="card-body">
                  <CCardTitle className="card-title">JavaScript</CCardTitle>
                  <CCardText className="card-text">
                    <ul>
                      <li>Basic</li>
                      <li>Used with React</li>
                      <li>Frontend with HTML</li>
                    </ul>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="card">
                <CCardImage src={matlab} />
                <CCardBody className="card-body">
                  <CCardTitle className="card-title">MATLAB</CCardTitle>
                  <CCardText className="card-text">
                    <ul>
                      <li>Basic</li>
                      <li>Image Processing</li>
                      <li>Robot arm simulation and more</li>
                    </ul>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="card">
                <CCardImage src={python} />
                <CCardBody className="card-body">
                  <CCardTitle className="card-title">Python</CCardTitle>
                  <CCardText className="card-text">
                    <ul>
                      <li>Intermediate</li>
                      <li>Competitive coding</li>
                    </ul>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="card">
                <CCardImage src={raspberrypi} />
                <CCardBody className="card-body">
                  <CCardTitle className="card-title">Raspberry Pi</CCardTitle>
                  <CCardText className="card-text">
                    <ul>
                      <li>Basic</li>
                      <li>Worked in linux environment</li>
                    </ul>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="card">
                <CCardImage src={react} />
                <CCardBody className="card-body">
                  <CCardTitle className="card-title">React</CCardTitle>
                  <CCardText className="card-text">
                    <ul>
                      <li>Intermediate</li>
                      <li>Portfolio Website</li>
                      <li>Frontend with JS and TS</li>
                    </ul>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="card">
                <CCardImage src={typescript} />
                <CCardBody className="card-body">
                  <CCardTitle className="card-title">TypeScript</CCardTitle>
                  <CCardText className="card-text">
                    <ul>
                      <li>Intermediate</li>
                      <li>Frontend</li>
                    </ul>
                  </CCardText>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </div>
      </div>
    </div>
  );
}

export default Skills;
