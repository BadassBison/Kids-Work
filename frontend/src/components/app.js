import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import ParentIndexPage from './parent_index/parent_index_page_container';
import SplashContainer from './splash/splash_container';
import ModalContainer from './modal/modal_container';

const App = () => (
    <>
        <ModalContainer />
        <Switch>
            <AuthRoute exact path="/signup" component={SplashContainer} />
        </Switch>
            <ParentIndexPage/>
    </>
);

export default App;