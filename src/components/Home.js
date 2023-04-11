import React from 'react';
import { Nav, Navbar, NavDropdown, Stack, Button } from 'react-bootstrap';
import { Outlet, useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { MdOutlineLogin } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import homelogo from "../homelogo.png";
import { Container } from 'react-bootstrap';


const Home = () => {

    // const params = useParams();
    let navigate = useNavigate();
        const id = localStorage.getItem('userId');
        const user = localStorage.getItem('user');

    function onSignOut() {
        localStorage.clear();
        navigate('/login')
    }

    function authLink() {
        if (user === null)
            return (
                <Nav>
                <Link to="/signin" className='nav-link'>Login<MdOutlineLogin></MdOutlineLogin></Link>
                <Link to="/signup" className='nav-link'>Sign Up</Link>
                </Nav>
               
                )
        else {
            return  <Nav className='user'>
                <Link className='nav-link'>{`Welcome back `+ user} <CgProfile></CgProfile></Link>
                <Link className='nav-link' variant="link" to="/signin" onClick={onSignOut}>Sign Out</Link>
                <Link to={`/profile/${id}`} className='nav-link'>My Profile</Link>
            </Nav>
        }
    }

    return (
        <div>
            <Navbar >
            <Container>
            <Navbar.Brand href="/">
            <img
              className="navbarBrand"
              src={homelogo}
              height={65}
              alt="logo"
            />
          </Navbar.Brand>
                <Nav >
                    {authLink()}<Link to="/" className='nav-link'>Home</Link>
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
                </Container>
            </Navbar>
            <Stack>
                <Outlet />
            </Stack>
        </div>

    )
};

export default Home;