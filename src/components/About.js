import React from 'react';
import '../css/About.css'
import { BsInstagram, BsFacebook, BsGithub } from "react-icons/bs";

const AboutUs = () => {

    return (
        <div className='AboutTitle'>
<h1>-MEET OUR TEAM-</h1>
    <div className='mainAbout'>
        <div className='profile-card'>
                <div className='img'>
                    <img src='Renzie.jpg'></img> 
                </div>
                <div className='caption'>
                        <h3>Renzie Lois P. Peralta</h3>
                        <p>Full Stack Developer</p>
                        <div className='social-links'>
                            <a href="https://www.facebook.com/renzielois" target="_blank"><BsFacebook/></a>
                            <a href="#" target="_blank"><BsGithub/></a>
                            <a href="#" target="_blank"><BsInstagram/></a>
                        </div>
                </div>
        </div>

        <div className='profile-card'>
                <div className='img'>
                    <img src='Rachel.jpg'></img>
                </div>
                    <div className='caption'>
                        <h3>Rachel Provost</h3>
                        <p>Full Stack Developer</p>
                        <div className='social-links'>
                        <a href="#"><BsFacebook/></a>
                        <a href="#"><BsGithub/></a>
                        <a href="#"><BsInstagram/></a>
                        </div>
                    </div>
        </div>

        <div className='profile-card'>
                <div className='img'>
                    <img src='Rebekah.jpeg'></img>
                </div>
                    <div className='caption'>
                        <h3>Rebekah Leonard</h3>
                        <p>Full Stack Developer</p>
                        <div className='social-links'>
                        <a href="#"><BsFacebook/></a>
                        <a href="#"><BsGithub/></a>
                        <a href="#"><BsInstagram/></a>
                        </div>
                    </div>
        </div>

        <div className='profile-card'>
                <div className='img'>
                    <img src='Giovanna.jpg'></img>
                </div>
                    <div className='caption'>
                        <h3>Giovanna Manisck</h3>
                        <p>Full Stack Developer</p>
                        <div className='social-links'>
                        <a href="#"><BsFacebook/></a>
                        <a href="#"><BsGithub/></a>
                        <a href="#"><BsInstagram/></a>
                        </div>
                    </div>
        </div>
    </div>
    </div>
   
    )
}

export default AboutUs;