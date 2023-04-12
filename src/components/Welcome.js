import React from 'react';
import { Container } from 'react-bootstrap';

import { Link } from "react-router-dom";

const Welcome = () => {

    return (
        <Container fluid>
      <div class="row">
        <div class="col-lg-8">
        <p>tidbits</p>
          <h1 className="title">TIDBIT HOME LANDING PAGE</h1>
          
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
        

        <div className="itemBox">
          <em>
            <h2 style={{ marginBottom: 40 }}>
              insert random text here
              
            </h2>
          </em>

          <div class="row">
            <div class="col-lg-4">
              <span className="emoji">📍</span>
              <h3>Featured Recipes</h3>
            </div>
            <div class="col-lg-4">
              <span className="emoji">😁</span>
              <h3>My Favorites/Saved Recipes</h3>
            </div>
            <div class="col-lg-4">
              <span className="emoji">✍️</span>
              <h3>Reviews</h3>
            </div>
          </div>
        </div>
      </div>
    </Container>

    )
};

export default Welcome;