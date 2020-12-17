import MoviePreview from '../functional_components/movie_preview';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import { fetchMovie, setCurrentMovie } from '../../../actions/movie_actions'; 

const mapStateToProps = state => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    fetchMovie: movieId => dispatch(fetchMovie(movieId)),
    setCurrentMovie: movie => dispatch(setCurrentMovie(movie))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviePreview));