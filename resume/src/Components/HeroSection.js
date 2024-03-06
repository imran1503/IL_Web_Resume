import React from 'react';
import { Button } from './Button';
import './Button.css'
import './HeroSection.css'
import '../App.css'
function HeroSection(){
    return(
        <div className='hero-container'>
            {/* if you want a video: <video src='' autoPlay loop muted/> */}
            <h1>ABOUT ME</h1>
            <div className='hero-btns'>
                <Button className='hero-btn' buttonSize='btn--large' buttonStyle='btn--outline'>
                    Outline Button Example
                </Button>
                <Button className='hero-btn' buttonSize='btn--large' buttonStyle='btn--primary'>
                    Primary Button Example
                </Button>
            </div>
        </div>
    );

}


export default HeroSection;