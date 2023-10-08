import React from 'react';
import '../page.css';

import { Link } from "react-router-dom";

import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const WL = () =>{
    return(
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className="banner">  
            <h1>Ryan Lee - Project Portfolio</h1>
            <div className = "buttons">
                <Link to="/StrainGaugeSteeringColumn" id = 'button'><FiArrowLeft size = {20} color = 'black'/></Link>
                <Link to="/" id = 'button'><AiOutlineHome size = {20} color = 'black'/></Link>
                <Link to="/SequentialLogicDigitalDesignProject" id = 'button'><FiArrowRight size = {20} color = 'black'/></Link>
            </div>
        </div>
        <div className="ProjectContainer">
            <h1>Word Limit Button</h1>
            <h2>Multidisciplinary Personal Project</h2>
            {/* <a href = "" target="_blank" id = 'externalLinkIconGithub'><AiFillGithub size = {25} color = 'rgb(16, 175, 159)'/></a> */}
           
            <h3>2023</h3>

            <div className ="skillsTab">
                <div className ="skillItem">CAD</div>
                <div className ="skillItem">3D Printing</div>
            </div>

            <h4>Overview</h4>
            <p>A Staples 'That was easy' button replica that emits an irritating high pitched noise when someone won't stop talking!</p>
            <h4>Problem</h4>
            <p>I wanted to replicate the 'Easy' button from Staples in a quick project with parts that I had laying around. The primary objective was to have a simple solution in the noise mechanic and 3D print model.</p>

            <h4>Implementation</h4>
            <p>I had a passive buzzer and button switch that I knew I wanted to use. As a simple solution, I wanted the actual red button to be used to trigger the button switch, but still go up and down. </p>
            <p>The circuit itself was very simple, where the button would control whether current flowed to the passive buzzer from a 9 volt battery. This current was far higher than the operating voltage range of 4V, so I used a 220 ohm resistor derived from basic circuit math. </p>
            <p>As mentioend, my main focus was on the CAD design. One of the main issues I faced was printing tolerances, such as the red button part slotting perfectly between the casing. My Ender 3 Pro printer does the job but I often have to account for different sizes when modeling. This can sometimes lead to excess test prints, delaying the manufacturing process.</p>
            <p>I've also been focusing on incorperating fasteners into my projects rather than relying on something like adhesives. Screws are a cheap and effective way to join parts whilst allowing for them to be taken apart. I used 2 screws to connect the base to the casing so that if the battery ran out, I'd be able to easily replace it.</p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/WLimg1.png' alt=''/><figcaption>Main Base</figcaption> </figure>
                <figure><img src='/images/WLimg3.png' alt=''/><figcaption>Casing</figcaption> </figure>
                <figure><img src='/images/WLimg2.png' alt=''/><figcaption>Button Cap</figcaption> </figure>
            </div>
            <h4>Results</h4>
            <p>In the end, I was able to make this in a few hours. I had lots of fun with it as I was able to implement the system I had been thinking about seamlessly into CAD, only needing one test print.</p>
            <p>My main takeaway was practising how parts can interact with eachother to form a greater system. Tolerances, friction, and internal electronics all had to be incorperated between sketches.</p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/WLimg4.jpg' alt=''/><figcaption>Main Base</figcaption> </figure>
                <figure><img src='/images/WLimg5.jpg' alt=''/><figcaption>Side View</figcaption> </figure>
                <figure><img src='/images/WLimg6.jpg' alt=''/><figcaption>Top View</figcaption> </figure>
            </div>
        </div>
        </>
    );
};


export default WL;