import React from 'react';
import '../css/Footer.css';

// const Footer = () => {
//     const year = new Date().getFullYear();
  
//     return  <div className="footer">
//     <footer>{`Copyright © Upbeat Code ${year}`}</footer>
//   </div> 
//   };
  
// export default Footer;


import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="footer-content">
          <h3
            style={{
              fontFamily: "DM Serif Display",
              fontSize: "2em"
            }}
          >
            <em className='footer-company-name'>Tidbits</em><br></br>
            <b className='slogan'>For Food Lovers</b><br></br>
            <b className='trademark'>Tidbits is a registered company under [insert fake name]</b>
          </h3>
          <div className="sub">
            <div>
              <b>Company</b>
              <p href='http://localhost:3001/team' className='p-footer'>About</p>
              <p>Blog</p>
            </div>
            <div>
              <b>For Foodies</b>
              <p>Community</p>
              <p>Careers</p>
            </div>
            <div>
              <b>For You</b>
              <p>Privacy</p>
              <p>Terms</p>
            </div>
            <div>
              <b>Social links</b>
              <div>
                <AiFillFacebook />
                <AiFillTwitterCircle />
                <AiFillInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;