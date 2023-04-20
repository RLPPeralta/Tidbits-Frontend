import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RecipeContext from '../contexts/RecipeContext';
import { Button, Form } from 'react-bootstrap';
import '../css/editOrAddRecipe.css'

const EditRecipe = () => {

    let params = useParams()

    let [ editARecipe, setEditARecipe ] = useState({
        recipeId: params.recipeId,
        userId: params.userId,
        recipe: "",
        instructions: "",
        ingredients: "",
        continent: "",
        image: "",
        country: "",
        servings: "",
        prepTime: "",
        cookTime: "",
        updatedAt: Date
    });

    let { getRecipe, addRecipe, editRecipe} = useContext(RecipeContext)
    let navigate = useNavigate()
    let { recipeId,userId,recipe,instructions,ingredients,continent,image,country,servings,prepTime,cookTime} = editARecipe
  
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
          navigate(`/profile/${userId}`)
      }).catch(error => {
          console.log(error)
          navigate(`/signin`)
      })
    }

    return (
    <div className='Editpage d-flex justify-content-center align-items-center p-4 p-sm-3'>
      <Form className=" AddForm p-4 p-sm-3" onSubmit={handleSubmit}>
            <h1 className="editformtitle">EDIT RECIPE</h1>
            <Form.Group >
                <Form.Label>Recipe Name</Form.Label>
                <Form.Control type="text" name="recipe" value={recipe} onChange={handleChange}/>
            </Form.Group>
            <Form.Group >
                <br></br><Form.Label>From which country does this recipe originate?</Form.Label>
                <Form.Control type="text" name="country" rows={7} value={country} onChange={handleChange} />
            </Form.Group>
            <Form.Group >
                <br></br><Form.Label>How many servings?</Form.Label>
                <Form.Control type="text" name="servings" rows={7} value={servings} onChange={handleChange} />
            </Form.Group>
            <Form.Group >
                <br></br><Form.Label>Prep Time</Form.Label>
                <Form.Control type="text" name="prepTime" rows={7} value={prepTime} onChange={handleChange} />
            </Form.Group>
            <Form.Group >
                <br></br><Form.Label>Cook Time</Form.Label>
                <Form.Control type="text" name="cookTime" rows={7} value={cookTime} onChange={handleChange} />
            </Form.Group>
            <Form.Group >
                <br></br><Form.Label>Ingredients *Please use a comma between each ingredient.*</Form.Label>
                <Form.Control type="text" as="textarea" name="ingredients" rows={7} value={ingredients} onChange={handleChange}/>
            </Form.Group>
            <Form.Group >
                <br></br><Form.Label>Instructions</Form.Label>
                <Form.Control type="text" as="textarea" name="instructions" class="form-control" rows={7} value={instructions} onChange={handleChange}/>
            </Form.Group><br></br> 
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
                <br></br><Form.Label>Upload Photo</Form.Label>
                <Form.Control type="text" name="image" placeholder="Type an image URL" value={image} onChange={handleChange} />
            </Form.Group>
            <div className='d-flex justify-content-center'><Button className="btn btn-save mx-3" type="submit">Save changes</Button>
            <Button className="btn btn-cancel mx-3" onClick={() => [navigate(-1),window.alert('Changes not saved')]}>Cancel</Button>
            </div>
        </Form>
      </div>
    )
};

export default EditRecipe;