import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Parent = ({ component: Component, path, loggedIn, exact, isParent }) => (
    <Route path={path} exact={exact} render={(props) => (
        (loggedIn && isParent) ? (
            <Component {...props} />
        ) : (
            <Redirect to="/" />
        )
    )} />
);

const Child = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        (loggedIn) ? (
            <Component {...props} />
        ) : (
            <Redirect to="/" />
        )
    )} />
);

const mapStateToProps = state => {
    const isParent = state.session.family ? state.session.family.isParent : false;

    return ({
        loggedIn: state.session.isAuthenticated,
        isParent
    })
};

export const ParentRoute = withRouter(connect(mapStateToProps)(Parent));
export const ChildRoute = withRouter(connect(mapStateToProps)(Child));