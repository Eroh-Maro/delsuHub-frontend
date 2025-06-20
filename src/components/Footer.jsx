import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerSection">
          <h4>About Us</h4>
          <p>Delta State University Abraka provides students with quality opportunities to grow and learn outside the classroom.</p>
        </div>
        <div className="footerSection">
          <h4>Contact Us</h4>
          <p>Email: info@delsu.edu.ng</p>
          <p>Phone: +234 123 456 7890</p>
        </div>
        <div className="footerSection">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footerSection">
          <h4>Follow Us</h4>
          <div className="socialIcons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <span>©{currentYear} Delsu. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;