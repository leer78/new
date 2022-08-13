import React from 'react';
import './experiencesSection.css';
import './profileSection.css';
import './sections.css';
import './skills.css';
import './contact.css';
import './projects.css';


import { Link } from "react-router-dom";
import { GoLocation } from 'react-icons/go';
import {BiLink} from 'react-icons/bi'
import { SiLinkedin } from 'react-icons/si';
import { AiOutlinePhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import {AiFillGithub} from 'react-icons/ai'

import {AiFillFolderOpen} from 'react-icons/ai'
import {FiExternalLink} from 'react-icons/fi'

const Section = () => {
    return (
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        {/* PROFILE====================================== */}
            <div className='SectionContainer' id="Profile">
                <h1>Profile</h1>
                <h5>"Engineers like to solve problems. If there are no problems handily available, they will create their own problems." - Scott Adams</h5>
                <hr />

                <div className='profileContainer'>
                    <div className='profileColumn'>
                        <div className='profileLeft'>
                            <h2>About me</h2>
                            <p>Hi there! I'm Ryan and this is the personal portfolio site that I made by hand using React. Here, I plan to highlight my experiences and convey my interests.</p>
                            <p>An aspiring engineering student with a fascination for technology and software development. I believe that the there is limitless potential in the field and would allow for me to contribute in the progression of mankind.</p>
                            <div className='lastSec'>
                                <p>Ever since I was younger, I've always been building things and tinkering with the inner workings of technology. I realize now that to my younger self, what I've learned in engineering would've looked like magic. And that's what keeps me interested!</p>
                            </div>
                        </div>
                    </div>
                    <div className='profileColumn'>
                        <div className='profileMiddle'>
                            {/* picture */}
                            <div className='profilePicture'>  </div>
                        </div>
                    </div>
                    <div className='profileColumn'>
                        <div className='profileRight'>
                            <h2>Details</h2>
                            <h3>Name</h3>
                            <p>Ryan Lee</p>
                            <h3>Area of Study</h3>
                            <p>Mechatronics Engineering</p>
                            <h3>Interests</h3>
                            <p>Space, Computation, Automation, and Design</p>
                        </div>
                    </div>
                </div>


                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
            </div>

        {/* PROJECTS======================================== */}
                        <div className='SectionContainer' id="Projects">
                <h1>Projects</h1>
                <h5>“I don’t spend my time pontificating about high-concept things; I spend my time solving engineering and manufacturing problems.” - Elon Musk</h5>
                <hr></hr>
                <div className = 'projectsContainer'>
                    <div className = 'box'>
                        <div className = 'folderIcon'><AiFillFolderOpen size = {50}/></div>
                        <Link to="/page1" id = 'externalLinkIcon'><FiExternalLink size = {30} color = 'rgb(16, 175, 159)'/></Link>
                        <h3>Macro Keypad</h3>
                        <p>A macro keypad with several 3x3 keyswitch buttons. Made of 3D printed parts and an Arduino Pro Micro</p>
                        <ul>
                            <li>C++</li>
                            <li>CAD</li>
                            <li>Circuitry</li>
                        </ul> 
                    </div>
                    <div className = 'box'>
                        <div className = 'folderIcon'><AiFillFolderOpen size = {50}/></div>
                        <Link to="/page2" id = 'externalLinkIcon'><FiExternalLink size = {30} color = 'rgb(16, 175, 159)'/></Link>
                        <h3>RPi Controlled LED Strip</h3>
                        <p> Base LED controlled system that would allow me to proceed with other projects. Comprised of a Raspberry Pi 4, LED light strips, and MOSFETs</p>
                        <ul>
                            <li>Python</li>
                            <li>Circuitry</li>
                        </ul> 
                    </div>
                    <div className = 'box'>
                        <div className = 'folderIcon'><AiFillFolderOpen size = {50}/></div>
                        <Link to="/page3" id = 'externalLinkIcon'><FiExternalLink size = {30} color = 'rgb(16, 175, 159)'/></Link>
                        <h3>LoRa Radio Multi Purpose Device</h3>
                        <p>Fully functional radio setup using Arduino Uno, Nano, and LoRa that allows me to proceed with other "wireless" connection projects</p>
                        <ul>
                            <li>C++</li>
                            <li>Circuitry</li>
                        </ul> 
                    </div>
                    <div className = 'box'>
                        <div className = 'folderIcon'><AiFillFolderOpen size = {50}/></div>
                        <Link to="/page4" id = 'externalLinkIcon'><FiExternalLink size = {30} color = 'rgb(16, 175, 159)'/></Link>
                        <h3>Shock or Study Bracelet</h3>
                        <p>Engineering 4 the Future 'hackathon' entry featuring shock watch to promote better study habits. Placed 1st overall.</p>
                        <ul>
                            <li>CAD</li>
                            <li>C++</li>
                            <li>C</li>
                        </ul> 
                    </div>
                    <div className = 'box'>
                        <div className = 'folderIcon'><AiFillFolderOpen size = {50}/></div>
                        <Link to="/page5" id = 'externalLinkIcon'><FiExternalLink size = {30} color = 'rgb(16, 175, 159)'/></Link>
                        <h3>Solar Explorer Program Game</h3>
                        <p>A fun, yet educational space themed game that allows users to  grasp the scale of our Solar System with "1 pixel = size of the moon"</p>
                        <ul>
                            <li>Java</li>
                        </ul> 
                    </div>
                    <div className = 'box'>
                        <div className = 'folderIcon'><AiFillFolderOpen size = {50}/></div>
                        <Link to="/page6" id = 'externalLinkIcon'><FiExternalLink size = {30} color = 'rgb(16, 175, 159)'/></Link>
                        <h3>Sequential Logic Digital Design Project</h3>
                        <p>A digital circuit using numerous logic gates to continiously output a number on a 7 segment display </p>
                        <ul>
                            <li>Circuitry</li>
                        </ul> 
                    </div>

                    
                </div>
                <div className='Note'>
                    But thats not all.. these were just some of the main projects I'd like to highlight.
                    <a href ='https://github.com/leer78'> I have many more projects that I've completed here at my GitHub!</a>
                </div>
            </div>

            {/* EXPERIENCES================================ */}
            <div className='SectionContainer' id="Experiences">
                <h1>Experiences</h1>
                <h5>"I believe every human has a finite number of heartbeats. I don't intend to waste any of mine" - Neil Armstrong</h5>
                <div className='row'>
                    <hr />
                    <h2 id="experienceTitle">Education</h2>

                    <div id='individualExperiences'>
                        <div className='column'>
                            <div className='left-column'>
                                <h2 id="school">McMaster University</h2>
                                <h3 >09/2020 - 05/2025 </h3>
                                <figure><img src='/images/McMasterLogo.png' alt=''/></figure>
                            </div>
                        </div>

                        <div className='column'>
                            <div className='right-column'>
                                <h2 id="degree">Bachelor of Mechatronics Engineering B.Eng (Co-op) ||cGPA 3.75/4.0</h2>
                                <p>Studying in the undergraduate Engineering co-op program to develop a further understanding on high level relevant courses in the modern tech industry.</p>
                                <p>What is <b>mechatronics engineering</b>? I like to think that it breaks the boundaries between <b>mechanical, electrical, and software</b> engineering. Our main focus is the design of embedded systems, which are essentially application specific computers. The degree focuses on the design of all related processes, allowing us to understand the engineering process from start to end. </p>
                                <div className = "experienceList" >
                                    <p>Notable courses include:</p>
                                    <ul>
                                        <li>ENGINEER 1P13  || Integrated Design Projects in Engineering</li>
                                        <li>MATH 1ZA3, 1ZB3, 1ZC3, 2Z03, 2ZZ3 || Engineering Mathematics I-IV </li>
                                        <li>MECHTRON 2MP3 || Programming for Mechatronics</li>
                                        <li>MECHENG 2QA4 || Mechanics: Kinetics and Dynamics</li>
                                        <li>ENGPHYS 2E04 || Analog and Digital Circuits</li>
                                        <li>ENGPHYS 2A04 || Electricity and Magnetism </li>
                                        <li>MECHTRON 2MD3 || Data Structures and Algorithms</li>
                                        <li>MECHTRON 2TA4 || Embedded Systems Design </li>
                                    </ul>
                                </div>
                                
                                <div className = 'greenTag'>
                                    <a href = 'https://academiccalendars.romcmaster.ca/preview_program.php?catoid=44&poid=22947' target ='_blank' id='location'><GoLocation /> Hamilton, Ontario &nbsp;&nbsp; || &nbsp;&nbsp;<BiLink size = {20}/> Mechatronics Engineering, Mechatronics Engineering Co-op (B.Eng.) </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='row'>
                    <hr />
                    <h2 id="experienceTitle">Work Experience</h2>

                    <div id='individualExperiences'>
                        <div className='column'>
                            <div className='left-column'>
                                <h2 id="school">Independant Electricity System Operator (IESO)</h2>
                                <h3 >04/2022 - 09/2022 </h3>
                                <figure><img src='/images/iesologo.png' alt=''/></figure>
                            </div>
                        </div>

                        <div className='column'>
                            <div className='right-column'>
                                <h2 id="degree">Information and Technology Services Student</h2>
                                <p>Worked with the Corperate Technology Sysems department to accomplish a broad range of technical tasks. I had many opporunities to grow my communication, collaboration, and initiative skills.</p>
                                <div className = 'experienceList'>
                                    <p>Accomplished duties include:</p>
                                    <ul>
                                        <li>Aligned database of 500+ servers through scripts and high precision checks, noted trends and found optimizations</li>
                                        <li>Managed hundreds of Microsoft and Linux servers through installations, patches, health checks, and investigations</li>
                                        <li>Automated tasks through Bash and PowerShell scripting with a focus on frequent updates, task schedulers, and audit reports  </li>
                                        <li>Researching ideal enterprise software through outreach and discussing with consultants</li>
                                        <li>Learned about Ontario's energy market in its entirety</li>
                                    </ul>
                                </div>
                                <div className = 'greenTag'>
                                    <a href = 'https://www.ieso.ca/' target ='_blank' id='location'><GoLocation /> Mississauga, Ontario &nbsp;&nbsp; || &nbsp;&nbsp;<BiLink size = {20}/> ieso.ca </a>
                                </div>                            
                            </div>
                        </div>
                    </div>
                    
                    <div id='individualExperiences'>
                        <div className='column'>
                            <div className='left-column'>
                                <h2 id="school">Canadian Imperial Bank <br></br>of Commerce (CIBC)</h2>
                                <h3 >04/2021 - 9/2021 </h3>
                                <figure><img src='/images/cibclogo.png' alt=''/></figure>
                            </div>
                        </div>

                        <div className='column'>
                            <div className='right-column'>
                                <h2 id="degree">Technical Systems Analyst</h2>
                                <p>Worked under the NSO team to assist in automating daily proccesses while managing global servers and devices. Gained experience in the professional work environment.</p>
                                <div className = "experienceList" >
                                    <p>Accomplished duties include:</p>
                                    <ul>
                                        <li>Investigated and worked alongside the CIBC Infrastructure Operations team to tackle a variety of technical problems</li>
                                        <li>Worked to utilise Ansible and Git to deploy network related applications, saving company resources </li>
                                        <li> Implement autonomous processes to reduce the manual efforts and redundant tasks associated with technology infrastructure</li>
                                        <li>Upheld security protocols in my actions whilst ensuring that all my actions and undertakings were held to a high standard </li>
                                        <li> Lead daily stand-up meetings to document and organize key agenda items. Reduced agenda discussion times by 50%</li>
                                        <li>Devised an incident ticket tracker to record overnight pages and investigate key findings for reducing queue volume </li>
                                    </ul>
                                </div>
                                
                                <div className = 'greenTag'>
                                    <a href = 'https://www.cibc.com/en/personal-banking.html' target ='_blank' id='location'><GoLocation /> Toronto, Ontario &nbsp;&nbsp; || &nbsp;&nbsp;<BiLink size = {20}/> cibc.com </a>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <hr />
                    <h2 id="experienceTitle">Extracurricular Activities</h2>

                    <div id='individualExperiences'>
                        <div className='column'>
                            <div className='left-column'>
                                <h2 id="school">Mac Rocketry Team</h2>
                                <h3 >09/2020 - 02/2022 </h3>
                                <figure><img src='/images/macrocketrylogo.png' alt=''/></figure>
                            </div>
                        </div>

                        <div className='column'>
                            <div className='right-column'>
                                <h2 id="degree">Ground Controls Software Developer</h2>
                                <p>The McMaster Rocketry Team designs, builds and launches rockets and innovative payloads. This year we are competing in the Launch Canada Competition and building a rocket to launch to 3km (10,000ft) in altitude!</p>
                                
                                <div className = "experienceList" >
                                    <p>Tasks accomplished were:</p>
                                    <ul>
                                        <li>Worked with the ground controls to develop a functional team website along with back-end features such as member login(Viewable at http://macrocketry.ca) </li>
                                        <li>Utilized HTML, CSS, React, Flask and chart.js to visualize and present flight censor data</li>
                                        <li>Leveraged LoRa and Arduino devices to develop a versatile transceiver and receiver system to transfer data on a wide scale</li>
                                        <li>Analyzed flight data and trajectories using calculations and algorithms to convert existing data into additional information</li>
                                    </ul>
                                </div>
                                
                                <div className = 'greenTag'>
                                    <a href = 'https://www.macrocketry.ca/' target ='_blank' id='location'><GoLocation /> Hamilton, Ontario &nbsp;&nbsp; || &nbsp;&nbsp;<BiLink size = {20}/>macrocketry.ca </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id='individualExperiences'>
                        <div className='column'>
                            <div className='left-column'>
                                <h2 id="school">McMaster Undegraduate Academic Astronomy <br></br>Club (MUAAC) </h2>
                                <h3 >09/2020 - 07/2022 </h3>
                                {/* <figure><img src='/images/McMasterLogo.png' alt=''/></figure> */}
                            </div>
                        </div>

                        <div className='column'>
                            <div className='right-column'>
                                <h2 id="degree">First Year Representative + VP of Finance</h2>
                                <p>A student group dedicated to the study and appreciation of our universe.</p>
                                
                                <div className = "experienceList" >
                                    <p>Promoted engagement through:</p>
                                    <ul>
                                        <li>Generated excitement and interest within the first year community as the club’s first year representative</li>
                                        <li>Substantial experience in recordkeeping and accounting tasks as vice president of finance</li>
                                    </ul>
                                </div>
                                
                                <div className = 'greenTag'>
                                    <a href = 'https://www.facebook.com/MacAstronomy/' target ='_blank' id='location'><GoLocation /> Hamilton, Ontario &nbsp;&nbsp; || &nbsp;&nbsp;<BiLink size = {20}/> MUAAC </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            {/* SKILLS======================================================== */}
            </div>

             {/* SKILLS================================ */}
            <div className='SectionContainer' id="Skills">
                <h1>Skills</h1>
                <h5>"If you really look closely, most overnight successes took a long time."  — Steve Jobs</h5>
                <hr />

                <div className='skillsContainer'>
                    <div className='skillsColumn'>
                        <div className='skillsLeft'>
                            <div className='skillsHeading'>Programming</div>
                            <ul>
                                <li>HTML
                                    <div className='barContainer'>
                                        <div className='skillHTML'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>CSS
                                    <div className='barContainer'>
                                        <div className='skillCSS'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>React
                                    <div className='barContainer'>
                                        <div className='skillReact'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>C
                                    <div className='barContainer'>
                                        <div className='skillC'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Python
                                    <div className='barContainer'>
                                        <div className='skillPython'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>C++
                                    <div className='barContainer'>
                                        <div className='skillCpp'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Java
                                    <div className='barContainer'>
                                        <div className='skillJava'> &nbsp;</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='skillsColumn'>
                        <div className='skillsRight'>
                        <div className='skillsHeading'>Enterprise Management</div>
                            <ul>
                                <li>GitHub
                                    <div className='barContainer'>
                                        <div className='skillGitHub'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Linux + Bash
                                    <div className='barContainer'>
                                        <div className='skillLinuxBash'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Powershell
                                    <div className='barContainer'>
                                        <div className='skillPowershell'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Excel
                                    <div className='barContainer'>
                                        <div className='skillExcel'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Word
                                    <div className='barContainer'>
                                        <div className='skillWord'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>PowerPoint
                                    <div className='barContainer'>
                                        <div className='skillPowerPoint'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Jira
                                    <div className='barContainer'>
                                        <div className='skillJira'> &nbsp;</div>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>

                </div>

                <div className='skillsContainer'>
                    <div className='skillsColumn'>
                        <div className='skillsLeft'>
                            <div className='skillsHeading'>Technical Skills</div>
                            <ul>
                                <li>Circuitry
                                    <div className='barContainer'>
                                        <div className='skillCircuitry'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Soldering
                                    <div className='barContainer'>
                                        <div className='skillSoldering'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>CAD
                                    <div className='barContainer'>
                                        <div className='skillCAD'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>3D Printing
                                    <div className='barContainer'>
                                        <div className='skill3DPrinting'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Logic Gates Design
                                    <div className='barContainer'>
                                        <div className='skillLogicGateDesign'> &nbsp;</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='skillsColumn'>
                        <div className='skillsRight'>
                        <div className='skillsHeading'>Soft Skills</div>
                            <ul>
                                <li>Communication
                                    <div className='barContainer'>
                                        <div className='skillCommunication'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Teamwork
                                    <div className='barContainer'>
                                        <div className='skillTeamwork'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Problem Solving
                                    <div className='barContainer'>
                                        <div className='skillProblemSolving'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Time Management
                                    <div className='barContainer'>
                                        <div className='skillTimeManagement'> &nbsp;</div>
                                    </div>
                                </li>
                                <li>Initiative
                                    <div className='barContainer'>
                                        <div className='skillInitiative'> &nbsp;</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>






                </div>


                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
            </div>


            {/* CONTACT======================================== */}
            <div className='SectionContainer' id="Contact">
                <h1>Contact</h1>
                <hr></hr>

                <div className='contactContainer'>

                    <div className='contactColumn'>
                        <div className='contactLeft'>
                            <ul>
                                <li><SiLinkedin />&nbsp;&nbsp; linkedin.com/leer78 </li>
                                <li><AiOutlinePhone /> &nbsp;&nbsp; 647 466 7142 </li>
                            </ul>
                        </div>
                    </div>
                    <div className='contactColumn'>
                        <div className=' contactRight'>
                            <ul>
                                <li><MdEmail /> &nbsp; &nbsp;rlee20744@gmail.com </li>
                                <li><AiFillGithub />&nbsp;&nbsp; github.com/leer78</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};


export default Section;
