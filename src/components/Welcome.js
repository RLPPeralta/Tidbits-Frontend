import React from 'react';
import { Container } from 'react-bootstrap';
import globelogo2 from "../globelogo2.png";
import { Link } from "react-router-dom";
// import image from "./img/globelogo1.png"; 
import Carousel from 'react-bootstrap/Carousel';
import '../css/Nav.css'
import '../css/Welcome.css';
// import ReactGlobe from 'react-globe';

function IndividualIntervalsExample() {
  return (
    <Carousel indicators={false} controls={false} variant="dark">
      <Carousel.Item className='items' interval={2000}>
        <img
          className="CarouselImg d-block w-100 " 
          // src="https://content.maltatoday.com.mt/ui_frontend/thumbnail/684/0/26_op_phyllisieena_gauci.jpg"
          src="https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1784&q=80"
          alt="First slide"
        />
            <Carousel.Caption className="text">
              <h3>Tidbits</h3>
              <p>Food for lovers</p>
            </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='items' interval={2000}>
        <img
          className="CarouselImg d-block w-100"
          // src="https://images.unsplash.com/photo-1516824711718-9c1e683412ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80"
          alt="Second slide"
        />
            <Carousel.Caption>
              <h3>Recipes from around the globe</h3>
              <p>To enjoy at home</p>
            </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='items' interval={1500}>
        <img
          className="CarouselImg d-block w-100"
          // src="https://www.shutterstock.com/image-vector/business-concept-people-hold-hands-260nw-1264023865.jpg"
          src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt="Third slide"
        />
            <Carousel.Caption>
              <h3>Do we like the images?</h3>
              <p>what should we write here</p>
            </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const Welcome = () => {

    return (
        <Container fluid className="WelcomePage">
        <IndividualIntervalsExample/>

<div class="row">
<div class="column">
<p style={{ fontWeight: 500 }}>
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
<p style={{ fontWeight: 500 }}>
Doggo ipsum you are doin me a concern stop it fren he made many woofs long doggo, ur givin me a spook very good spot heck pupperino, puggo smol borking doggo with a long snoot for pats. Corgo wrinkler borking doggo long bois, extremely cuuuuuute ur givin me a spook. You are doin me a concern mlem clouds wrinkler, smol maximum borkdrive borkdrive pupperino, heck ur givin me a spook. many pats you are doin me a concern smol borking doggo with a long snoot for pats. Doggorino boofers pats heckin angery woofer, maximum borkdrive dat tungg tho, sub woofer maximum borkdrive. Pupperino much ruin diet super chub dat tungg tho, aqua doggo lotsa pats. Most angery pupper I have ever seen the neighborhood pupper many pats snoot corgo, doge vvv. You are doing me a frighten you are doing me the shock mlem stop it fren super chub woofer, doggorino extremely cuuuuuute stop it fren woofer.
</p>
</div>
</div>
        


      <div class="row">
        <div class="col-lg-8">

          <a href="http://localhost:3001/signup">
            <button className="WelcomeBtn" type="button">
              Create User
            </button>
          </a>
          <em>
            <Link to="/signin" className="nav-link">
              <p>
                🔗 Already a member?{" "}
                <span style={{ color: "purple", textDecoration: "underLine" }}>
                  Sign In Here
                </span>
              </p>



            </Link>
            </em>
            </div>
            {/* <div>
            <img
              className="navbarBrand"
              src={globelogo2}
              height={300}
              alt="logo" />
            </div> */}
            
         
      

        

        {/* <div className="itemBox">
          <em>
            <h2 style={{ marginBottom: 40 }}>
              need to add globe logo and text on both left and right
            </h2>
          </em> */}

          {/* <div class="row"> */}

          
            {/* <div class="col-lg-4">
              <span className="emoji">😁</span>
              <h3>ipes</h3>
            </div> */}
            {/* <div class="col-lg-4">
              <span className="emoji">😁</span>
              <h3>My Favorites/Saved Recipes</h3>
            </div> */}
            {/* <div class="col-lg-4">
              <span className="emoji">✍️</span>
              <h3>Reviews</h3>
            </div> */}

          </div>
        {/* </div> */}

      {/* </div> */}



      {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>

  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
</div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */}


      </Container>

      


    )
};

export default Welcome;
