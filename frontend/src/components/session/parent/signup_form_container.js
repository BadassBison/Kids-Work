import { connect } from 'react-redux';
import  SignUpForm from './signup_form';
import { signup } from '../../../actions/session_actions';
import { closeModal } from '../../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        children: []
    })
}

const mapDispatchToProps = dispatch => ({
    signup: familyData => dispatch(signup(familyData)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);