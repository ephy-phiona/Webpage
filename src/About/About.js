import './about.css';
import Garget from '../Images/garget.png';

function About() {
    return (
      <div>
        {/* about section */}

    <section class="about-section-center-clearfix" > 
    <div class="about" id="id-about">
      <div className='image-about'>
      <img src={Garget} alt="garget" width={600} height={600} />
      </div>
      <div className='text-about'>

      <p class="about-text">
      <h3 class="section-subtitle">ABOUT </h3>
      <h2 class="section-subtitle">Our Product</h2>

 The project aims to help Kenyan small-scale maize
 farmers improve their soil fertility in order to boost
 yields. As a result,they will be able to earn a living
 and better their 
 living conditions.The project aim is
 to use IoT tocreate a device that will help farmers
 check their soil Ph level as wellas whether the NPK
 the device is able to calculate the remaining
 percentage of Ph and display the results to the farmer.
        </p>
      </div>
    </div>
  </section>
        

      </div>
    );
  }
  
  export default About;
  