import NavBar from './navbar';
import {connect} from 'react-redux';
import {deleteSession, postSession} from '../../actions/session_actions';
import { fetchMovies } from '../../actions/movie_actions';
import {updateAutoplay} from '../../actions/user_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = state => ({
    user: state.session.currentUser,
    needMovies: (
        !!state.session.currentUser
        && !state.session.movies 
    )
});

const mapDispatchToProps = dispatch => ({
    deleteSession: () => dispatch(deleteSession()),
    postSession: (user) => dispatch(postSession(user)),
    updateAutoplay: (user) => dispatch(updateAutoplay(user)),
    fetchMovies: () => dispatch(fetchMovies())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
