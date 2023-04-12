import React, { useContext, useEffect, useState } from 'react';
import { Alert, Button, Card, Col, Image, Modal, Row, Stack } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import RecipeContext from '../contexts/RecipeContext';
import Europe60 from '../Europe60.png'
import styles from '../css/Continents.css'


const Europe = () => {

    let navigate = useNavigate()
    const token = localStorage.getItem('myRecipeToken')
    let { getAllRecipes, deleteRecipe } = useContext(RecipeContext)
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



function getRecipes(recipe){
    if (recipe === null) return
    if (token){
        return recipe.map((recipes) => {
        if(recipes.continent === "Europe"){
            return(
                <Card key={recipes.recipeId} className='card'>
                <Card.Body key={recipes.recipeId}>
                    <Card.Img className='cardImage'variant="top" src={recipes.image}/>
                    <Card.Title>{recipes.recipe} from {recipes.continent}</Card.Title>
                    <Link to={`/recipe/${recipes.recipeId}`} className='nav-link'>View Recipe</Link>
                </Card.Body>
            </Card>)
            }}
        )} else {
            return recipe.map((recipes) => {
                if(recipes.continent === "Europe"){
                    return(
                        <Card key={recipes.recipeId} className='card'>
                        <Card.Body className='card-body' key={recipes.recipeId}>
                            <Card.Img className='cardImage'variant="top" src={recipes.image}/>
                            <Card.Title>{recipes.recipe} from {recipes.continent}</Card.Title>
                            <Button variant="outline" onClick={handleShow}>View Recipe</Button>
                                <Modal show={show} onHide={handleClose} animation={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title >Please Login</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>You must be logged in to view this recipe. If you don't have an account, please sign up. We would love to have you!</Modal.Body>
                                <Modal.Footer>
                                    <Link to="/signin" className='nav-link'>Login</Link>
                                    <Link to="/signup" className='nav-link'>Sign Up</Link>
                                    <Button variant="outline" onClick={handleClose}>
                                    Close
                                    </Button>
                                </Modal.Footer>
                                </Modal>
                        </Card.Body>
                    </Card>)
                    }}
        )}
    }

    return (
        <div className='page'> 
            
                <Row>
            <div className='continent-area'>
                <img width="400" height="350" class="img" src={Europe60} alt="EuropeImage" />
                <h1 class='text-on-image'>Europe</h1>
            </div></Row>
            <div className='lower-page'>
                <Row xs={2} md={5} className="g-4">
                    <RecipeContext.Consumer>
                        {({recipe}) => (
                            getRecipes(recipe)
                            )}
                    </RecipeContext.Consumer>
                </Row>
            </div>
        </div>

    )
};


export default Europe;