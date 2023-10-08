import React from 'react';
import '../page.css';

import { Link } from "react-router-dom";

import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const SGSC = () =>{
    return(
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className="banner">  
            <h1>Ryan Lee - Project Portfolio</h1>
            <div className = "buttons">
                <Link to="/IronmanHelmet" id = 'button'><FiArrowLeft size = {20} color = 'black'/></Link>
                <Link to="/" id = 'button'><AiOutlineHome size = {20} color = 'black'/></Link>
                <Link to="/WordLimitButton" id = 'button'><FiArrowRight size = {20} color = 'black'/></Link>
            </div>
        </div>
        <div className="ProjectContainer">
            <h1>Steering Column Strain Gauge Measurement System</h1>
            <h2>McMaster Baja Racing</h2>
            {/* <a href = "" target="_blank" id = 'externalLinkIconGithub'><AiFillGithub size = {25} color = 'rgb(16, 175, 159)'/></a> */}
           
            <h3>2023</h3>

            <div className ="skillsTab">
                <div className ="skillItem">Data Acquisition</div>
                <div className ="skillItem">Circuitry</div>
            </div>

            <h4>Overview</h4>
            <p>A strain gauge system used to measure torsional forces on our Baja Racing steering column. Used for real time data acquisition and future design considerations.</p>
            <h4>Problem</h4>
            <p>The aim was to measure the torques experienced by the steering column in our Baja vehicle. The setup should also be easily applicable to other parts such as the tie rods and wheel axles.</p>

            <h4>Implementation</h4>
            <h5>Step 1: Planning + Setup</h5>
            <p>To measure purely axial forces, some research into orientation and positioning was done. Using a cross of 2 strain gauges on each side at a 45 degree angle and some math, we can ignore axial and shear forces.</p>
            <p><a href="http://www-personal.umich.edu/~bkerkez/courses/cee575/Handouts/2strainpositioning.pdf" target='_blank'>Strain Gauge Positioning</a></p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/SGSCimg4.png' alt=''/><figcaption>Torsional Strain</figcaption> </figure>
            </div>
            <p>Once the orientation was decided, the rods were sanded and cleaned, with an orientation template being applied to the rod. The measurement tools were then applied with glue and had wires soldered accordingly. The strain gauges themselves were quite hard to apply as the soldered connections were frail. </p>
            <h5>Step 2: Testing</h5>
            <p>To measure strain in each of the four strain gauges, the Wheatstone Bridge circuit had to be solved. The unknown electrical resistance was found by balancing legs with R3 = (R4/R1)*R2</p>
            <p>With the physical setup complete, the next step was establishing a relationship between the measured strain and the torque applied to the rod. This was done using 2 methods, a torque wrench and tying known masses to a string and wrapping it around the rod.</p>
            <p>With a set of measurements, we were able to plot the strain values to applied loads, and develop a linear equation represented by Hooke's Law. This gave us our calibration constants.</p>
            
            <div className='ProjectImageContainer'>
                <figure><img src='/images/SGSCimg1.jpg' alt=''/><figcaption>Steering Column</figcaption> </figure>
                <figure><img src='/images/SGSCimg2.jpg' alt=''/><figcaption>Strain Gauge</figcaption> </figure>
                <figure><img src='/images/SGSCimg3.jpg' alt=''/><figcaption>Force Measurement</figcaption> </figure>
            </div>
            <h4>Results</h4>
            <p>Ultimately, a system for measuring torques on various rods was established. This allowed us to measure the forces experienced in competitions and use them for future axel designs.</p>
        </div>
        </>
    );
};


export default SGSC;