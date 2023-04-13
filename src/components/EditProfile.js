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

    let { getUser, createUser, editUser, getCurrentUser } = useContext(UserContext)
    let navigate = useNavigate()
    let { userId,email, password, firstName, lastName, bio, continent} = user

    useEffect(() => {
        if (userId === undefined) return
        async function fetchData() {
          await getCurrentUser(userId)
            .then((user) => setUser(user))
        }
        fetchData()
      }, [userId]) 
    
      function handleChange(event) {
        //event.persist();
        setUser((preValue) => {
          return { ...preValue, [event.target.name]: event.target.value }})
      }
    
     async function addOrUpdate() {
         if (userId === undefined) {
          return await createUser(user)
        } else {
          return await editUser(user)
        }} 
    
      function handleSubmit(event) {
        event.preventDefault()
        addOrUpdate().then((user) =>{
            window.alert('Update successful!');
            navigate(`/profile/${userId}`)
        }).catch(error => {
          window.alert('Error occurred while updating!');
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
            <Form.Control as="select" type="text" name="continent" value={continent} onChange={handleChange}>
                <option>Select Continent</option>
                <option value="Africa">Africa</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Asia">Asia</option>
                <option value="Australia">Australia</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
            </Form.Control>
            
        <Button type="submit">Save</Button>
        <Button className="btn btn-primary mx-3" variant="danger" onClick={() => [navigate(-1),window.alert('Changes not saved')]}>Cancel</Button>
        </Form>
        </div>

    )
};

export default EditProfile;