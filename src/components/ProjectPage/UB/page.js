import React from 'react';
import '../page.css';

import { Link } from "react-router-dom";

import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const UB = () =>{
    return(
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className="banner">  
            <h1>Ryan Lee - Project Portfolio</h1>
            <div className = "buttons">
                <Link to="/WordLimitButton" id = 'button'><FiArrowLeft size = {20} color = 'black'/></Link>
                <Link to="/" id = 'button'><AiOutlineHome size = {20} color = 'black'/></Link>
                <Link to="/SequentialLogicDigitalDesignProject" id = 'button'><FiArrowRight size = {20} color = 'black'/></Link>
            </div>
        </div>
        <div className="ProjectContainer">
            <h1>Useless Machine</h1>
            <h2>Multidisciplinary Personal Project</h2>
            {/* <a href = "" target="_blank" id = 'externalLinkIconGithub'><AiFillGithub size = {25} color = 'rgb(16, 175, 159)'/></a> */}
           
            <h3>2023</h3>

            <div className ="skillsTab">
                <div className ="skillItem">CAD</div>
                <div className ="skillItem">3D Printing</div>
            </div>

            <h4>Overview</h4>
            <p>A box that switches itself off once turned on.. made for the fun of it</p>
            <h4>Problem</h4>
            <p>To make a useless machine inspired by online projects such as: </p>
            <p><a href="https://www.youtube.com/watch?v=mqvh3R8nKSA&t=5s&ab_channel=SawdustWorkshop" target='_blank'>Useless Machine Youtube </a></p>
            <h4>Implementation</h4>
            <p>Since this project didn't really have any constraints, I picked a small desk decoration size as reference and drew up some prototypes and features of the machine.</p>
            <p>The useless machine works on a simple process where once the switch is powered on, this sends a signal to the Arduino Nano which randomly runs logic for how a Servo with a hook attachement rotates in such a way that it flicks the switch back off.</p>
            <p>I initially had a problem where the servo didn't provide enough torque to turn the switch off, so I shopped around for switches with a lower torque requirement.</p>
            <p>One of my main objectives was to design the box in a simple to manufacture way, as well as something clean and descrete. For this, I added divots to conceal M3 screws and hid all electronics.</p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/UBimg1.png' alt=''/><figcaption>Assembly</figcaption> </figure>
                <figure><img src='/images/UBimg2.png' alt=''/><figcaption>Assembly 2</figcaption> </figure>
            </div>
            <h4>Results</h4>
            <p>Ultimately this was just a fun quick project that I thought would be funny given its absurdity.</p>
            <p>The most difficult aspect of the project was the C++ logic, where I wanted the servo to close the switch from a few randomized methods. One is a quick switch, another is one that stalls for 5 seconds then switches, and the final is one that pretends to switch, dissapears, then switches. I also wanted a feature where if the servo isn't complete its motion and the switch is turned on, the states should be able to handle this appropriately. This was done using FSM logic.</p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/UBimg3.jpg' alt=''/><figcaption>Stage 1: Hidden</figcaption> </figure>
                <figure><img src='/images/UBimg4.jpg' alt=''/><figcaption>Stage 2: Motion</figcaption> </figure>
                <figure><img src='/images/UBimg5.jpg' alt=''/><figcaption>Stage 3: Switch</figcaption> </figure>
            </div>
        </div>
        </>
    );
};


export default UB;