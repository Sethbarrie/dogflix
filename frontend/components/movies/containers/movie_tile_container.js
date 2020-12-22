import MovieTile from '../functional_components/movie_tile';
import {fetchMovie} from '../../../actions/movie_actions';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        playerKey: state.carousel[ownProps.genre].map(movie => movie.key[1]),
        controlKey: state.carousel[ownProps.genre].map(movie => movie.key[2]),
        movieNotDownloaded: !state.carousel[ownProps.genre][ownProps.movieId].movie_clip
    }
};

const mapDispatchToProps = dispatch => ({
    fetchMovie: movieId => dispatch(fetchMovie(movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieTile);