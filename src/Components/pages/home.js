import '../../App.css'
import HeroSection from '../HeroSection'
import AboutMe from '../AboutMe'
import React from 'react';
function Home(){
    return(
        <div className='HeroSection-Home'>
            <HeroSection/>
            <AboutMe/>
        </div>
    );


}

export default Home;