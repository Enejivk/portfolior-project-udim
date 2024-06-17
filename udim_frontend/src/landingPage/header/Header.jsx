import './Header.css'
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";

import logoBlack from '../../assets/logoBlack.png'
import { useState } from 'react';

const Menu = () => (
    <>
        <p><a href="">About</a></p>
        <p><a href="">Benefit</a></p>
        <p><a href="">Testimonies</a></p>
    </>
)

const SingUp = () => (
    <>
        <p className='nav-sign-up'><a href="">Sign up</a></p>
        <p><a href="">Sign In</a></p>
    </>
)
const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <nav className='nav-bar-container'>
            <div className='nav-logo'>
                <img src={logoBlack} alt="logo" />
            </div>
            <div className='nav-menu-links'>
                <Menu />
            </div>
            <div className='nav-signUp_sign_in'>
                <SingUp />
            </div>

            {/* NAV BAR FOR TABLE AND MOBILE SCREEN */}

            <div className="menu-link-small-screen">
                <FiAlignJustify fontSize={37} onClick={() => { setToggleMenu(!toggleMenu) }} />

                {toggleMenu &&
                    <div className='nav-menu-links-small-screen'>
                        <FiX color='#fff' fontSize={37} onClick={() => { setToggleMenu(!toggleMenu) }} />
                        <Menu />
                        <p className='signUpSmallScreen'><a href="">Sign up</a></p>
                        <p ><a href="">Sign In</a></p>
                    </div>
                }

            </div>
        </nav>
    )
}

export default Header
