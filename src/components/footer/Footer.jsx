import React from 'react'
import './footer.css'
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Renato</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FaInstagram /></a>
        <a href="https://twitter.com"><FaTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Renato. all rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer