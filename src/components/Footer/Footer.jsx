import "./Footer.css";

import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import {
  FiMapPin,
  FiMail,
  FiPhone,
} from "react-icons/fi";

export default function Footer() {

  return (

    <footer className="footer">

      <div className="footerGlow"></div>

      <div className="footerGlass">

        {/* ================= BRAND ================= */}

        <div className="footerBrand">

          <img
            src="/images/logo.png"
            alt="Yuvalay"
          />

          <h2>Yuvalay Makerspace</h2>

          <p>

            Empowering innovators through creativity,
            technology, engineering and community driven
            learning experiences that inspire tomorrow's
            changemakers.

          </p>

          <div className="footerSocial">

            <a href="https://www.instagram.com/yuvalaymakerspace?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <FaInstagram />
            </a>

            <a href="https://www.facebook.com/YuvalayElab/">
              <FaFacebookF />
            </a>

            <a href="https://www.linkedin.com/company/yuvalaymakerspace">
              <FaLinkedinIn />
            </a>

            <a href="https://www.youtube.com/@YUVALAY">
              <FaYoutube />
            </a>

          </div>

        </div>

        {/* ================= ABOUT ================= */}

        <div className="footerColumn">

          <h3>About</h3>

          <Link to="/about/why-yuvalay">
            Why Yuvalay
          </Link>

          <Link to="/about/vision-mission">
            Vision & Mission
          </Link>

          <Link to="/about/our-story">
            Our Story
          </Link>

          <Link to="/about/maker-journey">
            Maker Journey
          </Link>

          <Link to="/about/people-who-build">
            People Who Build
          </Link>

          <Link to="/about/innovation-network">
            Innovation Network
          </Link>

        </div>

        {/* ================= PROGRAMS ================= */}

        <div className="footerColumn">

          <h3>Programs</h3>

          <Link to="/programs/school">
            School Programs
          </Link>

          <Link to="/programs/college">
            College Programs
          </Link>

          <Link to="/programs/startup">
            Startup Programs
          </Link>

          <Link to="/programs/workshops">
            Workshops
          </Link>

          <Link to="/makerspace">
            Makerspace
          </Link>

        </div>

        {/* ================= EXPLORE ================= */}

        <div className="footerColumn">

          <h3>Explore</h3>

          <Link to="/projects">
            Projects
          </Link>

          <Link to="/events">
            Events
          </Link>

          <Link to="/gallery">
            Gallery
          </Link>

          <Link to="/faqs">
            FAQs
          </Link>

          <Link to="/contact">
            Contact
          </Link>

          <Link to="/donate">
            Donate
          </Link>

        </div>

        {/* ================= CONTACT ================= */}

        <div className="footerColumn contactColumn">

          <h3>Contact</h3>

          <div className="contactItem">

            <FiMapPin />

            <span>
              Vadodara, Gujarat
            </span>

          </div>

          <div className="contactItem">

            <FiMail />

            <span>
              info@yuvalay.org
            </span>

          </div>

          <div className="contactItem">

            <FiPhone />

            <span>
              +91 98765 43210
            </span>

          </div>

        </div>

      </div>

      <div className="footerBottom">

        <p>
          © 2026 Yuvalay Makerspace. All Rights Reserved.
        </p>

        <div>

          <Link to="/">
            Privacy Policy
          </Link>

          <Link to="/">
            Terms & Conditions
          </Link>

        </div>

      </div>

    </footer>

  );

}