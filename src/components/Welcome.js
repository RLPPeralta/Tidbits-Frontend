import React, { useContext, useEffect, useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import globelogo2 from "../globelogo2.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import RecipeContext from '../contexts/RecipeContext';
import '../css/Nav.css'
import '../css/Welcome.css';

// import ReactGlobe from 'react-globe';

const Welcome = () => {
  let navigate = useNavigate()
  let { getAllRecipes } = useContext(RecipeContext)
  let [userRecipe, setUserRecipes] = useState();


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
          <Carousel.Item className='items' interval={2000}>
            <img
              className="CarouselImg d-block w-100 "
              // src="https://content.maltatoday.com.mt/ui_frontend/thumbnail/684/0/26_op_phyllisieena_gauci.jpg"
              src="https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="First slide"
            />
            <Carousel.Caption className="text">
              <h3 className='welcome-h3-tag-1'>Tidbits</h3>
              <p className='welcome-p-tag-1'>for food lovers</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='items' interval={2000}>
            <img
              className="CarouselImg d-block w-100"
              src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className='welcome-h3-tag-2'>Tidbits</h3>
              <p className='welcome-p-tag-2'>for food lovers</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='items' interval={1500}>
            <img
              className="CarouselImg d-block w-100"
              // src="https://www.shutterstock.com/image-vector/business-concept-people-hold-hands-260nw-1264023865.jpg"
              src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className='welcome-h3-tag-3'>Tidbits</h3>
              <p className='welcome-p-tag-3'> for food lovers </p>
            </Carousel.Caption>
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
            <div class="column">
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


  // function shuffle(array) {
  //   let shuffledArray = [];
  //   let usedIndexes = [];

  //   let i = 0; 
  //   while(i > array.length) {
  //    let randomNumber =  Math.floor(Math.random() * array.length);
  //    if (!usedIndexes.includes(randomNumber)) { 
  //     shuffledArray.push(array[randomNumber]);
  //     usedIndexes.push(randomNumber);
  //     i++;
  //    }
  //   }
  //   return 
  // }


  function featuredRecipes(userRecipes) {
    return (userRecipes.slice(0, 3).map((r) =>
      <div className='display-container' >
        <div style={{ width: '15rem' }} key={r.recipeId} xs={12} md={8} class="row"  >
          <img variant="top" src={r.image} class="card-img" />
          <div class="card-img-overlay text-white d-flex flex-column justify-content-center">
            <h3 class="card-title"> {r.recipe}</h3>
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

    </>
  )
};

export default Welcome;

