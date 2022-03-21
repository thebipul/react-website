import React from "react";
import "./experience.css";
import { Carousel } from "react-bootstrap";
import engineer from "../../../images/engineer.png";
import translator from "../../../images/translator.jpg";
import manager from "../../../images/manager.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogActions } from "@mui/material";
import { Button } from "@mui/material";

function Experience() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const [open2, setOpen2] = React.useState(false);
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpen1(false);
    setOpen2(false);
  };

  return (
    <>
      <div className="experiences" id="experiences">
        <div className="exp-content">
          <h1 className="exp-title">MY EXPERIENCES</h1>
          <h2 className="exp-subtitle">Click on the text in the pic to know more details.</h2>
          <div className="work-card">
            <Carousel>
              <Carousel.Item>
                <img
                  src={engineer}
                  className="engineer"
                  alt="first slide"
                ></img>
                <Carousel.Caption className="caption">
                  <button className="work-btn" onClick={handleClickOpen}>
                    Part-Time Engineer
                  </button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={translator}
                  className="translator"
                  alt="second slide"
                ></img>
                <Carousel.Caption className="caption">
                  <button className="work-btn" onClick={handleClickOpen1}>
                    Interpreter/ Translator
                  </button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={manager} className="manager"></img>
                <Carousel.Caption className="caption">
                  <button className="work-btn" onClick={handleClickOpen2}>
                    e-sports Manager
                  </button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            <Dialog open={open} onClose={handleClose}>
              <DialogTitle className="dialog-title">
                Part Time Engineer
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <h2 className="enaspiration"> Enaspiration Inc.</h2>
                  <h3>(July 2021 - Feb 2022)</h3>
                  <p></p>
                  Experience working as a part time developer with the micro
                  controllers such as Arduino, STMicroelectronics and ESP-32 for
                  the smart lock company. Experiences of developing and editing
                  the firmware required for card detection door unlock systems.
                  Besides these, I also worked on html and css for the browser
                  controls of the smart lock devices.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} className="cancel-btn">
                  CLOSE
                </Button>
              </DialogActions>
            </Dialog>

            <Dialog open={open1} onClose={handleClose}>
              <DialogTitle className="dialog-title">
                Part Time Interpreter/Translator
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <h2 className="enaspiration"> Terilogy Services</h2>
                  <h3>(Jan 2021 - July 2021)</h3>
                  <p></p>
                  Experience working as a part time interpreter in this company.
                  Interpretation in between Japanese-English-Nepali languages.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} className="cancel-btn">
                  CLOSE
                </Button>
              </DialogActions>
            </Dialog>

            <Dialog open={open2} onClose={handleClose}>
              <DialogTitle className="dialog-title">
                e-Sports Team Manager
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <h2 className="enaspiration">T2K Esports</h2>
                  <h3>(February 2020 - present)</h3>
                  <p></p>
                  Experiences working as an e-sports team manager and head of
                  operations. Managing the sponsors, team performances, team
                  rosters, handling the social media etc. are my major
                  responsibilities.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} className="cancel-btn">
                  CLOSE
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
