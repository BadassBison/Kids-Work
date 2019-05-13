import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import kidChores1 from './images/kid-chores-1.jpg';
import kidChores2 from './images/kid-chores-2.jpg';
import kidChores3 from './images/kid-chores-3.jpg';
import './splash.css';
import SubmitField from '../input_components/submit_field/submit';

const Splash = () => {
    return (
        <main className="splash-body">
            <nav className="splash-nav-container">
                <div className="splash-nav">
                    <Link 
                        to="/"
                        className="navbar-item">
                        LOGO
                        {/* <img className="splash-logo" src={logo} alt=""/> */}
                    </Link>
                    {/* <Link
                        to="/"
                        className=""
                        aria-label="menu"
                        aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                    </Link> */}

                    <div className="splash-nav-title">
                        <h1>Child Labor</h1>
                        <h3>Complete chores, earn money</h3>
                    </div>

                
                    <div className="splash-nav-links-container">
                        <button 
                            className="splash-nav-link" 
                        />
                    </div>
                </div>
            </nav>

            <div className="splash-container">
                <div className="columns splash-info-container">
                    <img className="column is-half splash-background-photo" src={kidChores1} alt=""/>
                    <div className="column is-half p-container">
                        <p className="splash-info-box"></p>
                    </div>
                </div>
                <div className="columns splash-info-container">
                    <div className="column is-half p-container">
                        <p className="splash-info-box"></p>
                    </div>
                    <img className="column is-half splash-background-photo" src={kidChores2} alt=""/>
                </div>
                <div className="columns splash-info-container">
                    <img className="column is-half splash-background-photo" src={kidChores3} alt=""/>
                    <div className="column is-half p-container">
                        <p className="splash-info-box"></p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Splash;