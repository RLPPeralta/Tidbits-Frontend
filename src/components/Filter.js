import React, { useContext, useEffect, useState } from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import Stack from 'react-bootstrap/Stack'
import { Link, useParams } from 'react-router-dom'
// import { RecipeContext } from './contexts/RecipeContext'
import RecipeContext from '../contexts/RecipeContext'


function Filter() {
    let params = useParams();
    const [ recipes, setRecipes ] = useState([]);
    let { searchRecipe } = useContext(RecipeContext);

    useEffect(() => {
        async function fetch() {
            await searchRecipe(params.searchQuery).then(response => {
                setRecipes(response.data)
                console.log(response.data)
            })
        }
    fetch();
    }, [params.searchQuery])

    
    function RecipeList() {
        if (recipes === null) { return }
        console.log(recipes);
        return recipes.map((recipe) =>
         <Card key={recipe.id}>
            <Card.Body className='cardBody'>
            <Card.Title>{recipe.recipe}</Card.Title>
                <Card.Img variant="top" className="card-picture" src={recipe.image} />
                
                <Link to={`/recipe/${recipe.recipeId}`} className="btn btn-outline-secondary mx-3" key={recipe.id}>View</Link>
            </Card.Body>
            </Card>
        )
    }

    return (
        <>
            <h1>Recipes</h1>
            <Stack direction="horizontal" gap={3}>
            <CardGroup className='card-group'>
                {RecipeList()}
            </CardGroup>
            </Stack>
        </>
    )
}

export default Filter;