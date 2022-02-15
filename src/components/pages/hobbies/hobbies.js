import React from 'react';
import './hobbies.css';
import {BiCycling} from 'react-icons/bi';

import {
    GiDrumKit,
    GiCycling,
    GiMusicalNotes,
    GiGamepad,
    } from 'react-icons/gi';
import {FaYoutube} from 'react-icons/fa';


function Hobbies() {
  return (
      <>
      <div className="hobbies">
          <h1 className="hobbies-title">MY HOBBIES</h1>
          <div className="hobbies-content">
              Well, I am interested in a lot of things. Some of them are right below!!<br></br>
            <GiCycling className='hobbies-icons' title='Cycling'/>
            <GiDrumKit className='hobbies-icons' title='Playing drums'/>
            <GiMusicalNotes className='hobbies-icons' title='Listening and playing music'/>
            <GiGamepad className='hobbies-icons' title='Gaming'/>
            <FaYoutube className='hobbies-icons' title='Live streaming'/>
        </div>
        


      </div>
      </>
  )
}

export default Hobbies