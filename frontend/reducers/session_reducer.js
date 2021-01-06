import { INITIALIZE_CAROUSEL } from '../actions/movie_actions';
import {
    RECEIVE_CURRENT_USER,
    SIGNOUT_CURRENT_USER
} from '../actions/session_actions';
import {
    UPDATE_USER_SETTINGS,
    UPDATE_FAVORITES
} from '../actions/user_actions'
import { createCarouselRow } from '../util/helper';

const _nullUser = {}

const sessionReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign( {} , oldState);
    let favoritesList;

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            newState.currentUser = action.user;
            return newState;
        case UPDATE_USER_SETTINGS:
            newState.currentUser = action.user;
            return newState;
        case INITIALIZE_CAROUSEL:
            favoritesList = createCarouselRow(Object.values(action.favoriteMovies), 'My List');
            newState.currentUser.movies = favoritesList;
            newState.currentUser.movies.genre = "My List";
            return newState;
        case UPDATE_FAVORITES:
            favoritesList = createCarouselRow(action.movies);
            newState.currentUser.movies = favoritesList;
            newState.currentUser.movies.genre = "My List";
            return newState;
        case SIGNOUT_CURRENT_USER:
            return _nullUser
        default:
            return oldState;
    }
}

export default sessionReducer;