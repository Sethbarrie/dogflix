import MovieTile from '../functional_components/movie_tile';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        playerKey: state.carousel[ownProps.genre][ownProps.movieId].playerKey,
        controlKey: state.carousel[ownProps.genre][ownProps.movieId].controlKey,
    }
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieTile);