import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import RecipeContext from '../contexts/RecipeContext';
import styles from '../css/RecipePage.css'

const RecipePage = () => {

    let params = useParams()
    let navigate = useNavigate()
  
    let { getRecipe, deleteRecipe } = useContext(RecipeContext)
    let [ oneRecipe, setOneRecipe ] = useState({
      recipeId: params.recipeId,
      userId: params.userId,
      recipe: "",
      instructions: "",
      ingredients: "",
      continent: "",
      image: "",
      createdAt: Date
  })
  let { recipeId, userId, User, recipe, instructions, ingredients, continent, image, createdAt} = oneRecipe

    useEffect(() => {
      async function fetch() {
        await getRecipe(recipeId)
          .then((recipe) => setOneRecipe(recipe))
      }
      fetch()
    }, [recipeId]);
        
  
    function handleDeleteRecipe(recipeId) {
      deleteRecipe(recipeId)
      navigate('/')
    }

    function loading() {
        return <div className="w-25 text-center"><Spinner animation="border" /></div>
      }

    function recipeComponent() {
        return (
              <div class="recipePage px-4">
                <div class="row align-items-center">
                  <div class="col-sm-12 col-md-6 p-3">
                    <div class="recipeImg card w-50 mx-auto">
                      <img src={image} className="img-fluid rounded" alt="recipe"/>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <h4 className='title'>{recipe}</h4>
                    <p className='continent'>From {continent}</p><br></br>
                    <div class='recipeDetails card w-50 mx-auto mb-4'>
                    <ul class="list-group list-group-flush">
                      <li class="detailsText list-group-item">Prep Time:</li>
                      <li class="detailsText list-group-item">Cook Time:</li>
                      <li class="detailsText list-group-item">Servings:</li>
                    </ul>
                    </div>
                    <h5 className='headings mb-2'>Ingredients</h5>
                    <ul>{ingredients.split("\n").map((ingredient) => {
                      return (<li className='text'>{ingredient}</li>)
                    })}</ul>
                    <h5 className='headings'>Directions</h5>
                    <p className='text'>{instructions}</p>
                    <p className='userLink'>Recipe added by <Link to={`/userprofile/${userId}`} >{User?.firstName} {User?.lastName}</Link> </p>
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