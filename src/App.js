import React, { useEffect } from "react";
// import Fade from 'react-reveal/Fade';
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/about";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";

const App = () => {
    // useEffect(() => {
    //   // Scroll to the top when the page is reloaded
    //   // window.scrollTo(0, 0);
    // }, []);

    return (
        <>
            <Nav />
            {/* <Fade up duration={2000} delay={500}> */}
            <Home />
            {/* </Fade> */}
            {/* <Fade bottom duration={3500}> */}

            <About />
            <Skills />
            {/* <Project /> */}
            {/* <Contact /> */}
            {/* <Footer /> */}
            <Skills></Skills>

            {/* </Fade> */}
        </>
    );
};

export default App;
