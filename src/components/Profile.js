import React, { useContext, useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

const Profile = () => {

    let params = useParams()
    let navigate = useNavigate()
  
    let { getCurrentUser, editUser } = useContext(UserContext)
    let [ userProfile, setUserProfile ] = useState()

    useEffect(() => {
      async function fetch() {
        await getCurrentUser(params.userId)
          .then((user) => setUserProfile(user))
      }
      fetch()
    }, [params.userId]);

    // function loading() {
    //     return <div className="w-25 text-center"><Spinner animation="border" /></div>
    //   }

    // function profileComponent() {
    //     let { firstName, lastName, email, bio, continent, userId} = userProfile
    //     return (
    //     <div>

    //           <h1>Welcome back, {firstName}</h1><br></br>
    //           <h2>Bio: {bio}</h2>
    //           <p>Continent: {continent}</p><br></br>

    //           <Link to={`/editprofile/${userId}`} className="btn btn-primary mx-3">Edit My Profile</Link>
    //           <Link to={`/recipe/add`} className="btn btn-primary mx-3">Add a Recipe</Link>

    //           <Button className="btn btn-primary mx-3" variant="success" onClick={() => navigate('/')}>Go Back</Button>
    //       </div>
    //     )
    //   }
    // return  userProfile ? profileComponent() : loading();
};

export default Profile;