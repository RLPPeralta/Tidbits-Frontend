import React, { useContext, useEffect, useState } from 'react';
import { Card, Image, Row, Stack } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import RecipeContext from '../contexts/RecipeContext';


const Europe = () => {

    let navigate = useNavigate()

    let { getAllRecipes, deleteRecipe } = useContext(RecipeContext)

function getRecipes(recipe){
    if (recipe === null) return
    return recipe.map((recipes) => {
        if(recipes.continent === "Europe"){
            return(
                <Card key={recipes.id}>
                <Card.Body key={recipes.id}>
                    <Card.Img variant="top" src={recipes.image}/>
                    <Card.Title>{recipes.recipe} from {recipes.continent}</Card.Title>
                    <Card.Subtitle><strong>Ingredients:</strong> {recipes.ingredients} </Card.Subtitle>
                    <Card.Subtitle><strong>Instructions:</strong> {recipes.instructions} </Card.Subtitle>
                </Card.Body>
            </Card>)
            }}
        )
    
}
    return (
        <div> 
            <Image width="450" height="435" class="northAmericaImage" src="North60.png" alt="northAmericaImage" ></Image>
            <Image width="450" height="435" class="AfricaImage" src="Africa60.png" alt="AfricaImage" ></Image>
            <Image width="450" height="435" class="SouthAmericaImage" src="South60.png" alt="SouthAmericaImage" ></Image>
            <Image width="450" height="435" class="AsiaImage" src="Asia60.png" alt="AsiaImage" ></Image>
            <Image width="450" height="435" class="EuropeImage" src="Europe60.png" alt="EuropeImage" ></Image>
            <Image width="450" height="435" class="AustraliaImage" src="Australia60.png" alt="AustraliaImage" ></Image>
            <Image width="450" height="435" class="AntarcticaImage" src="Antarctica60.png" alt="AntarcticaImage" ></Image>

            <Stack>
                <Row xs={1} md={5} className="g-4">
                    <RecipeContext.Consumer>
                        {({recipe}) => (
                            getRecipes(recipe)
                            )}
                    </RecipeContext.Consumer>
                </Row>
            </Stack>
        </div>

    )
};

export default Europe;