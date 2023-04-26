import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { Button, Form } from 'react-bootstrap';
import '../css/SignInUp.css'

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [bio, setBio] = useState("");
    const [continent, setContinent] = useState("");
    
    let { createUser } = useContext(UserContext);
    let navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        createUser(email, password, firstName, lastName, bio, continent ).then(() => {
            navigate('/signin');
        }).catch(error => {
            console.log(error);
            window.alert('Failed registration: error creating user');
        });
    }
    return (
        <div className='page d-flex justify-content-center align-items-center p-4 p-sm-3'>

        <Form className=" SignForm p-4 p-sm-3" onSubmit={handleSubmit}>
            <p className='SU-required'>*Required</p>
        <h3 className="formtitle"> Create your account</h3>

            <Form.Group className="mb-3 d-flex justify-content-center">Already in Tidbits?
                <Link to='/signin'>Sign In</Link>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control required type="email" placeholder="Enter email*" name="email" onChange={e => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control required type="password" placeholder="Password*" name="password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                {/* <Form.Label>First Name</Form.Label> */}
                <Form.Control required placeholder="Enter First Name*" type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                {/* <Form.Label>Last Name</Form.Label> */}
                <Form.Control required placeholder="Enter Last Name*" type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                {/* <Form.Label>Bio</Form.Label> */}
                <Form.Control placeholder="Enter Bio" type="text" as="textarea" name="bio" value={bio} onChange={e => setBio(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Which continent are you from?</Form.Label>
                <select required name="continent" value={continent} onChange={e => setContinent(e.target.value)}>
                <option value="" selected disabled >Select Continent*</option>
                <option value="Africa">Africa</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Asia">Asia</option>
                <option value="Australia">Australia</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
            </select>
            </Form.Group><br></br>
            

            <div className='d-grid'><Button className="btn btn-info" variant="custom" type="submit">Sign up</Button></div>
    
    </Form> 
</div>
    )
};

export default SignUp;