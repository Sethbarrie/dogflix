import MovieTileControls from '../functional_components/movie_tile_controls';
import { fetchMovie, setCurrentMovie } from '../../../actions/movie_actions';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {

    return {
    movie: state.carousel[ownProps.genre][ownProps.movieId]
}};

const mapDispatchToProps = dispatch => ({
    fetchMovie: movieId => dispatch(fetchMovie(movieId)),
    setCurrentMovie: movie => dispatch(setCurrentMovie(movie))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieTileControls));