import MoviePlayer from '../functional_components/movie_player';
import {fetchMovie, setCurrentMovie} from '../../../actions/movie_actions';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        movie: state.entities.currentMovie 
}};

const mapDispatchToProps = dispatch => ({
    fetchMovie: (movieId) => dispatch(fetchMovie(movieId)),
    setCurrentMovie: (movie) => dispatch(setCurrentMovie(movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePlayer);