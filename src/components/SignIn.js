import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { Button, Form } from 'react-bootstrap';
import '../css/SignInUp.css'


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
    <div className='page d-flex justify-content-center align-items-center p-4 p-sm-3'>
        <Form className=" SignForm p-4 p-sm-3" onSubmit={handleSubmit}>

            <h3 className="formtitle"> Please Sign In </h3>
                <Form.Group className="mb-3 d-flex justify-content-center">Don't have an account?
                    <Link to='/signup'>Sign Up</Link>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={e => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)} />
                    <Form.Text className='text-muted'>We'll never share your password with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group className='mb-3 d-flex justify-content-center' controlId='formBasicCheckbox'> <Form.Check type="checkbox" label="Remember Me" /> </Form.Group>

            <div className='d-grid'><Button className="btn btn-info" variant="custom" type="submit">Submit</Button></div>
        </Form>

    </div>
    )
};

export default SignIn;