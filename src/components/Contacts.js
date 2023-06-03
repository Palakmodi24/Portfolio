import React from "react";
import "../styles/Contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_g9ztx1p",
            "template_vc7fscl",
            form.current,
            "kVMwr5cPQt6xpDdAH"
        );
        e.target.reset();
    };
    return (
        <section id="contact" className="contact-section">
            <h5>Get in Touch</h5>
            <h2>With Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail />
                        <h4>Email</h4>
                        <h5>modipalak62@gmail.com</h5>
                        <a href="mailto: modipalak62@gmail.com" target="_blank">
                            Send a message
                        </a>
                    </article>

                    <article className="contact_option">
                        <AiFillLinkedin />
                        <h4>Linkedin</h4>
                        <h5>Palak Modi</h5>
                        <a
                            href="https://www.linkedin.com/in/palak-modi-17b083206/"
                            target="_blank"
                        >
                            Send a message
                        </a>
                    </article>
                </div>
                {/* End of contact */}
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        rows="7"
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button type="submit" className="btn">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contacts;
