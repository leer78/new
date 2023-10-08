import React from 'react';
import '../page.css';

import { Link } from "react-router-dom";

import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const SMC = () =>{
    return(
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className="banner">  
            <h1>Ryan Lee - Project Portfolio</h1>
            <div className = "buttons">
                <Link to="/ShockOrStudyBracelet" id = 'button'><FiArrowLeft size = {20} color = 'black'/></Link>
                <Link to="/" id = 'button'><AiOutlineHome size = {20} color = 'black'/></Link>
                <Link to="/PWMThermalSensorFanController" id = 'button'><FiArrowRight size = {20} color = 'black'/></Link>
            </div>
        </div>
        <div className="ProjectContainer">
            <h1>Stepper Motor Controller</h1>
            <h2>2TA4: Embedded Systems Design I </h2>
           
            <h3>2022</h3>

            <div className ="skillsTab">
                <div className ="skillItem">C++</div>
                <div className ="skillItem">Circuitry</div>
            </div>

            <h4>Overview</h4>
            <p>Used and programmed an STM32F429 MCU with a stepper motor. Experimented with how to drive the motor in full/half step mode and clockwise/counterclockwise direction, while controlling the speed of rotation.</p>
            <h4>Problem</h4>
            <p>Use stepper motor theory to control the outputs of a motor. Functionality should include step size changes, direction changes, and speed changes.</p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/SMCimg1.png' alt=''/><figcaption>Final Physical Circuit</figcaption> </figure>
                <figure><img src='/images/SMCimg2.png' alt=''/><figcaption>Full Build Including Stepper Motor and STM MCU</figcaption> </figure>
            </div>
            <h4>Implementation</h4>
            <p>Followed the half bridge diagram with an SN754410NE H-bridge driver for main board wiring. </p>
            <p>On the STM32, GPIO pin interrupts were triggered via buttons. Using two buttons, the first would define the edit state (0 for full/half step, 1 for cw or ccw, 2 for speed adjustment)</p>
            <p>To control step sizes, only a certain number of outputs would be set to HIGH and the remaining ones to LOW, which induced the rotor coils to align. To change direction, the outputs were reveresed. To adjust speed, the innate timer prescaler values were increased/decreased. </p>
            <p>A sample of the code was included, which displays how GPIO pins were written to upon the rising edge of the timer.</p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/SMCimg3.png' alt=''/><figcaption>H-Bridge Diagram</figcaption> </figure>
                <figure><img src='/images/SMCimg4.jpg' alt=''/><figcaption>Block Diagram</figcaption> </figure>
                <figure><img src='/images/SMCimg5.png' alt=''/><figcaption>Sample Code</figcaption> </figure>


            </div>
            <h4>Results</h4>
            <p>I was able to apply course content to control a stepper motor. Reinforced my understanding of the design process and motor behaviour in response to MCU outputs.</p>
        </div>
        </>
    );
};

export default SMC;