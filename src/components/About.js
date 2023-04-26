import React from 'react';
import '../css/About.css'
import { BsInstagram, BsFacebook, BsGithub } from "react-icons/bs";

const Team = () => {

    return (
<div className='AboutTitle'>
    <h1>-MEET OUR TEAM-</h1>
        <div className='mainAbout'>
            <div className='profile-card'>
                    <div className='img'>
                        <img src='Renz.jpg'></img> 
                    </div>
                    <div className='caption'>
                            <h3>Renzie Lois P. Peralta</h3>
                            <h6>Full Stack Developer</h6>
                            <p><i>I am a baker, and I love working in the food and hospitality industries! Feeding people of different races and ages 
                            with a wholesome meal has always been a delight for me. I believe that a simple meal can make a difference. I have tasted different cuisines, 
                            but I am still excited to experience what other cultures have in store through this community. One recipe at a time, from our warmest kitchens in the Philippines to the world through Tidbits.
                            </i></p>
                            <div className='social-links'>
                                <a href="#" target="_blank"><BsFacebook/></a>
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
                        <h6>Full Stack Developer</h6>
                        <p><i>I am a coffee connoisseur living on an island! Favorite foods include a warm seasonal salad, curry of any kind, and a fresh smoothie! 
                        For centuries the dinner table has been a place of connection, creation, culture, and community. 
                        Memories made over a meal are the very best kind which is why we created Tidbits! I hope you find a recipe you love, from a culture you love, to a memory with those you love.</i></p>
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
                        <h6>Full Stack Developer</h6>
                        <p><i>I am a food fanatic! Food has always been a big part of my family. Having grown up in the military, we loved experiencing new places and cultures through food. 
                        Eating was for more than just surviving, it was about learning, sharing, connecting, laughing and enjoying. 
                        We have recipes from all around the world and each holds special memories of people and places that we will never forget. I am so excited to share them and find new recipes to create new memories with.
                         Here’s to traveling the world through taste.</i></p>
                        <div className='social-links'>
                        <a href="#"><BsFacebook/></a>
                        <a href="#"><BsGithub/></a>
                        <a href="#"><BsInstagram/></a>
                        </div>
                    </div>
        </div>

        <div className='profile-card'>
                <div className='img'>
                    <img src='Giovanna.PNG'></img>
                </div>
                    <div className='caption'>
                        <h3>Giovanna Manisck</h3>
                        <h6>Full Stack Developer</h6>
                        <p><i>I am a dog lover living in Texas but a piece of my heart is with my family in Brazil! 
                        Favorite foods include the typical daily fish in São Paulo of rice, beans, farofa, orange slices and meat along with kibbeh with tabouleh. 
                        I love watching my grandma cook traditional lebanese recipes that she learned from her mom. I hope one day to make them just like her and to be able to share with the Tidbit community my love for cultural food.</i></p>
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

export default Team;