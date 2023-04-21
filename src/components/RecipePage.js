import React, { useContext, useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import RecipeContext from '../contexts/RecipeContext';
import { AiOutlinePrinter } from 'react-icons/ai';
import logohome from "../logohome.png";
import Picture1 from "../Picture1.png";
import {FaRegArrowAltCircleLeft} from 'react-icons/fa';
import styles from '../css/RecipePage.css'

const RecipePage = () => {

    let params = useParams()
    let navigate = useNavigate()
    let token = localStorage.getItem('myRecipeToken')
  
    let { getRecipe, deleteRecipe } = useContext(RecipeContext)
    let [ oneRecipe, setOneRecipe ] = useState({
      recipeId: params.recipeId,
      userId: params.userId,
      recipe: "",
      instructions: "",
      ingredients: "",
      continent: "",
      image: "",
      country: "",
      servings: "",
      prepTime: "",
      cookTime: "",
      createdAt: Date
  })
  let { recipeId, userId, User, recipe, instructions, ingredients, continent, image, country, servings, prepTime, cookTime, createdAt} = oneRecipe

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
          if (token) {
            return (
              <div class="recipePage px-4">
                <Button size="lg" variant="outline" onClick={() => [navigate(-1)]}><FaRegArrowAltCircleLeft></FaRegArrowAltCircleLeft>Go Back</Button>
                <div class="row align-items-center">
                  <div class="col-sm-12 col-md-6 p-3">
                    <div class="recipeImg card w-50 mx-auto">
                      <img src={image} className="img-fluid rounded" alt="recipe"/>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <h4 className='title'>{recipe}</h4>
                    <p className='continent'>From {country}, {continent}</p><br></br>
                    <div className='print d-flex'>          
                      <p className='print-link'><Link class="text-secondary"to={`/print/${recipeId}`}><AiOutlinePrinter></AiOutlinePrinter>Printable Version</Link></p>
                    </div>
                    <div class='recipeDetails card w-50 mx-auto mb-4'>
                    <ul class="list-group list-group-flush">
                      <li class="detailsText list-group-item">Prep Time: {prepTime}</li>
                      <li class="detailsText list-group-item">Cook Time: {cookTime}</li>
                      <li class="detailsText list-group-item">Servings: {servings}</li>
                    </ul>
                    </div>
                    <h5 className='headings mb-2'>Ingredients</h5>
                    <ul>{ingredients.split(",").map((ingredient) => {
                      return (<li className='text'>{ingredient}</li>)
                    })}</ul>
                    <h5 className='headings'>Directions</h5>
                    <p className='text'>{instructions}</p>
                    <p className='userLink'>Recipe added by <Link to={`/userprofile/${userId}`} >{User?.firstName} {User?.lastName}</Link> Created: {createdAt} </p>
                  </div>
                </div>
              </div>
        )
          } else {
            return (
              <div class="recipePage px-4">
                <div class="row align-items-center ">
                  <div class="col-sm-12 col-md-6 p-3">
                    <div class="recipeImg card w-50 mx-auto">
                    <img src={logohome}alt="logo" /><br></br>                   
                    <img src={Picture1}alt="logoname"/>                    
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <h1 className='errorTitle'>Hey, good lookin! <br></br> What ya got cookin?</h1>
                    <h3 className='errorBody'>Unfortunately, not this recipe. If you would like to make this recipe and many other delectable delights, feel free to sign up or login. We would love to have you!</h3><br></br>
                  </div>
                </div>            
              </div>
            )
          }
            
      }
    return  oneRecipe ? recipeComponent() : loading();
};

export default RecipePage;