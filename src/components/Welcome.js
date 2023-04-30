import React, { useContext, useEffect, useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import globelogo2 from "../globelogo2.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import RecipeContext from '../contexts/RecipeContext';
import '../css/Nav.css'
import '../css/Welcome.css';
import Team from './About';


const Welcome = () => {
  let navigate = useNavigate()
  let { getAllRecipes } = useContext(RecipeContext)
  let [userRecipes, setUserRecipes] = useState();


  useEffect(() => {
    console.log("useEffect for user recipes");
    async function fetch() {
      await getAllRecipes()
        .then((recipes) => setUserRecipes(recipes))
        .catch((error) => {
          console.log(error);
        });
    }
    fetch()
  }, []);



  function IndividualIntervalsExample() {
    return (
      <div className='WelcomePage'>
      <Carousel indicators={false} controls={false} variant="dark">
        <Carousel.Item className='items' interval={2500}>
          <img
            className="CarouselImg d-block w-100 "
            src='3.png'
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className='items' interval={2500}>
          <img
            className="CarouselImg d-block w-100"
            src='6.png'
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item className='items' interval={2500}>
          <img
            className="CarouselImg d-block w-100"
            src='1.png'
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

        <div className='welcome-buttons'>
          <Button className="btn btn-primary mx-3" variant="success" onClick={() => navigate('/signup')}>Create An Account</Button>
        </div>

        <div>

          <div class="row">
            <div class="column">
              <p className='welcome-p-text' style={{ fontWeight: 400 }}>
              Chocolate lollipop apple pie chocolate bar bear claw sweet roll pastry lemon drops tootsie roll. Cake cake apple pie gingerbread toffee. Jelly brownie liquorice donut tart croissant. Ice cream cheesecake muffin soufflé sweet roll soufflé. Toffee chocolate cake jelly beans cupcake tiramisu apple pie liquorice. Sesame snaps ice cream sweet roll carrot cake soufflé cheesecake biscuit. Powder topping soufflé sweet roll oat cake pudding caramels.

Muffin oat cake marzipan pie soufflé cookie chocolate oat cake. Dragée powder fruitcake fruitcake lemon drops topping sweet. Shortbread chupa chups bonbon ice cream tiramisu macaroon tart. Bear claw biscuit pie lollipop oat cake. 

              </p>
            </div>
            <div className="column">
              {/* <ReactGlobe /> */}
              <img className="navbarBrand"
                src={globelogo2}
                height={350}
                alt="logo" />
            </div>

            <div class="column">
              <p className='welcome-p-text' style={{ fontWeight: 400 }}>
              Chocolate lollipop apple pie chocolate bar bear claw sweet roll pastry lemon drops tootsie roll. Cake cake apple pie gingerbread toffee. Jelly brownie liquorice donut tart croissant. Ice cream cheesecake muffin soufflé sweet roll soufflé. Toffee chocolate cake jelly beans cupcake tiramisu apple pie liquorice. Sesame snaps ice cream sweet roll carrot cake soufflé cheesecake biscuit. Powder topping soufflé sweet roll oat cake pudding caramels.

Muffin oat cake marzipan pie soufflé cookie chocolate oat cake. Dragée powder fruitcake fruitcake lemon drops topping sweet. Shortbread chupa chups bonbon ice cream tiramisu macaroon tart. Bear claw biscuit pie lollipop oat cake. 

              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function featuredRecipes(userRecipes) {
    return (userRecipes.slice(0,3).map((r) =>
      <div className='display-container' key={r.recipeId}  >
        <div style={{ width: '15rem' }} key={r.recipeId} xs={12} md={8} class="row"  >
          <img variant="top" src={r.image} class="card-img" />
          <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
            <h3 className="card-title"> {r.recipe}</h3>
            <div className='recipe-buttons'>
              <Link className='btn btn-recipe' to={`/recipe/${r.recipeId}`}>View</Link> <br></br>
            </div>
          </div>
        </div>
      </div>
    )
    )
  }

  return (

    <>
      <div className='WelcomePage'>
        <div classname='page d-flex justify-content-center align-items-center p-4 p-sm-3'>
          {IndividualIntervalsExample()}
        </div>
      </div>
      <div className='featured-recipes'>
        <h1 className='welcome-h1-tag'>Featured Recipes</h1>
        <br></br>
        <div>
          <Stack className='d-flex justify-content-center align-items-center p-4 p-sm-3' direction="horizontal" spacing={3}>
            <div className="welcome-recipe-card-container">
              <RecipeContext.Consumer>
                {({ recipe }) => (
                  featuredRecipes(recipe)
                )}
              </RecipeContext.Consumer>
            </div>
            <Outlet />
          </Stack>
        </div>
      </div>
                <Team/>
    </>
  )
};

export default Welcome;

