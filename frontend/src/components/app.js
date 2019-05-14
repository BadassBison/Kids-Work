import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import SignUpForm from './session/parent/signup_form';
import Splash from './splash/splash.jsx';
import SignUpFormContainer from '../components/session/parent/signup_form_container'
import LoginFormContainter from '../components/session/parent/login_form_container'

const App = () => (
    
    <Switch>
        <Route exact path="/" component={Splash} />
    </Switch>
);

export default App;