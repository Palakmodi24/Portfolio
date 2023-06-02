import React, { useState } from "react";
import "../styles/Nav.css";
import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { GiBrain } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#");
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            {menuOpen && <div className="overlay" onClick={closeMenu} />}
            <nav className={`nav ${menuOpen ? "open" : ""}`}>
                <div className="menu-icon" onClick={toggleMenu}>
                    {!menuOpen ? (
                        <>
                            <div className="menu-icon__line" />
                            <div className="menu-icon__line" />
                            <div className="menu-icon__line" />
                        </>
                    ) : (
                        <AiOutlineClose className="close-icon" />
                    )}
                </div>
                <div className={`nav-items ${menuOpen ? "open" : ""}`}>
                    <a
                        href="#"
                        onClick={() => {
                            setActiveNav("#");
                            closeMenu();
                        }}
                        className={activeNav === "#" ? "active" : ""}
                    >
                        <AiOutlineHome />
                        <span className="nav-text">Home</span>
                    </a>
                    <a
                        href="#about"
                        onClick={() => {
                            setActiveNav("#about");
                            closeMenu();
                        }}
                        className={activeNav === "#about" ? "active" : ""}
                    >
                        <AiOutlineUser />
                        <span className="nav-text">About</span>
                    </a>
                    <a
                        href="#skills"
                        onClick={() => {
                            setActiveNav("#skills");
                            closeMenu();
                        }}
                        className={activeNav === "#skills" ? "active" : ""}
                    >
                        <GiBrain />
                        <span className="nav-text">Skills</span>
                    </a>
                    <a
                        href="#projects"
                        onClick={() => {
                            setActiveNav("#projects");
                            closeMenu();
                        }}
                        className={activeNav === "#projects" ? "active" : ""}
                    >
                        <AiOutlineFundProjectionScreen />
                        <span className="nav-text">Projects</span>
                    </a>
                    <a
                        href="#contact"
                        onClick={() => {
                            setActiveNav("#contact");
                            closeMenu();
                        }}
                        className={activeNav === "#contact" ? "active" : ""}
                    >
                        <IoMdContact />
                        <span className="nav-text">Contact</span>
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Nav;
