import React from 'react';
import Logo from '../assets/Logo .svg'

const Footer = () => {
  return (
    <div>
        <div className="footer-background">
            <div className="footer-container">
                <img src={ Logo } alt="Little Lemon logo" />
                <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
                <div className="footer-content">
                    <div className="locations">
                        <h5>Location</h5>
                        <ul>
                            <li>Chicago</li>
                            <li>New York</li>
                            <li>Altanta</li>
                            <li>Baltimore</li>
                        </ul>
                    </div>
                    <div className="opening-times">
                        <h5>Opening Time</h5>
                        <ul>
                            <li>Mon - Wed: 7:30 - 18:00</li>
                            <li>Fri: 12:00 - 21:00</li>
                            <li>Sat - Sun: 10:30 - 22:00</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h5>Contact Us</h5>
                        <ul>
                            <li>020 Illnos Road, Chicago - USA</li>
                            <li>Tel: 014 0214 9875</li>
                            <li>Email: info@littlelemon.com</li>
                        </ul>
                    </div>
            </div>
            <div className="copyright">
                <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer;