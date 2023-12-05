import React from 'react';
import '../page.css';

import { Link } from "react-router-dom";

import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const PID = () =>{
    return(
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className="banner">  
            <h1>Ryan Lee - Project Portfolio</h1>
            <div className = "buttons">
                <Link to="/MacroKeypad" id = 'button'><FiArrowLeft size = {20} color = 'black'/></Link>
                <Link to="/" id = 'button'><AiOutlineHome size = {20} color = 'black'/></Link>
                <Link to="/IronmanHelmet" id = 'button'><FiArrowRight size = {20} color = 'black'/></Link>
            </div>
        </div>
        <div className="ProjectContainer">
            <h1>PID Ball Balancing Platform</h1>
            <h2>Multidisciplinary Personal Project</h2>
            {/* <a href = "" target="_blank" id = 'externalLinkIconGithub'><AiFillGithub size = {25} color = 'rgb(16, 175, 159)'/></a> */}
           
            <h3>2023</h3>

            <div className ="skillsTab">
                <div className ="skillItem">CAD</div>
                <div className ="skillItem">3D Printing</div>
                <div className ="skillItem">C++</div>
            </div>

            <h4>Overview</h4>
            <p>A steel ball balancing platform with 2 degrees of freedom using a PID controller algorithm</p>
            <h4>Problem</h4>
            <p>In one of our Control Systems classes, 3DA4, we used Simulink, 1 DoF ball balancing beam, and a PID controller to balance a steel ball. I decided to expand upon this and create a platform balancer with an X and Y axis controller!</p>

            <h4>Planning</h4>
            <p>I started this project by breaking it down into the components I'd need.</p>
            <p>My initial plan to control the platform axes was to use MG90s Servos, but after rough prototyping, I found that the torque provided at a given speed would not be suitable for this project. As a result, I looked into stepper motors and settled upon the Nema 17 Stepper Motor.</p>
            <p>To control the steppers, I decided on using L298N Motor Controller, which allowed me to easily control stepper motors which typically require stepping logic to properly move.</p>
            <p>To determine the position of the steel ball, I settled on using a resistive touch pad as opposed to ultrasonic sensors or a camera.</p>
            <p>To move the platform, I planned on using a ball joint in the center, as well as another ball joint and hinge for each stepper to lift the x and y axes. After CAD simulation, I found that I had to adjust my method due to physical constraints.</p>
            
            <h4>Implementation</h4>
            <p>In order to move the platform in 2 degrees of freedom from a single degree of freedom input (stepper shaft rotation), I needed 2 ball joints instead. This was found as my middle joint wasn't ideal, and had small horizontal and vertical displacement. This was accomplished by using 2 ball bearings, as well as 4 ball joint tie rods that I made a mini "makeshift" ball joint with. This combination worked for size as well as aesthetic purposes.</p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/PIDimg1.png' alt=''/><figcaption>CAD Model</figcaption> </figure>
                <figure><img src='/images/PIDimg2.jpg' alt=''/><figcaption>L298N Controllers</figcaption> </figure>
            </div>

            <h4>Troubleshooting</h4>
            <p>The first problem I encountered was shake and wobbliness in the entire build. I resolved this through tighter tolerances and adding supports to the middle joint.</p>
            <p>The largest issues I faced had to do with the software implementation. Unfortunately, the resistive touch pad produced extremely noisy signals. This made it difficult for the PID to properly calculate an output response as the ball position would frequently spike. I attempted to resolve this through using a moving average filter.</p>
            <p>The most tedious part was also tuning. This involved a trial and error process for finding Proportional, Integral, and Derivative constants based on the system response. Since this was quite frusterating, I built brackets that I could easily be attached to the platform to keep the steel ball contained, as well as horizontal and vertical barriers when tuning each axes. </p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/PIDimg6.png' alt=''/><figcaption>Moving Average Filtering</figcaption> </figure>
            </div>
            <h4>Results</h4>
            <p>In the end, I was able to make a somewhat-tuned platform ball balancer using PID algorithms. One of my initial design goals was to make this as a desk decoration, but with all of the other problems I encountered, it resulted in something not very practical. The steppers are very loud, the motors require a steady 12V power supply, and I hadn't contained any of the electronics.</p>
            <p>The biggest takeway was my research into PID algorithms and applying them. This project required a balance in everything and lots of design considerations such as stability, print times, ease of assembly, and much more.</p>
            <p>In the future, if I were to improve on this project, I'd tune the PID better, as well as design an enclosure for the electronics.</p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/PIDimg3.jpg' alt=''/><figcaption>View 1</figcaption> </figure>
                <figure><img src='/images/PIDimg4.jpg' alt=''/><figcaption>View 2</figcaption> </figure>
                <figure><img src='/images/PIDimg5.jpg' alt=''/><figcaption>View 3</figcaption> </figure>
            </div>
        </div>
        </>
    );
};


export default PID;