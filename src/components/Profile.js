import React, { useContext, useEffect, useState } from 'react';
import { Button, Spinner, Card, Alert, Stack, } from 'react-bootstrap';
import { Link, useNavigate, useParams, Outlet} from 'react-router-dom';
import RecipeContext from '../contexts/RecipeContext';
import UserContext from '../contexts/UserContext';

const Profile = (props) => {

    let params = useParams()
    let navigate = useNavigate()
  
    let { getCurrentUser } = useContext(UserContext)
    let { getAllRecipes, deleteRecipe } = useContext(RecipeContext)
    let [ userProfile, setUserProfile ] = useState()

    let token = localStorage.getItem('myRecipeToken')

    useEffect(() => {
      async function fetch() {
        await getCurrentUser(params.userId)
          .then((user) => setUserProfile(user))
      }
      fetch()
    }, [params.userId, getAllRecipes]);

    function loading() {
        return <div className="w-25 text-center"><Spinner animation="border" /></div>
      }

    // function handleDeleteRecipe(recipeId) {
    //     deleteRecipe(recipeId)
    //     navigate('/')
    // }


    function profileComponent() {
        let { firstName, lastName, bio, continent, userId } = userProfile

        if(token) { 
            return (
                    <div>

                    <h1>{firstName} {lastName}</h1><br></br>
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

                    <h1>{firstName} {lastName}</h1><br></br>
                    <p>Bio: {bio}</p>
                    <p>Continent: {continent}</p><br></br>

                    <Button className="btn btn-primary mx-3" variant="success" onClick={() => navigate('/')}>Go Back</Button>
                </div>
                )
        }
      }

    // function userRecipes(recipe) { 
    //   if (recipe === null) return 
    //   return recipe.map((r) => 
    //           <div>
    //           <Card style={{ width: '18rem' }} key={r.recipeId} className="card" >
    //             <Card.Img variant="top" src={r.image} className="img"/>
    //             <Card.Body>
    //                 <Card.Title className="mbsc-card-title"> {r.recipe}</Card.Title>
    //                 {/* <Card.Text>{r.instructions}</Card.Text>
    //                 <Link className='btn btn-primary'to={`/recipe/${r.recipeId}`}>View</Link>{' '}
    //                 <Link className='btn btn-info' to={`/'/edit/${r.recipeId}`}>Edit Recipe</Link>{' '}
    //                 <Button className='btn btn-danger' onClick={handleDeleteRecipe.bind(this, r.recipeId)}>Delete</Button>{' '} */}
    //             </Card.Body>
    //         </Card> 
    //     </div>
    //     )
    // }


  //   return (
  //     <>
  //     <div>
  //         <h1>My Recipes</h1>
  //         {/* <div>{profileComponent()}</div> */}
  //         <Stack direction="horizontal" gap={3} >
  //             <div className="card-container">
  //                 <RecipeContext.Consumer>
  //                     {({ recipes }) => (
  //                       userRecipes(recipes)
  //                     )}
  //                 </RecipeContext.Consumer>
  //             </div>
  //             <Outlet />
  //         </Stack>
  //     </div>
    
  //     </>
  // )

    return  userProfile ? profileComponent() : loading() 
};

export default Profile;