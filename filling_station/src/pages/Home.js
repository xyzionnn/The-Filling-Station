import React from 'react';
import HeroImage from '../assets/images/Header1.png'; // update the path to your image
import '../components/Home.css';

function Home() {
  return (
    <div className="home">
      {/* Fullscreen Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-shift">
          <h1>Step Back to the 50s with Groove Crate</h1>
          <p style={{fontSize:"40px"}}>Sip, Snack, and Swing with Every Box!</p>
          <p style={{fontSize:"24px"}}>Get ready for a blast from the past! Groove Crate brings the coolest flavors of the straight to your door. From classic sodas to retro snacks, this crate is packed with vintage vibes and unforgettable tastes that'll make you feel like you're hanging at the local diner.</p>
          <button className="hero-btn">Order Now!</button>
        </div>
        </div>
      </section>

      {/* Optional body content */}
      {/* <div className="home-body">
        <h2>About Our Project</h2>
        <p>This is the Home page. Edit and extend as you like!</p>
      </div> */}
    </div>
  );
}

export default Home;
