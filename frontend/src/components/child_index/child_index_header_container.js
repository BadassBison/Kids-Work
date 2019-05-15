import { connect } from 'react-redux';
import ChildIndexHeader from './child_index_header';
import { summerizedChoreData } from '../../util/chore_util';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    
    return ({
        currentUser: state.session.family,
        data: summerizedChoreData(state).filter(child => child.id === state.ui.filter.child || child.id === state.session.family.childId)
    });
};

// no nav bar currently, sign out button is in this header
const mapDispatchToProps = dispatch => {
    return {
        // openModal: modal => dispatch(openModal(modal)),
        logout: () => dispatch(logout())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChildIndexHeader));