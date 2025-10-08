import React from "react";
import "./Footer.css"; 

import Logo from '../assets/images/Logo.png';

 
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section about">
         
        <div className="logo">
          <img src={Logo} alt="Filling Station" />
          <p>The Filling Station</p>
        </div>
 
          <h3>Step back in time — one crate at a time.</h3>
 
          <p>
          At The Filling Station, we’re all about bringing the golden age of jukeboxes, milkshakes, and drive-in dreams straight to your doorstep. Inspired by the charm and color of the 1950s, our monthly subscription crates are packed with handpicked goodies that celebrate retro pop culture, classic Pinoy nostalgia, and timeless cool.
 
          Whether it’s vintage-inspired collectibles, locally made treats, or throwback trinkets, every crate is a blast from the past — with a modern Filipino twist.
          <p style={{fontWeight:500}}>Because here at The Filling Station, we don’t just deliver stuff — we deliver feels.</p>
          </p>
        </div>
        <div className="footer-section links">
          <h4>Company</h4>
          <ul>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/meettheteam">Meet the Team</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
 
        <div className="footer-section links">
          <h4>Customer Services</h4>
          <ul>
            <li><a href="/myacc">My Account</a></li>
            <li><a href="/track">Track Your Order</a></li>
            <li><a href="/return">Return</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </div>
 
        <div className="footer-section links">
          <h4>Our Information</h4>
          <ul>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/usertems">User Terms & Conditions</a></li>
            <li><a href="/returnpolicy">Return Policy</a></li>
          </ul>
        </div>
 
        <div className="footer-section links">
          <h4>Our Information</h4>
          <ul>
            <li>(02) 8123-4567</li>
            <li>+63 917 654 3210</li>
            <li>hello@thefillingstationcrate.ph</li>
            <li>The Filling Station PH Unit 5, Retro Arcade Building E. Rodriguez Sr. Ave., Quezon City Metro Manila, Philippines 1102</li>
          </ul>
        </div>
 
 
     
      </div>
      <div className="footer-bottom">
        Copyright  &copy; {new Date().getFullYear()} The Filling Station. All Rights Reserved
      </div>
    </footer>
  );
};
 
export default Footer;