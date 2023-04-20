import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import RecipeContext from '../contexts/RecipeContext';
import UserContext from '../contexts/UserContext';
import styles from '../css/RecipePage.css'

const RecipePage = () => {

    let params = useParams()
    let navigate = useNavigate()
  
    let { getRecipe, deleteRecipe } = useContext(RecipeContext)
    let { getUser } = useContext(UserContext)
    let firstName = localStorage.getItem("authorFirstName")
    let lastName = localStorage.getItem("authorLastName")
    let [ oneRecipe, setOneRecipe ] = useState({
      recipeId: params.recipeId,
      userId: params.userId,
      recipe: "",
      instructions: "",
      ingredients: "",
      continent: "",
      image: "",
      updatedAt: Date
  })
  let { recipeId, userId, recipe, instructions, ingredients, continent, image} = oneRecipe

    useEffect(() => {
      async function fetch() {
        await getRecipe(recipeId)
          .then((recipe) => setOneRecipe(recipe))
      }
      fetch()
    }, [recipeId]);
    

    // let [ author, setAuthor ] = useState({
    //   id: userId,
    //   firstName: "",
    //   lastName: "",
    //   bio: "",
    // })
    
    // let { id, email, password, firstName, lastName, bio } = author

    
    
    function getUserInfo(){
      console.log(getUser(userId));
      getUser(userId)
    }
  

  
    function handleDeleteRecipe(recipeId) {
      deleteRecipe(recipeId)
      navigate('/')
    }

    function loading() {
        return <div className="w-25 text-center"><Spinner animation="border" /></div>
      }

    function recipeComponent() {
      getUser(userId);
        return (
              <div class="container px-4 text-center">
                <div class="row">
                  <div class="col p-3">
                  <img src={image} className="img-fluid rounded" alt="recipe"/>
                  </div>
                  <div class="col">
                    <h4>{recipe}</h4><br></br>
                    <h2>From {continent}</h2><br></br>
                    <h6>Recipe added by <Link to={`/userprofile/${userId}`} >{firstName} {lastName}</Link> </h6>
                  </div>
                </div>
              </div>
            
                  

            // <Card className="align-self-center w-60">
            //   <Card.Body className="cardDetails">
            //     <Card.Img variant="top" src={image} />
            //     <Card.Title>{recipe}</Card.Title>
            //     <Card.Subtitle className="mb-2 text-muted"><strong>from {continent}</strong></Card.Subtitle>
            //     <Card.Text className="cardText">
            //       <strong>Ingredients: </strong> <span>{ingredients}</span>
            //     </Card.Text>
            //     <Card.Text className="cardText">
            //       <strong>Instructions: </strong> <span>{instructions}</span>
            //     </Card.Text>
            //     <Link to={`/profile/${userId}`} className='nav-link'>Creator's Profile{userId.firstName}</Link>
            //   <Button className="btn btn-primary mx-3" variant="danger" onClick={handleDeleteRecipe.bind(this, recipeId)}>Delete</Button>
            //   <Button className="btn btn-primary mx-3" variant="success" onClick={() => navigate('/')}>Go Back</Button>
            //   <Link to={`/edit/${recipeId}`} className="btn btn-primary mx-3">Edit this Recipe</Link>
            //   </Card.Body>
            // </Card>
        )
      }
    return  oneRecipe ? recipeComponent() : loading();
};

export default RecipePage;