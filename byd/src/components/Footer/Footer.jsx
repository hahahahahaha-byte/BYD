import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-subscribe">
        <h2>STAY AHEAD</h2>
        <p>GET EXCLUSIVE UPDATES ON BYD</p>
        <div className="subscribe-form">
          <input type="email" placeholder="Email" />
          <button>SUBSCRIBE</button>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h4>ABOUT US</h4>
          <ul>
            <li>ABOUT BYD</li>
            <li>SAFETY & TECHNOLOGY</li>
            <li>SUSTAINABILITY</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>VEHICLES</h4>
          <ul>
            <li>BYD ATTO 2</li>
            <li>BYD ATTO 3</li>
            <li>BYD SEAL</li>
            <li>BYD SEALION 7</li>
            <li>BYD SHARK 6</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>EXPERIENCE</h4>
          <ul>
            <li>BYD LOCATIONS</li>
            <li>BYD CHARGING</li>
            <li>SAVINGS CALCULATOR</li>
            <li>STORE</li>
            <li>CONTACT US</li>
          </ul>
        </div>

        <div className="footer-column footer-brand">
          <div className="footer-logos">
            <div className="byd-logo">BYD</div>
            <div className="mega-logo">Mega Motor Company (Private) Limited</div>
          </div>
          <div className="footer-socials">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>©2026 BYD - Mega Motor</span>
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;