import React, { useContext, useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const RecipePage = () => {

    let params = useParams()
    let navigate = useNavigate()
  
    let { getRecipe, deleteRecipe } = useContext(RecipeContext)
    let [ recipe, setRecipe ] = useState()
  
    useEffect(() => {
      async function fetch() {
        await getRecipe(params.recipeId)
          .then((recipe) => setRecipe(recipe))
      }
      fetch()
    }, [params.recipeId]);
  
    function handleDeleteRecipe(id) {
      deleteRecipe(id)
      navigate('/')
    }

    function loading() {
        return <div className="w-25 text-center"><Spinner animation="border" /></div>
      }

    function recipeComponent() {
        console.log(recipe);
        let { recipeId, userId, recipe, instructions,ingredients, continent, image} = recipe
        return (
        <div style="center">
            <img src={image}></img>

              <h1>{recipe}</h1><br></br>
              <h2>Continent : {continent}</h2>

              <h3>Instructions</h3>
              <p>{instructions}</p><br></br>

              <h3>Ingredients</h3>
              <p>{ingredients}</p><br></br>

              <Button to={`/recipe/:recipeId/edit`} className="btn btn-primary mx-3">Edit this Recipe</Button>
              <Button variant="danger" onClick={handleDeleteRecipe.bind(this, id)}>Delete</Button>
              <Button variant="link" onClick={() => navigate('/')}>Go Back</Button>

          </div>
        )
      }

    return  recipe ? recipeComponent() : loading();
};

export default RecipePage;