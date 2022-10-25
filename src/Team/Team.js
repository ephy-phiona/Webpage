import './team.css';
import React from 'react';
import Phy from '../Images/Phy.jpg';
import Kamau from '../Images/kamau.jpeg';
import Catherine from '../Images/catherine.jpeg';
import Jane from '../Images/Jane.jpeg';
import Cherop from '../Images/cherop.jpg';

function Team() {
    return (
      <div>
       <section class='our-team' >
      <div className='main-ourteam'id='id-team'>
        <h4 class='text'>Meet</h4>
        <h2 class="lower-text">OUR&nbsp;&nbsp;TEAM</h2>
      </div>
      </section>

     <section class='teams' id='is-team'>
      <div className='team-us'>
       
      <article class="team-section">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
              <img src={Jane} alt="jane"/>
              </div>
              <div class='flip-card-back'>
                <div class="name-text"><h3 class="text-profile">JaneMary Wanjiku</h3>
                <h3 class="text-profile">UI/UX Designer/Software Developer</h3>
         </div>
              </div>
            </div>
          </div>
        </article>

      <article class="team-section">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
              <img src={Catherine} alt="catherine"/>
              </div>
              <div class='flip-card-back'>
                <div class="name-text"><h3 class="text-profile">Catherine Kanini</h3>
                <h3 class="text-profile">Software Developer</h3>
         </div>
              </div>
            </div>
          </div>
        </article>

        <article class="team-section">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
              <img src={Phy} alt="phy"/> 
              </div>
              <div class='flip-card-back'>
                <div class="name-text"><h3 class="text-profile">Ephy Phiona</h3>
                <h3 class="text-profile">UI/UX Designer/Software Developer</h3>
         </div>
              </div>
            </div>
          </div>
        </article>

        <article class="team-section">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
              <img src={Kamau} alt="kamau"/>
              </div>
              <div class='flip-card-back'>
                <div class="name-text"><h3 class="text-profile">Effence Kamau</h3>
                <h3 class="text-profile">Software Developer</h3>
         </div>
              </div>
            </div>
          </div>
        </article>

        <article class="team-section">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
              <img src={Cherop}alt="cherop"/>
              </div>
              <div class='flip-card-back'>
                <div class="name-text"><h3 class="text-profile">Charity Jerop</h3>
                <h3 class="text-profile">Software Developer</h3>
         </div>
              </div>
            </div>
          </div>
        </article>  
      </div>
     </section>


      </div>
    );
  }
  
  export default Team;
  