import { connect } from 'react-redux';
import  LoginForm from './login_form';
import { loginChild, loginParent } from '../../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    
})

const mapDispatchToProps = dispatch => ({
    loginChild: userData => dispatch(loginChild(userData)),
    loginParent: userData => dispatch(loginParent(userData))
})

export default connect(null, mapDispatchToProps)(LoginForm);