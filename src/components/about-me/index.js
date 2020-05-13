import React from 'react'

import {Container, Image} from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'

import photo from '../../img/IMG_20180429_164438.jpg'
const AboutMe = () => (
    <section className="about-me" id="about">
    <Container fluid>
        <div className="main-title">
            <h2>About Me<span><FontAwesomeIcon icon={faIdCard} className="title-card"/></span></h2>
        </div>
        <div className="row">
            <div className="col-lg-5 col-md-6">
                <div className="about-image wow fadeInLeft" data-wow-duration="1.7s">
                    <Image  src={photo} fluid/>
                </div>
            </div>
            <div className="col-lg-7 col-md-6">
                <div className="about-info wow fadeInRight" data-wow-duration="1.7s" >
                    <h3>Hello! I am John Smith</h3>
                    <h4>I'm Creative UI &amp; UX Designer based in New York, USA</h4>
                    <p>I'm very passionate and dedicated to my work .With 7 years experience as a professional UI &amp; UX Designer, I have acquired the skills necessary to build great and premium websites.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. sed do eiusm tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                    <a href="_" className="main-btn btn-download">Download CV</a>
                    <a href="_" className="main-btn">Hire Me</a>
                </div>
            </div>
        </div> 
    </Container>
</section>
)

export default AboutMe
