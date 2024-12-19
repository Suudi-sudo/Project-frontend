// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="about-us">
                    <h3>About Us</h3>
                    <p>
                        Welcome to our online bookstore! We are dedicated to providing you with a wide selection of books 
                        across various genres. Our mission is to inspire readers and promote a love for literature.
                    </p>
                </div>
                <div className="social-media">
                    <h3>Follow Us</h3>
                    <ul>
                        <li>
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                        </li>
                        {/* Add more links as needed */}
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Online Bookstore. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
