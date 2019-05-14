import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import ModalContainer from './modal/modal_container';

const App = () => (
    <>
        <ModalContainer />
        <Switch>
            <AuthRoute exact path="/" component={SplashContainer} />
        </Switch>
    </>
);

export default App;