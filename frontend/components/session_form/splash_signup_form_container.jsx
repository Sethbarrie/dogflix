import SplashSignupForm from './splash_signup_form';
import {connect} from 'react-redux';
import {clearErrors} from '../../actions/session_actions';
import {withRouter} from 'react-router-dom';


const mapStateToProps = state => ({
    currentUser: state.session.currentUser,
    user: {username: '', email: '', password: ''},
    errors: state.errors.sessionErrors
});

const mapDispatchToProps = dispatch => ({
    clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SplashSignupForm))
