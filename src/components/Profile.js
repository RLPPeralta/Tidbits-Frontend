import React, { useContext, useEffect, useState } from 'react';
import { Button, Spinner, Card, Stack, } from 'react-bootstrap';
import { Link, useNavigate, useParams, Outlet} from 'react-router-dom';
import RecipeContext from '../contexts/RecipeContext';
import UserContext from '../contexts/UserContext';
import styles from '../css/Profile.css'


const Profile = () => {

    let params = useParams()
    let navigate = useNavigate()
  
    let { getCurrentUser } = useContext(UserContext)
    let { getAllRecipes, deleteRecipe } = useContext(RecipeContext)
    let [ userProfile, setUserProfile ] = useState()

    let token = localStorage.getItem('myRecipeToken')
    let localUserId = localStorage.getItem('userId')


    useEffect(() => {
      async function fetch() {
        await getCurrentUser(params.userId)
          .then((user) => setUserProfile(user))
      }
      fetch()
    }, [params.userId, getAllRecipes, getCurrentUser]);


    function handleDeleteRecipe(recipeId) {
        deleteRecipe(recipeId)
        navigate('/')
    }

    // User Profile Information // 
    function profileComponent() {
      let { firstName, lastName, bio, continent, userId } = userProfile
        if(token) { 
            return (
                <div className='page'>
                    <h1>My Recipes</h1>
                    <h2>{firstName} {lastName}</h2><br></br>
                    <p>Bio: {bio}</p>
                    <p>Continent: {continent}</p><br></br>
                    <Link to={`/editprofile/${userId}`} className="btn btn-primary mx-3">Edit My Profile</Link>
                    <Link to={`/recipe/add`} className="btn btn-primary mx-3">Add a Recipe</Link>
                    <Button className="btn btn-primary mx-3" variant="success" onClick={() => navigate('/')}>Go Back</Button>
                </div>
              )
            }
        
        else { 
            return (
                <div>
                    <h2></h2><br></br>
                    <Button className="btn btn-primary mx-3" variant="success" onClick={() => navigate('/signin')}>SignIn</Button>
                </div>
                )
        }
      }

    // Map of User Recipes //
    function userRecipes(recipe) { 
      if (recipe === null && localUserId === recipe.userId) {
      return recipe.map((r) => 
              <div>
                  <Card style={{ width: '15rem' }} key={r.recipeId} className="card" xs={12} md={8}  >
                    <Card.Img variant="top" src={r.image} className="image"/>
                    <Card.Body>
                        <Card.Title className="mbsc-card-title"> {r.recipe}</Card.Title>
                        <Card.Text>{r.instructions}</Card.Text>
                        <Link className='btn btn-primary'to={`/recipe/${r.recipeId}`}>View</Link>{' '}
                        <Link className='btn btn-info' to={`/edit/${r.recipeId}`}>Edit Recipe</Link>{' '}
                        <Button className='btn btn-danger' onClick={handleDeleteRecipe.bind(this, r.recipeId)}>Delete</Button>{' '}
                    </Card.Body>
                  </Card> 
               </div>
          )
        }
        else { 
          return ( 
            <div>
              <h2>Get cookin, you've created no recipes</h2>
              <Link to={`/recipe/add`} className="btn btn-primary mx-3">Add a Recipe</Link>
            </div>
          )
        }
    }
    
    return (
      <>
         {profileComponent()}
            <Stack direction="horizontal" gap={3} >
                  <div className="card-container">
                      <RecipeContext.Consumer>
                          {({ recipe }) => (
                            userRecipes(recipe)
                          )}
                      </RecipeContext.Consumer>
                  </div>
                <Outlet />
            </Stack>    
      </>
  )
};

export default Profile;