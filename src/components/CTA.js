import React from "react";
// import Resume from "../assets/Resume_Palak_Modi_Updated.pdf";
const CTA = () => {
    return (
        <div className="cta">
            <a href="www.google.com" download className="btn">
                Download Resume
            </a>
            <a href="#contact" className="btn">
                Let's Talk
            </a>
        </div>
    );
};

export default CTA;
