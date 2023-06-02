import React from "react";
import "../styles/about.css";
// import ME from "../assets/about-me.jpg";

const about = () => {
    return (
        <section id="about" className="about-section">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        {/* <img src={ME} /> */}
                    </div>
                </div>
                <div className="about__content">
                    <p>
                        I'm an imaginative web and software developer
                        specializing in crafting innovative digital solutions
                        that transcend the ordinary. With a passion for pushing
                        the boundaries of design and user experience, I bring
                        your digital vision to life through elegant and
                        responsive interfaces. With a strong background in
                        programming and a keen eye for design, I strive to
                        deliver top-notch websites and software applications
                        that not only meet your requirements but also exceed
                        your expectations.
                    </p>
                    <p>
                        But that's not all—I'm not just a tech enthusiast.I'm
                        also an avid reader and love exploring new places.As a
                        curious explorer, I thrive on exciting adventures and
                        immersing myself in new locales. When I'm not coding,
                        you can find me delving into captivating books that fuel
                        my creative fire.I'm an adventure seeker at heart,
                        always ready to embark on thrilling journeys and
                        discover the wonders of the world.
                    </p>
                    <p>
                        Take a look at my portfolio and don't hesitate to reach
                        out. Together, we can create digital solutions that
                        leave a lasting impression and embark on thrilling
                        adventures along the way.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default about;
