import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import  SignUpForm from './signup_form';
import { signup, loginParent } from '../../../actions/session_actions';
import { closeModal } from '../../../actions/modal_actions';

const mapStateToProps = () => {
    return ({
        children: []
    })
}

const mapDispatchToProps = dispatch => ({
    signup: familyData => dispatch(signup(familyData)),
    closeModal: () => dispatch(closeModal()),
    loginParent: parent => dispatch(loginParent(parent))
})

export default withRouter(connect(null, mapDispatchToProps)(SignUpForm));