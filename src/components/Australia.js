import React, { useEffect, useState } from 'react';
import { Button, Carousel, CarouselItem, Modal, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RecipeContext from '../contexts/RecipeContext';
import styles from '../css/Continents.css'
import AustraliaImg from '../images/Australia.png'



const Australia = () => {

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
            if(recipes.continent === "Australia"){
                return(
                    <div className='display-container'> 
                    <div style={{ width: '15rem' }} key={recipes.recipeId} xs={12} md={8} class="row"  >
                      <img variant="top" src={recipes.image} alt="recipe"className="card-img"/> 
                      <div class="card-img-overlay text-white d-flex flex-column justify-content-center">
                          <h3 class="card-title"> {recipes.recipe}</h3>
                          <div className='recipe-buttons'>
                            <Link className='btn btn-recipe' to={`/recipe/${recipes.recipeId}`}>View</Link> <br></br>
                            <Link className='btn btn-recipe' to={`/userprofile/${recipes.userId}`}>Creator's Profile</Link>  <br></br>
                          </div>
                      </div>
                    </div> 
                 </div>)
                }}
            )} else {
                return recipe.map((recipes) => {
                    if(recipes.continent === "Australia"){
                        return(
                            <div className='display-container'> 
                                <div style={{ width: '15rem' }} key={recipes.recipeId} xs={12} md={8} class="row"  >
                                <img variant="top" src={recipes.image} alt="recipe" className="card-img"/> 
                                <div class="card-img-overlay text-white d-flex flex-column justify-content-center">
                                    <h3 class="card-title"> {recipes.recipe}</h3>
                                    <div className='recipe-buttons'>
                                        <Link className='btn btn-recipe' onClick={handleShow}>View</Link> <br></br>
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
                                    </div>
                                </div>
                                </div> 
                            </div>)
                        }}
            )}
        }
    
        return (
            <div className='page'> 
                    <div >
                    <img width="400" height="350" class="img" src={AustraliaImg} alt="AustraliaImage" />
                    <Carousel fade indicators={false} controls={false} variant="dark" className='flag'>
                        {data?.map((country) => {
                            if(country.region === "Oceania") { 
                                return(
                                    <CarouselItem interval={2000}> 
                                        <img className='d-block w-100' height="50px" width="150px"alt='flag' src={country.flag}/>
                                        <p className="text-center">Flag of {country.name.common}</p>
                                    </CarouselItem>      
                                )}
                            })          
                        }
                    </Carousel>   
                </div>
                <Stack className=' d-flex justify-content-center align-items-center p-4 p-sm-3' direction="horizontal" spacing={3}>
                      <div className="recipe-card-container">
                          <RecipeContext.Consumer>
                            {({recipe}) => (
                                    getRecipes(recipe)
                                    )}
                          </RecipeContext.Consumer>
                      </div>
                </Stack>    
            </div>
    
        )
    };


export default Australia;