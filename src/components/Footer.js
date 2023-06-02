import React from "react";
import "../styles/Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const Footer = () => {
    return (
        <section className="footer-section">
            <footer>
                <ul className="permalinks">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="about">About</a>
                    </li>
                    <li>
                        <a href="skills">Skills</a>
                    </li>
                    <li>
                        <a href="projects">Projects</a>
                    </li>
                    <li>
                        <a href="contact">Contact</a>
                    </li>
                </ul>
                <div className="footer_socials">
                    <a
                        href="https://www.linkedin.com/in/palak-modi-17b083206"
                        target="_blank"
                    >
                        <BsLinkedin />
                    </a>
                    <a
                        href="https://www.facebook.com/palak.24032002"
                        target="_blank"
                    >
                        <BsFacebook />
                    </a>
                    <a
                        href="https://www.instagram.com/palak_modi24/"
                        target="_blank"
                    >
                        <BsInstagram />
                    </a>
                    <a href="https://github.com/Palakmodi24" target="_blank">
                        <BsGithub />
                    </a>
                </div>

                <div className="footer_copywright">
                    <small>Created by Palak Modi</small>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
