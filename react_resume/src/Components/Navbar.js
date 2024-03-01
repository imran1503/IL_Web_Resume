import React, {useState} from 'react';
import {Link} from 'react-router-dom';
function Navbar() {
    const [click,setClick] = useState(false);
    const HandleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-container'>
                    'Imran Latif' <i className='fab fa-typo3'/>
                </Link>
                <div className='menu-icon' onClick={HandleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className="click ? 'nav-menu active' : 'nav-menu'"> 
                    <li className='nav-item'>
                        <Link to='/Home' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/aboutMe' className="nav-links" onClick={closeMobileMenu}>
                            About me
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/experience' className="nav-links" onClick={closeMobileMenu}>
                            Experience
                        </Link>
                    </li>
                </ul>
            </div>
        </nav> 
       
        
    );
}

export default Navbar;