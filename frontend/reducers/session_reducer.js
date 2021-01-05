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

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            newState.currentUser = action.user;
            return newState;
        case UPDATE_USER_SETTINGS:
            newState.currentUser = action.user;
            return newState;
        case UPDATE_FAVORITES:
            let newFavoritesList = createCarouselRow(action.movies);
            newState.currentUser.movies = newFavoritesList;
            newState.currentUser.movies.genre = "My List";
            return newState;
        case SIGNOUT_CURRENT_USER:
            return _nullUser
        default:
            return oldState;
    }
}

export default sessionReducer;