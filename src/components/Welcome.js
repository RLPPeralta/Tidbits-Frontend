import React from 'react';
import { Container } from 'react-bootstrap';
import globelogo2 from "../globelogo2.png";
import { Link } from "react-router-dom";
// import image from "./img/globelogo1.png"; 
import Carousel from 'react-bootstrap/Carousel';
import '../css/Nav.css'

function IndividualIntervalsExample() {
  return (
    <Carousel indicators={false} controls={false} variant="dark" >
      <Carousel.Item className='items' interval={2000}>
        <img
          className="CarouselImg d-block w-100 " 
          src="https://content.maltatoday.com.mt/ui_frontend/thumbnail/684/0/26_op_phyllisieena_gauci.jpg"
          alt="First slide"
        />
            <Carousel.Caption>
              <h3>H I  T E A M</h3>
              <p>You guys are amazing</p>
            </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='items' interval={2000}>
        <img
          className="CarouselImg d-block w-100"
          src="https://images.unsplash.com/photo-1516824711718-9c1e683412ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          alt="Second slide"
        />
            <Carousel.Caption>
              <h3>Nope, this is not final</h3>
              <p>Just trying this</p>
            </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='items' interval={1500}>
        <img
          className="CarouselImg d-block w-100"
          src="https://www.shutterstock.com/image-vector/business-concept-people-hold-hands-260nw-1264023865.jpg"
          alt="Third slide"
        />
            <Carousel.Caption>
              <h3>Disregard these images</h3>
              <p>
              asdljasdhakjsdakjsdh cghghfgh eyetyety dfhdfgdfg
              </p>
            </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const Welcome = () => {

    return (
        <Container fluid>
        <IndividualIntervalsExample/>
      <div class="row">

        <div class="col-lg-8">
        <p>tidbits</p>
          <h1 className="title">TIDBIT HOME LANDING PAGE</h1>
          <p>SUBHEADING</p>          
          <em>
            <p style={{ fontWeight: 500 }}>
              {" "}
        
            </p>
          </em>
          <p style={{ fontWeight: 500 }}>
        
          </p>
          <p style={{ fontSize: 15 }}>
            <em>
              {" "}
            </em>
          </p>
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
            <div>
            <img
              className="navbarBrand"
              src={globelogo2}
              height={300}
              alt="logo"
            />
            </div>
            
         
      

        

        <div className="itemBox">
          <em>
            <h2 style={{ marginBottom: 40 }}>
              need to add globe logo and text on both left and right
            </h2>
          </em>

          <div class="row">

          
            <div class="col-lg-4">
              <span className="emoji">😁</span>
              <h3>ipes</h3>
            </div>
            {/* <div class="col-lg-4">
              <span className="emoji">😁</span>
              <h3>My Favorites/Saved Recipes</h3>
            </div> */}
            {/* <div class="col-lg-4">
              <span className="emoji">✍️</span>
              <h3>Reviews</h3>
            </div> */}

          </div>
        </div>

      </div>



      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
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
</div>

<div>


</div>

      </Container>

      


    )
};

export default Welcome;