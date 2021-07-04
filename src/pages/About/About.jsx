import React from "react";
import "./About.css";


const About = () => {
  return (
    <div>
    <div className="about-section">
      <h2>About CheckMeds </h2>
      <p>CheckMeds helps you to find availability of medicines nearby you</p>
    </div>
    <h2  style={{textAlign:'Center'}}>Our Team</h2>
    <div class="row">
  <div class="column">
    <div class="card">
      
      <div class="container">
        <h2>Srijan Das</h2>
        <p class="title">CEO & Co-Founder</p>
       
        <p>srijan@checkmeds.com</p>
        
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      
      <div class="container">
        <h2>Buddhadeb Garai</h2>
        <p class="title">CEO & Co-Founder</p>
       
        <p>buddha@checkmeds.com</p>
        
      </div>
    </div>
  </div>
</div>



  </div>
  
  
  )
}

export default About

