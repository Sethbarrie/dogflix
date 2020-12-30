import MyList from './my_list';
import {connect} from 'react-redux';
import { addFavoritesRow } from '../../actions/movie_actions';
import { fetchFavorites } from '../../actions/user_actions';

const mapStateToProps = state => {
    return{
    currentUser: state.session.currentUser,
    windowIDX: Object.keys(state.carousel).length
}}

const mapDispatchToProps = dispatch => ({
    addFavoritesRow: list => dispatch(addFavoritesRow(list)),
    fetchFavorites: userId => dispatch(fetchFavorites(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MyList);