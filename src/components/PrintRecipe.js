import React, { useContext, useEffect, useState } from "react"
import { Button, Spinner } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import RecipeContext from "../contexts/RecipeContext"
import {FaRegArrowAltCircleLeft} from 'react-icons/fa';
import logohome from "../logohome.png";
import Picture1 from "../Picture1.png";
import styles from '../css/PrintRecipe.css'

const PrintRecipe = () => {

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


    function loading() {
        return <div className="w-25 text-center"><Spinner animation="border" /></div>
      }

      function printableRecipe() {
        if(token) {
          return (     
          <div>
              <Button size="lg" variant="outline" onClick={() => [navigate(-1)]}><FaRegArrowAltCircleLeft></FaRegArrowAltCircleLeft>Go Back</Button>
              <div className="print-page">      
              <h1>{recipe}</h1>
              <h5>From {country}, {continent}</h5>
              <p>Prep time: {prepTime}<br></br>Cook time: {cookTime}<br></br>Servings: {servings}<br></br></p>
              <h3>Ingredients</h3>
              <ul>{ingredients.split(",").map((ingredient) => {
                        return (<li className='text'>{ingredient}</li>)
                      })}</ul>
              <h3>Directions</h3>
              <p>{instructions}</p>
              <p>Recipe by {User?.firstName} {User?.lastName}</p>
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
      };

      return  oneRecipe ? printableRecipe() : loading();
};

export default PrintRecipe;