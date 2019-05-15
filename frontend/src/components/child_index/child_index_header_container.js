import { connect } from 'react-redux';
import ChildIndexHeader from './child_index_header';
import { summerizedChoreData } from '../../util/chore_util';

const mapStateToProps = state => {
    return ({
        currentUser: state.session.family,
        data: summerizedChoreData(state)
    });
};

// no nav bar currently, sign out button is in this header
const mapDispatchToProps = dispatch => {
    return {
        // openModal: modal => dispatch(openModal(modal)),
        // logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChildIndexHeader)