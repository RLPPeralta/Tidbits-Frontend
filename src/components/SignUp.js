import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [bio, setBio] = useState("");
    const [continent, setContinent] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let { createUser } = useContext(UserContext);
    let navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        createUser(firstName, lastName, bio, continent, email, password).then(() => {
            navigate('/signin');
        }).catch(error => {
            console.log(error);
            window.alert('Failed registration: error creating user');
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Create your account</h1>
            <br></br><br></br>
            <span>First Name  </span>
            <input placeholder="Enter First Name" type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
            <br></br><br></br>
            <span>Last Name  </span>
            <input placeholder="Enter Last Name" type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
            <br></br><br></br>
            <span>Email  </span>
            <input placeholder="Enter Email" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
            <br></br><br></br>
            <span>Continent  </span>
            <input placeholder="Enter Continent" type="text" name="continent" value={continent} onChange={e => setContinent(e.target.value)} />
            <br></br><br></br>
            <span>Bio  </span>
            <input placeholder="Enter Bio" type="text" name="bio" value={bio} onChange={e => setBio(e.target.value)} />
            <br></br><br></br>
            <span>Password  </span>
            <input placeholder="Enter Password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
            <br /><br></br>
            <button>Sign Up</button>
        </form>
        </div>

    )
};

export default SignUp;