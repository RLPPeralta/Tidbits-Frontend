import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { Button, Form } from 'react-bootstrap';


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let { signInUser } = useContext(UserContext);
    let navigate = useNavigate();
    const id = localStorage.getItem('userId');

    function handleSubmit(event) {
        event.preventDefault();
        signInUser(email, password).then(() => {
            navigate(`/profile/${id}` );
        }).catch(error => {
            console.log(error);
            window.alert('Failed login');
        });
    }

    return (

    <Form onSubmit={handleSubmit}>
    <Form.Label> SIGN IN </Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={e => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
    </Form>     

    )
};

export default SignIn;