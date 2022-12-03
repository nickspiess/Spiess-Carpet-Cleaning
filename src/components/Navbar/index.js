import React from 'react'
import {
    Nav, 
    NavLink, 
    Bars, 
    NavMenu, 
    NavBtn, 
    NavBtnLink
} from './NavbarElements';
import logo from '../../images/logo.png';
import landing from '../../images/clean.png';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={logo} alt='Spiess Carpet Logo' width="100%" height="100%" 
                        style={{
                        width: '150%',
                        height: '150%',
                        }}
                        >
                    </img>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/services" activeStyle>
                        Services
                    </NavLink>
                    <NavLink to="/testimonials" activeStyle>
                        Testimonials
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavBtnLink to="/quote">Get a Quote</NavBtnLink>
                </NavMenu>
                {/*<NavBtn>
                    <NavBtnLink to="/quote">Get a Quote</NavBtnLink>
    </NavBtn> */}
            </Nav>
            <img src={landing} alt='Stock before and after' width="100%" height="100%" 

                        >
            </img>
        </>
    )
}

export default Navbar