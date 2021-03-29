import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom';


const HomeHelp = () => {
    const [fundation, setFundation] = useState(true)
    const [organization, setOrganization] = useState(false)
    const [local, setLocal] = useState(false)
    const [first, setFirst] = useState(true)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)

    const onFundation = () => {
        setFundation(true)
        setOrganization(false)
        setLocal(false)
    }
    const onOrganization = () => {
        setFundation(false)
        setOrganization(true)
        setLocal(false)
    }
    const onLocal = () => {
        setFundation(false)
        setOrganization(false)
        setLocal(true)
    }

    const buttonFirst = () => {
        setFirst(true)
        setSecond(false)
        setThird(false)
    }
    const buttonSecond = () => {
        setFirst(false)
        setSecond(true)
        setThird(false)
    }
    const buttonThird = () => {
        setFirst(false)
        setSecond(false)
        setThird(true)
    }

    return (
        <section className="home__help">
            <h1>Komu pomagamy?</h1>
            <div className="home__help__options">
                <Router>
                    <Link onClick={onFundation}>Fundacjom</Link>
                    <Link onClick={onOrganization} style={{whiteSpace: 'pre-wrap'}}>{'Organizacjom \npozarządowym'}</Link>
                    <Link onClick={onLocal} style={{whiteSpace: 'pre-wrap'}}>{'Lokalnym \nzbiórką'}</Link>
                </Router>
            </div>
            <h2>W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
            z którymi współpracujemy. Możesz sprawdzić czym się zajmują,
            komu pomagają i czego potrzebują.</h2>
            {
                fundation === true && <div className="home__help__options__fundation">
                    {
                        first === true &&
                        <div className="home__help__options__content">
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Fundacja "Dbam o Zdrowie"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Fundacja "Dbam o Zdrowie"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Fundacja "Dbam o Zdrowie"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                        </div>

                    }
                    {
                        second === true &&
                        <div className="home__help__options__content">
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Fundacja "Lorem Ipsum 1"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Fundacja "Lorem Ipsum 2"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Fundacja "Lorem Ipsum 3"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                        </div>
                    }
                    {
                        third === true &&
                        <div className="home__help__options__content">
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Fundacja "Lorem Ipsum 4"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Fundacja "Lorem Ipsum 5"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Fundacja "Lorem Ipsum 6"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                        </div>
                    }
                    <div className="home__help__options__content__buttons">
                        <Router>
                            <Link onClick={buttonFirst}>1</Link>
                            <Link onClick={buttonSecond}>2</Link>
                            <Link onClick={buttonThird}>3</Link>
                        </Router>
                    </div>
                </div>
            }
            {
                organization === true && <div className="home__help__options_organization">
                    {
                        first === true &&
                        <div className="home__help__options__content">
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Organizacja "Lorem Ipsum 1"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Organizacja "Lorem Ipsum 2"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Organizacja "Lorem Ipsum 3"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                        </div>
                    }
                    {
                        second === true &&
                        <div className="home__help__options__content">
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Organizacja "Lorem Ipsum 4"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Organizacja "Lorem Ipsum 5"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Organizacja "Lorem Ipsum 6"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                        </div>
                    }
                    <div className="home__help__options__content__buttons">
                        <Router>
                            <Link onClick={buttonFirst}>1</Link>
                            <Link onClick={buttonSecond}>2</Link>
                        </Router>
                    </div>
                </div>
            }
            {
                local === true && <div className="home__help__options_local">
                    {
                        first === true &&
                        <div className="home__help__options__content">
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Lokalna Zbiórka "Lorem Ipsum 1"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Lokalna Zbiórka "Lorem Ipsum 2"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Lokalna Zbiórka "Lorem Ipsum 3"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                        </div>

                    }
                    {
                        second === true &&
                        <div className="home__help__options__content">
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Lokalna Zbiórka "Lorem Ipsum 4"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Lokalna Zbiórka "Lorem Ipsum 5"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Lokalna Zbiórka "Lorem Ipsum 6"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                        </div>
                    }
                    {
                        third === true &&
                        <div className="home__help__options__content">
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Lokalna Zbiórka "Lorem Ipsum 7"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Lokalna Zbiórka "Lorem Ipsum 8"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                            <div className="home__help__options__content__info">
                                <div className="home__help__options__content__info__text">
                                    <h3>Lokalna Zbiórka "Lorem Ipsum 9"</h3>
                                    <span>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</span>
                                </div>
                                <span>ubrania, jedzenie, sprzęt AGD, meble, zabawki</span>
                            </div>
                        </div>
                    }
                    <div className="home__help__options__content__buttons">
                        <Router>
                            <Link onClick={buttonFirst}>1</Link>
                            <Link onClick={buttonSecond}>2</Link>
                            <Link onClick={buttonThird}>3</Link>
                        </Router>
                    </div>
                </div>
            }
        </section>
    )
}

export default HomeHelp