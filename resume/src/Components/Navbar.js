import React, {useState} from 'react';
import {Link} from 'react-router-dom';
function Navbar() {
    const [click,setClick] = useState(false);
    const HandleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <a to='/' className='navbar-container'>
                    Imran Latif <i className='fab fa-typo3'/>
                </a>
                <div className='menu-icon' onClick={HandleClick} >
                    <i className="" />
                </div>
                <ul className=""> 
                    <li className='nav-item'>
                        <a to='/Home' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a to='/aboutMe' className="nav-links" onClick={closeMobileMenu} >
                            About me
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a to='/experience' className="nav-links" onClick={closeMobileMenu} >
                            Experience
                        </a>
                    </li>
                </ul>
            </div>
        </nav> 
       
        
    );
}

export default Navbar;