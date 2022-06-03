import React from 'react';
import '../page.css';

import { Link } from "react-router-dom";

import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const page4 = () =>{
    return(
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className="banner">  
            <h1>Ryan Lee - Project Portfolio</h1>
            <div className = "buttons">
                <Link to="/page3" id = 'button'><FiArrowLeft size = {20} color = 'black'/></Link>
                <Link to="/" id = 'button'><AiOutlineHome size = {20} color = 'black'/></Link>
                <Link to="/page5" id = 'button'><FiArrowRight size = {20} color = 'black'/></Link>
            </div>
        </div>
        <div className="ProjectContainer">
            <h1>Shock or Study Bracelet</h1>
            <h2>Hackathon Entry  <a href = "" target="_blank" id = 'externalLinkIconGithub'><AiFillGithub size = {25} color = 'rgb(16, 175, 159)'/></a></h2>
           
            <h3>2022</h3>

            <div className ="skillsTab">
                <div className ="skillItem">CAD</div>
                <div className ="skillItem">C++</div>
                <div className ="skillItem">C</div>
            </div>

            <h4>Overview</h4>
            <p>Hackathon entry for the theme "automation". Our take was a bracelet device that would automatically shock you in various causes, indicating that the user should remain focued on their task.</p>
            <p>Our team used my LoRa radio system with a button and buzzer to act as the "shock". We also used an STM32 board setup to display how the buttons for changing values like timer duration would work. Lastly, we 3D modelled the bracelet itself in detail.</p>
            <h4>Problem</h4>
            <p>Design something that highlights the engineering process and fits the category of "automation".</p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/p4img1.png' alt=''/><figcaption>Bracelet Sketches</figcaption> </figure>
                <figure><img src='/images/p4img4.png' alt=''/><figcaption>Design Matrix (TX)</figcaption> </figure>
            </div>
            <h4>Implementation</h4>
            <p> As a team, we had 1 week to develop this automation themed product. We spent the first days planning and brainstorming multiple options. Following standard engineering practice, we made decision matrices and did preliminary sketches.</p>
            <p>Ultimately, we settled on this watch. We split up tasks into our own specializations, consisting of two Mechatronics and one Mechanical engineering student.</p>
            <p>For my delegation, I was primarily responsible for the embedded systems. This meant using my LoRa radio system for a "wireless" shock effect, as well as coding the STM32 board to work in accordance to the bracelets proposed buttons.</p>
            <p>I've covered my process for the radios in another post, but for the STM32, I used C knowledge that I learned from an embedded systems course I took. I reused ideas like a finite state machine, timers, and interrupts.</p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/p4img2.png' alt=''/><figcaption>STM32 + Push Buttons (left), LoRa (right)</figcaption> </figure>
                <figure><img src='/images/p4img3.png' alt=''/><figcaption>CAD Model of Bracelet</figcaption> </figure>

            </div>
            <h4>Results</h4>
            <p>Our team was able to produce independant systems that represented our over-arching idea for a bracelet that shocks you when a certain event occurs. Due to constraints, we did not have the resources to combine all elements into one final design. However, we are still proud of the work we did as we believe it explains our idea well.</p>
            <p>Not only did we win the categories of "Best Supporting Documentation" and "Best Presentation", but we learned many invaluable skills such as communication and teamwork for an engineering project.</p>
        </div>
        </>
    );
};


export default page4;