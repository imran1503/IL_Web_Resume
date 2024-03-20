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
                        <h2>Company 1 </h2>
                        <small>Date range Here</small>
                        <p>Description here</p>
                        <span className='leftSpanArrow'></span>
                        <Button className='hero-btns' buttonStyle={"btn--outline"} buttonSize={'btn-small'} MyLink={
                            "https://drive.google.com/file/d/1IvEfbMABQE1N9YbAoIp5nBFwhMw95CRG/view?usp=drive_link"
                            }
                        >
                            Click for more info!
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
                        <Button className='hero-btns' buttonStyle={"btn--outline"} buttonSize={'btn-small'} MyLink={
                            "https://drive.google.com/file/d/1IvEfbMABQE1N9YbAoIp5nBFwhMw95CRG/view?usp=drive_link"
                            }
                        >
                            Click for more info!
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

                        <Button className='hero-btns' buttonStyle={"btn--outline"} buttonSize={'btn-small'} MyLink={
                            "https://drive.google.com/file/d/1IvEfbMABQE1N9YbAoIp5nBFwhMw95CRG/view?usp=drive_link"
                            }
                        >
                            Click for more info!
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
                        <Button className='hero-btns' buttonStyle={"btn--outline"} buttonSize={'btn-small'} MyLink={
                            "https://drive.google.com/file/d/1IvEfbMABQE1N9YbAoIp5nBFwhMw95CRG/view?usp=drive_link"
                            }
                        >
                            Click for more info!
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

                        <Button className='hero-btns' buttonStyle={"btn--outline"} buttonSize={'btn-small'} MyLink={
                            "https://drive.google.com/file/d/1IvEfbMABQE1N9YbAoIp5nBFwhMw95CRG/view?usp=drive_link"
                            }
                        >
                            Click for more info!
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
                        <Button className='hero-btns' buttonStyle={"btn--outline"} buttonSize={'btn-small'} MyLink={
                            "https://drive.google.com/file/d/1IvEfbMABQE1N9YbAoIp5nBFwhMw95CRG/view?usp=drive_link"
                            }
                        >
                            Click for more info!
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;