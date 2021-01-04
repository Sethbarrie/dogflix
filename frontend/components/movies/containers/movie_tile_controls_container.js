import MovieTileControls from '../functional_components/movie_tile_controls';
import { fetchMovie, setCurrentMovie } from '../../../actions/movie_actions';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { removeMovieFromFavorites, addMovieToFavorites } from '../../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
    let favorited = false;
    debugger;
    if(state.session.currentUser.movies){
        let movieId = state.carousel[ownProps.genre][ownProps.movieId].id;
        favorited = state.session.currentUser.movies.some( movie => movie.id === movieId);
    }
    return {
    movie: state.carousel[ownProps.genre][ownProps.movieId],
    favorited: favorited,
    currentUser: state.session.currentUser
}};

const mapDispatchToProps = dispatch => ({
    fetchMovie: movieId => dispatch(fetchMovie(movieId)),
    setCurrentMovie: movie => dispatch(setCurrentMovie(movie)),
    addMovieToFavorites: (userId, movieId) => dispatch(addMovieToFavorites(userId, movieId)),
    removeMovieFromFavorites: (userId, movieId) => dispatch(removeMovieFromFavorites(userId, movieId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieTileControls));