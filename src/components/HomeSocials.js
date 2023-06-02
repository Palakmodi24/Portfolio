import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HomeSocials = () => {
    return (
        <div className="header__socials">
            <a
                href="https://www.linkedin.com/in/palak-modi-17b083206"
                target="_blank"
            >
                <BsLinkedin />
            </a>
            <a href="https://www.facebook.com/palak.24032002" target="_blank">
                <BsFacebook />
            </a>
            <a href="https://www.instagram.com/palak_modi24/" target="_blank">
                <BsInstagram />
            </a>
            <a href="https://github.com/Palakmodi24" target="_blank">
                <BsGithub />
            </a>
        </div>
    );
};

export default HomeSocials;
