import React, { useState } from 'react';

import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';

import { NavLink } from 'react-router-dom';

const Header = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <div>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={toggleNav} />
                    <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='TastyBite ' /></NavbarBrand>
                    <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>TastyBite!</h1>
                        <p>We take inspiration from the World's best cuisines!</p>
                    </div>
                </div>
            </div>
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/about'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contact'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>

          
        </div>
    );
}

export default Header;
