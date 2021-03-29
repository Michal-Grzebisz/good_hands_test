import React from 'react'
import {
    Link,
    BrowserRouter as Router,
} from 'react-router-dom';
import HomeNavBar from "./HomeNavBar";

const HomeHeader = () => (
    <div className="home">
        <div className="home__image"/>
        <div className="home__content">
            <div className="home__login">
                <Router >
                    <Link to="logowanie">Zaloguj</Link>
                    <Link to="rejestracja">Załóż Konto</Link>
                </Router>
            </div>
            <HomeNavBar />
            <div className="home__info">
                <div className="home__info__content">
                    <span>Zacznij pomagać! </span>
                    <span>Oddaj niechciane rzeczy w zaufane ręce</span>
                </div>
                <div className="home__info__buttons">
                    <Router >
                        <Link to="logowanie" style={{whiteSpace: 'pre-wrap'}}>{'ODDAJ \nRZECZY'}</Link>
                        <Link to="rejestracja" style={{whiteSpace: 'pre-wrap'}}>{'ZORGANIZUJ \nZBIÓRKĘ'}</Link>
                    </Router>
                </div>
            </div>
        </div>
    </div>
)

export default HomeHeader