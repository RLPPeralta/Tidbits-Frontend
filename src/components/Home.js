import React from 'react';
import { Nav, Navbar, NavDropdown, Stack } from 'react-bootstrap';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <Navbar>
                <Nav>
                    <Link to="/" className='nav-link'>Home</Link>
                    <Link to="/signup" className='nav-link'>Sign Up</Link>
                    <Link to="/signin" className='nav-link'>Login</Link>
                    <Link to="/profile" className='nav-link'>My Profile</Link>
                    <NavDropdown title="Select Continent" id="basic-nav-dropdown">
                        <Link to="/africa" className='nav-link'>Africa</Link>
                        <Link to="/antartica" className='nav-link'>Antarctica</Link>
                        <Link to="/asia" className='nav-link'>Asia</Link>
                        <Link to="/australia" className='nav-link'>Australia</Link>
                        <Link to="/europe" className='nav-link'>Europe</Link>
                        <Link to="/northamerica" className='nav-link'>North America</Link>
                        <Link to="/southamerica" className='nav-link'>South America</Link>
                    </NavDropdown>
                </Nav>
            </Navbar>
            <Stack>
                <Outlet />
            </Stack>
        </div>

    )
};

export default Home;