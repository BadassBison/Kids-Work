import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import ParentIndexPage from './parent_index/parent_index_page_container';
import ChildIndexPage from './child_index/child_index_page_container';
import SplashContainer from './splash/splash_container';
import ModalContainer from './modal/modal_container';
import CreateChoreFormContainer from './chore_components/chore_input_components/create_chore_form_container'
import CreateChoreForm from './chore_components/chore_input_components/create_chore_form';
import ChildDashBoardContainer from './dashboard_components/child_dash_board_container';

const App = () => (
    <>
        <ModalContainer />
        <Switch>
            <AuthRoute exact path="/" component={SplashContainer} />
            <ProtectedRoute exact path="/parent" component={ParentIndexPage}/>
        </Switch>
    </>
);

export default App;