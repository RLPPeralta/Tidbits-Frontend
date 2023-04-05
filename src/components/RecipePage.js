import React, { useContext, useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import RecipeContext from '../contexts/RecipeContext';

const RecipePage = () => {

    let params = useParams()
    let navigate = useNavigate()
  
    let { getRecipe, deleteRecipe } = useContext(RecipeContext)
    let [ oneRecipe, setOneRecipe ] = useState()

    useEffect(() => {
      async function fetch() {
        await getRecipe(params.recipeId)
          .then((recipe) => setOneRecipe(recipe))
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
        let { recipeId, userId, recipe, instructions,ingredients, continent, image} = oneRecipe
        return (
        <div>
            <img src={image}></img>

              <h1>{recipe}</h1><br></br>
              <h2>from {continent}</h2>

              <h3>Instructions</h3>
              <p>{instructions}</p><br></br>

              <h3>Ingredients</h3>
              <p>{ingredients}</p><br></br>

              <Link to={`/recipe/:recipeId/edit`} className="btn btn-primary mx-3">Edit this Recipe</Link>
              <Button className="btn btn-primary mx-3" variant="danger" onClick={handleDeleteRecipe.bind(this, recipeId)}>Delete</Button>
              <Button className="btn btn-primary mx-3" variant="success" onClick={() => navigate('/')}>Go Back</Button>
          </div>
        )
      }

    return  oneRecipe ? recipeComponent() : loading();
};

export default RecipePage;