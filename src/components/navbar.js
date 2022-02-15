import React, { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import {MdFingerprint} from 'react-icons/md';
import {FaBars, FaTimes} from 'react-icons/fa';
import './navbar.css';
import { IconContext } from 'react-icons/lib';
import sakkigoni from '../images/sakkigoni.png';
function Navbar() {
const[click,setClick] =  useState(false);
const[button,setButton] = useState(true);


const handleClick = () => setClick(!click)
const closeMobileMenu=()=>setClick(false)

const showButton = ()=>{
    if(window.innerWidth<=960){
        setButton(false)
    }else{
        setButton(true)
    }
};

useEffect(()=>{
    showButton()
},[]);

window.addEventListener('resize',showButton);

  return (
    <>
    <IconContext.Provider value ={{color:'#fff'}}>
        <div className="navbar">
            <div className="navbar-container container">
                <Link to ="/"className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={sakkigoni}></img>&nbsp; 
                    PortFolio
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes/>:<FaBars/>}  
                </div>
                <ul className={click? 'nav-menu active':'nav-menu'}>
                    <li className="nav-item">
                        <Link to ='/' className="nav-links"onClick={closeMobileMenu}>HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ='/' className="nav-links">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ='/' className="nav-links">SKILLS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ='/' className="nav-links">EXPERIENCES</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ='/' className="nav-links">HOBBIES</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ='/' className="nav-links">PROJECTS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ='/' className="nav-links">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </div>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
