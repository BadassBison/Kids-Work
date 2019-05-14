import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken, loginParent } from './util/session_api_util';
import { loginChild, logout, signup } from './actions/session_actions';
import { fetchChores, fetchChildChores, createAssignedChore, createUnassignedChore, updateChore } from './actions/chore_actions';
import { createChild } from './actions/child_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);
        const decodedFamily = jwt_decode(localStorage.jwtToken);
        const preloadedState = { session: { isAuthenticated: true, family: decodedFamily } };
        store = configureStore(preloadedState);
        const currentTime = Date.now() / 1000;

        if (decodedFamily.exp < currentTime) {
            store.dispatch(logout());
            window.location.href = '/login';
        } 
    } else {
            store = configureStore({});
    }
    
    // TESTS
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.loginChild = loginChild;
    window.loginParent = loginParent;
    window.signup = signup;
    window.fetchChores = fetchChores;
    window.fetchChildChores = fetchChildChores;
    window.createAssignedChore = createAssignedChore;
    window.createUnassignedChore = createUnassignedChore;
    window.updateChore = updateChore;
    window.createChild = createChild;
    // END
    
    const root = document.getElementById('root');

    ReactDOM.render(<Root store={store} />, root);
});