import React from 'react';
import '../css/About.css'
import { BsInstagram, BsFacebook, BsGithub } from "react-icons/bs";

const AboutUs = () => {

    return (
    <div className='main2'>
        <div className='profile-card'>
                <div className='img'>
                    {/* //should be from public folder */}
                    <img src='box2.jpg'></img> 
                </div>
                    <div className='caption'>
                        <h3>Haha</h3>
                        <p>Web designer Pak!</p>
                        <div className='social-links'>
                            <a href="https://www.facebook.com/renzielois" target="_blank"><BsFacebook/></a>
                            <a href="#" target="_blank"><BsGithub/></a>
                            <a href="#" target="_blank"><BsInstagram/></a>
                        </div>
                    </div>
        </div>

        <div className='profile-card'>
                <div className='img'>
                    <img src='logohome.png'></img>
                </div>
                    <div className='caption'>
                        <h3>Hehe</h3>
                        <p>Web designer Pak!</p>
                        <div className='social-links'>
                        <a href="https://www.facebook.com/renzielois"><BsFacebook/></a>
                        <a href="#"><BsGithub/></a>
                        <a href="#"><BsInstagram/></a>
                        </div>
                    </div>
        </div>

        <div className='profile-card'>
                <div className='img'>
                    <img src='logohome.png'></img>
                </div>
                    <div className='caption'>
                        <h3>Hihi</h3>
                        <p>Web designer Pak!</p>
                        <div className='social-links'>
                        <a href="#"><BsFacebook/></a>
                        <a href="#"><BsGithub/></a>
                        <a href="#"><BsInstagram/></a>
                        </div>
                    </div>
        </div>

        <div className='profile-card'>
                <div className='img'>
                    <img src='logohome.png'></img>
                </div>
                    <div className='caption'>
                        <h3>Hoho</h3>
                        <p>Web designer Pak!</p>
                        <div className='social-links'>
                        <a href="#"><BsFacebook/></a>
                        <a href="#"><BsGithub/></a>
                        <a href="#"><BsInstagram/></a>
                        </div>
                    </div>
        </div>
    </div>
   
    )
}

export default AboutUs;