import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { useNavigate, useParams, Link, Outlet  } from 'react-router-dom';
import RecipeContext from '../contexts/RecipeContext';


const NorthAmerica = () => {
    
    let params = useParams()
    let navigate = useNavigate()
  
    let { getRecipeNorthAmerica, deleteRecipe } = useContext(RecipeContext)
    let [ recipe1, setRecipe ] = useState()
  
    useEffect(() => {
      async function fetch() {
        await getRecipeNorthAmerica(params.recipeId)
          .then((recipe1) => setRecipe(recipe1))
      }
      fetch()
    }, [params.recipeId]);
  
    function handleDeleteRecipe(recipeId) {
      deleteRecipe(recipeId)
      navigate('/profile')
    }
  
  
    function recipeList(recipes) {
      if (recipes === null) return
      return recipes?.map((recipe1) =>
        <Card class="card" style={{ width: '20rem' }} key={recipe1.recipeId}>
            <Card.Img variant="top" src={recipe1.image} />
            <Card.Body>
                <Card.Title>{recipe1.recipe}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${recipe1.ingredients}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">${recipe1.instructions}</Card.Subtitle>

                    <Link to={'/recipe/${recipeId}'} className="btn btn-secondary mx-3">View</Link>                    
                    <Button variant="danger" onClick={handleDeleteRecipe.bind(this, recipe1.id)}>Delete</Button>
            </Card.Body>
        </Card>
      )
    }


    return (
    <>         
           <Image width="450" height="435" class="northAmericaImage" src="North60.png" alt="northAmericaImage" ></Image>
           <h1>All Recipes</h1>
                <div class="card-container">
                    <RecipeContext.Consumer>
                        {({recipes}) => (
                        recipeList(recipes)
                        )}
                </RecipeContext.Consumer>
                </div>
            <div class='detail'><Outlet /></div>
           <Button onClick={() => navigate(-1)}>Go back</Button>

    </>

    )
};

export default NorthAmerica;