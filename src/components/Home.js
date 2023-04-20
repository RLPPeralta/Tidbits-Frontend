import React, { useContext } from 'react';
import { Nav, Navbar, NavDropdown, Stack } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { MdOutlineLogin } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import logohome from "../logohome.png";
import { Container } from 'react-bootstrap';
import RecipeContext from '../contexts/RecipeContext';
import Picture1 from "../Picture1.png";
import '../css/Nav.css'


const Home = () => {

    let navigate = useNavigate();
        const id = localStorage.getItem('userId');
        const user = localStorage.getItem('user');
    
    let { searchRecipe } = useContext(RecipeContext);

    function onSignOut() {
        localStorage.clear();
        navigate('/login')
    }

    function handleSearch(e) {
        if ( e.target.value === "") return;
        navigate("/search/" + e.target.value)
    }
    //need to create a search filter so that it filters through the recipes

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
    <div className='Homepage'>
        <Navbar className='navbar' collapseOnSelect expand="lg">
            <Container >
            <Navbar.Brand href="/" className="d-inline-block">
                <img
                src={logohome}
                height={65}
                className="align-item-left"
                alt="logo" />
                <img
                src={Picture1}
                height={45}
                alt="logoname"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                        {authLink()}<Link to="/" className='nav-link'>Home</Link>
                            <NavDropdown title="Select Continent" id="basic-nav-dropdown">
                                    <Link to="/africa" className='nav-link'>Africa</Link>
                                    <Link to="/antarctica" className='nav-link'>Antarctica</Link>
                                    <Link to="/asia" className='nav-link'>Asia</Link>
                                    <Link to="/australia" className='nav-link'>Australia</Link>
                                    <Link to="/europe" className='nav-link'>Europe</Link>
                                    <Link to="/northamerica" className='nav-link'>North America</Link>
                                    <Link to="/southamerica" className='nav-link'>South America</Link>
                            </NavDropdown>
                                    <input onChange={handleSearch}/>
                </Nav>                 
                </Navbar.Collapse>
            </Container>
        </Navbar>
                <Stack>
                    <Outlet />
                </Stack>
    </div>
    )
};

export default Home;