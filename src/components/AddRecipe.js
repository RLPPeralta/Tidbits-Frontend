import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import RecipeContext from '../contexts/RecipeContext';

const AddRecipe = () => {

    let [ newRecipe, setNewRecipe ] = useState({
        recipe: "",
        instructions: "",
        ingredients: "",
        continent: "",
        image: "",
        createdAt: Date
    });

    let { addRecipe } = useContext(RecipeContext);
    let navigate = useNavigate();

    function handleChange(event) {
        setNewRecipe((prevValue) => {
            return { ...prevValue, [event.target.name]: event.target.value }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        addRecipe(newRecipe).then(() => {
            navigate('/profile');
        }).catch(error => {
            console.log(error);
            navigate('/signin');
        });
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h1>NEW RECIPE</h1>
            <Form.Group >
                <Form.Label>Recipe Name</Form.Label>
                <Form.Control type="text" name="recipe" value={newRecipe.recipe} onChange={handleChange}/>
            </Form.Group>
            <Form.Group >
                <Form.Label>Ingredients</Form.Label>
                <Form.Control type="text" name="ingredients" value={newRecipe.ingredients} onChange={handleChange}/>
            </Form.Group>
            <Form.Group >
                <Form.Label>Instructions</Form.Label>
                <Form.Control type="text" name="instructions" value={newRecipe.instructions} onChange={handleChange}/>
            </Form.Group> 
            <Form.Control as="select" type="text" name="continent" value={newRecipe.continent} onChange={handleChange}>
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
                <Form.Control type="text" name="image" placeholder="Type an image URL" value={newRecipe.image} onChange={handleChange} />
            </Form.Group>
            {/* <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label>Upload Photo</Form.Label>
                <Form.Control type="file" size="sm" name="image" value={newRecipe.image} onChange={handleChange} />
            </Form.Group> */}
            <Button type="submit">Add New Recipe</Button>
        </Form>
        // <form onSubmit={handleSubmit}>
        //     <h1>NEW RECIPE</h1>
        //     <span>Recipe Name  </span>
        //     <input type="text" name="recipe" value={newRecipe.recipe} onChange={handleChange} />
        //     <br></br><br></br>
        //     <span>Instructions  </span>
        //     <input type="text" name="instructions" value={newRecipe.instructions} onChange={handleChange} />
        //     <br></br><br></br>
        //     <span>Ingredients  </span>
        //     <input type="text" name="ingredients" value={newRecipe.ingredients} onChange={handleChange} />
        //     <br></br><br></br>
        //     <span>Continent  </span>
        //     <input type="text" name="continent" value={newRecipe.continent} onChange={handleChange} />
        //     <br></br><br></br>
        //     <span>Photo  </span>
        //     <input type="text" name="image" value={newRecipe.image} onChange={handleChange} />
        //     <br></br><br></br>
        //     <button>Add New Recipe</button>
        // </form>
    )
};

export default AddRecipe;