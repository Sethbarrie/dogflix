import {
    RECEIVE_CURRENT_MOVIE
} from '../actions/movie_actions';

const moviesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type){
        case RECEIVE_CURRENT_MOVIE:
            return action.movie;
        default:
            return oldState;
    }

};

export default moviesReducer;