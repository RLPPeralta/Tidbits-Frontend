import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { Button, Form } from 'react-bootstrap';

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

        <Form onSubmit={handleSubmit}>
        <Form.Label> SIGN UP </Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={e => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="Enter First Name" type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control placeholder="Enter Last Name" type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Bio</Form.Label>
                <Form.Control placeholder="Enter Bio" type="text" name="bio" value={bio} onChange={e => setBio(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Continent</Form.Label>
                <Form.Control placeholder="Enter Continent" type="text" name="continent" value={continent} onChange={e => setContinent(e.target.value)}/>
            </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
    </Form> 

    )
};

export default SignUp;