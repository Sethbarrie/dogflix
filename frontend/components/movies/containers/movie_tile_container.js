import MovieTile from '../functional_components/movie_tile';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        playerKey: state.carousel[ownProps.genre].map(movie => movie.key[1]),
        controlKey: state.carousel[ownProps.genre].map(movie => movie.key[2])
    }
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieTile);