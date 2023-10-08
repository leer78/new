import React from 'react';
import '../page.css';

import { Link } from "react-router-dom";

import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const RCLP = () =>{
    return(
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <div className="banner">  
            <h1>Ryan Lee - Project Portfolio</h1>
            <div className = "buttons">
                <Link to="/SequentialLogicDigitalDesignProject" id = 'button'><FiArrowLeft size = {20} color = 'black'/></Link>
                <Link to="/" id = 'button'><AiOutlineHome size = {20} color = 'black'/></Link>
                <Link to="/LoRaRadioMultiPurposeDevice" id = 'button'><FiArrowRight size = {20} color = 'black'/></Link>
            </div>
        </div>
        <div className="ProjectContainer">
            <h1>Raspberry Pi Controlled LED Strips</h1>
            <h2>Multidisciplinary Personal Project<a href = "https://github.com/leer78/RPi-4-Controlled-LED-Strip" target="_blank" id = 'externalLinkIconGithub'><AiFillGithub size = {25} color = 'rgb(16, 175, 159)'/></a></h2>
           
            <h3>2022</h3>

            <div className ="skillsTab">
                <div className ="skillItem">Python</div>
                <div className ="skillItem">Circuitry</div>
            </div>

            <h4>Overview</h4>
            <p>This was a project that I made to apply basic concepts that I had learned from courses. I was also inspired to work on this project, as I felt that it would combine hardware and software concepts together quite well.</p>
            <p>I had seen numerous projects online that utilised old LED lights and thought that using an RPi to control it would be neat. Using a shell script, anything could be used to control the strip.</p>
            <h4>Problem</h4>
            <p>Find a way to effectively control LED lights on a large scale.</p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/RCLPimg1.png' alt=''/><figcaption>Final Setup + LEDs + Speaker</figcaption> </figure>
                <figure><img src='/images/RCLPimg2.png' alt=''/><figcaption>Wiring Diagram</figcaption> </figure>
            </div>
            <h4>Implementation</h4>
            <p>The main focus of this project was to practice using breadboards, wiring diagrams, and transistors to create something functional. I spent a lot of time reseraching parts and their specific uses, with the MOSFET intruiging me the most. While it would have been simple enough to put the circuit together and call it a day, I wanted to understand each segment of what I was doing.</p>
            <p>The MOSFETS allow us to use the RPi to control the gates to where the voltage from the external power source goes to the LED lights. This must be done as the RPi itself cannot provide enough voltage through its GPIO pins.</p>
            <div className='ProjectImageContainer'>
                <figure><img src='/images/RCLPimg3.png' alt=''/><figcaption>Breadboard Wiring</figcaption> </figure>
            </div>
            <h4>MOSFET Research</h4>
            <p>These metal–oxide–semiconductor field-effect transistors have the ability to control power between the Drain & Source terminals. In a MOSFET, there are three pins; Source, Gate, and Drain. This is the most basic way that I've come to understand these transistors: Essentially acting as a switch, when a certain voltage is applied to the Gate, current will be free to flow between the Source and Drain.</p>
            <p>There are two main types of transistors, which are p-type or n-type. This is a concept that I was able to explore in my Physics 1E03 course, "Introduction to Electromagnetism and Waves" as well as the in the Engineer 1P13 course's "Material Science" subject. The primary concept of these transistors are the usage of doped hole regions. An p-type requires a negative voltage at the gate while the n-type uses a positive voltage. Based on this, I chose to use an n-type as the GPIO of a RPi 4 produces a positive voltage at the pins.</p>
            <p>This tool is tremendously useful in modern electronics! And the best part is, these work without other electronics having to sense current, move tiny gates etc. It uses basic physics & material properties.</p>
            <h4>Results</h4>
            <p>Using some basic research and tools, I was able to create a base LED controlled system that would allow me to proceed with other projects. Using this project as a template, fun events like lighting upon a sports team scoring, or music matching are possible.</p>

        </div>
        </>
    );
};


export default RCLP;