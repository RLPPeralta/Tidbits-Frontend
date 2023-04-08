import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import RecipeContext from '../contexts/RecipeContext';
import UserContext from '../contexts/UserContext';

const AddRecipe = () => {

    let params = useParams()
    let [ newRecipe, setNewRecipe ] = useState({
        userId: params.userId,
        recipe: "",
        instructions: "",
        ingredients: "",
        continent: "",
        image: "",
        createdAt: Date
    });
    
    let { addRecipe } = useContext(RecipeContext);
    let navigate = useNavigate();
    let { userId, recipe, instructions, ingredients, continent, image} = newRecipe;
    const id = localStorage.getItem('userId'); 

    function handleChange(event) {
        setNewRecipe((prevValue) => {
            return { ...prevValue, [event.target.name]: event.target.value }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
            addRecipe(newRecipe).then(() => {
            console.log(userId);
            navigate(`/profile/${id}`);
        }).catch(error => {
            console.log(error);
            navigate('/signin');
        });
        };

    return (
        <Form onSubmit={handleSubmit}>
            <h1>NEW RECIPE</h1>
            <Form.Group >
                <Form.Label>Recipe Name</Form.Label>
                <Form.Control type="text" name="recipe" value={recipe} onChange={handleChange}/>
            </Form.Group>
            <Form.Group >
                <Form.Label>Ingredients</Form.Label>
                <Form.Control type="text" name="ingredients" value={ingredients} onChange={handleChange}/>
            </Form.Group>
            <Form.Group >
                <Form.Label>Instructions</Form.Label>
                <Form.Control type="text" name="instructions" value={instructions} onChange={handleChange}/>
            </Form.Group> 
            <Form.Control as="select" type="text" name="continent" value={continent} onChange={handleChange}>
                <option>Select Continent</option>
                <option value="Africa">Africa</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Asia">Asia</option>
                <option value="Australia">Australia</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
            </Form.Control>
            <Form.Group className="mb-3" >
                <Form.Label>Upload Photo</Form.Label>
                <Form.Control type="text" name="image" placeholder="Type an image URL" value={image} onChange={handleChange} />
            </Form.Group>
            <Button type="submit">Add New Recipe</Button>
        </Form>
    )
};

export default AddRecipe;