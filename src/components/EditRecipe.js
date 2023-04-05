import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RecipeContext from '../contexts/RecipeContext';
import { Button, Form } from 'react-bootstrap';

const EditRecipe = () => {

    let params = useParams()

    let [ editARecipe, setEditARecipe ] = useState({
        recipeId: params.recipeId,
        recipe: "",
        instructions: "",
        ingredients: "",
        continent: "",
        image: "",
        updatedAt: Date
    });

    let { getRecipe, addRecipe, editRecipe} = useContext(RecipeContext)
    let navigate = useNavigate()
    let { recipeId,recipe,instructions,ingredients,continent,image} = editARecipe
  
    useEffect(() => {
      if (recipeId === undefined) return
      async function fetch() {
        await getRecipe(recipeId)
          .then((editARecipe) => setEditARecipe(editARecipe))
      }
      fetch()
    }, [recipeId]) 
  
    function handleChange(event) {
      setEditARecipe((preValue) => {
        return { ...preValue, [event.target.name]: event.target.value }})
    }
  
    function addOrUpdate() {
      if (recipeId === undefined) {
        return addRecipe(editARecipe)
      } else {
        return editRecipe(editARecipe)
      }
    } 
  
    function handleSubmit(event) {
      event.preventDefault()
      addOrUpdate().then((editARecipe) =>{
          window.alert('Update successful!');
          navigate(`/profile`)
      }).catch(error => {
          console.log(error)
          navigate(`/signin`)
      })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h1>EDIT RECIPE</h1>
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
            <Button type="submit">Save changes</Button>
        </Form>

    )
};

export default EditRecipe;