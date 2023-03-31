import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let { signInUser } = useContext(UserContext);
    let navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        signInUser(email, password).then(() => {
            navigate('/profile');
        }).catch(error => {
            console.log(error);
            window.alert('Failed login');
        });
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <h1>SIGN IN</h1>
            <span>Email  </span>
            <input placeholder="Enter email" type="text" name="email" onChange={e => setEmail(e.target.value)} />
            <br></br><br></br>
            <span>Password  </span>
            <input placeholder="Enter password" type="password" name="password" onChange={e => setPassword(e.target.value)} />
            <br /><br></br>
            <button>
                Sign In
            </button>
        </form>
        </div>

    )
};

export default SignIn;