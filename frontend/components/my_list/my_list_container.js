import MyList from './my_list';
import {connect} from 'react-redux';
import { fetchFavorites } from '../../actions/user_actions';
import { initializeCarousel } from '../../actions/movie_actions';
import { emptyObject } from '../../util/helper';

const mapStateToProps = state => {
    return{
    movies: state.carousel['My List'] || [],
    currentUser: state.session.currentUser,
    emptyCarousel: emptyObject(state.carousel)
}}

const mapDispatchToProps = dispatch => ({
    fetchFavorites: userId => dispatch(fetchFavorites(userId)),
    initializeCarousel: () => dispatch(initializeCarousel())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyList);