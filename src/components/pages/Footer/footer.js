import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { MdFingerprint } from 'react-icons/md';
import ContactForm from './contact';
import sakkigoni from '../../../images/sakkigoni.png';


function Footer() {
  return (
    <div className='footer-container'>
      <div className="title">
        Messagebox (updating soon...)
        
      </div>
      <section className="message">
        <ContactForm/>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={sakkigoni}></img>&nbsp; BIPUL PANTHI
            </Link>
          </div>
          <small className='website-rights'>Bipul Panthi © 2022</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='//www.facebook.com/deshbhaktabipul/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='//www.instagram.com/sakkigoni_._/?hl=en'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCYu-cFIT2ocx_Ik32DER7lg'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='//github.com/sakkigoni'
              target='_blank'
              aria-label='Github'
            >
              <FaGithub />
            </Link>
            <Link
              className='social-icon-link'
              to='//www.linkedin.com/in/bipul-panthi-102453208/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
            <a href='mailto:panthibipul@gmail.com' className='social-icon-link'>
              <MdOutlineEmail/>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;