import React, { useContext, useEffect, useState } from 'react';
import { Button, Spinner, Card, Stack, } from 'react-bootstrap';
import { Link, useNavigate, useParams, Outlet} from 'react-router-dom';
import  RecipeContext  from '../contexts/RecipeContext';
import  UserContext  from '../contexts/UserContext';
import '../css/GeneralProfile.css'


const GeneralProfile = () => {
    let params = useParams()
    let navigate = useNavigate()
  
    let { getUser } = useContext(UserContext)
    let { getAllRecipes, getRecipe, deleteRecipe } = useContext(RecipeContext)
    let [ userProfile, setUserProfile ] = useState();

    let token = localStorage.getItem('myRecipeToken')
    let localUserId = localStorage.getItem('userId')


    useEffect(() => {
      async function fetch() {
        await getUser(params.userId)
          .then((user) => setUserProfile(user));
      }
        fetch()
    }, [params.userId, getRecipe, getUser]);


    function generalProfileComponent(userProfile) {
        let { firstName, lastName, bio, continent, userId} = userProfile || {};
              return (
                <div className='general-profile-section' >
                      <h1 className='h1-tag'>Tidbits</h1>
                      <h2 className='h2-tag' >{firstName} {lastName}</h2><br></br>
                      <p className='general-p'>A bit about me: {bio}</p>
                      <p className='general-p'>{continent}</p><br></br>
                      {/* <div className='buttons'>
                        <Button className="btn btn-primary mx-3" variant="success" onClick={() => navigate('/')}>Go Back</Button>
                      </div> */}
                  </div>
                )
              }

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
                          </div>
                      </div>
                    </div> 
                 </div>
                )
              }
        }
    
    return (
        <>
        <div classname='page d-flex justify-content-center align-items-center p-4 p-sm-3'>
        {generalProfileComponent(userProfile)}
        </div>
        <h1 className='h1-tag'>Featured Recipes by this Creator</h1>
        <br></br>
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

} 

export default GeneralProfile;