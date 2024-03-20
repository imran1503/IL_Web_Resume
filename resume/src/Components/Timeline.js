import React from 'react';
import './Timeline.css'
import { Button } from './Button';

function Timeline(){
    return(
        <div className='body'>
            <div className='Timeline'>
                <p><br/><br/><br/></p>
                <div className='container left-container first-container'>
                    <img src={process.env.PUBLIC_URL + '/images/MECLogo.png'} alt='mec' />
                    <div className='text-box'>
                        <h2>THE BEAT REVIVAL PROJECT</h2>
                        <small>December 2023 - Present</small>
                        <p>
                            This project aims to bring back the online functionality of Mirror's Edge: Catalyst through the reverse engineering of EA/DICE's server software.<br/>
                            A fan driven project to restore online services to the game Mirrors Edge Catalyst from EA.<br/>
                            &emsp;❖ Collected network packets while the game was running in before the servers were closed.<br/>
                            &emsp;❖ Editing and browsing network packets to understand how to replicate features on our own servers.<br/>
                            &emsp;❖ Planning a server to properly simulate the old functionality to work with EA’s Blaze authentication server.<br/>

                        </p>
                        <span className='leftSpanArrow'></span>
                        <Button className='hero-btns' buttonStyle={"btn--primary"} buttonSize={'btn--large'} MyLink={
                            "https://beatrevival.me/"
                            }
                        >
                            Information Page Here! <i class="fa-solid fa-link"></i>
                        </Button>
                    </div>
                </div>
                <div className='container right-container'>
                    <img src={process.env.PUBLIC_URL + '/images/GameJamLogo.png'} alt='mec' />
                    <div className='text-box'>
                        <h2>DECRYPTION </h2>
                        <small>January 2024 - Febuary 2024</small>
                        <p>
                        Developing a compelling game jam prototype, highlighting adaptability, integration of gameplay mechanics and quick learning.<br/>
                            &emsp;❖ Completed within a 2-week sprint.<br/>
                            &emsp;❖ Developed in the Godot engine using GDScript.<br/>
                            &emsp;❖ Researched existing technologies to implement in our game.<br/>
                        </p>
                        <span className='rightSpanArrow'></span>
                        <Button className='hero-btns' buttonStyle={"btn--primary"} buttonSize={'btn--large'} MyLink={
                            "https://artemis1503.itch.io/decryption"
                            }
                        >
                            Link to Game Page! <i class="fa-solid fa-link"></i>
                        </Button>
                    </div>
                </div>
                <div className='container left-container first-container'>
                    <img src={process.env.PUBLIC_URL + '/images/MECLogo.png'} alt='mec' />
                    <div className='text-box'>
                        <h2>Company 1 </h2>
                        <small>Date range Here</small>
                        <p>Description here</p>
                        <span className='leftSpanArrow'></span>

                        <Button className='hero-btns' buttonStyle={"btn--primary"} buttonSize={'btn--large'} MyLink={
                            "https://drive.google.com/file/d/1IvEfbMABQE1N9YbAoIp5nBFwhMw95CRG/view?usp=drive_link"
                            }
                        >
                             Click for more info! <i class="fa-solid fa-link"></i>
                        </Button>
                    </div>
                </div>
                <div className='container right-container'>
                    <img src={process.env.PUBLIC_URL + '/images/MECLogo.png'} alt='mec' />
                    <div className='text-box'>
                        <h2>Company 2 </h2>
                        <small>Date range Here</small>
                        <p>Description here</p>
                        <span className='rightSpanArrow'></span>
                        <Button className='hero-btns' buttonStyle={"btn--primary"} buttonSize={'btn--large'} MyLink={
                            "https://drive.google.com/file/d/1IvEfbMABQE1N9YbAoIp5nBFwhMw95CRG/view?usp=drive_link"
                            }
                        >
                             Click for more info! <i class="fa-solid fa-link"></i>
                        </Button>
                    </div>
                </div>
                <div className='container left-container first-container'>
                    <img src={process.env.PUBLIC_URL + '/images/MECLogo.png'} alt='mec' />

                    <div className='text-box'>

                        <h2>Company 1 </h2>
                        <small>Date range Here</small>
                        <p>Description here</p>
                        <span className='leftSpanArrow'></span>

                        <Button className='hero-btns' buttonStyle={"btn--primary"} buttonSize={'btn--large'} MyLink={
                            "https://drive.google.com/file/d/1IvEfbMABQE1N9YbAoIp5nBFwhMw95CRG/view?usp=drive_link"
                            }
                        >
                             Click for more info! <i class="fa-solid fa-link"></i>
                        </Button>
                    </div>
                </div>
                <div className='container right-container'>
                    <img src={process.env.PUBLIC_URL + '/images/MECLogo.png'} alt='mec' />
                    <div className='text-box'>
                        <h2>Company 2 </h2>
                        <small>Date range Here</small>
                        <p>Description here</p>
                        <span className='rightSpanArrow'></span>
                        <Button className='hero-btns' buttonStyle={"btn--primary"} buttonSize={'btn--large'} MyLink={
                            "https://drive.google.com/file/d/1IvEfbMABQE1N9YbAoIp5nBFwhMw95CRG/view?usp=drive_link"
                            }
                        >
                             Click for more info! <i class="fa-solid fa-link"></i>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;