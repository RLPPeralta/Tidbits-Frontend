import React, { useContext, useEffect, useState } from 'react';
import { Button, Stack, } from 'react-bootstrap';
import { Link, useNavigate, useParams, Outlet, useRevalidator } from 'react-router-dom';
import RecipeContext from '../contexts/RecipeContext';
import UserContext from '../contexts/UserContext';
import '../css/UserProfile.css'


const UserProfile = () => {

  let params = useParams()
  let navigate = useNavigate()

  let { getCurrentUser } = useContext(UserContext)
  let { deleteRecipe, getCurrentUserRecipes } = useContext(RecipeContext)
  let [userProfile, setUserProfile] = useState();
  let [userRecipe, setUserRecipes] = useState([]);

  let token = localStorage.getItem('myRecipeToken')

  useEffect(() => {
    console.log("useEffect for user info");
    async function fetch() {
      await getCurrentUser()
        .then((user) => setUserProfile(user))
        .catch((error) => {
          console.log(error);
        });
    }
    fetch()
  }, [params, getCurrentUser]);

  useEffect(() => {
    console.log("useEffect for user recipes");
    async function fetch() {
      await getCurrentUserRecipes()
        .then((recipes) => setUserRecipes(recipes),  console.log (getCurrentUserRecipes()))
        .catch((error) => {
          console.log(error);
        });
    }
    fetch()
  }, [getCurrentUserRecipes]);

  function handleDeleteRecipe(recipeId) {
    deleteRecipe(recipeId)
    navigate('/')
  }

  // User Profile Information // 
  function profileComponent(userProfile) {
    let { firstName, lastName, bio, continent, userId } = userProfile || {};
    if (token) {
      return (
        <div className='profile-section' >
          <h1 className='h1-tag'>Welcome back,</h1>
          <h2 className='h2-tag'>{firstName} {lastName}</h2><br></br>
          <p className='p-tag'>{bio}</p>
          <p className='p-tag'>{continent}</p><br></br>
          <div className='buttons'>
            <Link to={`/editprofile/${userId}`} className="btn btn-primary mx-3">Edit My Profile</Link>
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

  //Map through user recipes getCurrentUserRecipes//
  function userRecipes() {
    let arr = userRecipe.length
    if (arr != 0 ) {
      return (userRecipe?.map((r) =>
        <div className='display-container' key={r.recipeId}>
          <div style={{ width: '15rem' }} key={r.recipeId} xs={12} md={8} className="row"  >
            <img variant="top" src={r.image} className="card-img" />
            <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
              <h3 className="card-title"> {r.recipe}</h3>
              <div className='recipe-buttons'>
                <Link className='btn btn-recipe' to={`/recipe/${r.recipeId}`}>View</Link> <br></br>
                <Link className='btn btn-recipe' to={`/edit/${r.recipeId}`}>Edit Recipe</Link>  <br></br>
                <Link className='btn btn-recipe' onClick={handleDeleteRecipe.bind(this, r.recipeId)}>Delete</Link>{' '}
              </div>
            </div>
          </div>
        </div>
      )
      )
    }
    else {
      return (
        <div className='no-recipe-display-container' >
          <h2 className='h2-tag'>Get Cookin'</h2>
          <p className='p-tag'>You've created no recipes</p>
          <Link to={`/recipe/add`} className="btn btn-primary mx-3">Add a Recipe</Link>
        </div>
      )
    }
  }



  return (
    <>
      <div className='page d-flex justify-content-center align-items-center p-4 p-sm-3'>
        {profileComponent(userProfile)}
      </div>
      <br></br>
      <h1 className='h1-tag'>My Recipes</h1>
      <Stack className=' page d-flex justify-content-center align-items-center p-4 p-sm-3' direction="horizontal" spacing={3}>
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

export default UserProfile;