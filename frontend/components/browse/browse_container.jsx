import Browse from './browse';
import {connect} from 'react-redux';
import {
    initializeCarousel
    , initializePreview
} from '../../actions/movie_actions'

const mapStateToProps = state => {
    let genres = Object.keys(state.carousel).sort();
    return {
    genres: genres,
    genreKeys: genres.map( genre => state.carousel[genre].key),
    previewMovie: state.entities.previewMovie,
}};

const mapDispatchToProps = dispatch => ({
    initializeCarousel: () => dispatch(initializeCarousel()),
    initializePreview: () => dispatch(initializePreview())
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse)
