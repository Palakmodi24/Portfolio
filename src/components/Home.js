import React from "react";
// import Typical from "react-typical";
import "../styles/Home.css";
import CTA from "./CTA";
// import ME from "../assets/me.png";
import HomeSocials from "./HomeSocials";

const Home = () => {
    return (
        <header className="section-header">
            <div className="home">
                <div className="container header__container">
                    <h3>
                        Hello, I'm <span className="name">Palak Modi</span>{" "}
                    </h3>

                    <div className="profile-details-role">
                        <span className="primary-text">
                            <h2>
                                {/* <Typical
                                    logo={Infinity}
                                    steps={[
                                        "Enthusisatic Dev ",
                                        2000,
                                        "Frontend Developer",
                                        2000,
                                        "React Developer",
                                        2000,
                                        "Software Developer",
                                        2000,
                                    ]}
                                /> */}
                            </h2>
                            <span className="profile-role-tagline">
                                Knack of building applications with frontend and
                                software technologies.
                            </span>
                        </span>
                    </div>
                    <CTA />
                    <HomeSocials />
                    <div className="me">{/* <img src={ME} alt="me" /> */}</div>
                </div>
            </div>
        </header>
    );
};

export default Home;
