import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../splash/images/CL-06.png';
import kidChores1 from './images/kid-chores-1.jpg';
import kidChores2 from './images/kid-chores-2.jpg';
import kidChores3 from './images/kid-chores-3.jpg';
import kidsMoney from './images/kids-with-money.jpg';
import './splash.css';

const Splash = (props) => {
    let nav = null
    if (!props.loggedIn) {
        nav = (<nav className="splash-nav-container">
            <div className="splash-nav">
                <div className="logo-container">
                    <Link
                        to="/">
                        <img className="splash-logo" src={logo} alt="" />
                    </Link>
                </div>

                <div className="splash-nav-title">
                    <h1>Kids Work</h1>
                    <h3>Complete chores, earn money</h3>
                </div>

                <div className="splash-nav-links-container">
                    <button
                        className="splash-nav-link"
                        onClick={() => props.openModal({ modalType: 'login' })}
                    ><p>Log In</p></button>
                    <button
                        className="splash-nav-link"
                        onClick={() => props.openModal({ modalType: 'signup' })}
                    >Sign Up</button>
                </div>
            </div>
        </nav>) }
    return (
        <main className="splash-body">
            {nav}

            <div className="splash-container">
                <div className="columns splash-info-container">
                    <img className="column is-half splash-background-photo" src={kidChores1} alt=""/>
                    <div className="column is-half p-container">
                        <p className="splash-info-box">
                            Parents assign chores to their children
                        </p>
                    </div>
                </div>
                <div className="columns splash-info-container">
                    <div className="column is-half p-container">
                        <p className="splash-info-box">
                            Children complete the chores
                        </p>
                    </div>
                    <img className="column is-half splash-background-photo" src={kidChores2} alt=""/>
                </div>
                <div className="columns splash-info-container">
                    <img className="column is-half splash-background-photo" src={kidChores3} alt=""/>
                    <div className="column is-half p-container">
                        <p className="splash-info-box">
                             and have fun doing it
                        </p>
                    </div>
                </div>
                <div className="columns splash-info-container">
                    <div className="column is-half p-container">
                        <p className="splash-info-box">
                            Parents reward the children
                        </p>
                    </div>
                    <img className="column is-half splash-background-photo" src={kidsMoney} alt=""/>
                </div>
            </div>
        </main>
    );
    
};

export default Splash;