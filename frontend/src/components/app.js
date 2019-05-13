import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Login from './session/parent/login_form_container';
import Signup from './session/parent/signup_form_container';
import Splash from './splash/splash.jsx';

const App = () => (
    <Switch>
        <AuthRoute exact path="/" component={Splash} />
    </Switch>
    
    // <Signup />
);

export default App;