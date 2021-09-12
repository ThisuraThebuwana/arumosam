import React from 'react';
import {Nav, NavLink, NavIcon, Bars} from "./NavbarElement";

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>ARUMOSAM</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    );
};

export default Navbar;