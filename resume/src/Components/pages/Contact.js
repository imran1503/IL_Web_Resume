import '../../App.css'

import React from 'react';
import ContactForm from '../ContactUs';
import "../ContactUs.css";
import ContactMeHeroSection from '../ContactMeHeroSection';
function Contact(){
    return(
        <>
{/*             <div>
                <ContactMeHeroSection/>
            </div> */}
            <div className='ContactFormSection'>

                <ContactForm/>
            </div>
        </>
    );


}

export default Contact;
