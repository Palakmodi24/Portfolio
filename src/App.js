import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
// import Fade from 'react-reveal/Fade';
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/about";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";

const App = () => {
    useEffect(() => {
        Aos.init({duration:3000})
    
    
    }, []);

    return (
        <>
            <Nav />
            {/* <Fade up duration={2000} delay={500}> */}
            <div data-aos="fade-up">
            <Home />
            </div>
            {/* </Fade> */}
            {/* <Fade bottom duration={3500}> */}
             
            <div data-aos="fade-up"><About /></div>
            <div data-aos="fade-up"><Skills /></div>
            <div data-aos="fade-up"><Project /></div>
            <div data-aos="fade-up"><Contact /></div>
            <div data-aos="fade-up"><Footer /></div>
            

            {/* </Fade> */}
        </>
    );
};

export default App;