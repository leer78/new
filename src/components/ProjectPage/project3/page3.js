import React from 'react';
import '../page.css';

import { Link } from "react-router-dom";

import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const page3 = () =>{
    return(
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className="banner">  
            <h1>Ryan Lee - Project Portfolio</h1>
            <div className = "buttons">
                <Link to="/page2" id = 'button'><FiArrowLeft size = {20} color = 'black'/></Link>
                <Link to="/" id = 'button'><AiOutlineHome size = {20} color = 'black'/></Link>
                <Link to="/page4" id = 'button'><FiArrowRight size = {20} color = 'black'/></Link>
            </div>
        </div>
        <div className="ProjectContainer">
            <h1>LoRa Radio Multi Purpose Device</h1>
            <h2>McMaster Rocketry Team  <a href = "" target="_blank" id = 'externalLinkIconGithub'><AiFillGithub size = {25} color = 'rgb(16, 175, 159)'/></a></h2>
           
            <h3>2021</h3>

            <div className ="skillsTab">
                <div className ="skillItem">C++</div>
                <div className ="skillItem">Circuitry</div>
            </div>

            <h4>Overview</h4>
            <p>Originally, I designed this radio system following airspayce RadioHead library for my LoRa radios. This was used for testing of the communication device we'd use for the McMaster Rocketry team.</p>
            <p>The set up is used in some other projects I have, which allows me to complete tasks via radio signals and is quite flexible. An Arduino Uno and Nano are used as the RX and TX devices, communicating via LoRa radio modules.</p>
            <h4>Problem</h4>
            <p>Communicate between devices wirelessly across a large distance, and allow for modular additions to be made.</p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/p3img1.jpg' alt=''/><figcaption>Nano Setup (RX)</figcaption> </figure>
                <figure><img src='/images/p3img2.jpg' alt=''/><figcaption>Uno Setup (TX)</figcaption> </figure>
            </div>
            <h4>Implementation</h4>
            <p>To establish wiring diagrams between the LoRas and other boards, I completed research and followed several guides. I then programmed the Arduino boards in C++ using RadioHead library functions.</p>
            <p>I faced some challenges, many of which were related to the code and learning to use the library. This was a new task for me, so I reached out to others and looked online for viable solutions.</p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/p3img3.png' alt=''/><figcaption>Nano Wiring</figcaption> </figure>
                <figure><img src='/images/p3img4.png' alt=''/><figcaption>Uno Wiring</figcaption> </figure>

            </div>
            <h4>Results</h4>
            <p>After testing, the radio system works well for distances around 1 kilometer in distance. However, results may vary as testing sites had some obstacles. What we are left with is a fully functional radio setup that allows me to proceed with other "wireless" connection projects!</p>

        </div>
        </>
    );
};


export default page3;