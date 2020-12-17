import SigninForm from './signin_form';
import {connect} from 'react-redux';
import {postSession, clearErrors} from '../../actions/session_actions';

const mapStateToProps = state => ({
    user: {username: '', email: '', password: ''},
    formType: 'Sign In',
    errors: state.errors.sessionErrors
});

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(postSession(user)),
    demoAction: user => dispatch(postSession(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm)
