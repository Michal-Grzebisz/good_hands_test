import React from 'react'
import Icon1 from '../assets/Icon-1.svg'
import Icon2 from '../assets/Icon-2.svg'
import Icon3 from '../assets/Icon-3.svg'
import Icon4 from '../assets/Icon-4.svg'
import {BrowserRouter as Router, Link} from "react-router-dom";


const HomeSteps = () => (
    <div className="home__steps">
        <h1>Wystarczą 4 proste kroki</h1>
        <div className="home__steps__content">
            <div className="home__steps__content__info">
                <img src={Icon1} />
                <h2>Wybierz rzeczy</h2>
                <span>ubrania, zabawki, sprzęt i inne</span>
            </div>
            <div className="home__steps__content__info">
                <img src={Icon2}/>
                <h2>Spakuj je</h2>
                <span>skorzystaj z worków na śmieci</span>
            </div>
            <div className="home__steps__content__info">
                <img src={Icon3}/>
                <h2 style={{whiteSpace: 'pre-wrap'}}>{'Zdecyduj komu \nchcesz pomóc'}</h2>
                <span>wybierz zaufane miejsce</span>
            </div>
            <div className="home__steps__content__info">
                <img src={Icon4}/>
                <h2>Zamów kuriera</h2>
                <span>kurier przyjedzie w dogodnym terminu</span>
            </div>
        </div>
        <Router >
            <Link to="logowanie" style={{whiteSpace: 'pre-wrap'}}>{'ODDAJ \nRZECZY'}</Link>
        </Router>
    </div>
)

export default HomeSteps