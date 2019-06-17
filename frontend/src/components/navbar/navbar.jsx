import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../splash/images/CL-06.png';
import '../splash/splash.css';

class NavBar extends React.Component {

    // eventually be able to swap buttons based on location and if current user is parent or child

    redirectToChores() {
        if (this.props.currentUser.isParent) {
            this.props.history.push('/parent');
        } else {
            this.props.history.push('/child');
        }
    }

    render() {
        if (this.props.loggedIn) {
            return (
            
                <nav className="navbar-container">
                        <div className="logo-container">
                            <Link
                                to="/">
                            <img className="navbar-logo" src={logo} alt=""/>
                            </Link>
                        </div>
    
                        <div className="splash-nav-links-container">
                            <button className="button is-success is-rounded chore-list-button"
                                onClick={this.redirectToChores.bind(this)}>
                                Chore List
                            </button>
                            <button className="button is-success is-rounded"
                                onClick={() => this.props.logout()}>
                                Logout
                            </button>
                        </div>
                </nav>
            )
        } else {
            return null
        }
    }
};

export default NavBar;