import { connect } from 'react-redux';
import Splash from './splash';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);