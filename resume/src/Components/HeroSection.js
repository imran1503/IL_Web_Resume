import React from 'react';
import './Button.css'
import './HeroSection.css'
import '../App.css'
function HeroSection(){
    return(
        <div className='hero-container'>
            {/* if you want a video: <video src='' autoPlay loop muted/> */}
            <div className="banner-text">
                <h1 className='headline'>IMRAN LATIF</h1>
                <h3 className='subheadline'>New software graduate unleashing the potential of tomorrow's tech leaders</h3>
                <h3 className='subheadline'>Where passion meets proficiency in software engineering.</h3>
            </div>
        </div>
    );
}
export default HeroSection;
