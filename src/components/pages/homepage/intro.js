import React from 'react';
import './intro.css';
import Me from '../../../images/bipul1.png';
import ContactForm from '../Footer/contact';

function Intro() {
  return (
    <>
        <div class="home" id="home">
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">Hello!! My name is</div>
                <div class="text-2">BIPUL PANTHI</div>
                <div class="text-3">And I'm </div>
                <div className="title">
                <div className="title-wrapper">
                <div className="title-items">Learner</div>
                <div className="title-items">Engineer</div>
                <div className="title-items">Gamer</div>
                <div className="title-items">YouTuber</div>
                <div className="title-items">e-Sports Team Manager</div>
                </div>
                </div>
                <a href="">Hire me!!!</a>

            </div>
        </div>
    </div>
    </>
  );
}

export default Intro;