import React, { useContext, useEffect, useState } from 'react';
import { Button, Spinner, Card, Stack, } from 'react-bootstrap';
import { Link, useNavigate, useParams, Outlet} from 'react-router-dom';
import  RecipeContext  from '../contexts/RecipeContext';
import  UserContext  from '../contexts/UserContext';
import '../css/Profile.css'


const Profile = () => {

    let params = useParams()
    let navigate = useNavigate()
  
    let { getCurrentUser } = useContext(UserContext)
    let { getAllRecipes, getRecipe, deleteRecipe } = useContext(RecipeContext)
    let [ userProfile, setUserProfile ] = useState();

    let token = localStorage.getItem('myRecipeToken')
    let localUserId = localStorage.getItem('userId')


    useEffect(() => {
      async function fetch() {
        await getCurrentUser(params.userId)
          .then((user) => setUserProfile(user))
          .catch((error) => {
            console.log(error);
            window.alert("user not logged in");

        }); 
      }
        fetch()
    }, [params.userId, getRecipe, getCurrentUser]);

    function handleDeleteRecipe(recipeId) {
        deleteRecipe(recipeId)
        navigate('/')
    }

    // User Profile Information // 
    function profileComponent(userProfile) {
      let { firstName, lastName, bio, continent, userId} = userProfile || {};
        if(token) { 
            return (
              <div className='profile-section' >
                    <h1>Welcome back,</h1>
                    <h2 className='profile-name'>{firstName} {lastName}</h2><br></br>
                    <p>Bio: {bio}</p>
                    <p>Continent: {continent}</p><br></br>
                    <div className='buttons'>
                      <Link  to={`/editprofile/${userId}`} className="btn btn-primary mx-3">Edit My Profile</Link>
                      <Link to={`/recipe/add`} className="btn btn-primary mx-3">Add a Recipe</Link>
                      <Button className="btn btn-primary mx-3" variant="success" onClick={() => navigate('/')}>Go Back</Button>
                    </div>
                </div>
              )
            }
        
        else { 
            return (
                <div>
                    <h2>Sign In</h2><br></br>
                    <Button className="btn btn-primary mx-3" variant="success" onClick={() => navigate('/signin')}>SignIn</Button>
                </div>
                )
        }
      }



    // Map of User Recipes //
    function userRecipes(recipe) {
      if (recipe != null) {
      return recipe?.map((r) => 
              // <div className='display-container'> //card//
              //     <Card style={{ width: '15rem' }} key={r.recipeId} xs={12} md={8}  >
              //       <Card.Img variant="top" src={r.image} className="card-img"/> //card image//
              //       <Card.Body>
              //           <Card.Title className="mbsc-card-title"> {r.recipe}</Card.Title>
              //           <div className='buttons'>
              //             <Link className='btn btn-primary'to={`/recipe/${r.recipeId}`}>View</Link>{' '}
              //             <Link className='btn btn-primary' to={`/edit/${r.recipeId}`}>Edit Recipe</Link>{' '}
              //             <Button className='btn btn-danger' onClick={handleDeleteRecipe.bind(this, r.recipeId)}>Delete</Button>{' '}
              //           </div>
              //       </Card.Body>
              //     </Card> 
              //  </div>

              <div className='display-container'> 
              <div style={{ width: '15rem' }} key={r.recipeId} xs={12} md={8} class="row"  >
                <img variant="top" src={r.image} class="card-img"/> 
                <div class="card-img-overlay text-white d-flex flex-column justify-content-center">
                    <h3 class="card-title"> {r.recipe}</h3>
                    <div className='recipe-buttons'>
                      <Link className='btn btn-recipe' to={`/recipe/${r.recipeId}`}>View</Link> <br></br>
                      <Link className='btn btn-recipe' to={`/edit/${r.recipeId}`}>Edit Recipe</Link>  <br></br>
                      <Link className='btn btn-recipe' onClick={handleDeleteRecipe.bind(this, r.recipeId)}>Delete</Link>{' '}
                    </div>
                </div>
              </div> 
           </div>
          )
        }
        else { 
          return ( 
            <div className='no-recipe-display-container' >
              <h2>Get Cookin'</h2>
              <p>You've created no recipes</p>
              <Link to={`/recipe/add`} className="btn btn-primary mx-3">Add a Recipe</Link>  
            </div>
          )
        }
    }


    
    return (
      <>
      <div classname='page d-flex justify-content-center align-items-center p-4 p-sm-3'>
      {profileComponent(userProfile)}
      </div>
      <br></br>
      <h4 className='my-recipes'>My Recipes</h4>
            <Stack className=' d-flex justify-content-center align-items-center p-4 p-sm-3' direction="horizontal" spacing={3}>
                  <div className="recipe-card-container">
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