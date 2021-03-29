import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

const HomeNavBar = () => (
    <div className="home__nav">
        <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            Start
        </Link>
        <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
           O co chodzi?
        </Link>
        <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            O nas
        </Link>
        <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            Fundacja i organizacje
        </Link>
        <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            Kontakt
        </Link>
    </div>

)

export default HomeNavBar