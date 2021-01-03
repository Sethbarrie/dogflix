import MovieTile from '../functional_components/movie_tile';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        playerKey: state.carousel[ownProps.genre][ownProps.movieId].key[1],
        controlKey: state.carousel[ownProps.genre][ownProps.movieId].key[2],
    }
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieTile);