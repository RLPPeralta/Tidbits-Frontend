import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { Button, Form } from 'react-bootstrap';

const EditProfile = () => {
    let params = useParams()
    let [ user, setUser ] = useState({
        userId: params.userId,
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        bio: "",
        continent: ""
      })

    let { getUser, createUser, editUser } = useContext(UserContext)
    let navigate = useNavigate()
    let { userId,email, password, firstName, lastName, bio, continent} = user
    // let userId = user.userId;
    // let email = user.email;
    // let password = user.password;
    // let firstName=user.firstName;
    // let lastName=user.lastName;
    // let bio = user.bio;
    // let continent=user.continent;

    useEffect(() => {
        if (userId === undefined) return
        async function fetch() {
          await getUser(userId)
            .then((user) => setUser(user))
        }
        fetch()
      }, [userId]) 
    
      function handleChange(event) {
        setUser((preValue) => {
          return { ...preValue, [event.target.name]: event.target.value }})
      }
    
      function addOrUpdate() {
        if (userId === undefined) {
          return createUser(user)
        } else {
          return editUser(user)
        }} 
    
      function handleSubmit(event) {
        event.preventDefault()
        addOrUpdate().then((user) =>{
            window.alert('Update successful!');
            navigate(`/profile`)
        }).catch(error => {
            console.log(error)
            navigate(`/signin`)
        })}

    return (
        <div>
        <Form onSubmit={handleSubmit}>
        <h2>Edit your profile </h2>
            <Form.Group className="mb-3" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={email} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={password} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName" value={firstName} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastName" value={lastName} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Bio</Form.Label>
                <Form.Control type="text" name="bio" value={bio} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Continent</Form.Label>
                <Form.Control type="text" name="continent" value={continent} onChange={handleChange} />
            </Form.Group> 
            
        <Button type="submit">Save</Button>
        </Form>
        </div>

    )
};

export default EditProfile;