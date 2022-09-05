import React from 'react'
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { SiGmail } from "react-icons/si"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { FiTwitter } from "react-icons/fi"


import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <a href="#home" className="footer__logo">Muhammad Hamza</a>
            <ul className="permalinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href='https://www.facebook.com/Hamzii.SE' target='_blank' rel="noreferrer"> <FaFacebookF /> </a>
                <a href='https://www.instagram.com/hamza.__.khan' target='_blank' rel="noreferrer"> <FaInstagram /> </a>
                <a href='https://twitter.com/Hamzii_SE' target='_blank' rel="noreferrer"> <FiTwitter /> </a>
                <a href='https://www.linkedin.com/in/hamzi-se' target='_blank' rel="noreferrer"> <BsLinkedin /> </a>
                <a href='https://github.com/Hamzi-SE' target='_blank' rel="noreferrer"> <BsGithub /> </a>
                <a href='mailto:hamzii.se@gmail.com' target='_blank' rel="noreferrer"> <SiGmail /> </a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Muhammad Hamza. All rights reserved.</small>
            </div>

        </footer>
    )
}

export default Footer