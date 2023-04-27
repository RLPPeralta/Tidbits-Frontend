import React, { useContext, useEffect, useState } from 'react';
import { Button, Spinner, Card, Stack, Container } from 'react-bootstrap';
import globelogo2 from "../globelogo2.png";
import { Link, Outlet } from "react-router-dom";
// import image from "./img/globelogo1.png"; 
import Carousel from 'react-bootstrap/Carousel';
import RecipeContext from '../contexts/RecipeContext';
import '../css/Nav.css'
import '../css/Welcome.css';
// import ReactGlobe from 'react-globe';

const Welcome = () => {

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
              src="https://images.unsplash.com/photo-1548940740-204726a19be3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="First slide"
            />
            <Carousel.Caption className="text">
              <h3 className='welcome-h3-tag'>Tidbits</h3>
              <p className='welcome-p-tag'>for food lovers</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className='items' interval={2000}>
            <img
              className="CarouselImg d-block w-100"
              // src="https://images.unsplash.com/photo-1516824711718-9c1e683412ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
              src="https://images.unsplash.com/photo-1623855244183-52fd8d3ce2f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="Second slide"
            />
            <Carousel.Caption>
            <h3 className='welcome-h3-tag'>Tidbits</h3>
              <p className='welcome-p-tag'>for food lovers</p>
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
            <h3 className='welcome-h3-tag'>Tidbits</h3>
              <p className='welcome-p-tag'> for food lovers </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div>
          <div class="row">
            <div class="column">
              <p className='welcome-p-text' style={{ fontWeight: 500 }}>
                Doggo ipsum you are doin me a concern stop it fren he made many woofs long doggo, ur givin me a spook very good spot heck pupperino, puggo smol borking doggo with a long snoot for pats. Corgo wrinkler borking doggo long bois, extremely cuuuuuute ur givin me a spook. You are doin me a concern mlem clouds wrinkler, smol maximum borkdrive borkdrive pupperino, heck ur givin me a spook. many pats you are doin me a concern smol borking doggo with a long snoot for pats. Doggorino boofers pats heckin angery woofer, maximum borkdrive dat tungg tho, sub woofer maximum borkdrive. Pupperino much ruin diet super chub dat tungg tho, aqua doggo lotsa pats. Most angery pupper I have ever seen the neighborhood pupper many pats snoot corgo, doge vvv. You are doing me a frighten you are doing me the shock mlem stop it fren super chub woofer, doggorino extremely cuuuuuute stop it fren woofer.
              </p>
            </div>
            <div class="column">
              {/* <ReactGlobe /> */}
              <img className="navbarBrand"
                src={globelogo2}
                height={300}
                alt="logo" />
            </div>
            <div class="column">
              <p className='welcome-p-text' style={{ fontWeight: 500 }}>
                Doggo ipsum you are doin me a concern stop it fren he made many woofs long doggo, ur givin me a spook very good spot heck pupperino, puggo smol borking doggo with a long snoot for pats. Corgo wrinkler borking doggo long bois, extremely cuuuuuute ur givin me a spook. You are doin me a concern mlem clouds wrinkler, smol maximum borkdrive borkdrive pupperino, heck ur givin me a spook. many pats you are doin me a concern smol borking doggo with a long snoot for pats. Doggorino boofers pats heckin angery woofer, maximum borkdrive dat tungg tho, sub woofer maximum borkdrive. Pupperino much ruin diet super chub dat tungg tho, aqua doggo lotsa pats. Most angery pupper I have ever seen the neighborhood pupper many pats snoot corgo, doge vvv. You are doing me a frighten you are doing me the shock mlem stop it fren super chub woofer, doggorino extremely cuuuuuute stop it fren woofer.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function featuredRecipes(userRecipe) {
    return (userRecipe.map((r) =>
      <div className='display-container'>
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
      <div></div>
        <h1 className='welcome-h1-tag'>Featured Recipes</h1>
        <br></br>
        <Stack className='d-flex justify-content-center align-items-center p-4 p-sm-3' direction="horizontal" spacing={3}>
          <div className="recipe-card-container">
            <RecipeContext.Consumer>
              {({ recipe }) => (
                featuredRecipes(recipe)
              )}
            </RecipeContext.Consumer>
          </div>
          <Outlet />
        </Stack>
    </>
  )
};

export default Welcome;



// import React, { useContext, useEffect } from 'react';
// import { Container, Stack } from 'react-bootstrap';
// import globelogo2 from "../globelogo2.png";
// import { Link } from "react-router-dom";
// // import image from "./img/globelogo1.png"; 
// import Carousel from 'react-bootstrap/Carousel';
// import '../css/Nav.css'
// import '../css/Welcome.css';
// import RecipeContext from '../contexts/RecipeContext';


// function IndividualIntervalsExample() {
//   return (
//     <Carousel indicators={false} controls={false} variant="dark">
//       <Carousel.Item className='items' interval={2000}>
//         <img
//           className="CarouselImg d-block w-100 " 
//           // src="https://content.maltatoday.com.mt/ui_frontend/thumbnail/684/0/26_op_phyllisieena_gauci.jpg"
//           src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1784&q=80"
//           alt="First slide"
//         />
//             <Carousel.Caption className="text">
//               <h3>Tidbits</h3>
//               <p>Food for lovers</p>
//             </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item className='items' interval={2000}>
//         <img
//           className="CarouselImg d-block w-100"
//           // src="https://images.unsplash.com/photo-1516824711718-9c1e683412ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
//           src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80"
//           alt="Second slide"
//         />
//             <Carousel.Caption>
//               <h3>Recipes from around the globe</h3>
//               <p>To enjoy at home</p>
//             </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item className='items' interval={1500}>
//         <img
//           className="CarouselImg d-block w-100"
//           // src="https://www.shutterstock.com/image-vector/business-concept-people-hold-hands-260nw-1264023865.jpg"
//           src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
//           alt="Third slide"
//         />
//             <Carousel.Caption>
//               <h3>A place to gather together</h3>
//               <p>And cook delicious meals for the table</p>
//             </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// const Welcome = () => {


//     return (
//         <Container fluid className="WelcomePage">
//         <IndividualIntervalsExample/>

// <div class="row">
// <div class="column">
// <p style={{ fontWeight: 500 }}>
// Doggo ipsum you are doin me a conce
// </p>
// </div>
// <div class="column">
// {/* <ReactGlobe /> */}
// <img className="navbarBrand"
//               src={globelogo2}
//               height={300}
//               alt="logo" />
// </div>
// <div class="column">
// <p style={{ fontWeight: 500 }}>
// Doggo ipsum you are doin me a concern stop it fren he made many woofs long doggo, ur givin me a spook very good spot heck pupperino, puggo smol borking doggo with a long snoot for pats. Corgo wrinkler borking doggo long bois, extremely cuuuuuute ur givin me a spook. You are doin me a concern mlem clouds wrinkler, smol maximum borkdrive borkdrive pupperino, heck ur givin me a spook. many pats you are doin me a concern smol borking doggo with a long snoot for pats. Doggorino boofers pats heckin angery woofer, maximum borkdrive dat tungg tho, sub woofer maximum borkdrive. Pupperino much ruin diet super chub dat tungg tho, aqua doggo lotsa pats. Most angery pupper I have ever seen the neighborhood pupper many pats snoot corgo, doge vvv. You are doing me a frighten you are doing me the shock mlem stop it fren super chub woofer, doggorino extremely cuuuuuute stop it fren woofer.
// </p>
// </div>
// </div>
//         


//       <div class="row">
//         <div class="col-lg-8">

//           <a href="http://localhost:3001/signup">
//             <button className="WelcomeBtn" type="button">
//               Create User
//             </button>
//           </a>
//           <em>
//             <Link to="/signin" className="nav-link">
//               <p>
//                 🔗 Already a member?{" "}
//                 <span style={{ color: "purple", textDecoration: "underLine" }}>
//                   Sign In Here
//                 </span>
//               </p>



//             </Link>
//             </em>
//             </div>
//          
//           </div>
//     



//             
//       </Container>

//     )
// };

// export default Welcome;