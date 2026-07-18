import "./Footer.css";
import logo from "./logo.png";

import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-wrapper">

        <div className="footer-about">

          <img src={logo} alt="Yuvalay" />

          <p>
            Empowering innovators through education,
            creativity, technology and community-driven
            initiatives to build a better tomorrow.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Events</a>
          <a href="/">Gallery</a>
          <a href="/">Contact</a>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>Email : info@yuvalay.org</p>
          <p>Phone : +91 98765 43210</p>
          <p>Vadodara, Gujarat</p>

        </div>

        <div className="footer-social">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaYoutube /></a>

          </div>

        </div>

      </div>

      <div className="copyright">

        © 2026 Yuvalay. All Rights Reserved.

      </div>

    </footer>
  );
}