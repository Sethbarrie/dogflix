import MovieCarousel from '../functional_components/movie_carousel';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
    movieKeys: state.carousel[ownProps.genre].map(movie => movie.key[0])
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCarousel);