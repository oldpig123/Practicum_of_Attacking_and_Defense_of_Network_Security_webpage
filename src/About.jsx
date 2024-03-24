//contain a brief introduction of myself
// Path: src/About.jsx
//
import React from 'react'
import './About.css'
//this page contains a personal photo and a brief introduction of myself
//the personal photo is displayed on the left side of the page
//the personal photo is a square image
//the personal photo is a headshot

//the brief introduction of myself is displayed on the right side of the page
//the brief introduction of myself is displayed below the personal photo
//the brief introduction of myself is centered on the page
//the brief introduction of myself is a paragraph
//the brief introduction of myself is left-aligned

//the personal photo and the brief introduction of myself are displayed in a row
//the personal photo and the brief introduction of myself are centered on the page
//the personal photo and the brief introduction of myself are displayed in the center of the page
//the "About" title of the page is displayed at the top of the page, but below the navigation bar
//the "About" title of the page is centered on the page
//the "About" title of the page is displayed in a larger font size than the rest of the page
//the "About" title of the page is bolded

function About() {
    return (
        <div className="About">
        <h1>About</h1>
        <div className="About-container">
            <img className="About-image" src="./img/B10807005.jpg" alt="Personal" />
            <p className="About-text">
                Name: 朱育辰<br/>
                Student ID: R12942157<br/>
                This website is created for the course "Practicum of Attacking and Defense of Network Security"<br/>
            </p>
        </div>
        </div>
    )
    }

export default About



