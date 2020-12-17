import MovieTilePlayer from '../functional_components/movie_tile_player';
import { fetchMovie } from '../../../actions/movie_actions';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
    movie: state.carousel[ownProps.genre][ownProps.movieId],
}};

const mapDispatchToProps = dispatch => ({
    fetchMovie: movieId => dispatch(fetchMovie(movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieTilePlayer);