import './howitworks.css';
import React from 'react';
import Soil from '../Images/soil.png';
import Ph from '../Images/ph.png';
import Npk from '../Images/npk.png';
import Display from '../Images/display.png';

function Howitworks() {
    return (
      <div>
        
     
  <section class="work" id="id-work"> 
  <div className='how-title'>
    <h3>HOW IT WORKS</h3></div>
  <div className='main-howitworks'>

    <div className='icons'>
    <img src={Soil} alt="soil"/>
    <h2 class="work-title">Soil</h2>
    <p class="work-text"> Enter the type of your soil and put the device inside the soil.</p>
    </div>

      <div className='icons'>
      <img src={Ph} alt="ph"/>
    <h2 class="work-title">Ph</h2>
    <p class="work-text"> The device will check the soil pH if it is acidic, neutral or alkaline.</p>
    </div>
   
    <div className='icons'>
      <img src={Npk} alt="npk"/>
    <h2 class="work-title">NPK</h2>
    <p class="work-text"> The NPK sensor will check the amount of Nitrogen,Phosphorous and Potassium 
    in the soil if they are balanced.</p>
    </div>

    <div className='icons'>
      <img src={Display} alt="display"/>
    <h2 class="work-title">Display</h2>
    <p class="work-text"> The results will be displayed to enable the farmer to determine the right amount of fertilizer to be added in the soil.</p>
    </div>

      </div>
  </section>

      </div>
    );
  }
  
  export default Howitworks;
  