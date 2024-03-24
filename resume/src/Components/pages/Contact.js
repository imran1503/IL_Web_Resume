import '../../App.css'
import HeroSection from '../HeroSection'
import AboutMe from '../AboutMe'
import React from 'react';
import ContactForm from '../ContactUs';
import "../ContactUs.css";
function Contact(){
    return(
        <>
            <div>
                <HeroSection/>
            </div>
            <div className='ContactFormSection'>

                <ContactForm/>
            </div>
        </>
    );


}

export default Contact;
