import React, { Component, Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Sections/Section";
import LandingPage from "./components/LandingPage/landingpage";
import ParticleBackground from "./components/particleBackground";
import Page1 from "./components/ProjectPage/project1/page1";
import Page2 from "./components/ProjectPage/project2/page2";
import Page3 from "./components/ProjectPage/project3/page3";
import Page4 from "./components/ProjectPage/project4/page4";
import Page5 from "./components/ProjectPage/project5/page5";
import Page6 from "./components/ProjectPage/project6/page6";
import Page7 from "./components/ProjectPage/project7/page7";
import Page8 from "./components/ProjectPage/project8/page8";



import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {  Fragment } from 'react';

class App extends Component {
  render() {
     
    return (
      <Router>
          <div className="App">
                  
                 
                  {/* <LandingPage/> */}
               
                  <Routes>
                    <Route path="/" element ={
                      <Fragment>
                        
                          <Navbar />
                          <ParticleBackground/>
                          <LandingPage/>
                          <Section/>
                      </Fragment>
                    }/>
                    
                 
                      <Route path="/page1" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <Page1 />
                           </Fragment>
                      }> </Route>
                      <Route path="/page2" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <Page2 />
                           </Fragment>
                      }> </Route>
                      <Route path="/page3" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <Page3 />
                           </Fragment>
                      }> </Route>
                      <Route path="/page4" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <Page4 />
                           </Fragment>
                      }> </Route>
                      <Route path="/page5" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <Page5 />
                           </Fragment>
                      }> </Route>
                      <Route path="/page6" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <Page6 />
                           </Fragment>
                      }> </Route>
                      <Route path="/page7" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <Page7 />
                           </Fragment>
                      }> </Route>
                      <Route path="/page8" element= {
                           <Fragment>
                              <ScrollToTop/>
                              <Page8 />
                           </Fragment>
                      }> </Route>
        
                  </Routes>
              

           </div>
      </Router>
     
    );
  }
  
}
export default App;
