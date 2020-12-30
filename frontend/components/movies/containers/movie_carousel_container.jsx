import MovieCarousel from '../functional_components/movie_carousel';
import {connect} from 'react-redux';
import { fetchFavorites } from '../../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
    if(ownProps.genre === 'My List'){
    }
    debugger
    return {
    movieKeys: state.carousel[ownProps.genre].map(movie => movie.key[0]),
    currentUser: state.session.currentUser
}};

const mapDispatchToProps = dispatch => ({
    fetchFavorites: userId => dispatch(fetchFavorites(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCarousel);