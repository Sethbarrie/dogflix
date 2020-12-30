import Browse from './browse';
import {connect} from 'react-redux';
import {
    initializeCarousel,
    initializePreview
} from '../../actions/movie_actions';
import {
    fetchFavorites
} from '../../actions/user_actions';

const mapStateToProps = state => {
    let genres = Object.keys(state.carousel).sort();
    let myList;
    if(genres.includes('My List')){
        myList = state.carousel['My List'].length;
        genres = genres.filter( genre => genre !== "My List");
        genres.push('My List');
    }
    debugger
    return {
        genres: genres,
        genreKeys: genres.map( genre => state.carousel[genre].key),
        previewMovie: state.entities.previewMovie,
        currentUser: state.session.currentUser,
        myListLength: myList ? myList : null
}};

const mapDispatchToProps = dispatch => ({
    initializeCarousel: () => dispatch(initializeCarousel()),
    initializePreview: () => dispatch(initializePreview()),
    fetchFavorites: userId => dispatch(fetchFavorites(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);