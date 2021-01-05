import MovieCarousel from '../functional_components/movie_carousel';
import {connect} from 'react-redux';
import { fetchFavorites } from '../../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
    let length;
    if(!ownProps.carouselTempLength){
        length = state.carousel[ownProps.genre].length;
    } else {
        length = ownProps.carouselTempLength;
    }
    return {
    movieKeys: state.carousel[ownProps.genre].map(movie => movie.tileKey),
    currentUser: state.session.currentUser,
    carouselLength: length
}};

const mapDispatchToProps = dispatch => ({
    fetchFavorites: userId => dispatch(fetchFavorites(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieCarousel);