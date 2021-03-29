import React, { useState } from 'react'
import { db } from './firebase'
import contactImage from '../assets/Background-Contact-Form.jpg'

const HomeContact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        db.collection('contacts').add({
            name: name,
            email: email,
            message: message,
        })
        .then(() => {
            console.log("Wyslane")
        })
            .catch(error => {
                console.log(error.message)
            })
        setName("")
        setEmail("")
        setMessage("")
    }



    return (
        <section className="home__contact">
            <h2>Skontaktuj się z nami</h2>
            <form onSubmit={handleSubmit}>
                <div className="home__contact__name">
                    <div className="home__contact__name__group">
                        <label>
                            Wpisz swoje imię
                        </label>
                        <input type="text" name="name" placeholder="Imię" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="home__contact__name__group">
                        <label>
                            Wpisz swój meil
                        </label>
                        <input type="text" name="meil" placeholder="Meil" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <label>
                    Wpisz swoją wiadomość
                </label>
                <textarea placeholder="Lorem ipsum dolor sit amet,
                     consectetur adipisicing elit. Deserunt inventore minus obcaecati,
                     quas repellat sit suscipit! Ad eaque minus similique?" value={message} onChange={(e) => setMessage(e.target.value)} />
                     <div className="home__contact__submit">
                         <button onClick={handleSubmit}>Wyślij</button>
                     </div>
                </form>
        </section>
    )
}

export default HomeContact