import { connect } from 'react-redux';
import ParentIndexHeader from './parent_index_header';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { summerizedChoreData } from '../../util/chore_util';

const mapStateToProps = state => {
    return ({
       currentUser: state.session.family,
       data: summerizedChoreData(state)
    });
};

const mapDispatchToProps = dispatch => {
    return {
      openModal: modal => dispatch(openModal(modal)),
      logout: () => dispatch(logout())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentIndexHeader)