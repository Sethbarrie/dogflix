import SignupForm from './signup_form';
import {connect} from 'react-redux';
import {postUser, postSession, clearErrors} from '../../actions/session_actions';

const mapStateToProps = state => {
    return {
        formType: 'Sign up',
        errors: state.errors.sessionErrors
    }
};

const mapDispatchToProps = dispatch => ({
    action: user => dispatch(postUser(user)),
    demoAction: user => dispatch(postSession(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
