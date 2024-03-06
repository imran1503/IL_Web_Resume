import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'
function Navbar() {
    const [click,setClick] = useState(false);
    const HandleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true);
    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false)
        }
        else{
            setButton(true)
        }
    };

    window.addEventListener('resize',showButton);

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-container'>
                <i className="fa-solid fa-crown"></i>Imran Latif
                </Link>
                <div className='menu-icon'  onClick={HandleClick}  >
                    <i className={click ? "fas fa-times":"fa-solid fa-bars"}></i>
                </div>
                <ul className="">
                    <li className='nav-item'>
                        <Link to='/Home' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/aboutMe' className="nav-links" onClick={closeMobileMenu} >
                            About me
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/experience' className="nav-links" onClick={closeMobileMenu} >
                            Experience
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle={'btn--outline'}>TEST BUTTON</Button>}
            </div>
        </nav>


    );
}

export default Navbar;