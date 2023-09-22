import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import "../styles/Project.css";
//import Fade from "react-reveal/Fade";

import Pr1 from "../assets/Pr1.png";
import Pr2 from "../assets/Pr2.png";
 import Pr3 from "../assets/Pr3.png";
 import Pr4 from "../assets/Pr4.png";

const data = [
    {
        id: 1,
        image: Pr1,
        title: "Kidney Disease Prediction",
        github: "https://github.com/Palakmodi24/KidneyDisease",
        demo: "https://colab.research.google.com/drive/12m2Sq5vXoelBeNeAaG59jnNVIsglC-KC?usp=sharing",
    },

    {
        id: 2,
        image: Pr2,
        title: "Anime Character Recognition",
        github: "https://github.com/Palakmodi24/AnimeCharacter",
        demo: "https://www.kaggle.com/code/vaishnavideulkar/minor",
    },

    {
        id: 3,
        image: Pr3,
        title: "Drum Kit",
        github: "https://github.com/Palakmodi24/DrumKit",
        demo: "https://github.com/Palakmodi24/DrumKit",
    },
    {
        id: 4,
        image: Pr4,
        title: "Youtube Clone",
        github: "https://github.com/Palakmodi24/YoutubeClone",
        demo: "https://youtube-two-kohl.vercel.app/",
    },
];

const Project = () => {
    useEffect(() => {
        Aos.init({duration:4000})
    
    
    }, []);
    return (
        <section id="projects" className="project-section">
            {/* <Fade bottom duration={3500}> */}
            <h5>My Recent Work</h5>
            <h2>Projects</h2>
            <div className="container project_container" data-aos="fade-up">
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className="project_item">
                            <div className="project_item-image">
                                <img src={image} alt={title} />
                                <h3>{title}</h3>
                                <div className="project-item-cta">
                                    <a
                                        href={github}
                                        className="btn"
                                        target="_blank"
                                    >
                                        Github
                                    </a>
                                    <a
                                        href={demo}
                                        className="btn btn-primary"
                                        target="_blank"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
            {/* </Fade> */}
        </section>
    );
};

export default Project;
