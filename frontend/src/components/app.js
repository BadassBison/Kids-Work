import React from 'react';
import {Route} from 'react-router-dom';
import { ParentRoute, ChildRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import ParentIndexPage from './parent_index/parent_index_page_container';
import ChildIndexPage from './child_index/child_index_page_container';
import SplashContainer from './splash/splash_container';
import ModalContainer from './modal/modal_container';
import CreateChoreFormContainer from './chore_components/chore_input_components/create_chore_form_container'
import CreateChoreForm from './chore_components/chore_input_components/create_chore_form';
import ChildDashBoardContainer from './dashboard_components/child_dash_board_container';
import ParentDashBoardContainer from './dashboard_components/parent_dashboard_container';
import NavBarContainer from './navbar/navbar_container';

const App = () => (
    <>
        <ModalContainer />
        {/* <Switch>
            <Route exact path="/" component={null} /> */}
            <Route path="/" component={NavBarContainer} />
        {/* </Switch> */}
        <Switch>
            <ParentRoute exact path="/parent" component={ParentIndexPage}/>
            <ParentRoute exact path="/parent/dashboard" component={ParentDashBoardContainer}/>
            <ChildRoute exact path="/child" component={ChildIndexPage}/>
            <ChildRoute exact path="/child/dashboard" component={ChildDashBoardContainer}/>
            <Route exact path="/" component={SplashContainer} />
        </Switch>
    </>
);

export default App;