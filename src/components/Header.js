import React, { useState } from 'react';
// import {
//     AppBar,
//     Toolbar,
//     Typography,
//     Button,
// } from '@mui/material';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarToggler,
    Collapse,
    Dropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
} from 'reactstrap';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => {
    
    const LinkStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    const [navToggle, toggleNav] = useState(false);
    const [dropdownOpen, toggleDropdown] = useState(false);

    return (
        <Navbar color='dark' expand='md' style={{padding: '1em'}}>
            <div style={{display: 'flex', flexFlow: 'row'}}>
                <NavbarToggler onClick={() => toggleNav(!navToggle)} className='me-2' />
                <NavbarBrand>
                    <Link to='/' style={{ color: `inherit`, textDecoration: `none` }}>
                        <StaticImage style={{ width: `50%` }} src='../images/tedxntua_logo_whitetext.png' alt='TEDxNTUA Logo' />
                    </Link>
                </NavbarBrand>
            </div>
            <Collapse isOpen={navToggle} navbar className='justify-content-end' style={{ width: '100%' }}>
                <Nav navbar>
                    <NavItem className='mt-2 mt-md-0'>
                        <Link to='/' style={LinkStyle} className='pe-2'>
                            HOME
                        </Link>
                    </NavItem>
                    <NavItem className='mt-2 mt-md-0'>
                        <Dropdown
                        isOpen={dropdownOpen}
                        toggle={() => toggleDropdown(!dropdownOpen)} direction='down'
                        style={{cursor: 'pointer'}}>
                            <DropdownToggle tag='span' data-toggle='dropdown' style={LinkStyle} className='pe-2'>
                                EVENTS&nbsp;<i class='fa fa-caret-down' aria-hidden='true'></i>
                            </DropdownToggle>
                            <DropdownMenu dark>
                                <DropdownItem>
                                    <Link to='/speakers' style={LinkStyle}>SPEAKERS</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to='/workshops' style={LinkStyle}>WORKSHOPS</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to='/performers' style={LinkStyle}>PERFORMERS</Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavItem>
                    <NavItem className='mt-2 mt-md-0'>
                        <Link to='/partners' style={LinkStyle} className='pe-2' >
                            PARTNERS
                        </Link>
                    </NavItem>
                    <NavItem className='mt-2 mt-md-0'>
                        <Link to='/about' style={LinkStyle} className='pe-2' >
                            ABOUT US
                        </Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;