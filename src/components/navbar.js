import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import { IconContext } from "react-icons/lib";
import sakkigoni from "../images/sakkigoni.png";
import About from "./pages/about/about";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const scrolltoabout = () => {
    window.scrollTo({ top: about.current.offsetTop, behavior: "smooth" });
  };
  const about = useRef(null);
  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar" id = "navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={sakkigoni}></img>&nbsp; PortFolio
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="#about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#skills"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  SKILLS
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#experiences"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  EXPERIENCES
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#hobbies"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  HOBBIES
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#projects"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
