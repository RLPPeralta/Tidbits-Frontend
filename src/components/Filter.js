import React, { useContext, useEffect, useState } from 'react'
import { CardGroup, Modal } from 'react-bootstrap'
import Stack from 'react-bootstrap/Stack'
import { Link, useParams } from 'react-router-dom'
import RecipeContext from '../contexts/RecipeContext'
import '../css/Nav.css'
import '../css/Welcome.css';


function Filter() {
    let params = useParams();
    const [recipes, setRecipes] = useState([]);
    let { searchRecipe } = useContext(RecipeContext);

    useEffect(() => {
        async function fetch() {
            await searchRecipe(params.filter).then(response => {
                setRecipes(response.data)
            })
        }
        fetch();
    }, [params.filter])

    const token = localStorage.getItem('myRecipeToken')

    function RecipeList() {
        if (recipes === null) return
        if (token) {
            return recipes.map((r) =>
                <div className='display-container' >
                    <div style={{ width: '15rem' }} key={r.recipeId} xs={12} md={8} class="row"  >
                        <img variant="top" src={r.image} class="card-img" />
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
        <div className="searchInputs">

            <h1>Recipes</h1>
            <Stack direction="horizontal" gap={3}>
                <CardGroup className='card-group'>
                    {RecipeList()}
                </CardGroup>
            </Stack>

        </div>
    )
}

export default Filter;