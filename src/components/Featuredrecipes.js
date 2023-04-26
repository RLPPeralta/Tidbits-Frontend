// import React, { useContext, useEffect, useState } from 'react'
// import { Card, Button } from 'react-bootstrap'
// import Stack from 'react-bootstrap/Stack'
// import { useNavigate } from 'react-router'
// import RecipeContext from '../contexts/RecipeContext'

// function Featuredrecipes() {
//     let navigate = useNavigate()


//     let context = useContext(RecipeContext);
//     useEffect(() => {
//         console.log(context.recipes)
//     },[]);



//     function Featuredrecipes(recipes) {
//         if (recipes === null) { return }
//         console.log(recipes);
//         return recipes.map((recipe) =>
//          <Card key={recipe.id}>
//             <Card.Body className='cardBody'>
//             <Card.Title>{recipe.recipe}</Card.Title>
//                 <Card.Img variant="top" className="card-picture" src={recipe.image} />
                
//                 <Link to={`/recipe/${recipe.recipeId}`} className="btn btn-outline-secondary mx-3" key={recipe.id}>View</Link>
//             </Card.Body>
//             </Card>
//         )
//     }

//     return (
//         <div>
//         <h1>Featured Recipes</h1>
//         <Stack direction="horizontal" gap={3}>
//             <div className="card-container">
//                 <RecipeContext.Consumer>
//                     {({ recipes }) => (
//                         Featuredrecipes(recipes)
//                     )}
//                 </RecipeContext.Consumer>
//             </div>
//         </Stack>
//     </div>

//     )
// }

// export default Featuredrecipes;