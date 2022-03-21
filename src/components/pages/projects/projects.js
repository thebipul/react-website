import React from "react";
import "./projects.css";
import BillSplitter from "../../../images/projects/billsplitter.png";
import MovieReview from "../../../images/projects/moviereview.png";
import QuizzApp from "../../../images/projects/quizapp.png";
import AmazonClone from "../../../images/projects/amazon-clone.png";
import PortfolioSite from "../../../images/projects/portfolio-site.png";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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

function Projects() {
  return (
    <>
      <div className="projects"id="projects">
        <h1 className="projects-title">MY PROJECTS</h1>
        <div className="projects-content">
          I have accomplished some of the following projects.
          <div className="react-projects-card">
            <br />
            1. React Projects
            <br />
            <br />
            <Carousel>
              <Carousel.Item>
                <div className="react-img-card">
                  <Link to="/">
                    <img src={PortfolioSite}></img>
                  </Link>
                </div>

                <Carousel.Caption className="caption"></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="react-img-card">
                  <a href="http://amazon-clone.bipulpanthi.com/">
                    <img src={AmazonClone}></img>
                  </a>
                </div>
                <Carousel.Caption className="caption"></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <br />
          </div>
          <div className="appcard">
            2. Flutter App Projects
            <br />
            <br />
            <Carousel>
              <Carousel.Item>
                <div className="img-card">
                  <img src={BillSplitter}></img>
                </div>

                <Carousel.Caption className="caption"></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="img-card">
                  <img src={QuizzApp}></img>
                </div>
                <Carousel.Caption className="caption"></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div className="img-card">
                  <img src={MovieReview}></img>
                </div>
                <Carousel.Caption className="caption"></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <br />
          <div className="projects-card">3. Other Projects</div>
          <div className="other-projects">
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
                  <CCardBody className="card-body">
                    <CCardTitle className="card-title">STM</CCardTitle>
                    <CCardText className="card-text">
                      <ul>
                        <li>Passcode unlocking device with LCD and STM-32</li>
                        <li>Various small projects</li>
                      </ul>
                    </CCardText>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs>
                <CCard className="card">
                  <CCardBody className="card-body">
                    <CCardTitle className="card-title">React</CCardTitle>
                    <CCardText className="card-text">
                      <ul>
                        <li>Fully responsive portfolio website</li>
                        <li>Other website with team collaboration</li>
                      </ul>
                    </CCardText>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs>
                <CCard className="card">
                  <CCardBody className="card-body">
                    <CCardTitle className="card-title">MATLAB</CCardTitle>
                    <CCardText className="card-text">
                      <ul>
                        <li>Robotics arm movement simulation</li>
                      </ul>
                    </CCardText>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs>
                <CCard className="card">
                  <CCardBody className="card-body">
                    <CCardTitle className="card-title">C</CCardTitle>
                    <CCardText className="card-text">
                      <ul>
                        <li>Robotic arm 3D movement</li>
                      </ul>
                    </CCardText>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs>
                <CCard className="card">
                  <CCardBody className="card-body">
                    <CCardTitle className="card-title">Raspberry Pi</CCardTitle>
                    <CCardText className="card-text">
                      <ul>
                        <li>Development in Linux environment</li>
                        <li>MQTT communication and other tools</li>
                      </ul>
                    </CCardText>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </div>
          <div className="projects-card">
            4. Other Projects are coming soon...
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
