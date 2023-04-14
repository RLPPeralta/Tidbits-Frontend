import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel, CarouselItem, Container, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RecipeContext from '../contexts/RecipeContext';
import styles from '../css/Continents.css'
import AsiaImg from '../images/Asia.png'



const Asia = () => {

    const token = localStorage.getItem('myRecipeToken')
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState()
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0e629626c5mshc8a25097299a712p183b75jsn644898590339',
            'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
        }
    };
    
    const getApi = () => {
        fetch('https://country-facts.p.rapidapi.com/all', options)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setData(json);
        })
        .catch(err => console.error(err));
    }
    
    useEffect(() => {
        getApi();
    }, []);


function getRecipes(recipe){
    if (recipe === null) return
    if (token){
        return recipe.map((recipes) => {
        if(recipes.continent === "Asia"){
            return(
                <Card key={recipes.recipeId} className='card' >
                <Card.Body key={recipes.recipeId} className='cardDetails'>
                    <Card.Img className='cardImage'variant="top" src={recipes.image}/>
                    <Card.Title>{recipes.recipe}</Card.Title>
                    <Link to={`/recipe/${recipes.recipeId}`} className='nav-link'>View Recipe</Link>
                    <Link to={`/profile/${recipes.userId}`} className='nav-link'>Creator's Profile</Link>
                </Card.Body>
            </Card>)
            }}
        )} else {
            return recipe.map((recipes) => {
                if(recipes.continent === "Asia"){
                    return(
                        <Card key={recipes.recipeId} className='card'>
                            <Card.Body className='card-body' key={recipes.recipeId}>
                            <Card.Img className='cardImage'variant="top" src={recipes.image}/>
                            <Card.Title>{recipes.recipe}</Card.Title>
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
                <img width="400" height="350" class="img" src={AsiaImg} alt="AsiaImage" />
                <Carousel fade indicators={false} controls={false} variant="dark" className='flag'>
                    {data?.map((country) => {
                        if(country.region === "Asia") { 
                            return(
                                <CarouselItem interval={2000}> 
                                    <img height="50px" width="150px"alt='flag' src={country.flag}/>
                                    <p className='flag-caption'>Flag of {country.name.common}</p>
                                </CarouselItem> 
                                  
                            )}
                        })          
                    }
                </Carousel>   
            </div>
            </Row>
            <section className='grid'>
                <Container fluid>
                <Row xs={2} sm={3} md={5} lg={6}>                      
                    <RecipeContext.Consumer>
                        {({recipe}) => (
                            getRecipes(recipe)
                            )}
                    </RecipeContext.Consumer>
                </Row>
                </Container>
            </section>
        </div>

    )
};


export default Asia;