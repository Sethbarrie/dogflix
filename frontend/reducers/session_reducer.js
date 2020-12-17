import {
    RECEIVE_CURRENT_USER,
    SIGNOUT_CURRENT_USER
} from '../actions/session_actions';
import {
    UPDATE_USER_SETTINGS
} from '../actions/user_actions'

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
        case SIGNOUT_CURRENT_USER:
            return _nullUser
        default:
            return oldState;
    }
}

export default sessionReducer;