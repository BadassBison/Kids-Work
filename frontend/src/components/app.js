import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Login from './session/parent/login_form_container';
import Signup from './session/parent/signup_form_container';
const path = require('path');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
  }

const App = () => (
    // <Switch>
    //     <AuthRoute exact path="/" component={MainPage} />
    // </Switch>
    
    <Signup />
);

export default App;