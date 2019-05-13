import { connect } from 'react-redux';
import  SignUpForm from './signup_form';
import { signup } from '../../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    
})

const mapDispatchToProps = dispatch => ({
    signup: familyData => dispatch(signup(familyData))
})

export default connect(null, mapDispatchToProps)(SignUpForm);