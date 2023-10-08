import React from 'react';
import '../page.css';

import { Link } from "react-router-dom";

import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const PTSFC = () =>{
    return(
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className="banner">  
            <h1>Ryan Lee - Project Portfolio</h1>
            <div className = "buttons">
                <Link to="/StepperMotorController" id = 'button'><FiArrowLeft size = {20} color = 'black'/></Link>
                <Link to="/" id = 'button'><AiOutlineHome size = {20} color = 'black'/></Link>
                <Link to="/SolarExplorerProgram" id = 'button'><FiArrowRight size = {20} color = 'black'/></Link>
            </div>
        </div>
        <div className="ProjectContainer">
            <h1>Digital Thermometer and Fan Controller</h1>
            <h2>2TA4: Embedded Systems Design I </h2>
           
            <h3>2022</h3>

            <div className ="skillsTab">
                <div className ="skillItem">C++</div>
                <div className ="skillItem">Circuitry</div>
            </div>

            <h4>Overview</h4>
            <p>Used and programmed an STM32 MCU system where a fan operating using PWM is triggered based on sensor input.</p>
            <h4>Problem</h4>
            <p>Build a digital thermometer which displays the current temperature and the user selected setpoint temperature on a LCD display. If the temperature exceeds the setpoint you will turn on the fan to cool the sensor.</p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/PTSFCimg1.png' alt=''/><figcaption>Final Physical Circuit</figcaption> </figure>
                <figure><img src='/images/PTSFCimg2.jpg' alt=''/><figcaption>Full Build Including Digital Thermometer and STM MCU</figcaption> </figure>
            </div>
            <h4>Implementation</h4>
            <p>Performed an analog to digital conversion using the MCU to read input voltage. An OpAmp was implemented to bring the feed before the A/D converter to a high enough level that readings would be considered more accurate. </p>
            <p>A low pass filter was used in conjunction to negate spike noise.</p>
            <p>We use PWM as a way to control analog devices with a digital output from the MCU. Even with numerous voltages being applied and removed in an instant, the fan works as intended due to the interia. Another advantage here is that a lot of power is saved due to only being on for a portion of the total time.</p>
            <p>On the display interface, the room temperature readings from the sensor were converted and displayed. Some buttons were implemented so that temperature could manually be adjusted.</p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/PTSFCimg3.png' alt=''/><figcaption>Operational Amplifier Design</figcaption> </figure>
                <figure><img src='/images/PTSFCimg4.png' alt=''/><figcaption>Circuit Diagram</figcaption> </figure>


            </div>
            <h4>Results</h4>
            <p>The final product consists of a fan that is inactive below a certain temperature. Once above this threshold, it spins at a pace relative to the temperature. Full power is reached when in hot environments. </p>
        </div>
        </>
    );
};

export default PTSFC;