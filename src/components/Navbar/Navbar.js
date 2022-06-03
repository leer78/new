import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import './navbar.css'
import sections from './NavbarSections.js'

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          {sections.map((section) => ( 
            <Link activeClass="active" to={section} spy={true} smooth={true} offset={0} duration={400}>
              <span className="nav-item"> {section} </span>
            </Link>
          ))}
        </div>
      </nav>
    );
  }
}